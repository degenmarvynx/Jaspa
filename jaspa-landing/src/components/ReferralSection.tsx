"use client";
import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const ReferralSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden pb-32 md:pb-[75px]">
      <div className="hidden md:block absolute -right-[200px] -top-[180px] w-[600px] h-[600px] rounded-full border-[40px] border-[#df2202] z-0"></div>
      <Container>
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-[54px] md:text-[70px] leading-[60px] md:leading-[75px] font-extrabold text-[#044ea4]">
              Refer Friends, Earn Rewards
            </h2>
            
            <p className="text-[20px] md:text-[25px] leading-[30px] md:leading-[35px] text-[#012e6d] max-w-[545px]">
              Every time you invite a friend or family member to Jaspa, you both enjoy bonuses.
            </p>
            
            <div className="pt-4 hidden md:flex">
              <Button 
                variant="primary"
                size="lg"
                href="/download"
                ariaLabel="Refer Now in the App - Download our mobile app"
                className="px-8 py-4"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                Refer Now in the App
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-[320px] h-[320px] md:w-[440px] md:h-[440px]">
              <div className="relative rounded-[24px] border-[5px] border-[#df2202] overflow-hidden w-full h-full z-10">
                <Image src="/figma/group-456.png" alt="Refer group" fill className="object-cover" />
              </div>
            </div>
          </div>
          
          {/* Mobile CTA centered below image */}
          <div className="md:hidden flex justify-center pt-4">
            <Button 
              variant="primary"
              size="lg"
              href="/download"
              ariaLabel="Refer Now in the App - Download our mobile app"
              className="px-8 py-4"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Refer Now in the App
            </Button>
          </div>
        </div>

      </Container>
      <div className="absolute bottom-0 left-0 right-0 h-[75px] grid grid-cols-2">
        <div className="bg-[linear-gradient(90deg,#044ea4_0%,#87b6ed_100%)]" />
        <div className="bg-[linear-gradient(90deg,#87b6ed_0%,#ffffff_100%)]" />
      </div>
    </section>
  );
};
