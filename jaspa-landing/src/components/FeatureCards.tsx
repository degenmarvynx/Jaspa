import React from 'react';
import { Container } from './ui/Container';
import Image from 'next/image';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group w-full bg-jaspa-offwhite rounded-[15px] border-2 border-[#044ea4] p-4 md:p-5 relative overflow-hidden transition-colors duration-300 hover:bg-[#1e3a8a]">
      
      <div className="relative z-10">
        <div className="mb-4 [&>img]:transition [&>img]:duration-300 group-hover:[&>img]:brightness-0 group-hover:[&>img]:invert">
          {icon}
        </div>
        <h3 className="text-[20px] md:text-[22px] leading-snug font-semibold text-[#012e6d] group-hover:text-white mb-2">{title}</h3>
        <p className="text-[13px] leading-[18px] font-medium text-[#044ea4] group-hover:text-white max-w-[279px]">{description}</p>
      </div>
    </div>
  );
};

export const FeatureCards: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24" aria-labelledby="features-heading">
      <div className="absolute inset-0 pointer-events-none">
        <Image src="/figma/waterfall-blue-2.png" alt="background" fill className="object-cover" />
      </div>
      <Container>
        <div className="text-center mb-12 lg:mb-16">
          <h2 id="features-heading" className="text-5xl md:text-6xl font-extrabold text-[#012e6d]">Why Choose Jaspa MFB?</h2>
        </div>

        {/* Row 1: three cards */}
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 mb-12" role="list">
          <FeatureCard
            icon={<Image src="/figma/icon-naira-bags.png" alt="Naira Money Bags" width={50} height={30} />}
            title="Flexible Savings"
            description="Grow your money with competitive interest."
          />
          <FeatureCard
            icon={<Image src="/figma/icon-money-wings.png" alt="Money with Wings" width={40} height={35} />}
            title="Instant Loans"
            description="Get approved fast, repay with ease."
          />
          <FeatureCard
            icon={<Image src="/figma/icon-mobile-phone.png" alt="Mobile Banking Phone" width={34} height={35} />}
            title="Digital Banking"
            description="Full mobile access, anywhere, anytime."
          />
        </div>

        {/* Row 2: two cards, consistent sizing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-16" role="list">
          <FeatureCard
            icon={<Image src="/figma/icon-debit-card.png" alt="Debit Card" width={49} height={30} />}
            title="Debit Cards"
            description="Your Jaspa cards works wherever you go."
          />
          <FeatureCard
            icon={<Image src="/figma/icon-shield.png" alt="Padlock with Shield" width={28} height={30} />}
            title="Safe & Trusted"
            description="Licensed by CBN, and insured by the NDIC."
          />
        </div>
      </Container>
    </section>
  );
};

// Cards content pulled to match Figma exactly; no extras added.
