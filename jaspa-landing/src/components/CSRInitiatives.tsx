"use client";
import React, { useState } from 'react';
import { Container } from './ui/Container';

type Card = {
  titleLines: string[];
  description: string;
};

const cards: Card[] = [
  {
    titleLines: ['Youth & SME', 'Empowerment'],
    description: 'Providing access to business advisory, startup acceleration, and capacity development for young entrepreneurs.',
  },
  {
    titleLines: ['Financial', 'Inclusion'],
    description: 'Bringing reliable, affordable banking tools to individuals and micro-businesses in underserved areas across Nigeria.',
  },
  {
    titleLines: ['Community', 'Impact', 'Initiatives'],
    description: 'Supporting education, health outreach, and community development programs that improve quality of life.',
  },
];

export const CSRInitiatives: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <section className="bg-white py-10 md:py-14">
      <Container>
        <div className="grid md:grid-cols-3 gap-3 md:gap-4 items-stretch">
          {cards.map((card, idx) => {
            const isHovered = hovered === idx;
            const base = 'bg-[#87b6ed] text-[#012e6d]';
            const hoverStyle = 'transition-colors transition-transform duration-300 ease-in-out';
            return (
              <div
                key={idx}
                className={`rounded-[15px] p-5 md:p-6 ${hovered === null ? base : isHovered ? 'bg-[#044ea4] text-white scale-[1.15] shadow-[0_6px_24px_#00000040] z-10' : base} ${hoverStyle} shadow-[0_4px_16px_#00000030] min-h-[260px] md:min-h-[300px]`}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <h4 className={`font-bold text-center leading-[32px] md:leading-[36px] ${card.titleLines.length === 3 ? 'text-[22px] md:text-[26px]' : 'text-[26px] md:text-[30px]'}`}>
                  {card.titleLines.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h4>
                <p className={`mt-3 md:mt-4 text-center ${isHovered ? 'text-white' : 'text-[#012e6d]'} text-[14px] md:text-[16px] leading-[22px] md:leading-[26px]`}>
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
