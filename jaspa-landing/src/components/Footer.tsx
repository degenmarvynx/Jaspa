import React from 'react';
import { Container } from './ui/Container';
import Link from 'next/link';
import Image from 'next/image';

interface FooterLink {
  href: string;
  label: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const Footer: React.FC = () => {
  const footerSections: FooterSection[] = [
    {
      title: 'About Us',
      links: [
        { href: '/about', label: 'Vision & Mission' },
        { href: '/csr', label: 'CSR' },
        { href: '/about', label: 'Team' },
        { href: '/legal', label: 'Legal' },
      ]
    },
    {
      title: 'Products & Services',
      links: [
        { href: '/personal', label: 'Personal Account' },
        { href: '/business', label: 'Business Account' },
        { href: '/products', label: 'Debit Cards' },
        { href: '/products', label: 'Loans' },
        { href: '/products', label: 'USSD Banking' },
        { href: '/products', label: 'Mobile App' },
        { href: '/products', label: 'Transfer' },
        { href: '/products', label: 'Payments' },
        { href: '/products', label: 'Point of Sale (POS)' },
        { href: '/products', label: 'Reload (Airtime/Data)' },
        { href: '/products', label: 'Xero Integration (Accounting Services)' },
        { href: '/products', label: 'Payroll' },
        { href: '/business/startup-incubator', label: 'Startup Incubator' },
        { href: '/products', label: 'Partnership Program' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { href: '/resources', label: 'FAQs' },
        { href: '/resources', label: 'Guides' },
        { href: '/resources', label: 'Loan Calculator' },
        { href: '/resources', label: 'Blog' },
      ]
    },
    {
      title: 'Contact Us',
      links: [
        { href: '/contact', label: 'Branch Locations' },
        { href: '/contact', label: 'Customer Support' },
      ]
    }
  ];

  const socialImages = [
    { src: '/figma/icon-whatsapp.png', alt: 'WhatsApp' },
    { src: '/figma/icon-instagram.png', alt: 'Instagram' },
    { src: '/figma/icon-facebook.png', alt: 'Facebook' },
    { src: '/figma/icon-linkedin.png', alt: 'LinkedIn' },
    { src: '/figma/icon-x.png', alt: 'X' },
    { src: '/figma/icon-tiktok.png', alt: 'TikTok' },
    { src: '/figma/icon-youtube.png', alt: 'YouTube' },
  ];

  const legalLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/cookie-policy', label: 'Cookie Policy' },
  ];

  return (
    <footer className="bg-[#044ea4] text-white relative overflow-hidden">
      <Image src="/figma/jaspa-logo-white.png" alt="JASPA watermark" width={901} height={650} className="absolute opacity-30 rotate-[-26deg] right-[-280px] top-[140px] pointer-events-none select-none" />
      
      <Container className="px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="pt-20 pb-24">
          {/* Link columns */}

          {/* Mobile: Left column groups About/Resources/Contact; Right column Products */}
          <div className="md:hidden grid grid-cols-2 gap-6 mb-10 items-start">
            <div className="space-y-8">
              {[footerSections[0], footerSections[2], footerSections[3]].map((section) => (
                <div key={section.title}>
                  <div className="min-h-[56px] md:min-h-[64px] flex items-end">
                    <h3 className="text-xl font-extrabold leading-[24px] md:leading-[32px] whitespace-nowrap pb-2">{section.title}</h3>
                  </div>
                  <ul className="list-none m-0 p-0 pr-0 pl-0 w-full space-y-2">
                    {section.links.map((link) => (
                      <li key={`${link.href}-${link.label}`} className="py-0">
                        <Link
                          href={link.href}
                          className="flex items-center w-full px-0 min-h-[40px] text-[14px] text-white/90 hover:text-white transition-colors duration-200 leading-[22px] break-words whitespace-normal"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              <div className="min-h-[56px] md:min-h-[64px] flex items-end">
                <h3 className="text-xl font-extrabold leading-[24px] md:leading-[32px] whitespace-nowrap pb-2">
                  {footerSections[1].title === 'Products & Services' ? (
                    <>Products &<br />Services</>
                  ) : footerSections[1].title}
                </h3>
              </div>
              <ul className="list-none m-0 p-0 pr-0 pl-0 w-full space-y-2">
                {footerSections[1].links.map((link) => (
                  <li key={`${link.href}-${link.label}`} className="py-0">
                    <Link
                      href={link.href}
                      className="flex items-center w-full px-0 min-h-[40px] text-[14px] text-white/90 hover:text-white transition-colors duration-200 leading-[22px] break-words whitespace-normal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop: original 4 columns */}
          <div className="hidden md:grid grid-cols-4 gap-x-20 gap-y-0 mb-12 items-start">
            {footerSections.map((section) => (
              <div key={section.title}>
                <div className="min-h-[64px] flex items-end">
                  <h3 className="text-2xl font-extrabold leading-[32px] whitespace-nowrap pb-5">
                    {section.title === 'Products & Services' ? (
                      <>Products &<br />Services</>
                    ) : section.title}
                  </h3>
                </div>
                <ul className="list-none m-0 p-0 pr-0 pl-0 w-full space-y-2.5">
                  {section.links.map((link) => (
                    <li key={`${link.href}-${link.label}`} className="py-0">
                      <Link
                        href={link.href}
                        className="flex items-center w-full px-0 min-h-[40px] text-[16px] text-white/90 hover:text-white transition-colors duration-200 leading-[24px] break-words whitespace-normal"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Badges left, Social right */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center gap-6">
            <div className="flex items-center justify-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.jaspa.fintech&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
              >
                <Image src="/figma/screenshot_479_301.png" alt="Get it on Google Play" width={170} height={52} className="rounded-[6px] border border-white/20 bg-white" />
              </a>
              <a
                href="https://apps.apple.com/ng/app/jaspa-nig/id6752602240"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
              >
                <Image src="/figma/screenshot_479_303.png" alt="Download on the App Store" width={170} height={52} className="rounded-[6px] border border-white/20 bg-white" />
              </a>
            </div>
            <div className="flex flex-col items-center md:items-start mx-auto md:mx-0">
              <h3 className="text-base font-semibold mb-3 text-center md:text-left">Connect With Us</h3>
              <div className="flex items-center justify-center gap-2 md:gap-3 mx-auto md:mx-0 px-2">
                <a
                  className="w-9 h-9 md:w-12 md:h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center"
                  href="https://wa.me/2347043424383"
                  aria-label="WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/figma/icon-whatsapp.png" alt="WhatsApp" width={20} height={20} />
                </a>
                <a
                  className="w-9 h-9 md:w-12 md:h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center"
                  href="https://www.instagram.com/jaspa_ng?igsh=MWt1MDJuMjVpa2Z5NA=="
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/figma/icon-instagram.png" alt="Instagram" width={20} height={20} />
                </a>
                <a
                  className="w-9 h-9 md:w-12 md:h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center"
                  href="https://www.facebook.com/share/1A9CQQMxmQ/?mibextid=wwXIfr"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/figma/icon-facebook.png" alt="Facebook" width={18} height={18} />
                </a>
                <a
                  className="w-9 h-9 md:w-12 md:h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center"
                  href="https://www.linkedin.com/company/jaspanig"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/figma/icon-linkedin.png" alt="LinkedIn" width={20} height={20} />
                </a>
                <div
                  className="w-9 h-9 md:w-12 md:h-12 bg-[#df2202] opacity-80 rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center"
                  aria-label="X link coming soon"
                  role="link"
                  aria-disabled="true"
                  title="X link coming soon"
                >
                  <Image src="/figma/icon-x.png" alt="X" width={20} height={18} />
                </div>
                <a
                  className="w-9 h-9 md:w-12 md:h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center"
                  href="https://www.tiktok.com/@jaspa_ng"
                  aria-label="TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/figma/icon-tiktok.png" alt="TikTok" width={18} height={20} />
                </a>
                <a
                  className="w-9 h-9 md:w-12 md:h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center"
                  href="https://youtube.com/@jaspa_ng?si=HknAEA238XfFfZCN"
                  aria-label="YouTube"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/figma/icon-youtube.png" alt="YouTube" width={20} height={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 mb-6 h-[3px] w-full bg-[#df2202]"></div>

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/90 text-sm">
              Copyright © 2025, Jaspa MFB. A Subsidiary of VFD
            </div>
            
            <div className="flex flex-wrap gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/90 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            
            
          </div>
        </div>
      </Container>
    </footer>
  );
};
