import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import Image from 'next/image';

export const BuiltForYouSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container>
        <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center overflow-hidden">
          <div className="relative order-2 lg:order-1 md:mr-0 lg:mr-0 xl:mr-0 flex justify-center lg:justify-start">
            <div className="relative rounded-[30px] border-[5px] border-[#df2202] overflow-hidden w-[320px] h-[320px] md:w-[450px] md:h-[450px]">
              <Image src="/figma/group-455.png" alt="Two people" fill className="object-cover" />
            </div>
          </div>
          <div className="space-y-4 order-1 lg:order-2 text-center">
            <h2 className="text-[48px] leading-[52px] md:text-[56px] md:leading-[60px] font-extrabold text-[#044ea4]">
              A Bank Built Just For You
            </h2>
            <p className="text-[18px] leading-[28px] text-[#012e6d] max-w-[493px] mx-auto">
              Jaspa gives you more than a bank — we give you tools to achieve your dreams. Save for school, handle emergencies with quick loans, and pay securely with your debit card.
            </p>
            <div className="pt-2 hidden md:flex justify-center">
              <Button 
                variant="primary"
                size="md"
                href="#features"
                ariaLabel="Learn more about our banking services"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="order-3 md:hidden flex justify-center pt-4">
            <Button 
              variant="primary"
              size="md"
              href="#features"
              ariaLabel="Learn more about our banking services"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
