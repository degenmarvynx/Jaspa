import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';

export const AboutHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden" role="region" aria-label="About hero">
      <div className="relative h-[220px] md:h-[300px]">
        <Image src="/figma/about-hero-building.png" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#012e6d] opacity-40 mix-blend-multiply" aria-hidden="true" />
        <Container>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-center text-white font-extrabold text-[28px] md:text-[34px] lg:text-[40px] leading-[1.1]">
              About Us
            </h1>
          </div>
        </Container>
      </div>
    </section>
  );
}
