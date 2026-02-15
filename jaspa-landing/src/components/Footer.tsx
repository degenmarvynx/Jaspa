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
                <h3 className="text-xl font-extrabold leading-[24px] md:leading-[32px] whitespace-nowrap pb-2">{footerSections[1].title}</h3>
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
                  <h3 className="text-2xl font-extrabold leading-[32px] whitespace-nowrap pb-5">{section.title}</h3>
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <Image src="/figma/get-badges-original.png" alt="Get it on Google Play and App Store" width={340} height={70} />
            <div className="flex flex-col items-start">
              <h3 className="text-base font-semibold mb-3 text-left">Connect With Us</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
                  <Image src="/figma/icon-whatsapp.png" alt="WhatsApp" width={24} height={24} />
                </div>
                <div className="w-12 h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
                  <Image src="/figma/icon-instagram.png" alt="Instagram" width={24} height={24} />
                </div>
                <div className="w-12 h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
                  <Image src="/figma/icon-facebook.png" alt="Facebook" width={14} height={14} />
                </div>
                <div className="w-12 h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
                  <Image src="/figma/icon-linkedin.png" alt="LinkedIn" width={24} height={24} />
                </div>
                <div className="w-12 h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
                  <Image src="/figma/icon-x.png" alt="X" width={24} height={22} />
                </div>
                <div className="w-12 h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
                  <Image src="/figma/icon-tiktok.png" alt="TikTok" width={22} height={24} />
                </div>
                <div className="w-12 h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
                  <Image src="/figma/icon-youtube.png" alt="YouTube" width={24} height={18} />
                </div>
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
