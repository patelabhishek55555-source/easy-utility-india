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
  instructions: { step: number; title: string; text: string }[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const tools: Tool[] = [
  // PDF TOOLS
  {
    id: 'image-to-pdf',
    slug: 'image-to-pdf',
    title: 'Image to PDF Converter',
    shortTitle: 'Image to PDF',
    category: 'pdf',
    description: 'Convert multiple JPG, PNG, and WebP images into a single clean PDF document. Reorder images, customize page orientation, and generate PDFs 100% locally.',
    icon: 'FileImage',
    badge: 'Popular',
    popular: true,
    recentlyAdded: false,
    seoTitle: 'Free Image to PDF Converter Online - Convert JPG/PNG to PDF | Easy Utility India',
    seoDescription: 'Convert JPG, PNG, and WebP photos to high quality PDF files instantly in your browser. No file size limits, no server uploads, 100% private and free.',
    features: [
      'Convert single or multiple images (JPG, PNG, WebP) into one organized PDF',
      'Choose page orientation: Portrait, Landscape, or Auto-fit',
      'Set custom page margins (None, Small, Normal)',
      'Reorder or remove images before converting',
      '100% Client-Side: Your confidential documents never leave your browser',
      'Optimized for Indian students, competitive exam documents, and job applications'
    ],
    instructions: [
      { step: 1, title: 'Upload Images', text: 'Drag and drop your JPG, PNG, or WebP images into the upload box or click to select files from your phone or PC.' },
      { step: 2, title: 'Arrange & Configure', text: 'Reorder images by clicking move buttons, adjust page orientation (Portrait or Landscape), and select margin preference.' },
      { step: 3, title: 'Convert & Download', text: 'Click "Generate PDF" to compile your document in seconds and download it directly to your device.' }
    ],
    faqs: [
      { question: 'Is my data secure when converting images to PDF?', answer: 'Yes! Easy Utility India processes all files entirely inside your web browser using JavaScript (pdf-lib). Your photos are never uploaded to any cloud server or database.' },
      { question: 'Can I combine multiple photos into a single PDF?', answer: 'Yes, you can upload dozens of photos at once, reorder them as desired, and merge them all into a single continuous PDF file.' },
      { question: 'Is there any watermark or file limit?', answer: 'No watermarks, no fees, and no artificial limits. You can use it as many times as you need for school, college, or job applications.' }
    ],
    relatedSlugs: ['merge-pdf', 'split-pdf', 'image-compressor', 'image-resizer']
  },
  {
    id: 'merge-pdf',
    slug: 'merge-pdf',
    title: 'Merge PDF Documents',
    shortTitle: 'Merge PDF',
    category: 'pdf',
    description: 'Combine multiple PDF files into a single organized document in your desired order. Fast, secure, and processed completely in your browser.',
    icon: 'Copy',
    badge: 'Essential',
    popular: true,
    recentlyAdded: false,
    seoTitle: 'Merge PDF Online Free - Combine PDF Files Securely | Easy Utility India',
    seoDescription: 'Combine multiple PDF documents into one PDF file online for free. Fast, easy, and secure browser-side merging. Ideal for marksheets, resumes, and govt forms.',
    features: [
      'Merge multiple PDF documents into a single cohesive file',
      'Easily arrange the order of PDFs before merging',
      'Real-time page count inspection for each uploaded file',
      'Instant client-side processing without uploading files to remote servers',
      'Perfect for combining marksheets, certificates, Aadhaar/PAN scans, and contracts'
    ],
    instructions: [
      { step: 1, title: 'Select PDF Files', text: 'Upload two or more PDF files using the file picker or drag and drop.' },
      { step: 2, title: 'Order Documents', text: 'Use the up/down arrows to arrange the files in the exact sequence you want them to appear in the merged document.' },
      { step: 3, title: 'Merge and Save', text: 'Click "Merge PDFs" and download your newly combined PDF immediately.' }
    ],
    faqs: [
      { question: 'Are my confidential documents uploaded to the internet?', answer: 'Never. Unlike other online tools that send your PDFs to remote cloud servers, Easy Utility India merges files locally in your browser memory.' },
      { question: 'Is there a limit on how many PDFs I can merge?', answer: 'You can merge as many PDF files as your device’s memory can handle, typically dozens of files without any issues.' },
      { question: 'Will the visual quality of my PDF decrease after merging?', answer: 'No, all vector graphics, fonts, and high-resolution scanned pages are retained with 100% original fidelity.' }
    ],
    relatedSlugs: ['split-pdf', 'image-to-pdf', 'pdf-preview']
  },
  {
    id: 'split-pdf',
    slug: 'split-pdf',
    title: 'Split PDF Pages',
    shortTitle: 'Split PDF',
    category: 'pdf',
    description: 'Extract specific pages or page ranges (e.g., 1-3, 5, 8-10) from any PDF document into a clean, standalone PDF file in seconds.',
    icon: 'Split',
    badge: 'Free',
    popular: false,
    recentlyAdded: true,
    seoTitle: 'Split PDF Pages Online Free - Extract Specific Pages | Easy Utility India',
    seoDescription: 'Extract selected pages or custom page ranges from your PDF files online. Free, quick, and 100% private client-side PDF splitter tool.',
    features: [
      'Extract custom page ranges such as "1-4, 7, 9-12"',
      'Inspect total page count and file information instantly',
      'Option to extract all pages or isolate a single page',
      'Zero server upload—all page extraction happens in your browser',
      'Save bandwidth and keep only the pages you need for official submissions'
    ],
    instructions: [
      { step: 1, title: 'Upload PDF', text: 'Upload the PDF document you want to split or extract pages from.' },
      { step: 2, title: 'Enter Page Numbers', text: 'Type the pages or ranges you wish to extract (for example: 1, 3-5, 8).' },
      { step: 3, title: 'Extract & Download', text: 'Click "Extract Pages" to generate your new trimmed PDF and download it.' }
    ],
    faqs: [
      { question: 'How do I specify page ranges to extract?', answer: 'You can use commas and hyphens. For example, typing "1-3, 5, 8-10" will extract pages 1, 2, 3, 5, 8, 9, and 10 into your new PDF.' },
      { question: 'Can I split password protected PDFs?', answer: 'Please unlock password-protected PDFs before splitting, as client-side cryptographic handling requires unprotected document streams.' },
      { question: 'Is it free to split large PDF files?', answer: 'Yes, completely free with no restrictions on page count or daily usage.' }
    ],
    relatedSlugs: ['merge-pdf', 'pdf-preview', 'image-to-pdf']
  },
  {
    id: 'pdf-preview',
    slug: 'pdf-preview',
    title: 'PDF Preview & Viewer',
    shortTitle: 'PDF Preview',
    category: 'pdf',
    description: 'Preview, inspect, and read PDF files directly in your web browser with zoom controls, page navigation, and metadata details without installing Acrobat reader.',
    icon: 'Eye',
    badge: 'New',
    popular: false,
    recentlyAdded: true,
    seoTitle: 'Free Online PDF Viewer & Page Inspector | Easy Utility India',
    seoDescription: 'Preview and inspect PDF documents directly in your web browser with zoom, page navigation, and metadata inspection. No software installation needed.',
    features: [
      'High-resolution canvas rendering for crystal-clear text and graphics',
      'Page navigation with Jump-to-Page and previous/next controls',
      'Interactive zoom controls (50% to 200%) for comfortable reading',
      'Instant document metadata inspection (file size, page dimensions, total pages)',
      '100% offline-capable once loaded—works privately on any device'
    ],
    instructions: [
      { step: 1, title: 'Select File', text: 'Choose or drag-and-drop any PDF file from your device.' },
      { step: 2, title: 'Navigate Pages', text: 'Use the page selector or arrow buttons to flip through pages.' },
      { step: 3, title: 'Zoom & Inspect', text: 'Zoom in to read fine print or zoom out to view full-page layouts.' }
    ],
    faqs: [
      { question: 'Do I need Adobe Acrobat or third-party software?', answer: 'No software installation is required. This viewer uses PDF.js directly within your browser.' },
      { question: 'Can anyone else see the PDF I open here?', answer: 'No. The file is read strictly within your local computer or phone RAM. It is never uploaded to any server.' }
    ],
    relatedSlugs: ['merge-pdf', 'split-pdf', 'image-to-pdf']
  },

  // IMAGE TOOLS
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
    seoTitle: 'Online Image Resizer - Resize Images in Pixels & Presets | Easy Utility India',
    seoDescription: 'Resize photos to exact pixel width, height, or percentage. Includes presets for Indian passport photos, UPSC, SSC, and social media. Free and private.',
    features: [
      'Resize by exact Width and Height in pixels',
      'Quick percentage scaling: 25%, 50%, 75%, 150%, 200%',
      'Lock Aspect Ratio toggle to prevent image stretching or distortion',
      'Standard Indian presets: Passport Size Photo (3.5 x 4.5 cm / 413x531 px), Signature (140x60 px), UPSC, SSC, Instagram, YouTube Banner',
      'Choose output format: JPG, PNG, or WebP with adjustable quality slider'
    ],
    instructions: [
      { step: 1, title: 'Upload Image', text: 'Select a JPG, PNG, or WebP photo from your computer or mobile.' },
      { step: 2, title: 'Set Dimensions', text: 'Enter your desired width and height, choose a preset, or adjust the percentage slider.' },
      { step: 3, title: 'Download Resized Image', text: 'Preview the updated image dimensions and click "Download Resized Image".' }
    ],
    faqs: [
      { question: 'Will resizing change the aspect ratio?', answer: 'By default, the "Lock Aspect Ratio" feature is enabled to preserve original proportions. You can uncheck it if you need specific arbitrary dimensions.' },
      { question: 'What is the standard Indian passport photo size in pixels?', answer: 'An Indian passport photo (3.5 cm x 4.5 cm at 300 DPI) is approximately 413 x 531 pixels.' },
      { question: 'Are files sent over the internet?', answer: 'No. The resizing is performed purely by your browser’s HTML5 Canvas hardware acceleration.' }
    ],
    relatedSlugs: ['image-compressor', 'jpg-to-png', 'image-to-pdf']
  },
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
    seoTitle: 'Image Compressor to Target KB Online - Compress Photo to 20KB, 50KB, 100KB',
    seoDescription: 'Compress images to an exact target file size in KB (e.g. 20KB, 50KB, 100KB) for UPSC, SSC, IBPS, NTA, and Indian job application portals. 100% free.',
    features: [
      'Specify exact target file size in KB (e.g., 20 KB, 50 KB, 100 KB, 200 KB)',
      'Intelligent binary search compression algorithm that adjusts quality and scale',
      'Shows live original file size, compressed file size, and percentage saved',
      'Helpful explanation when an image cannot be reduced further without severe quality loss',
      'Essential for Indian government exam forms (SSC CGL, UPSC, State PSC, NEET, JEE, IBPS)'
    ],
    instructions: [
      { step: 1, title: 'Upload Your Photo or Signature', text: 'Upload your image (JPG, PNG, or WebP).' },
      { step: 2, title: 'Enter Target Size in KB', text: 'Enter the maximum KB required by your application portal (for example, 50 for SSC photo, 20 for signature).' },
      { step: 3, title: 'Compress & Verify', text: 'Click "Compress Image". Check the output KB and visual preview, then download your compliant photo.' }
    ],
    faqs: [
      { question: 'Why do Indian exam portals require images under 20KB or 50KB?', answer: 'Government recruitment and admission portals (like UPSC, SSC, NTA) enforce strict bandwidth limits for server storage by capping photograph and signature uploads between 10KB to 50KB.' },
      { question: 'What happens if my photo is 5MB and I ask for 20KB?', answer: 'The compressor intelligently scales down image dimensions alongside JPEG quality. If the target is mathematically unreachable without making the image unrecognizable, it alerts you and provides the closest achievable size.' },
      { question: 'Is my photograph uploaded to any server?', answer: 'No. All compression runs locally on your device. Your photo and signature remain 100% private and confidential.' }
    ],
    relatedSlugs: ['image-resizer', 'jpg-to-png', 'image-to-pdf']
  },
  {
    id: 'jpg-to-png',
    slug: 'jpg-to-png',
    title: 'JPG to PNG / Format Converter',
    shortTitle: 'JPG to PNG Converter',
    category: 'image',
    description: 'Convert image formats seamlessly between JPG, PNG, and modern WebP. Retain high quality, customize background fills, and download instantly.',
    icon: 'Repeat',
    badge: 'Fast',
    popular: false,
    recentlyAdded: false,
    seoTitle: 'JPG to PNG & Image Format Converter Online Free | Easy Utility India',
    seoDescription: 'Convert JPG to PNG, PNG to JPG, and WebP images online for free. Clean, loss-free browser conversion without server uploads.',
    features: [
      'Convert JPG to PNG with crisp graphic edges',
      'Convert PNG to JPG with customizable solid background colors (White/Black)',
      'Convert any photo to ultra-light modern WebP format',
      'Custom quality setting slider (10% to 100%)',
      'Batch conversion support for faster workflows'
    ],
    instructions: [
      { step: 1, title: 'Upload Image', text: 'Select any JPG, PNG, or WebP image from your device.' },
      { step: 2, title: 'Select Target Format', text: 'Choose your desired output format (PNG, JPG, or WebP).' },
      { step: 3, title: 'Convert & Save', text: 'Click "Convert Image" and download the converted file right away.' }
    ],
    faqs: [
      { question: 'Why convert JPG to PNG?', answer: 'PNG uses lossless compression, making it better for diagrams, signatures, text screenshots, and logos without blocky JPEG artifacts.' },
      { question: 'What happens to transparency when converting PNG to JPG?', answer: 'Because JPEG does not support alpha transparency, any transparent areas will be filled with a clean white background.' }
    ],
    relatedSlugs: ['image-compressor', 'image-resizer', 'image-to-pdf']
  },

  // CALCULATORS
  {
    id: 'age-calculator',
    slug: 'age-calculator',
    title: 'Age Calculator Online',
    shortTitle: 'Age Calculator',
    category: 'calculator',
    description: 'Calculate your exact age in years, months, and days. Includes custom "Age as on Date" calculation for Indian government exam eligibility cut-offs.',
    icon: 'Calendar',
    badge: 'Popular',
    popular: true,
    recentlyAdded: false,
    seoTitle: 'Age Calculator Online - Calculate Exact Age for Govt Job Eligibility India',
    seoDescription: 'Free online age calculator. Find your exact age in years, months, and days. Calculate age as on specific eligibility cutoff dates for UPSC, SSC, and state exams.',
    features: [
      'Calculate exact age in Years, Months, and Days',
      'Custom "Age as on Date" field tailored for Indian job eligibility criteria (e.g. 01/08/2026 or 01/01/2026)',
      'Detailed lifespan breakdown: Total Months, Weeks, Days, Hours, and Minutes lived',
      'Upcoming birthday countdown with remaining days and weekday indicator',
      'Milestones timeline showing future milestone birthdays (e.g. 21st, 25th, 30th, 50th, 60th retirement age)'
    ],
    instructions: [
      { step: 1, title: 'Select Birth Date', text: 'Pick your Date of Birth using the date selector.' },
      { step: 2, title: 'Choose Reference Date', text: 'Leave as "Today" for current age, or select an official cutoff date specified in your job advertisement.' },
      { step: 3, title: 'View Complete Breakdown', text: 'Instantly view your exact age, days to next birthday, and full statistical summary.' }
    ],
    faqs: [
      { question: 'How is age calculated for Indian government exams (UPSC/SSC)?', answer: 'Most Indian exam notifications state an age limit (e.g., 21 to 32 years) as on a specific reference cutoff date (usually August 1st or January 1st of the exam year). Our tool allows you to set this reference date precisely.' },
      { question: 'Does the calculator account for leap years?', answer: 'Yes! Our algorithm accurately factors in leap years and the varying number of days in each calendar month.' }
    ],
    relatedSlugs: ['percentage-calculator', 'discount-calculator', 'image-compressor']
  },
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
    seoTitle: 'Percentage Calculator Online - Marks %, Percentage of X, % Increase/Decrease',
    seoDescription: 'Free percentage calculator. Calculate exam marks percentage, find percentage of any value, and calculate percentage change with step-by-step formulas.',
    features: [
      'Mode 1: Calculate marks percentage (e.g. 485 marks obtained out of 500 total = 97%)',
      'Mode 2: Find What is X% of Y (e.g. What is 18% GST of ₹2,500?)',
      'Mode 3: Percentage increase / decrease from value A to value B',
      'Shows complete step-by-step mathematical calculation formulas',
      'One-click copy result button and instant calculation as you type'
    ],
    instructions: [
      { step: 1, title: 'Select Calculation Mode', text: 'Choose whether you want to calculate exam marks %, percentage of a number, or percentage increase/decrease.' },
      { step: 2, title: 'Enter Values', text: 'Type your numbers into the corresponding input fields.' },
      { step: 3, title: 'See Result & Steps', text: 'The result and calculation formula appear immediately on screen.' }
    ],
    faqs: [
      { question: 'How do I calculate CBSE or college marks percentage?', answer: 'Divide the total marks you obtained by the total maximum possible marks and multiply by 100. For example: (450 ÷ 500) × 100 = 90%.' },
      { question: 'How do I calculate percentage discount or markup?', answer: 'Select the "% Increase / Decrease" tab, enter the original price and new price to see the exact percentage change.' }
    ],
    relatedSlugs: ['discount-calculator', 'age-calculator']
  },
  {
    id: 'discount-calculator',
    slug: 'discount-calculator',
    title: 'Discount & GST Calculator',
    shortTitle: 'Discount & GST Calculator',
    category: 'calculator',
    description: 'Calculate discount savings, final sale price, and apply Indian GST tax slabs (0%, 5%, 12%, 18%, 28%) with complete itemized bill breakdowns.',
    icon: 'Tag',
    badge: 'Shopping & Business',
    popular: false,
    recentlyAdded: true,
    seoTitle: 'Discount & GST Calculator Online - Calculate Savings & Indian GST Slabs',
    seoDescription: 'Calculate final price after discount and add Indian GST (5%, 12%, 18%, 28%). Free tool for shoppers, retailers, and online shopping deals in India.',
    features: [
      'Calculate percentage discounts (e.g., 20% off) or flat rupee discounts (e.g., ₹500 off)',
      'Integrated Indian GST selector with official slabs: 0%, 5%, 12%, 18%, 28% or custom rate',
      'Itemized price breakdown: Original Price, Discount Amount, Subtotal, GST Amount, Final Payable',
      'Shows your total net savings and percentage saved',
      'Great for festive sales (Diwali, Great Indian Festival, Big Billion Days) and small business invoicing'
    ],
    instructions: [
      { step: 1, title: 'Enter Original Price', text: 'Type the MRP or initial price of the item in Indian Rupees (₹).' },
      { step: 2, title: 'Specify Discount & GST', text: 'Enter the discount percentage or flat off, and optionally select the applicable GST rate.' },
      { step: 3, title: 'View Summary', text: 'Instantly view your final price, GST component, and total savings.' }
    ],
    faqs: [
      { question: 'Can I calculate both discount and GST together?', answer: 'Yes! The calculator deducts the discount from the original price first, then applies the selected GST percentage on the discounted subtotal.' },
      { question: 'What are the standard GST tax slabs in India?', answer: 'India has four primary GST slabs: 5% (essentials), 12% (standard items), 18% (services and electronics), and 28% (luxury and demerit goods).' }
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
