import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';
import { ImageWithFallback } from './ui/ImageWithFallback';

export const ProductsXero: React.FC = () => {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="max-w-[525px]">
            <h3 className="text-[#044ea4] font-extrabold text-[30px] md:text-[44px] leading-[1.1]">
              Xero
              <br />
              Accounting
              <br />
              Integration
            </h3>
            <p className="mt-6 text-[#012e6d] text-[16px] md:text-[22px] leading-[26px] md:leading-[35px]">
              Jaspa integrates seamlessly with Xero, the world-class accounting software. This helps businesses track expenses and revenues in real time, forecast tax liabilities, and prepare for compliance under upcoming tax regulations. This integration is part of Jaspa’s commitment to helping Nigerian businesses scale sustainably and stay ahead of regulatory changes.
            </p>
          </div>
          <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-[30px] border-[5px] border-[#df2202] overflow-hidden">
            <ImageWithFallback src="/figma/screenshot_1334_1238.png" alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-[#012e6d]/30 rounded-[30px]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
