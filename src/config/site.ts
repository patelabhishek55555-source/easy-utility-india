export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  country: string;
  adsense: {
    enabled: boolean;
    client: string;
  };
  navLinks: { name: string; href: string }[];
  footerLinks: {
    tools: { name: string; href: string }[];
    company: { name: string; href: string }[];
    legal: { name: string; href: string }[];
  };
}

export const siteConfig: SiteConfig = {
  name: 'Easy Utility India',
  tagline: 'Free Online Tools for Everyday Needs',
  description:
    'Free, fast, and 100% private online tools for India. Compress photos to 20KB/50KB for UPSC & SSC, merge PDFs, and calculate age & GST. No server uploads.',
  url: 'https://easy-utility-india.vercel.app',
  locale: 'en_IN',
  country: 'India',
  adsense: {
    enabled: false, // Remains disabled until verified AdSense publisher ID is provided
    client: '',
  },
  navLinks: [
    { name: 'Home', href: '/' },
    { name: 'All Tools', href: '/tools' },
    { name: 'PDF Tools', href: '/tools#pdf-tools' },
    { name: 'Image Tools', href: '/tools#image-tools' },
    { name: 'Calculators', href: '/tools#calculators' },
    { name: 'About', href: '/about' },
  ],
  footerLinks: {
    tools: [
      { name: 'Image Compressor (Target KB)', href: '/tools/image-compressor' },
      { name: 'Image to PDF Converter', href: '/tools/image-to-pdf' },
      { name: 'Merge PDF Documents', href: '/tools/merge-pdf' },
      { name: 'Split PDF Pages', href: '/tools/split-pdf' },
      { name: 'PDF Preview & Viewer', href: '/tools/pdf-preview' },
      { name: 'Image Resizer', href: '/tools/image-resizer' },
      { name: 'JPG to PNG Converter', href: '/tools/jpg-to-png' },
      { name: 'Age Calculator', href: '/tools/age-calculator' },
      { name: 'Percentage Calculator', href: '/tools/percentage-calculator' },
      { name: 'Discount & GST Calculator', href: '/tools/discount-calculator' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms & Conditions', href: '/terms' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ],
  },
};
