'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './ui/Container';
import { MobileMenu, MobileMenuPanel } from './ui/MobileMenu';
import { PillButton } from './ui/PillButton';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState<'personal' | 'business' | 'none'>('none');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products & Services' },
    { href: '/resources', label: 'Resources' },
    { href: '/contact', label: 'Contact Us' },
  ];

  useEffect(() => {
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
    if (pathname.startsWith('/business')) setActiveSegment('business');
    else if (pathname === '/' || pathname.startsWith('/personal')) setActiveSegment('personal');
    else setActiveSegment('none');
    const setFromHash = () => {
      const hash = typeof window !== 'undefined' ? window.location.hash : '';
      if (hash === '#business') setActiveSegment('business');
      else if (hash === '#personal') setActiveSegment('personal');
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('hashchange', setFromHash);
      return () => window.removeEventListener('hashchange', setFromHash);
    }
  }, []);

  return (
    <header className="bg-[#044ea4] shadow-none fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <Container>
        {/* Mobile Bar */}
        <div className="md:hidden grid grid-cols-3 items-center py-2">
          <div className="pl-2">
            <Link href="/" className="flex flex-col items-start gap-1">
              <Image src="/figma/jaspa-logo.png" alt="JASPA" width={80} height={30} priority />
              <span className="text-white text-[8px] italic">Bank Smart. Live Free.</span>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-3 ml-2">
            <PillButton
              label="Personal"
              href="/"
              active={activeSegment === 'personal'}
              variant={activeSegment === 'personal' ? 'light' : 'muted'}
              onClick={() => setActiveSegment('personal')}
            />
            <PillButton
              label="Business"
              href="/business"
              active={activeSegment === 'business'}
              variant={activeSegment === 'business' ? 'light' : 'muted'}
              onClick={() => setActiveSegment('business')}
            />
          </div>
          <div className="flex items-center justify-end pr-2">
            <MobileMenu isOpen={isMenuOpen} onToggle={toggleMenu} />
          </div>
        </div>

        {/* Desktop Bar */}
        <div className="hidden md:flex items-center justify-between py-5">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start gap-1">
            <Image src="/figma/jaspa-logo.png" alt="JASPA" width={172} height={62} priority />
            <span className="text-white text-xs md:text-sm italic">Bank Smart. Live Free.</span>
          </Link>

          {/* Desktop Buttons between logo and nav */}
          <div className="hidden md:flex items-center gap-4 ml-8 lg:ml-12 mr-8 lg:mr-12">
            <PillButton label="Personal" href="/" active={activeSegment==='personal'} variant={activeSegment==='personal' ? 'light' : 'muted'} onClick={()=>setActiveSegment('personal')} />
            <PillButton label="Business" href="/business" active={activeSegment==='business'} variant={activeSegment==='business' ? 'light' : 'muted'} onClick={()=>setActiveSegment('business')} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => {
              const pathname = usePathname();
              const isAboutActive = pathname.startsWith('/about') || pathname.startsWith('/csr') || pathname.startsWith('/legal');
              const isProductsActive = pathname.startsWith('/products');
              const isResourcesActive = pathname.startsWith('/resources');
              const isContactActive = pathname.startsWith('/contact');
              const underlineClass =
                (item.href === '/about' && isAboutActive) ||
                (item.href === '/products' && isProductsActive) ||
                (item.href === '/resources' && isResourcesActive) ||
                (item.href === '/contact' && isContactActive)
                  ? 'underline'
                  : '';
              return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white font-semibold hover:underline underline-offset-4 ${underlineClass}`}
              >
                {item.label}
              </Link>
            )})}
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <MobileMenuPanel isOpen={isMenuOpen}>
          <div className="bg-jaspa-blue border-t border-blue-800 transition-all duration-300">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-white hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </MobileMenuPanel>
      </Container>
    </header>
  );
};
