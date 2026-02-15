import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';

export const AboutIntro: React.FC = () => {
  return (
    <section className="bg-white py-10 md:py-14">
      <Container>
        <div className="grid md:grid-cols-[380px_1fr] gap-8 md:gap-12 items-center">
          <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-[30px] overflow-hidden mx-auto md:mx-0">
            <Image src="/figma/who-we-are-photo.png" alt="" fill className="object-cover" />
            <div className="absolute inset-0 rounded-[30px] border-[5px] border-[#df2202] bg-[#012e6d]/35" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-[20px] border-[5px] border-[#df2202] px-6 py-4 bg-transparent">
                <div className="text-white font-extrabold text-[32px] md:text-[40px] leading-[44px] md:leading-[52px] text-center" style={{ textShadow: '0px 4px 60px rgba(0,0,0,0.25)' }}>
                  <div>Who</div>
                  <div>we</div>
                  <div>are</div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:text-right">
            <p className="text-[#012e6d] text-[16px] md:text-[22px] lg:text-[26px] leading-[30px] md:leading-[36px] max-w-[610px] mx-auto md:ml-auto">
              Jaspa Microfinance Bank is a licensed Nigerian microfinance institution focused on financial inclusion. We provide simple, reliable, and affordable banking solutions that empower individuals and businesses. With CBN approval and NDIC insurance, our customers bank with confidence.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
