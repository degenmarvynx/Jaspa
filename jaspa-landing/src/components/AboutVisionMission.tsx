import React from 'react';
import { Container } from './ui/Container';

export const AboutVisionMission: React.FC = () => {
  return (
    <section className="bg-[#f5f5f5] py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-center justify-items-center">
          <div className="text-center px-3">
            <h3 className="text-[#044ea4] font-extrabold text-[26px] md:text-[44px] leading-[1.1]">Vision</h3>
            <p className="mt-2 md:mt-3 text-[#012e6d] text-[15px] md:text-[20px] leading-[24px] md:leading-[30px] max-w-[360px] md:max-w-[450px] mx-auto">
              To be Nigeria’s most trusted microfinance partner, creating opportunities and building stronger communities.
            </p>
          </div>
          <div className="flex justify-center w-full">
            <div
              className="bg-[#df2202] rounded-[100px] w-full h-[10px] md:w-[15px] md:h-[320px]"
              aria-hidden="true"
              style={{ maxWidth: '520px' }}
            />
          </div>
          <div className="text-center px-3">
            <h3 className="text-[#044ea4] font-extrabold text-[26px] md:text-[44px] leading-[1.1]">Mission</h3>
            <p className="mt-2 md:mt-3 text-[#012e6d] text-[15px] md:text-[20px] leading-[24px] md:leading-[30px] max-w-[360px] md:max-w-[450px] mx-auto">
              To empower individuals and businesses with innovative financial solutions that foster growth and stability.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
