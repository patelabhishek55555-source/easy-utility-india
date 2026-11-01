# Easy Utility India 🇮🇳
**Free Online Tools for Everyday Needs**

> A fast, modern, and 100% private client-side utility suite built specifically for Indian students, competitive exam applicants (UPSC, SSC, IBPS, State PSC), professionals, and everyday tasks.

---

## 🚀 Key Advantages & Architecture

1. **100% Client-Side Privacy (Zero Server Uploads)**:
   All file processing (PDF merging, splitting, image compression, format conversion) executes strictly inside the user's web browser using modern JavaScript, `pdf-lib`, and HTML5 Canvas APIs. **Files never leave your phone or computer.**
2. **Instant Performance**:
   No network latency or server queuing. Even large 10MB+ images and multi-page PDFs process locally in milliseconds.
3. **Tailored for India**:
   - Exact Target KB compression (20KB for signatures, 50KB for photos) required by SSC CGL, UPSC, and State PSCs.
   - Presets for Indian Passport photos (3.5 × 4.5 cm / 413 × 531 px), PAN cards, and exam signatures.
   - Age Calculator with custom cutoff dates (e.g., 01/08/2026 or 01/01/2026).
   - Discount Calculator with official Indian GST slabs (0%, 5%, 12%, 18%, 28%).
4. **Zero Hosting Cost**:
   Static HTML/CSS/JS output configured for continuous deployment on **Vercel's Free Tier**.

---

## 🛠️ Complete Suite of Working Tools

| Category | Tool | URL Route | Key Capabilities |
| :--- | :--- | :--- | :--- |
| **PDF** | **Image to PDF** | `/tools/image-to-pdf` | Multi-image (JPG, PNG, WebP) to PDF, reorder, orientation & margins |
| **PDF** | **Merge PDF** | `/tools/merge-pdf` | Combine multiple PDFs, drag-and-drop, page count inspection |
| **PDF** | **Split PDF** | `/tools/split-pdf` | Extract specific pages/ranges (e.g. `1-3, 5`), odd/even presets |
| **PDF** | **PDF Preview & Viewer** | `/tools/pdf-preview` | In-browser canvas rendering with PDF.js, zoom, page flip |
| **Image** | **Image Resizer** | `/tools/image-resizer` | Pixel width/height, aspect ratio lock, percentage scaling, Indian presets |
| **Image** | **Image Compressor (Target KB)** | `/tools/image-compressor` | Exact target KB (20KB, 50KB, 100KB), auto dimension scaling, explanation |
| **Image** | **JPG to PNG Converter** | `/tools/jpg-to-png` | JPG to PNG, PNG to JPG (custom bg fill), WebP conversion |
| **Calculator** | **Age Calculator** | `/tools/age-calculator` | Exact age (Y/M/D), cutoff dates for UPSC/SSC, birthday countdown |
| **Calculator** | **Percentage Calculator** | `/tools/percentage-calculator` | Marks % (X out of Y), X% of Y (GST), % increase/decrease |
| **Calculator** | **Discount & GST Calculator** | `/tools/discount-calculator` | % or flat discount, Indian GST slabs (5%, 12%, 18%, 28%), itemized bill |

---

## 💻 Tech Stack

- **Framework**: [Astro](https://astro.build/) (Static Site Generation `output: 'static'`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **PDF Manipulation**: [pdf-lib](https://pdf-lib.js.org/) (Client-side memory)
- **PDF Rendering**: [PDF.js](https://mozilla.github.io/pdf.js/)
- **Image Manipulation**: HTML5 Canvas 2D API
- **Language**: TypeScript (Strict Mode)
- **Hosting**: Vercel Free Tier (Global Edge CDN)

---

## 🏃 Local Development

### Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

### Getting Started

```bash
# 1. Clone repository or navigate to project folder
cd easy-utility-india

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Visit `http://localhost:4321` in your browser.

---

## 📦 Production Build

```bash
# Build static production assets to /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Free Deployment to Vercel

### Option 1: Vercel CLI (Recommended)
```bash
# 1. Install Vercel CLI globally
npm i -g vercel

# 2. Deploy directly from the project root
vercel

# 3. Deploy to production
vercel --prod
```

### Option 2: GitHub + Vercel Dashboard (Continuous Deployment)
1. Initialize a Git repository and commit your files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Easy Utility India"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Push your repository:
   ```bash
   git remote add origin https://github.com/<your-username>/easy-utility-india.git
   git branch -M main
   git push -u origin main
   ```
4. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
5. Import your GitHub repository `easy-utility-india`.
6. Framework Preset will automatically detect **Astro**.
7. Click **Deploy**. Vercel will build and serve your site globally on a free `*.vercel.app` domain with automatic HTTPS.

---

## 📢 Google AdSense Integration

The project includes modular ad slots (`src/components/common/AdSenseSlot.astro`).
By default, ads are completely disabled (`enabled: false`) to comply with Google policies until your site is reviewed and approved.

When your AdSense publisher account is ready:
1. Open `src/config/site.ts`.
2. Update the configuration:
   ```ts
   adsense: {
     enabled: true,
     client: 'ca-pub-XXXXXXXXXXXXXXXX', // Your approved AdSense publisher ID
   }
   ```
3. Re-deploy. Reusable responsive ad units will automatically activate in designated non-intrusive content slots.

---

## 📄 License

This project is licensed under the MIT License.
