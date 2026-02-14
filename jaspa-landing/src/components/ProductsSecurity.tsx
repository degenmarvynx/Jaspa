import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from './ui/Container';
import { ImageWithFallback } from './ui/ImageWithFallback';

const IconPerson = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="4" fill="#ffffff" />
    <rect x="4" y="14" width="16" height="8" rx="4" fill="#ffffff" />
  </svg>
);

const IconBriefcase = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
    <rect x="3" y="8" width="18" height="12" rx="2" stroke="#ffffff" strokeWidth="2" />
    <rect x="8" y="5" width="8" height="3" rx="1" stroke="#ffffff" strokeWidth="2" />
    <line x1="3" y1="12" x2="21" y2="12" stroke="#ffffff" strokeWidth="2" />
  </svg>
);

const IconServices = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="5" stroke="#ffffff" strokeWidth="2" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="#ffffff" strokeWidth="2" />
    <circle cx="6" cy="6" r="2" fill="#ffffff" />
    <circle cx="18" cy="6" r="2" fill="#ffffff" />
    <circle cx="6" cy="18" r="2" fill="#ffffff" />
  </svg>
);

export const ProductsSecurity: React.FC = () => {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute -left-[420px] bottom-[-420px] w-[900px] h-[900px] rounded-full border-[40px] border-[#df2202] pointer-events-none z-0" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start relative z-10">
          <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-[30px] border-[5px] border-[#df2202] overflow-hidden">
            <ImageWithFallback src="/figma/screenshot_1334_1237.png" alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-[#012e6d]/30 rounded-[30px]" />
          </div>
          <div className="max-w-[637px]">
            <h3 className="text-[#044ea4] font-extrabold text-[32px] md:text-[44px] leading-[1.1] text-right">
              Uncompromising
              <br />
              Security
            </h3>
            <p className="mt-6 text-right text-[#012e6d] text-[16px] md:text-[22px] leading-[26px] md:leading-[35px]">
              Security is at the core of Jaspa’s technology. Our fraud-prevention framework uses multi-layer detection systems that identify and block suspicious activity before it happens. We employ bank-grade encryption, regular security audits, and intelligent monitoring to ensure that customers’ funds and data remain fully protected.
            </p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-1 relative z-10">
          <div className="bg-[#044ea4] rounded-[20px] w-[260px] h-[340px] p-5 text-white text-center mx-auto flex flex-col">
            <div className="mx-auto -mt-10 mb-4 w-[56px] h-[56px] rounded-[10px] bg-[#df2202] flex items-center justify-center">
              <Image src="/figma/screenshot_853_370.png" alt="" width={36} height={36} className="object-contain" />
            </div>
            <div className="flex-1 grid place-items-center gap-3">
              <h4 className="font-semibold text-[20px] md:text-[22px] leading-[1.15] text-center w-[204px]">
                Personal
                <br />
                Banking
                <br />
                Products
              </h4>
              <p className="text-white/90 text-[14px] md:text-[16px] leading-[22px] text-center max-w-[220px]">
                Manage your money effortlessly with Jaspa’s personal banking products.
              </p>
            </div>
            <Link href="/#personal" className="mt-auto bg-[#df2202] text-white rounded-[8px] px-5 py-3">
              Learn More
            </Link>
          </div>
          <div className="bg-[#044ea4] rounded-[20px] w-[260px] h-[340px] p-5 text-white text-center mx-auto flex flex-col">
            <div className="mx-auto -mt-10 mb-4 w-[56px] h-[56px] rounded-[10px] bg-[#df2202] flex items-center justify-center">
              <Image src="/figma/screenshot_853_371.png" alt="" width={36} height={36} className="object-contain" />
            </div>
            <div className="flex-1 grid place-items-center gap-3">
              <h4 className="font-semibold text-[20px] md:text-[22px] leading-[1.15] text-center w-[204px]">
                Business
                <br />
                Banking
                <br />
                Products
              </h4>
              <p className="text-white/90 text-[14px] md:text-[16px] leading-[22px] text-center max-w-[220px]">
                Empower your business with reliable banking solutions designed to help you grow.
              </p>
            </div>
            <Link href="/#business" className="mt-auto bg-[#df2202] text-white rounded-[8px] px-5 py-3">
              Learn More
            </Link>
          </div>
          <div className="bg-[#044ea4] rounded-[20px] w-[260px] h-[340px] p-5 text-white text-center mx-auto flex flex-col">
            <div className="mx-auto -mt-10 mb-4 w-[56px] h-[56px] rounded-[10px] bg-[#df2202] flex items-center justify-center">
              <Image src="/figma/screenshot_853_373.png" alt="" width={36} height={36} className="object-contain" />
            </div>
            <div className="flex-1 grid place-items-center gap-3">
              <h4 className="font-semibold text-[20px] md:text-[22px] leading-[1.15] text-center w-[193px]">
                Our
                <br />
                Banking
                <br />
                Services
              </h4>
              <p className="text-white/90 text-[14px] md:text-[16px] leading-[22px] text-center max-w-[220px]">
                Access comprehensive banking services built for your convenience, and trust.
              </p>
            </div>
            <Link href="/#services" className="mt-auto bg-[#df2202] text-white rounded-[8px] px-5 py-3">
              Learn More
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
