"use client";
import React, { useRef, useState } from 'react';
import { Container } from './ui/Container';
import Image from 'next/image';

const cards = [
  {
    title: 'SME\nLoans',
    desc: 'Working capital and expansion financing with quick approval.',
    icon: '/figma/icon-sme-naira-red.png',
    iconW: 100,
    iconH: 74,
    innerPad: 'pt-[28px] pr-[24px] pb-[28px] pl-[24px]',
  },
  {
    title: 'Corporate\nAccounts',
    desc: 'Efficient cash flow, bulk transfers, and payroll tools.',
    icon: '/figma/icon-building-red.png',
    iconW: 100,
    iconH: 100,
    innerPad: 'p-[24px]',
  },
  {
    title: 'Asset\nFinancing',
    desc: 'For vehicles, equipment, and heavy machinery.',
    icon: '/figma/icon-machinery-red.png',
    iconW: 96,
    iconH: 105,
    innerPad: 'pt-[24px] pr-[28px] pb-[24px] pl-[28px]',
  },
  {
    title: 'Corporate\n& Group\nBanking',
    desc: 'Solutions for trade groups and associations.',
    icon: '/figma/icon-people-red.png',
    iconW: 100,
    iconH: 48,
    innerPad: 'pt-[40px] pr-[24px] pb-[40px] pl-[24px]',
  },
];

export const BusinessFeaturesSection: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const onPrev = () => {
    const next = Math.max(0, index - 1);
    setIndex(next);
    const el = sliderRef.current;
    if (el) el.scrollTo({ left: next * (el.clientWidth), behavior: 'smooth' });
  };
  const onNext = () => {
    const next = Math.min(cards.length - 1, index + 1);
    setIndex(next);
    const el = sliderRef.current;
    if (el) el.scrollTo({ left: next * (el.clientWidth), behavior: 'smooth' });
  };
  return (
    <section className="bg-white pt-10 md:pt-12 lg:pt-16 pb-12 md:pb-16 lg:pb-20" aria-labelledby="business-features-heading">
      <Container>
        <div className="text-center">
          <h2
            id="business-features-heading"
            className="text-[#044ea4] font-extrabold text-[20px] md:text-[56px] lg:text-[50px] leading-[60px]"
          >
            Why Jaspa for business?
          </h2>
          <p className="mt-2 md:mt-3 text-[#012e6d] text-[13px] md:text-[14px] lg:text-[15px] leading-[24px]">
            Jaspa offers a suite of products tailored to businesses of all sizes.
          </p>
        </div>

        <div className="mt-8 lg:mt-10">
          <div className="md:hidden relative">
            <div
              ref={sliderRef}
              className="overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
              onScroll={(e) => {
                const el = e.currentTarget;
                const idx = Math.round(el.scrollLeft / el.clientWidth);
                setIndex(idx);
              }}
            >
              <div className="flex w-full">
                {cards.map((c) => (
                  <div key={c.title} className="snap-center w-full flex-shrink-0 px-4">
                    <div className="rounded-[15px] shadow-[0_4px_10px_0_#00000040] bg-[#87b6ed] p-[10px] pb-[18px]">
                      <div className={`border-[3px] border-jaspa-red rounded-[10px] bg-white ${c.innerPad} flex justify-center`}>
                        <Image src={c.icon} alt={c.title.replace(/\n/g, ' ')} width={c.iconW} height={c.iconH} />
                      </div>
                      <h3 className="mt-[12px] ml-[8px] text-[#012e6d] text-[16px] leading-[24px] font-medium whitespace-pre-line">
                        {c.title}
                      </h3>
                      <p className="mt-[8px] ml-[8px] text-[#012e6d] text-[12px] leading-[18px] font-medium">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button aria-label="Previous" onClick={onPrev} className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#df2202] text-white w-8 h-8 rounded-full flex items-center justify-center">‹</button>
            <button aria-label="Next" onClick={onNext} className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#df2202] text-white w-8 h-8 rounded-full flex items-center justify-center">›</button>
            <div className="mt-3 flex justify-center gap-2">
              {cards.map((_, i) => (
                <span key={i} className={`w-2 h-2 rounded-full ${i===index ? 'bg-[#044ea4]' : 'bg-[#87b6ed]'}`}></span>
              ))}
            </div>
          </div>
          <div className="hidden md:flex flex-wrap lg:flex-nowrap justify-center gap-8 md:gap-9 lg:gap-10">
            {cards.map((c) => (
              <div
                key={c.title}
                className="w-full sm:w-[200px] lg:w-[180px] rounded-[15px] shadow-[0_4px_10px_0_#00000040] bg-[#87b6ed] p-[10px] pb-[18px]"
              >
                <div
                  className={`border-[3px] border-jaspa-red rounded-[10px] bg-white ${c.innerPad}`}
                >
                  <Image src={c.icon} alt={c.title.replace(/\n/g, ' ')} width={c.iconW} height={c.iconH} />
                </div>
                <h3 className="mt-[12px] ml-[8px] text-[#012e6d] text-[14px] md:text-[16px] lg:text-[18px] leading-[24px] font-medium whitespace-pre-line">
                  {c.title}
                </h3>
                <p className="mt-[8px] md:mt-[12px] ml-[8px] text-[#012e6d] text-[10px] md:text-[11px] lg:text-[12px] leading-[18px] font-medium max-w-[200px]">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
