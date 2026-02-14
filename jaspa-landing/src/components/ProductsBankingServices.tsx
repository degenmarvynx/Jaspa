import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';

export const ProductsBankingServices: React.FC = () => {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-[#044ea4]">
      <Image
        src="/figma/screenshot_865_468.png"
        alt=""
        width={629}
        height={417}
        className="hidden md:block absolute left-0 top-0 h-full w-auto"
      />
      <Image
        src="/figma/screenshot_865_469.png"
        alt=""
        width={630}
        height={417}
        className="hidden md:block absolute right-0 top-0 h-full w-auto"
      />
      <Container>
        <h3 className="text-center text-white font-extrabold text-[32px] md:text-[40px]">
          Banking Services
        </h3>
        <div className="relative mx-auto mt-8 max-w-[1024px]">
          <div
            className="absolute inset-0 rounded-[15px]"
            style={{ transform: 'rotate(-5deg)', background: '#012e6d' }}
          />
          <div className="relative rounded-[15px] border-2 border-[#012e6d] bg-white p-6 md:p-10">
            <p className="text-[#012e6d] text-[14px] md:text-[18px] leading-[24px] md:leading-[30px]">
              Included across personal & business:
              <br /> - Debit Cards (usable on all POS)
              <br /> - USSD Banking
              <br /> - International transfers (all currencies & countries)
              <br /> - Mobile App Banking
              <br /> - 24/7 Fraud Detection & Security Layers
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
