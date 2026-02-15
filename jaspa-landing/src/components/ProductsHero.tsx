import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';

export const ProductsHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden" role="region" aria-label="Products hero">
      <div className="relative h-[220px] md:h-[300px]">
        <Image src="/figma/about-hero-building.png" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[#012e6d] opacity-60 mix-blend-multiply" aria-hidden="true" />
        <Container>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-center text-white font-extrabold text-[28px] md:text-[40px] lg:text-[52px]"
              style={{ textShadow: '0px 4px 10px #00000040' }}
            >
              Products &amp; Services
            </h1>
          </div>
        </Container>
      </div>
    </section>
  );
}
