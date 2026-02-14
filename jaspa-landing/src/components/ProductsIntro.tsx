import React from 'react';
import { Container } from './ui/Container';

export const ProductsIntro: React.FC = () => {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-center text-[#044ea4] font-extrabold text-[28px] md:text-[40px] leading-[1.15]">
            Our Edge In
            <br />
            Digital Banking
          </h2>
          <p className="mt-4 md:mt-6 text-center text-[#012e6d] text-[16px] md:text-[20px] leading-[28px] max-w-[900px] mx-auto">
            Jaspa MFB stands out as one of Nigeria’s fastest and most reliable digital banks. From account opening to everyday transactions, customers enjoy uninterrupted, glitch-free experiences. We boast of these innovations that empower our customers all across the country.
          </p>
        </div>
      </Container>
    </section>
  );
}
