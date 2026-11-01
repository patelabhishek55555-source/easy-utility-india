export interface Tool {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: 'pdf' | 'image' | 'calculator';
  description: string;
  icon: string;
  badge?: string;
  popular?: boolean;
  recentlyAdded?: boolean;
  seoTitle: string;
  seoDescription: string;
  features: string[];
  specs: { label: string; value: string }[];
  instructions: { step: number; title: string; text: string }[];
  limitations: { title: string; text: string }[];
  realisticExample: { scenario: string; input: string; output: string; tip: string };
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const tools: Tool[] = [
  // 1. IMAGE TO PDF
  {
    id: 'image-to-pdf',
    slug: 'image-to-pdf',
    title: 'Image to PDF Converter',
    shortTitle: 'Image to PDF',
    category: 'pdf',
    description: 'Convert multiple JPG, PNG, and WebP images into a single organized PDF document. Reorder pages, set custom margins, and generate PDFs 100% locally in your browser.',
    icon: 'FileImage',
    badge: 'Popular',
    popular: true,
    recentlyAdded: false,
    seoTitle: 'Image to PDF Converter Online Free | Easy Utility India',
    seoDescription: 'Convert JPG, PNG, and WebP photos into high quality PDF files instantly in your browser. No file limits, no watermarks, and 100% private client processing.',
    specs: [
      { label: 'Supported Input Formats', value: 'JPG, JPEG, PNG, WebP' },
      { label: 'Output Format', value: 'Standard PDF (ISO 32000-1)' },
      { label: 'Page Formats', value: 'A4, US Letter, Fit to Image' },
      { label: 'Security & Privacy', value: '100% Client-Side (Zero Server Upload)' },
    ],
    features: [
      'Combine multiple photos (marksheets, Aadhaar, certificates) into one PDF',
      'Configurable page orientation: Portrait, Landscape, or Auto image matching',
      'Selectable page margins: None (0 mm), Small (5 mm), or Standard (10 mm)',
      'Reorder or remove individual images before compiling the final document',
      'Zero server upload: Private identity documents stay strictly in your device RAM',
      'Ideal for university admissions, job portals, and KYC documentation'
    ],
    instructions: [
      { step: 1, title: 'Select or Drop Images', text: 'Click "Browse Files" or drag and drop your JPG, PNG, or WebP images into the upload area.' },
      { step: 2, title: 'Arrange Page Sequence', text: 'Use the up/down arrows on image cards to put marksheets or pages in your exact preferred sequence.' },
      { step: 3, title: 'Configure Page Layout', text: 'Choose your desired paper size (A4 is standard in India), orientation, and margin spacing.' },
      { step: 4, title: 'Compile and Download', text: 'Click "Generate & Download PDF" to instantly create and save your document.' }
    ],
    realisticExample: {
      scenario: 'Combining Class 10th and 12th marksheets with front and back photos of an Aadhaar card for college counseling portal registration.',
      input: '4 high-resolution smartphone JPG photos (approx 3.5 MB each).',
      output: 'Single organized 4-page A4 PDF document (approx 2.2 MB total) ready for portal upload.',
      tip: 'Select "Small Margin (5 mm)" and "Portrait" orientation for official academic document submissions.'
    },
    limitations: [
      { title: 'Browser RAM Limits', text: 'Compiling dozens of very large raw camera photos (e.g. >20MB each) simultaneously may stress mobile browser memory. If converting 30+ pages on a mobile phone, consider resizing or compressing them first.' },
      { title: 'Password Protection', text: 'This tool generates standard unencrypted PDFs. If your portal mandates a password-protected PDF, apply an encryption utility afterwards.' }
    ],
    faqs: [
      { question: 'Is it safe to convert Aadhaar or PAN card photos with this tool?', answer: 'Yes. Unlike cloud converters that upload your scans to external servers, Easy Utility India processes and compiles the PDF entirely inside your web browser. Your private ID cards never leave your phone or computer.' },
      { question: 'Can I add more photos after uploading the first batch?', answer: 'Yes. Click the "+ Add More Photos" button above the image list to include additional pages before compiling the final PDF.' },
      { question: 'Is there a limit on how many images I can convert?', answer: 'There is no artificial software limit. However, your device browser memory determines how many raw high-resolution images can be processed at once.' },
      { question: 'Does this converter add any watermark or brand logo?', answer: 'No. All generated PDFs are clean, professional, and free of any branding, stamps, or watermarks.' }
    ],
    relatedSlugs: ['merge-pdf', 'split-pdf', 'image-compressor', 'image-resizer']
  },

  // 2. MERGE PDF
  {
    id: 'merge-pdf',
    slug: 'merge-pdf',
    title: 'Merge PDF Documents',
    shortTitle: 'Merge PDF',
    category: 'pdf',
    description: 'Combine multiple PDF files into a single consolidated document in your preferred order. Inspect page counts, reorder files, and merge 100% locally in your browser.',
    icon: 'Copy',
    badge: 'Essential',
    popular: true,
    recentlyAdded: false,
    seoTitle: 'Merge PDF Files Online Securely | Easy Utility India',
    seoDescription: 'Combine multiple PDF files into one clean document online for free. Fast, secure, browser-side PDF merging for marksheets, resumes, and official applications.',
    specs: [
      { label: 'Supported Files', value: 'Standard PDF documents' },
      { label: 'Processing Speed', value: 'Typically 1-3 seconds (depends on device & file size)' },
      { label: 'Reordering', value: 'Interactive Up/Down sequence buttons' },
      { label: 'Privacy Standard', value: 'Browser Sandbox (Zero cloud storage)' },
    ],
    features: [
      'Merge multiple PDF files into one clean, continuous document',
      'Real-time page count inspection for each uploaded file',
      'Simple Up/Down controls to arrange documents in the exact desired order',
      'Client-side assembly using pdf-lib in browser memory',
      'Preserves original PDF vectors, embedded fonts, and page streams without server re-encoding'
    ],
    instructions: [
      { step: 1, title: 'Upload PDF Files', text: 'Select two or more PDF files from your phone or computer, or drag them into the upload box.' },
      { step: 2, title: 'Verify Sequence and Pages', text: 'Inspect total page counts and use the arrows to position files in the correct sequence.' },
      { step: 3, title: 'Merge Document', text: 'Click "Merge & Download PDF" to assemble the combined file and trigger an instant download.' }
    ],
    realisticExample: {
      scenario: 'Consolidating semester-by-semester university grade sheets and an internship completion certificate into a single consolidated PDF for a corporate job application.',
      input: '5 separate single-page PDF marksheets + 1 certificate PDF.',
      output: 'One unified 6-page PDF document preserving all original vector text and signatures.',
      tip: 'Verify the page order in the list before clicking merge so that semester marksheets appear in chronological order.'
    },
    limitations: [
      { title: 'Encrypted PDFs', text: 'Password-protected or encrypted PDF files cannot be merged directly. You must unlock them using your PDF reader before assembling them here.' },
      { title: 'Interactive Form Fields', text: 'If merging complex dynamic XFA forms (such as certain government e-forms), fillable field interactivity may be flattened into static printable pages.' }
    ],
    faqs: [
      { question: 'Are my confidential documents uploaded to the internet?', answer: 'No. All PDF merging operations execute directly in your web browser memory using JavaScript. Your files are never transmitted to any external server.' },
      { question: 'Can I merge password-protected PDF files?', answer: 'No. Encrypted PDFs must be unlocked before merging, as encrypted data streams cannot be parsed without the secret key.' },
      { question: 'Does merging compress or reduce text clarity?', answer: 'No. The underlying page streams, vector text, shapes, and scanned images are copied directly without rasterization, preserving original visual clarity.' },
      { question: 'Can I merge marksheets for college counseling portals?', answer: 'Yes. Combining 10th, 12th, graduation marksheets, and transfer certificates into a single organized PDF is the most common use case.' }
    ],
    relatedSlugs: ['split-pdf', 'image-to-pdf', 'pdf-preview']
  },

  // 3. SPLIT PDF
  {
    id: 'split-pdf',
    slug: 'split-pdf',
    title: 'Split PDF Pages',
    shortTitle: 'Split PDF',
    category: 'pdf',
    description: 'Extract specific pages or custom page ranges (e.g., 1-3, 5, 8-10) from any PDF document into a clean, standalone PDF file in seconds.',
    icon: 'Split',
    badge: 'Free',
    popular: false,
    recentlyAdded: true,
    seoTitle: 'Split PDF Pages Online Free | Easy Utility India',
    seoDescription: 'Extract selected pages or custom page ranges from your PDF files online. Free, quick, and 100% private client-side PDF page splitter tool.',
    specs: [
      { label: 'Range Syntax', value: 'Comma & Hyphen (e.g. 1-3, 5)' },
      { label: 'Presets Available', value: 'Page 1, Last Page, All, Odd, Even' },
      { label: 'Output File', value: 'New standalone trimmed PDF' },
      { label: 'Data Security', value: '100% In-Browser Execution' },
    ],
    features: [
      'Extract custom page ranges such as "1-4, 7, 9-12"',
      'Quick presets for Page 1 Only, Last Page, Odd Pages, or Even Pages',
      'Automatic range normalization (e.g. "5-1" automatically parsed to "1-5")',
      'Helpful warning indicator if an entered page number exceeds total document pages',
      'Instant browser-side extraction with zero server waiting time'
    ],
    instructions: [
      { step: 1, title: 'Upload PDF Document', text: 'Select the PDF file you wish to split or extract pages from.' },
      { step: 2, title: 'Specify Page Numbers', text: 'Type your required page numbers or ranges separated by commas (e.g., 1-2, 5).' },
      { step: 3, title: 'Extract and Save', text: 'Click "Extract & Download PDF" to generate and save your new tailored PDF.' }
    ],
    realisticExample: {
      scenario: 'Extracting only the candidate admit card (page 1) from an 8-page government examination notification booklet.',
      input: '8-page combined recruitment PDF (contains guidelines, exam schedule, syllabus, and admit card on page 1).',
      output: 'A clean 1-page standalone admit card PDF ready to print or carry to the exam center.',
      tip: 'Click the "Page 1 Only" preset button to instantly isolate the first page with zero typing.'
    },
    limitations: [
      { title: 'Password Protection', text: 'Encrypted or password-locked PDF files must be decrypted prior to splitting.' },
      { title: 'Portfolio / Embedded Attachments', text: 'If a PDF contains embedded file attachments or audio/video portfolios, only standard visual pages are extracted into the output PDF.' }
    ],
    faqs: [
      { question: 'How do I specify multiple separate page ranges?', answer: 'Use commas between ranges or single page numbers. For example, typing "1-3, 5, 8" will extract pages 1, 2, 3, 5, and 8 into your newly created PDF.' },
      { question: 'What happens if I enter a page number that does not exist?', answer: 'The tool validates your input in real time. Numbers exceeding the total document pages are flagged in an advisory warning and safely excluded.' },
      { question: 'Is there any cost or limit on how many times I can split PDFs?', answer: 'No. Easy Utility India is completely free with no usage limits, no email registration, and no subscriptions.' }
    ],
    relatedSlugs: ['merge-pdf', 'pdf-preview', 'image-to-pdf']
  },

  // 4. PDF PREVIEW
  {
    id: 'pdf-preview',
    slug: 'pdf-preview',
    title: 'PDF Preview & Viewer',
    shortTitle: 'PDF Preview',
    category: 'pdf',
    description: 'Preview, inspect, and read PDF files directly in your web browser with zoom controls, page navigation, and metadata details without third-party reader software.',
    icon: 'Eye',
    badge: 'New',
    popular: false,
    recentlyAdded: true,
    seoTitle: 'PDF Preview & Viewer Online Free | Easy Utility India',
    seoDescription: 'Preview and inspect PDF documents directly in your browser with zoom, page jump, and Fit-Width mode. 100% private client rendering with PDF.js.',
    specs: [
      { label: 'Rendering Engine', value: 'PDF.js HTML5 Canvas (Local Worker)' },
      { label: 'Zoom Range', value: '40% to 300% + Fit Width' },
      { label: 'Navigation', value: 'Prev/Next, Direct Page Jump' },
      { label: 'Privacy', value: 'Local memory reading only' },
    ],
    features: [
      'High-resolution canvas rendering for crystal-clear typography and diagrams',
      'Interactive zoom controls with dedicated "Fit Width" mode for mobile screens',
      'Fast page jump selector and Previous/Next buttons',
      'Instant document metadata inspection (page count, file size, dimensions)',
      'One-click direct download button from the viewer toolbar'
    ],
    instructions: [
      { step: 1, title: 'Select PDF', text: 'Choose or drag-and-drop any PDF file from your phone or PC.' },
      { step: 2, title: 'Read and Flip Pages', text: 'Use the arrow buttons or enter a page number to jump directly to any section.' },
      { step: 3, title: 'Adjust Zoom Level', text: 'Click "+" or "-" to zoom, or tap "Fit Width" for optimal reading on smartphones.' }
    ],
    realisticExample: {
      scenario: 'Inspecting exam roll number, test center address, and reporting time on an official admit card PDF on a mobile phone before traveling.',
      input: 'NTA/UPSC Admit Card PDF downloaded from candidate portal.',
      output: 'High-contrast mobile-friendly canvas display with 1-click Fit-Width zoom.',
      tip: 'Tap "Fit Width" on smaller smartphone screens to eliminate horizontal scrolling.'
    },
    limitations: [
      { title: 'Specialized CMYK Profiles', text: 'PDF.js renders colors into the sRGB color space. High-end commercial print documents with specialized CMYK spot colors may exhibit subtle shade differences.' },
      { title: '3D & Multimedia Annotations', text: 'Interactive 3D models or embedded video streams inside PDFs are not supported by standard browser canvas viewers.' }
    ],
    faqs: [
      { question: 'Do I need Adobe Acrobat or third-party viewer software?', answer: 'No. This viewer executes directly inside modern web browsers using Mozilla’s PDF.js rendering engine.' },
      { question: 'Can anyone else view the PDF file I open here?', answer: 'No. The file is read strictly within your local computer or phone RAM. It is never uploaded to any server or logged in any database.' },
      { question: 'Does the preview support large multi-page reports?', answer: 'Yes. It renders pages on demand as you navigate, keeping memory consumption low even on long documents.' }
    ],
    relatedSlugs: ['merge-pdf', 'split-pdf', 'image-to-pdf']
  },

  // 5. IMAGE RESIZER
  {
    id: 'image-resizer',
    slug: 'image-resizer',
    title: 'Image Resizer & Dimensions Editor',
    shortTitle: 'Image Resizer',
    category: 'image',
    description: 'Resize images by exact pixel width and height, percentage scaling, or standard Indian document presets (Passport photo, UPSC/SSC, PAN card, Aadhaar).',
    icon: 'Maximize2',
    badge: 'Popular',
    popular: true,
    recentlyAdded: false,
    seoTitle: 'Online Image Resizer in Pixels | Easy Utility India',
    seoDescription: 'Resize photos to exact pixel width, height, or percentage scaling. Includes presets for Indian passport photos, UPSC, SSC, and PAN cards. Free and private.',
    specs: [
      { label: 'Dimension Range', value: '10 px to 8,000 px' },
      { label: 'Scaling Modes', value: 'Exact Pixels, Aspect Ratio, Percentage' },
      { label: 'Output Formats', value: 'JPG, PNG, WebP with Quality Slider' },
      { label: 'Hardware Acceleration', value: 'HTML5 2D Canvas' },
    ],
    features: [
      'Resize images by exact Width and Height in pixels',
      'Quick percentage scaling: 25%, 50%, 75%, 100%, 150%',
      'Lock Aspect Ratio toggle to prevent stretching or distorted photos',
      'Standard Indian presets: Indian Passport (413×531 px / 3.5×4.5 cm), UPSC/SSC (350×450 px), Signature (140×60 px), PAN Card (213×213 px)',
      'Export to JPG, PNG, or WebP with adjustable compression quality'
    ],
    instructions: [
      { step: 1, title: 'Upload Image', text: 'Select a JPG, PNG, or WebP photo from your computer or mobile device.' },
      { step: 2, title: 'Choose Dimensions or Preset', text: 'Enter your desired width/height or click one of our official exam presets.' },
      { step: 3, title: 'Inspect Preview and Download', text: 'Review the live canvas preview and estimated file size, then click "Download Resized Image".' }
    ],
    realisticExample: {
      scenario: 'Resizing a smartphone vertical portrait photo to the exact 350 × 450 pixel format required by UPSC Civil Services and SSC CGL registration forms.',
      input: 'Smartphone camera photo (3024 × 4032 pixels, 4.2 MB).',
      output: 'Properly scaled 350 × 450 pixel JPG image ready for immediate portal upload.',
      tip: 'Click the "UPSC / SSC Photo" preset button for instant one-click dimension calibration.'
    },
    limitations: [
      { title: 'Extreme Upscaling', text: 'Upscaling very small images (e.g. 100px up to 3000px) will produce softer or pixelated results, as canvas resampling cannot artificially invent high-frequency optical details.' },
      { title: 'Arbitrary Aspect Ratios', text: 'If a portal mandates dimensions with an unnatural aspect ratio (e.g. square 200×200 for a rectangular portrait), disabling "Lock Aspect Ratio" will cause slight visual stretching.' }
    ],
    faqs: [
      { question: 'What is the standard Indian passport photo size in pixels?', answer: 'An Indian passport photo measures 3.5 cm × 4.5 cm. At standard 300 DPI print resolution, this corresponds to approximately 413 × 531 pixels.' },
      { question: 'Will resizing change the aspect ratio or stretch my face?', answer: 'By default, "Lock Aspect Ratio" is enabled to keep facial features proportional. You can uncheck it if an application portal mandates strict arbitrary dimensions.' },
      { question: 'Are my photos uploaded to any cloud storage?', answer: 'No. Resizing executes purely via your web browser’s Canvas hardware acceleration. No image data is sent to external servers.' }
    ],
    relatedSlugs: ['image-compressor', 'jpg-to-png', 'image-to-pdf']
  },

  // 6. IMAGE COMPRESSOR (TARGET KB)
  {
    id: 'image-compressor',
    slug: 'image-compressor',
    title: 'Image Compressor by Target KB',
    shortTitle: 'Image Compressor (Target KB)',
    category: 'image',
    description: 'Compress JPG, PNG, and WebP images to an exact target file size in KB (e.g., under 50KB or 20KB) for UPSC, SSC, IBPS, and government exam portal uploads.',
    icon: 'Minimize2',
    badge: 'Govt Exam Special',
    popular: true,
    recentlyAdded: false,
    seoTitle: 'Compress Image to Target KB Online | Easy Utility India',
    seoDescription: 'Compress images to an exact target file size in KB (e.g. 20KB, 50KB, 100KB) for UPSC, SSC, IBPS, and Indian govt application portals. 100% free and private.',
    specs: [
      { label: 'Target Size Range', value: '5 KB to 10,000 KB' },
      { label: 'Standard Exam Presets', value: '20 KB (Signature), 50 KB (Photo), 100 KB, 200 KB' },
      { label: 'Algorithm', value: 'Binary-search quality optimization + dimensional scaling' },
      { label: 'Privacy', value: 'Zero server uploads (Client-side memory)' },
    ],
    features: [
      'Specify exact target file size in KB (e.g., 20 KB for signature, 50 KB for photo)',
      'Intelligent compression algorithm balancing visual quality and dimension scaling',
      'Side-by-side comparison displaying original vs output size and percentage saved',
      'Optional custom dimension boundaries with aspect ratio preservation',
      'Helpful explanation when an image cannot be reduced further without severe quality loss',
      'Tailored for SSC CGL, UPSC Civil Services, IBPS, NEET, JEE, and State PSC portals'
    ],
    instructions: [
      { step: 1, title: 'Upload Photo or Signature', text: 'Select your photo (JPG, PNG, or WebP) from your smartphone or computer.' },
      { step: 2, title: 'Set Target KB', text: 'Type your portal’s maximum allowed KB (e.g., 50 for SSC photo, 20 for signature) or click a quick preset.' },
      { step: 3, title: 'Compress and Verify', text: 'Click "Compress to Target KB". Inspect the output KB and visual clarity, then click "Download Compressed Image".' }
    ],
    realisticExample: {
      scenario: 'Compressing a scanned signature image from 1.8 MB down to strictly under 20 KB for the Staff Selection Commission (SSC) portal.',
      input: 'High-resolution smartphone crop of handwritten signature (1840 KB).',
      output: 'Clean, legible JPEG signature file at 18.2 KB (comfortably below the 20 KB cutoff).',
      tip: 'Crop closely around the signature before compressing so the algorithm doesn’t waste data on blank white paper.'
    },
    limitations: [
      { title: 'Extreme Compression Bounds', text: 'Attempting to compress a complex full-color scenery photo into 5 KB will require drastic dimension scaling and quality reduction, which may cause visible pixelation.' },
      { title: 'Format Nature', text: 'Target KB compression outputs in JPEG format because PNG’s lossless encoding cannot guarantee arbitrary file size caps without quality degradation.' }
    ],
    faqs: [
      { question: 'Why do Indian government portals reject photo uploads?', answer: 'Recruitment portals (like UPSC, SSC, NTA) enforce strict server storage caps. If a photograph is even 51 KB when the limit is 50 KB, the portal will reject it. Our tool targets the exact threshold required.' },
      { question: 'What happens if my photo is 5MB and I need 20KB?', answer: 'Our algorithm scales down pixel dimensions alongside compression quality so that the photo remains crisp and recognizable rather than a blurry block of artifacts.' },
      { question: 'Can I compress my signature to 20 KB?', answer: 'Yes! Simply select the "20 KB (Signature)" preset button and our compressor will optimize your scanned signature immediately.' }
    ],
    relatedSlugs: ['image-resizer', 'jpg-to-png', 'image-to-pdf']
  },

  // 7. JPG TO PNG CONVERTER
  {
    id: 'jpg-to-png',
    slug: 'jpg-to-png',
    title: 'JPG to PNG & Format Converter',
    shortTitle: 'JPG to PNG Converter',
    category: 'image',
    description: 'Convert image formats seamlessly between JPG, PNG, and modern WebP. Retain high quality, customize background fills, and download instantly.',
    icon: 'Repeat',
    badge: 'Fast',
    popular: false,
    recentlyAdded: false,
    seoTitle: 'JPG to PNG Converter Online Free | Easy Utility India',
    seoDescription: 'Convert JPG to PNG, PNG to JPG, and WebP images online for free. Clean, loss-free browser conversion without server uploads or watermarks.',
    specs: [
      { label: 'Supported Input', value: 'JPG, JPEG, PNG, WebP' },
      { label: 'Supported Output', value: 'PNG, JPG, WebP' },
      { label: 'Transparency Handling', value: 'Customizable solid background fills for JPG' },
      { label: 'Processing', value: 'Instant local canvas conversion' },
    ],
    features: [
      'Convert JPG to lossless PNG with crisp graphic edges',
      'Convert PNG to JPG with customizable solid background colors (White/Black)',
      'Convert any photo to ultra-light modern WebP format',
      'Adjustable output quality slider (10% to 100%)',
      'Zero server upload: Your files stay 100% on your device'
    ],
    instructions: [
      { step: 1, title: 'Upload Image', text: 'Select any JPG, PNG, or WebP file from your device.' },
      { step: 2, title: 'Select Desired Format', text: 'Choose PNG, JPG, or WebP. If converting PNG to JPG, select your preferred background fill.' },
      { step: 3, title: 'Convert and Save', text: 'Click "Convert & Download" to save your newly formatted image.' }
    ],
    realisticExample: {
      scenario: 'Converting a transparent PNG college logo or digital seal into a clean white-background JPG required by an online recruitment form.',
      input: 'Transparent PNG image (800 × 800 px).',
      output: 'Solid white background JPEG image accepted by older recruitment portal upload engines.',
      tip: 'Leave the background fill selector set to "White Background" for government document compatibility.'
    },
    limitations: [
      { title: 'No Detail Recovery', text: 'Converting a heavily compressed, blurry JPG into PNG preserves the exact current quality without further loss, but cannot restore details lost in earlier compression.' },
      { title: 'File Size Differences', text: 'PNG uses lossless compression; saving photographic images as PNG will often produce significantly larger file sizes than equivalent JPEGs.' }
    ],
    faqs: [
      { question: 'Why should I convert a JPG to PNG?', answer: 'PNG uses lossless compression, making it better for diagrams, signatures, text screenshots, and logos where JPEG compression artifacts would cause blurriness.' },
      { question: 'What happens to transparency when converting PNG to JPG?', answer: 'Since JPEG does not support alpha transparency, transparent areas are filled with a solid background color (white by default, which is required for official documents).' }
    ],
    relatedSlugs: ['image-compressor', 'image-resizer', 'image-to-pdf']
  },

  // 8. AGE CALCULATOR
  {
    id: 'age-calculator',
    slug: 'age-calculator',
    title: 'Age Calculator for Govt Exams',
    shortTitle: 'Age Calculator',
    category: 'calculator',
    description: 'Calculate your exact age in years, months, and days. Includes custom "Age as of Date" calculation for Indian government exam eligibility cut-offs.',
    icon: 'Calendar',
    badge: 'Popular',
    popular: true,
    recentlyAdded: false,
    seoTitle: 'Age Calculator for Govt Exams Online | Easy Utility India',
    seoDescription: 'Free online age calculator for UPSC, SSC, and state exams. Calculate exact age in years, months, and days as on official recruitment cutoff dates.',
    specs: [
      { label: 'Precision', value: 'Years, Months, Days, Hours, Minutes' },
      { label: 'Exam Presets', value: '1st August (UPSC/SSC), 1st January, Today' },
      { label: 'Leap Year Math', value: 'Full calendar leap year & February 29 support' },
      { label: 'One-Click Action', value: 'Copy Age Summary to Clipboard' },
    ],
    features: [
      'Calculate exact age in Years, Months, and Days',
      'Custom "Age as of Date" selector tailored for Indian recruitment cutoff dates (e.g. 01/08/2026 or 01/01/2026)',
      'Lifetime statistical summary: Total Months, Weeks, Days, Hours, and Minutes lived',
      'Upcoming birthday countdown with remaining days and weekday indicator',
      'One-click "Copy Age" button to easily paste details into application portals'
    ],
    instructions: [
      { step: 1, title: 'Enter Date of Birth', text: 'Select your birth date using the date selector.' },
      { step: 2, title: 'Choose Reference Cutoff Date', text: 'Leave as "Today" or choose an exam notification cutoff date (e.g. 1st August).' },
      { step: 3, title: 'View Exact Breakdown', text: 'Instantly view your age in years, months, and days, along with your next birthday countdown.' }
    ],
    realisticExample: {
      scenario: 'Verifying eligibility for UPSC Civil Services Prelims 2026 where the notification cutoff date is August 1, 2026 for a candidate born on May 15, 2001.',
      input: 'Date of Birth: 15-05-2001 | Cutoff Reference Date: 01-08-2026.',
      output: 'Exact Age: 25 Years, 2 Months, 17 Days (Eligible within 21–32 General bracket).',
      tip: 'Click the "1st August (UPSC/SSC Cutoff)" preset button to instantly set the reference date.'
    },
    limitations: [
      { title: 'Category Relaxations', text: 'This calculator computes chronological age based on standard calendar rules. It does not automatically apply caste- or service-based age relaxations (e.g. 3 years for OBC, 5 years for SC/ST, or Ex-Servicemen quotas); consult your specific exam notification for relaxed upper age limits.' },
      { title: 'Time of Birth', text: 'Calculations are day-based using the Gregorian calendar. Time-of-day birth hour offsets or astrological lunar day (tithi) calculations are outside the scope of competitive exam eligibility.' }
    ],
    faqs: [
      { question: 'How is age calculated for UPSC and SSC exams in India?', answer: 'Most Indian recruitment notifications require candidates to fall within an age bracket (e.g., 21 to 32 years) as on a specific reference cutoff date—typically August 1st or January 1st of the recruitment year. Our tool allows you to specify this cutoff date with one click.' },
      { question: 'Does the age calculation accurately handle leap years?', answer: 'Yes. Our integer calendar algorithm factors in leap years and varying month lengths (28, 29, 30, and 31 days) without timezone parsing shifts.' },
      { question: 'Can I copy my calculated age for application forms?', answer: 'Yes. Click the "Copy Age" button in the results card to copy your exact age string directly to your clipboard.' }
    ],
    relatedSlugs: ['percentage-calculator', 'discount-calculator', 'image-compressor']
  },

  // 9. PERCENTAGE CALCULATOR
  {
    id: 'percentage-calculator',
    slug: 'percentage-calculator',
    title: 'Percentage Calculator (Marks & % Change)',
    shortTitle: 'Percentage Calculator',
    category: 'calculator',
    description: 'All-in-one percentage calculator: calculate school/college marks percentages, find percentage of a number, and calculate percentage increase or decrease.',
    icon: 'Percent',
    badge: 'Essential',
    popular: false,
    recentlyAdded: false,
    seoTitle: 'Percentage Calculator Online Free | Easy Utility India',
    seoDescription: 'Calculate exam marks percentage, percentage of any value, and percentage increase or decrease with step-by-step formulas. 100% free online calculator.',
    specs: [
      { label: 'Calculation Modes', value: '3-in-1: X% of Y, Marks %, % Increase/Decrease' },
      { label: 'Standard Presets', value: 'GST (5%, 12%, 18%, 28%), CBSE 500/600/1000' },
      { label: 'Display Output', value: 'Result value + Step-by-step mathematical formula' },
      { label: 'Clipboard', value: 'One-click copy for all calculation results' },
    ],
    features: [
      'Mode 1: What is X% of Y? (e.g. 18% GST of ₹2,500 = ₹450)',
      'Mode 2: Marks percentage calculator (e.g. 485 obtained out of 500 = 97.00%)',
      'Mode 3: Percentage increase / decrease from value A to value B',
      'Displays full mathematical calculation steps for verification',
      'One-click copy buttons for every calculation result'
    ],
    instructions: [
      { step: 1, title: 'Choose Mode', text: 'Select whether you want to calculate exam marks %, a percentage of a number, or percentage increase/decrease.' },
      { step: 2, title: 'Enter Numbers', text: 'Type your values into the input fields.' },
      { step: 3, title: 'View Result and Formula', text: 'The result and calculation steps update instantly on screen as you type.' }
    ],
    realisticExample: {
      scenario: 'Calculating Class 12 CBSE board exam marks percentage to fill out a central university admission form.',
      input: 'Marks Obtained: 442 | Total Maximum Marks: 500 (across 5 subjects).',
      output: 'Final Percentage: 88.40% (Formula: (442 / 500) × 100 = 88.40%).',
      tip: 'Tap the "CBSE 500" quick preset under the Total Marks field to set the denominator immediately.'
    },
    limitations: [
      { title: 'CGPA Conversions', text: 'This tool performs standard arithmetic marks percentages. Different Indian universities use different CGPA-to-percentage multiplier formulas (e.g. CBSE multiplies CGPA by 9.5, whereas certain autonomous universities use custom formulas). Check your university transcript guidelines.' },
      { title: 'Best of 5 Rule', text: 'Enter only the aggregate marks of the subjects that your target college counseling allows (e.g. core 5 subjects vs total subjects).' }
    ],
    faqs: [
      { question: 'How do I calculate CBSE or university marks percentage?', answer: 'Select Tab 2 ("Marks %"), enter your total marks obtained and the maximum total marks (e.g. 500 for 5 CBSE subjects), and the exact percentage will appear immediately.' },
      { question: 'How do I calculate percentage discount or markup?', answer: 'Select Tab 3 ("% Change"), enter the old price and new price to see the exact percentage increase or decrease.' }
    ],
    relatedSlugs: ['discount-calculator', 'age-calculator']
  },

  // 10. DISCOUNT & GST CALCULATOR
  {
    id: 'discount-calculator',
    slug: 'discount-calculator',
    title: 'Discount & GST Calculator India',
    shortTitle: 'Discount & GST Calculator',
    category: 'calculator',
    description: 'Calculate discount savings, final sale price, and apply Indian GST tax slabs (0%, 5%, 12%, 18%, 28%) with complete itemized bill breakdowns.',
    icon: 'Tag',
    badge: 'Shopping & Business',
    popular: false,
    recentlyAdded: true,
    seoTitle: 'Discount & GST Calculator India | Easy Utility India',
    seoDescription: 'Calculate final payable price after discount and add Indian GST (5%, 12%, 18%, 28%). Free tool for festive online shopping and retail billing in India.',
    specs: [
      { label: 'Discount Types', value: 'Percentage (%) or Flat Rupee (₹)' },
      { label: 'Indian GST Slabs', value: '0%, 5%, 12%, 18%, 28%' },
      { label: 'Additional Offers', value: 'Optional bank card or coupon discount' },
      { label: 'Receipt Breakdown', value: 'MRP, Discount, Subtotal, GST, Final Payable' },
    ],
    features: [
      'Calculate percentage discounts (e.g., 25% off) or flat rupee discounts (e.g., ₹500 off)',
      'Integrated Indian GST selector with official slabs: 0%, 5%, 12%, 18%, 28%',
      'Optional coupon/bank offer field matching Indian e-commerce checkout flows',
      'Itemized bill receipt breakdown with one-click copy functionality',
      'Great for festive sales (Diwali, Great Indian Festival, Big Billion Days) and small business invoicing'
    ],
    instructions: [
      { step: 1, title: 'Enter Original MRP', text: 'Type the item’s initial MRP or retail price in Indian Rupees (₹).' },
      { step: 2, title: 'Apply Discount & GST', text: 'Specify the discount percentage or flat off, and choose the applicable GST tax slab.' },
      { step: 3, title: 'View Summary', text: 'Instantly view your final payable price, net savings, and itemized bill.' }
    ],
    realisticExample: {
      scenario: 'Calculating the net savings and final checkout amount for a laptop on sale during festive season (MRP ₹60,000 with a 15% store discount, ₹2,000 bank card coupon, plus 18% GST on the discounted price).',
      input: 'MRP: ₹60,000 | Store Discount: 15% | Extra Bank Offer: ₹2,000 | GST Slab: 18%.',
      output: 'Final Payable Price: ₹57,820 (Total Savings: ₹11,000 off original retail MRP).',
      tip: 'Tap "Copy Bill" to copy the full itemized breakdown to share on WhatsApp or save for your records.'
    },
    limitations: [
      { title: 'Commercial Invoicing & Cess', text: 'This calculator is designed for consumer retail estimation. It does not calculate compensation cess (e.g. on tobacco/automobiles) or complex input tax credit (ITC) commercial adjustments.' },
      { title: 'Reverse Charge Mechanism (RCM)', text: 'Specialized business transactions subject to reverse charge are not included; consult a Chartered Accountant for formal commercial GST filing.' }
    ],
    faqs: [
      { question: 'Can I calculate both discount and GST together?', answer: 'Yes. The calculator deducts the primary discount and any additional coupon first, then calculates GST on the discounted subtotal.' },
      { question: 'What are the standard GST slabs in India?', answer: 'India has four primary GST slabs: 5% (essentials and economy apparel), 12% (processed food), 18% (electronics and services), and 28% (luxury items and motor vehicles).' },
      { question: 'Can I copy the itemized bill summary?', answer: 'Yes. Tap the "Copy Bill" button to copy the itemized breakdown directly to your clipboard.' }
    ],
    relatedSlugs: ['percentage-calculator', 'age-calculator']
  }
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: Tool['category']): Tool[] {
  return tools.filter((t) => t.category === category);
}

export function getPopularTools(): Tool[] {
  return tools.filter((t) => t.popular);
}

export function getRecentlyAddedTools(): Tool[] {
  return tools.filter((t) => t.recentlyAdded);
}
