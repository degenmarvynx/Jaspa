import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="relative w-full h-[294px]">
        <Image src="/figma/about-hero-building.png" alt="" fill className="object-cover" priority />
        <div className="absolute inset-x-0 top-0 h-[240px] bg-[#012e6d] opacity-40" />
      </div>
      <Container>
        <div className="relative -mt-[200px] pb-10">
          <h1 className="text-center text-white font-extrabold text-[28px] md:text-[34px] lg:text-[40px]">
            About Us
          </h1>
        </div>
      </Container>
    </section>
  );
}
