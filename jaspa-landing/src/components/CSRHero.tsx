import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';

export const CSRHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-[#044ea4] font-extrabold text-[32px] md:text-[48px] leading-[1.1]">
              Corporate Social
              <br />
              Responsibility (CSR)
            </h1>
            <p className="mt-4 text-[#012e6d] text-[16px] md:text-[20px] leading-[32px] max-w-[560px]">
              Jaspa believes banking should improve lives — not just for customers, but for entire communities. Through financial literacy programs, youth mentorship, entrepreneurial support, and inclusive credit access, we enable individuals and small businesses to grow sustainably. Our CSR initiatives drive financial inclusion, empower underserved communities, and support Nigeria’s long-term economic development.
            </p>
          </div>
          <div className="relative flex justify-center md:justify-end">
            <div className="absolute -right-40 -bottom-40 w-[900px] h-[900px] rounded-full border-[40px] border-[#df2202] opacity-80 pointer-events-none -z-10" />
            <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-[30px] border-[5px] border-[#df2202] overflow-hidden">
              <Image src="/figma/csr-portrait.png" alt="" fill className="object-cover" />
              <div className="absolute inset-0 rounded-[30px] bg-[#012e6d]/30" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
