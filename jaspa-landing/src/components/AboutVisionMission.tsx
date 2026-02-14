import React from 'react';
import { Container } from './ui/Container';

export const AboutVisionMission: React.FC = () => {
  return (
    <section className="bg-[#f5f5f5] py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center justify-items-center">
          <div className="text-center">
            <h3 className="text-[#044ea4] font-extrabold text-[30px] md:text-[44px] leading-tight">Vision</h3>
            <p className="mt-3 text-[#012e6d] text-[16px] md:text-[20px] leading-[30px] max-w-[450px] mx-auto">
              To be Nigeria’s most trusted microfinance partner, creating opportunities and building stronger communities.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="w-[12px] md:w-[15px] h-[220px] md:h-[320px] bg-[#df2202] rounded-[100px]" aria-hidden="true" />
          </div>
          <div className="text-center">
            <h3 className="text-[#044ea4] font-extrabold text-[30px] md:text-[44px] leading-tight">Mission</h3>
            <p className="mt-3 text-[#012e6d] text-[16px] md:text-[20px] leading-[30px] max-w-[450px] mx-auto">
              To empower individuals and businesses with innovative financial solutions that foster growth and stability.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
