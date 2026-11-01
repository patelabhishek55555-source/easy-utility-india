export function readFileAsDataURL(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error('Failed to read file into memory'));
    reader.readAsDataURL(file);
  });
}

export function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to render image in canvas'));
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

export interface CompressionOptions {
  maxWidth?: number;
  maxHeight?: number;
  maintainAspectRatio?: boolean;
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
  options: CompressionOptions = {},
  onProgress?: (status: string) => void
): Promise<CompressionResult> {
  const targetBytes = targetKB * 1024;
  const dataUrl = await readFileAsDataURL(file);
  const img = await loadImage(dataUrl);

  let currentWidth = img.naturalWidth;
  let currentHeight = img.naturalHeight;
  const aspectRatio = currentWidth / currentHeight;

  // Apply initial user constraints if specified
  if (options.maxWidth && currentWidth > options.maxWidth) {
    currentWidth = options.maxWidth;
    if (options.maintainAspectRatio !== false) {
      currentHeight = Math.round(currentWidth / aspectRatio);
    }
  }
  if (options.maxHeight && currentHeight > options.maxHeight) {
    currentHeight = options.maxHeight;
    if (options.maintainAspectRatio !== false) {
      currentWidth = Math.round(currentHeight * aspectRatio);
    }
  }

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
  const maxScaleAttempts = 12;

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

    // Binary search for optimal quality between 0.15 and 0.95
    let lowQ = 0.15;
    let highQ = 0.95;
    let iter = 0;
    let localBestBlob: Blob | null = null;
    let localBestQuality = 0.5;

    while (iter < 7) {
      const midQ = (lowQ + highQ) / 2;
      onProgress?.(`Testing compression at quality ${(midQ * 100).toFixed(0)}% (${currentWidth}x${currentHeight}px)...`);
      const testBlob = await canvasToBlob(canvas, format, midQ);

      if (testBlob.size <= targetBytes) {
        localBestBlob = testBlob;
        localBestQuality = midQ;
        lowQ = midQ; // Try higher quality
      } else {
        highQ = midQ; // Exceeded target, try lower quality
      }
      iter++;
    }

    // If target achieved with acceptable quality (>= 30%), we keep this
    if (localBestBlob && localBestBlob.size <= targetBytes && localBestQuality >= 0.3) {
      bestBlob = localBestBlob;
      bestQuality = localBestQuality;
      bestWidth = currentWidth;
      bestHeight = currentHeight;
      reachedTarget = true;
      break;
    }

    // If quality would be too degraded (< 30%) or target was never reached, scale down dimensions
    if (currentWidth > 140 && currentHeight > 140) {
      currentWidth = Math.round(currentWidth * 0.8);
      currentHeight = Math.round(currentHeight * 0.8);
      scaleAttempts++;
    } else {
      // Smallest viable dimensions reached, do one final attempt at lowest viable quality
      const lowestBlob = await canvasToBlob(canvas, format, 0.15);
      bestBlob = lowestBlob;
      bestQuality = 0.15;
      bestWidth = currentWidth;
      bestHeight = currentHeight;
      if (lowestBlob.size <= targetBytes) {
        reachedTarget = true;
      }
      break;
    }
  }

  if (!bestBlob) {
    canvas.width = currentWidth;
    canvas.height = currentHeight;
    ctx?.drawImage(img, 0, 0, currentWidth, currentHeight);
    bestBlob = await canvasToBlob(canvas, format, 0.2);
  }

  const finalKB = Math.round((bestBlob.size / 1024) * 10) / 10;
  const previewDataUrl = URL.createObjectURL(bestBlob);

  let notes = '';
  if (reachedTarget) {
    notes = `Successfully compressed to ${finalKB} KB (Target: ≤ ${targetKB} KB) at ${bestWidth}×${bestHeight}px.`;
  } else {
    notes = `The target size of ${targetKB} KB is too small for this image without severe degradation. The best achievable size while maintaining legible visual quality is ${finalKB} KB (${bestWidth}×${bestHeight}px).`;
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
