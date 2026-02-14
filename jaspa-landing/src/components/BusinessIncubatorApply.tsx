import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';
import { ImageWithFallback } from './ui/ImageWithFallback';

const Circle: React.FC<{ number: string }> = ({ number }) => {
  return (
    <div className="w-[64px] h-[64px] rounded-full bg-[#87b6ed] flex items-center justify-center shadow-[0_4px_10px_#00000040]">
      <span className="text-[#012e6d] font-semibold text-[32px] leading-[40px]">{number}</span>
    </div>
  );
};

export const BusinessIncubatorApply: React.FC = () => {
  return (
    <section aria-labelledby="apply-steps-heading" className="relative overflow-hidden py-12 md:py-16 lg:py-20 bg-[#044ea4]">
      <div className="absolute inset-0 pointer-events-none">
        <ImageWithFallback
          src="/figma/group-480.png"
          alt=""
          fill
          className="object-cover opacity-25"
          fallbackClassName="w-full h-full bg-dotted-pattern bg-dotted-md opacity-25"
          priority
        />
      </div>
      <Container>
        <div className="relative z-10">
          <h2 id="apply-steps-heading" className="text-center text-white font-bold text-[22px] md:text-[26px] lg:text-[28px]">
            How To Apply
          </h2>
          <div className="mt-8 md:mt-10 lg:mt-12">
            {/* Desktop: circles and connectors on a single track */}
            <div className="hidden md:block">
              <div className="grid grid-cols-[64px_1fr_64px_1fr_64px_1fr_64px] grid-rows-[64px_auto] items-center">
                <div className="col-[1] row-[1] justify-self-center"><Circle number="1" /></div>
                <div className="col-[2] row-[1] h-[2px] bg-white/60 self-center" aria-hidden="true" />
                <div className="col-[3] row-[1] justify-self-center"><Circle number="2" /></div>
                <div className="col-[4] row-[1] h-[2px] bg-white/60 self-center" aria-hidden="true" />
                <div className="col-[5] row-[1] justify-self-center"><Circle number="3" /></div>
                <div className="col-[6] row-[1] h-[2px] bg-white/60 self-center" aria-hidden="true" />
                <div className="col-[7] row-[1] justify-self-center"><Circle number="4" /></div>
                
                <div className="col-[1] row-[2] justify-self-center mt-3 text-center text-white text-[16px] font-medium leading-[24px]" style={{ textShadow: '0px 4px 4px #00000040' }}>
                  <span>Submit</span><br /><span>Application</span>
                </div>
                <div className="col-[3] row-[2] justify-self-center mt-3 text-center text-white text-[16px] font-medium leading-[24px]" style={{ textShadow: '0px 4px 4px #00000040' }}>
                  <span>Screening</span>
                </div>
                <div className="col-[5] row-[2] justify-self-center mt-3 text-center text-white text-[16px] font-medium leading-[24px]" style={{ textShadow: '0px 4px 4px #00000040' }}>
                  <span>Pitch</span><br /><span>Session</span>
                </div>
                <div className="col-[7] row-[2] justify-self-center mt-3 text-center text-white text-[16px] font-medium leading-[24px]" style={{ textShadow: '0px 4px 4px #00000040' }}>
                  <span>Acceptance &</span><br /><span>Onboarding</span>
                </div>
              </div>
            </div>

            {/* Mobile: stacked two-by-two without connectors */}
            <div className="md:hidden grid grid-cols-2 gap-8">
              <div className="flex flex-col items-center">
                <Circle number="1" />
                <div className="mt-3 text-center text-white text-[14px] leading-[22px] font-medium">
                  <span>Submit</span><br /><span>Application</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Circle number="2" />
                <div className="mt-3 text-center text-white text-[14px] leading-[22px] font-medium">
                  <span>Screening</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Circle number="3" />
                <div className="mt-3 text-center text-white text-[14px] leading-[22px] font-medium">
                  <span>Pitch</span><br /><span>Session</span>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Circle number="4" />
                <div className="mt-3 text-center text-white text-[14px] leading-[22px] font-medium">
                  <span>Acceptance &</span><br /><span>Onboarding</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
