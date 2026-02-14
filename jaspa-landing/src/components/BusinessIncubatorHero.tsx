import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';

export const BusinessIncubatorHero: React.FC = () => {
  return (
    <section aria-labelledby="incubator-hero-heading" className="relative overflow-hidden min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <Image src="/figma/startup-wide-1.png" alt="" fill className="object-cover" priority />
        <Image src="/figma/rectangle-188.png" alt="" fill className="object-cover opacity-40 mix-blend-multiply" />
      </div>
      <Container full>
        <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8 py-12 md:py-24">
          <div className="text-white">
            <h1 id="incubator-hero-heading" className="font-extrabold text-[42px] md:text-[64px] lg:text-[80px] leading-[1.05]">
              JASPA
              <br />
              Startup
              <br />
              Incubator
            </h1>
            <p className="mt-4 md:mt-6 text-white text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] max-w-[560px]" style={{ textShadow: '0px 4px 20px rgba(0,0,0,0.25)' }}>
              With access to startup funding, one-on-one mentorship, and structured business training, we empower Nigerian founders to transform their ideas into real, thriving businesses built for long-term growth.
            </p>
          </div>
          <div className="flex lg:justify-end">
            <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px] lg:w-[380px] lg:h-[380px] rounded-[20px] bg-[#87b6ed] shadow-[0_4px_20px_0_#00000040]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#87b6ed] px-4 py-1 rounded-t-[12px] text-[#012e6d] font-bold text-sm">
                over
              </div>
              <div className="flex flex-col h-full p-6 text-[#012e6d]">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[30px]">60</span>
                  <span className="text-[16px]">Startups Funded</span>
                </div>
                <div className="mt-3 h-[4px] w-full rounded-full bg-[#df2202]" />
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-semibold text-[30px]">80%</span>
                  <span className="text-[16px]">Survival Rate</span>
                </div>
                <div className="mt-3 h-[4px] w-full rounded-full bg-[#df2202]" />
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-semibold text-[30px]">20</span>
                  <span className="text-[16px]">Mentors</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
