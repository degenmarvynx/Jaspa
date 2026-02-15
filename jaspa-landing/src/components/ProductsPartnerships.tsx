import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container } from './ui/Container';

export const ProductsPartnerships: React.FC = () => {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image (mobile second, desktop first) */}
          <div className="relative order-2 md:order-1 flex justify-center">
            <div className="hidden md:block absolute -left-[400px] -top-[400px] md:-left-[400px] md:-top-[400px] w-[800px] h-[800px] rounded-full border-[40px] border-[#df2202] pointer-events-none z-0" />
            <div className="relative z-10 w-[300px] h-[300px] md:w-[440px] md:h-[440px] rounded-[30px] border-[5px] border-[#df2202] overflow-hidden">
              <Image src="/figma/screenshot_1357_1427.png" alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-[#012e6d]/30 rounded-[30px]" />
            </div>
          </div>
          {/* Text (mobile first, desktop second) */}
          <div className="order-1 md:order-2 max-w-[600px] md:h-[440px] flex flex-col justify-center">
            <h3 className="text-[#044ea4] font-extrabold text-[28px] md:text-[40px] leading-[1.15] text-center md:text-right">
              Partnerships
              <br />&amp; Referrals
            </h3>
            <p className="mt-4 text-left md:text-right text-[#012e6d] text-[14px] md:text-[18px] leading-[24px] md:leading-[30px]">
              Jaspa collaborates with Nigerian businesses through integration programs and strategic partnerships.
              Businesses can embed Jaspa’s services into their operations to expand their offerings and reach new customers.
              <br />
              <br />
              Existing Jaspa customers can also refer friends or businesses and earn rewards when their referrals sign up and start transacting.
            </p>
            <div className="mt-5 flex justify-start md:justify-end">
              <Link href="/download" className="inline-flex items-center justify-between gap-4 bg-[#df2202] text-white rounded-[8px] px-5 py-3">
                <span className="font-semibold text-[14px] md:text-[18px]">Refer Now in the App</span>
                <svg width="66" height="16" viewBox="0 0 66 16" xmlns="http://www.w3.org/2000/svg" className="h-[16px] w-[66px]">
                  <line x1="2" y1="8" x2="60" y2="8" stroke="#ffffff" strokeWidth="2" />
                  <polyline points="52,2 60,8 52,14" fill="none" stroke="#ffffff" strokeWidth="2" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
