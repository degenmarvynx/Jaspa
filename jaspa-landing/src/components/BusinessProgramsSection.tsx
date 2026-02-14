import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import Image from 'next/image';

export const BusinessProgramsSection: React.FC = () => {
  return (
    <section className="bg-white pt-12 pb-16 lg:pt-16 lg:pb-24">
      <Container>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text block (Group 486) */}
          <div className="bg-[#044ea4] rounded-[30px] px-5 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 text-white max-w-[560px]">
            <div className="md:hidden flex items-center justify-between">
              <h3 className="text-white font-extrabold text-[24px] leading-[32px]">Startup Incubator</h3>
              <Image src="/figma/startup-incubator.png" alt="" width={48} height={48} className="rounded-[8px] object-cover" />
            </div>
            <h3 className="hidden md:block text-white font-extrabold text-[28px] md:text-[38px] lg:text-[50px] leading-[48px]">
              Startup
              <br />
              Incubator
            </h3>
            <p className="mt-5 md:mt-10 text-white text-[14px] md:text-[16px] lg:text-[18px] leading-[28px]">
              We provide funding, mentorship, and hands-on business training to help
              Nigerian entrepreneurs grow their ideas into successful, sustainable
              businesses.
            </p>
            <div className="mt-6 md:mt-10">
              <Button
                href="/business/startup-incubator"
                ariaLabel="Learn more about Startup Incubator"
                className="px-[40px] py-[18px]"
                size="lg"
                variant="primary"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Image block (Group 467) */}
          <div className="hidden md:flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] rounded-[30px] border-[5px] border-[#df2202] overflow-hidden">
              <Image
                src="/figma/startup-incubator.png"
                alt="Startup incubator workspace"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-[30px] bg-[#012e6d]/20" />
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-20 lg:mt-29">
          {/* Image block (Group 457) */}
          <div className="hidden md:flex justify-center lg:justify-start">
            <div className="relative w-[300px] h-[300px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] rounded-[30px] border-[5px] border-[#df2202] overflow-hidden">
              <Image
                src="/figma/partner-program.png"
                alt="Partnership program handshake"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-[30px] bg-[#012e6d]/20" />
            </div>
          </div>
          
          {/* Text block (Group 113) */}
          <div className="bg-[#044ea4] rounded-[30px] px-5 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 text-white max-w-[560px] lg:ml-auto text-right">
            <div className="md:hidden flex items-center justify-between">
              <Image src="/figma/partner-program.png" alt="" width={48} height={48} className="rounded-[8px] object-cover order-1" />
              <h3 className="order-2 text-white font-extrabold text-[24px] leading-[32px]">Partnership Program</h3>
            </div>
            <h3 className="hidden md:block text-white font-extrabold text-[32px] md:text-[44px] lg:text-[56px] leading-[54px]">
              Partnership
              <br />
              Program
            </h3>
            <p className="mt-5 md:mt-10 text-white text-[16px] md:text-[18px] lg:text-[20px] leading-[30px]">
              The Partnership Program invites cooperatives, NGOs, and organizations to collaborate with Jaspa in order to receive tailored financial solutions that drive community and business success.
            </p>
            <div className="mt-6 md:mt-10 flex justify-end">
              <Button
                href="#partners"
                ariaLabel="Learn more about Partnership Program"
                className="px-[40px] py-[18px]"
                size="lg"
                variant="primary"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-16 lg:mt-24">
          {/* Text block (Group 117) */}
          <div className="bg-[#044ea4] rounded-[30px] px-5 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 text-white max-w-[560px]">
            <div className="md:hidden flex items-center justify-between">
              <h3 className="text-white font-extrabold text-[24px] leading-[32px]">Referral Program</h3>
              <Image src="/figma/referral-program.png" alt="" width={48} height={48} className="rounded-[8px] object-cover" />
            </div>
            <h3 className="hidden md:block text-white font-extrabold text-[32px] md:text-[44px] lg:text-[56px] leading-[54px]">
              Referral
              <br />
              Program
            </h3>
            <p className="mt-5 md:mt-10 text-white text-[16px] md:text-[18px] lg:text-[20px] leading-[30px]">
              Refer other businesses to Jaspa, and earn rewards. Get exclusive bonuses when they open an account and start transacting.
            </p>
            <div className="mt-6 md:mt-10">
              <Button
                href="/download"
                ariaLabel="Refer Now in the App"
                variant="primary"
                size="md"
                className="w-full md:w-auto md:min-w-[424px] h-[56px] md:h-[71px] rounded-[10px] text-[16px] md:text-[22px] lg:text-[25px] font-semibold px-4 md:px-[35px] py-3 md:py-[21px]"
                rightIcon={
                  <svg width="66" height="12" viewBox="0 0 66 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <line x1="0" y1="6" x2="58" y2="6" stroke="white" strokeWidth="2" />
                    <path d="M58 1 L66 6 L58 11 Z" fill="white" />
                  </svg>
                }
              >
                Refer Now in the App
              </Button>
            </div>
          </div>
          {/* Image block (Group 458) */}
          <div className="hidden md:flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] md:w-[460px] md:h-[460px] lg:w-[520px] lg:h-[520px] rounded-[30px] border-[5px] border-[#df2202] overflow-hidden">
              <Image
                src="/figma/referral-program.png"
                alt="Referral program group"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-[30px] bg-[#012e6d]/30" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
