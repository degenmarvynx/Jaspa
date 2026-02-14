import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';

export const AboutCSR: React.FC = () => {
  return (
    <section className="relative min-h-[420px] md:min-h-[781px]">
      <div className="absolute inset-0">
        <Image src="/figma/csr-bg.png" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#012e6d]/30" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full bg-[#044ea4]/50 z-10 py-10 md:py-16">
        <Container className="h-full">
          <div className="flex items-center">
            <div className="mx-auto w-full max-w-[1196px]">
              <h2 className="text-white font-extrabold text-[32px] md:text-[54px] leading-[1.1]">
                Corporate Social
                <br />
                Responsibility (CSR)
              </h2>
              <p className="mt-6 text-white text-[16px] md:text-[22px] leading-[32px]">
                Jaspa is committed to meaningful impact — driving financial inclusion, empowering small
                businesses, advancing financial literacy, and supporting sustainable community development.
              </p>
              <div className="mt-8">
                <a
                  href="/csr"
                  className="inline-flex items-center justify-between gap-4 rounded-[8px] bg-[#df2202] px-6 md:px-8 py-4 md:py-[23px] min-w-[260px] md:min-w-[424px] h-[52px] md:h-[71px] text-white text-[16px] md:text-[25px] font-semibold"
                  aria-label="Explore our Initiatives"
                >
                  <span>Explore our Initiatives</span>
                  <svg width="66" height="12" viewBox="0 0 66 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <line x1="0" y1="6" x2="58" y2="6" stroke="white" strokeWidth="2" />
                    <path d="M58 1 L66 6 L58 11 Z" fill="white" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
