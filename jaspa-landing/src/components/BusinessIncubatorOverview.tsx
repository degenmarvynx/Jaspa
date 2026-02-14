import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';

const IconPill: React.FC<{ icon: string; label: string }> = ({ icon, label }) => (
  <div className="inline-flex items-center gap-3 bg-white rounded-[12px] shadow-[0_4px_10px_0_#00000030] px-5 py-3">
    <Image src={icon} alt="" width={40} height={40} />
    <span className="text-[#012e6d] font-semibold">{label}</span>
  </div>
);

const TextPill: React.FC<{ label: string }> = ({ label }) => (
  <div className="inline-flex items-center justify-center bg-white rounded-[10px] border border-[#e5e7eb] shadow-[0_4px_10px_0_#00000030] px-5 py-3 min-w-[180px] h-[50px]">
    <span className="text-[#012e6d] text-[14px] font-semibold">{label}</span>
  </div>
);

export const BusinessIncubatorOverview: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-16 lg:py-20 bg-white">
      {/* Red circle background behind content */}
      <div className="pointer-events-none absolute -left-64 top-6 w-[900px] h-[900px] md:w-[1100px] md:h-[1100px] z-0">
        <Image src="/figma/ellipse-1.png" alt="" fill className="object-contain" />
      </div>

      <Container className="relative z-10">
        {/* Intro */}
        <p className="text-center text-[#012e6d] max-w-3xl mx-auto">
          Our Startup incubator supports early-stage entrepreneurs in Nigeria with funding, business training, expert mentorship, and access to our microfinance resources.
        </p>

       {/* Funding / Training / Mentorship */}
        <div className="mt-8 flex justify-center gap-4 md:gap-6">
          <IconPill icon="/figma/funding-icon.png" label="Funding" />
          <IconPill icon="/figma/training-icon.png" label="Training" />
          <IconPill icon="/figma/mentorship-icon.png" label="Mentorship" />
        </div>

        {/* Who it's for */}
        <h3 className="mt-10 text-[#044ea4] font-extrabold text-xl md:text-2xl lg:text-3xl pl-12">Who it’s for</h3>
        <div className="mt-4 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
            <IconPill icon="/figma/entrepreneurs-icon.png" label="Early Stage Entrepreneurs" />
            <IconPill icon="/figma/small-businesses-icon.png" label="Small Business Owners" />
          </div>
          <div className="mt-4 flex justify-center">
            <IconPill icon="/figma/women-in-business-icon.png" label="Women in Business" />
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
            <IconPill icon="/figma/people-with-idea-icon.png" label="People with Business Ideas" />
            <IconPill icon="/figma/youth-innovators-icon.png" label="Youth Innovators" />
          </div>
        </div>

        {/* Benefits without icons */}
        <h3 className="mt-10 text-[#044ea4] font-extrabold text-xl md:text-2xl lg:text-3xl pl-12">What You Get / Benefits</h3>
        <div className="mt-4 max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            <TextPill label="Startup Funding" />
            <TextPill label="Business Training" />
            <TextPill label="Workspace Support" />
            <TextPill label="Mentorship" />
          </div>
          <div className="mt-3 md:mt-4 flex flex-wrap justify-center gap-3 md:gap-4">
            <TextPill label="Access to Investors" />
            <TextPill label="Growth Monitoring" />
            <TextPill label="Community of Entrepreneurs" />
          </div>
        </div>
      </Container>
    </section>
  );
}
