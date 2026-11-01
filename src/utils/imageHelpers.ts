export function readFileAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(file);
  });
}

export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to load image into memory'));
    img.src = src;
  });
}

export function canvasToBlob(
  canvas: HTMLCanvasElement,
  mimeType: string = 'image/jpeg',
  quality: number = 0.85
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error('Canvas to Blob conversion failed'));
      },
      mimeType,
      quality
    );
  });
}

export interface CompressionResult {
  blob: Blob;
  dataUrl: string;
  finalKB: number;
  width: number;
  height: number;
  quality: number;
  reachedTarget: boolean;
  notes: string;
}

/**
 * Intelligent client-side compression targeting an exact KB limit.
 * Uses binary search on JPEG/WebP compression quality and adaptive dimensional scaling.
 */
export async function compressImageToTargetKB(
  file: File,
  targetKB: number,
  format: 'image/jpeg' | 'image/webp' = 'image/jpeg',
  onProgress?: (status: string) => void
): Promise<CompressionResult> {
  const targetBytes = targetKB * 1024;
  const dataUrl = await readFileAsDataURL(file);
  const img = await loadImage(dataUrl);

  let currentWidth = img.naturalWidth;
  let currentHeight = img.naturalHeight;
  const canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Canvas 2D context is not available');
  }

  let bestBlob: Blob | null = null;
  let bestQuality = 0.8;
  let bestWidth = currentWidth;
  let bestHeight = currentHeight;
  let reachedTarget = false;
  let scaleAttempts = 0;
  const maxScaleAttempts = 10;

  // Progressively scale down if needed (for large 12MP-48MP smartphone photos)
  while (scaleAttempts < maxScaleAttempts) {
    canvas.width = currentWidth;
    canvas.height = currentHeight;
    ctx = canvas.getContext('2d');
    if (!ctx) break;

    // Fill white background for JPEG
    if (format === 'image/jpeg') {
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, currentWidth, currentHeight);
    }
    ctx.drawImage(img, 0, 0, currentWidth, currentHeight);

    // Binary search for optimal quality between 0.05 and 0.95
    let lowQ = 0.05;
    let highQ = 0.95;
    let iter = 0;
    let localBestBlob: Blob | null = null;
    let localBestQuality = 0.5;

    while (iter < 7) {
      const midQ = (lowQ + highQ) / 2;
      onProgress?.(`Analyzing compression at quality ${(midQ * 100).toFixed(0)}% (${currentWidth}x${currentHeight}px)...`);
      const testBlob = await canvasToBlob(canvas, format, midQ);

      if (testBlob.size <= targetBytes) {
        localBestBlob = testBlob;
        localBestQuality = midQ;
        // Try higher quality to see if we can get closer to target without exceeding it
        lowQ = midQ;
      } else {
        // Exceeded target, try lower quality
        highQ = midQ;
      }
      iter++;
    }

    if (localBestBlob && localBestBlob.size <= targetBytes) {
      bestBlob = localBestBlob;
      bestQuality = localBestQuality;
      bestWidth = currentWidth;
      bestHeight = currentHeight;
      reachedTarget = true;
      break;
    }

    // Even at low quality, file is larger than target; reduce dimensions by 20%
    if (currentWidth > 120 && currentHeight > 120) {
      currentWidth = Math.round(currentWidth * 0.8);
      currentHeight = Math.round(currentHeight * 0.8);
      scaleAttempts++;
    } else {
      // Smallest viable dimensions reached
      const lowestBlob = await canvasToBlob(canvas, format, 0.08);
      bestBlob = lowestBlob;
      bestQuality = 0.08;
      bestWidth = currentWidth;
      bestHeight = currentHeight;
      break;
    }
  }

  if (!bestBlob) {
    canvas.width = currentWidth;
    canvas.height = currentHeight;
    ctx?.drawImage(img, 0, 0, currentWidth, currentHeight);
    bestBlob = await canvasToBlob(canvas, format, 0.2);
  }

  const finalKB = Math.round((bestBlob.size / 1024) * 100) / 100;
  const previewDataUrl = URL.createObjectURL(bestBlob);

  let notes = '';
  if (reachedTarget) {
    notes = `Successfully compressed to ${finalKB} KB (Target: ≤ ${targetKB} KB) at ${bestWidth}×${bestHeight}px.`;
  } else {
    notes = `The target of ${targetKB} KB is too small for this image without severe degradation. Best achieved size is ${finalKB} KB.`;
  }

  return {
    blob: bestBlob,
    dataUrl: previewDataUrl,
    finalKB,
    width: bestWidth,
    height: bestHeight,
    quality: Math.round(bestQuality * 100),
    reachedTarget,
    notes,
  };
}
