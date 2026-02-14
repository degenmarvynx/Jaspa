import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';

const ImpactCard: React.FC<{ number: string; title: string; body: string }> = ({ number, title, body }) => {
  return (
    <div className="rounded-[20px] bg-white w-full max-w-[280px] md:max-w-[400px] min-h-[200px] md:min-h-[240px] shadow-[0_4px_20px_#00000030] px-5 py-5 md:px-6 md:py-6">
      <div className="text-[#044ea4] font-bold text-[22px] md:text-[30px]">{number}</div>
      <div className="mt-2 text-[#044ea4] font-bold text-[14px] md:text-[18px] leading-[20px] md:leading-[23px]">
        {title}
      </div>
      <div className="mt-3 text-[#012e6d] text-[12px] md:text-[16px] leading-[18px] md:leading-[22px]">
        {body}
      </div>
    </div>
  );
};

export const CSRImpact: React.FC = () => {
  return (
    <section className="relative bg-[#044ea4] py-12 md:py-16 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[200px] md:h-[344px] opacity-30 pointer-events-none">
        <Image src="/figma/csr-dots-top.png" alt="" fill className="object-cover" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[200px] md:h-[344px] opacity-30 pointer-events-none">
        <Image src="/figma/csr-dots-bottom.png" alt="" fill className="object-cover" />
      </div>
      <Container>
        <div className="relative z-10">
          <h2 className="text-center text-white font-extrabold text-[26px] md:text-[40px]">Our Impact</h2>
          <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8 justify-items-center">
            <ImpactCard
              number="2500+"
              title="People Reached Through Financial Literacy"
              body="Delivering practical financial education through workshops and community programs."
            />
            <ImpactCard
              number="₦8M+"
              title="in Community Micro-Loans"
              body="Providing accessible small-ticket credit to micro-businesses and traders."
            />
            <ImpactCard
              number="120+"
              title="Youth Entrepreneurs Supported"
              body="Offering mentorship, business tools, and market access to emerging founders."
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
