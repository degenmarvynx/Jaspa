import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#044ea4',
};

export const metadata: Metadata = {
  title: 'Jaspa MFB - Bank Smart. Live Free.',
  description: 'Jaspa Microfinance Bank provides secure savings, flexible loans, and digital banking solutions. Join thousands of Nigerians banking the smart way.',
  keywords: 'microfinance, banking, savings, loans, digital banking, Nigeria, Jaspa',
  icons: {
    icon: '/figma/jaspa-logo.png',
    shortcut: '/figma/jaspa-logo.png',
    apple: '/figma/jaspa-logo.png',
  },
  openGraph: {
    title: 'Jaspa MFB - Bank Smart. Live Free.',
    description: 'Secure savings, flexible loans, and digital banking solutions for Nigerians.',
    type: 'website',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaspa MFB - Bank Smart. Live Free.',
    description: 'Secure savings, flexible loans, and digital banking solutions for Nigerians.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
