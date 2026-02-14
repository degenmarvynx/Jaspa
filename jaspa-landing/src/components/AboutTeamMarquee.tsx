"use client";
import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';

type Member = {
  img: string;
  name: string;
  role: string;
};

const members: Member[] = [
  { img: '/figma/team-innocent.png', name: 'Innocent Ihedoro', role: 'Chairman' },
  { img: '/figma/team-eno.png', name: 'Eno Vwaire', role: 'Managing Director' },
  { img: '/figma/team-paul.png', name: 'Paul Adeoye', role: 'Operations Manager' },
  { img: '/figma/team-chidinma.png', name: 'Chidinma Ifenatuora', role: 'Customer Services Manager' },
  { img: '/figma/IMG-20260214-WA0001.jpg.jpeg', name: 'Ezegbu Dennis', role: 'Dev Team' },
];

const Card: React.FC<Member> = ({ img, name, role }) => {
  const isDennis = name === 'Ezegbu Dennis';
  return (
    <div className="flex flex-col items-center w-[280px] md:w-[320px]">
      <div className="rounded-[15px] overflow-hidden w-[260px] h-[290px] md:w-[300px] md:h-[330px] shadow-[0_4px_20px_#00000040] bg-[#012e6d]">
        <Image
          src={img}
          alt={name}
          width={300}
          height={330}
          className={`w-full h-full object-cover transition-transform duration-300 ${isDennis ? 'dennis-img' : 'group-hover:scale-[1.02]'}`}
        />
      </div>
      <p className="mt-4 text-white text-[18px] md:text-[22px] leading-[28px] font-medium italic text-center">{name}</p>
      <div className="mt-3 rounded-[8px] bg-[#87b6ed] shadow-[0_4px_20px_#00000040] px-5 py-3 min-w-[220px]">
        <p className="text-[#012e6d] text-[16px] md:text-[18px] font-medium text-center">{role}</p>
      </div>
    </div>
  );
};

export const AboutTeamMarquee: React.FC = () => {
  const trackItems = [...members, ...members];
  return (
    <section className="bg-[#044ea4] py-10 md:py-14">
      <Container>
        <div className="text-center mb-6">
          <div className="inline-block rounded-[8px] bg-[#df2202] px-6 py-3">
            <span className="text-white font-semibold text-[18px] md:text-[22px]">Meet the Team</span>
          </div>
        </div>
      </Container>
      <div className="overflow-hidden team">
        <div className="flex gap-8 md:gap-12 team-track w-max">
          {trackItems.map((m, i) => (
            <div key={i} className="group flex-shrink-0 px-2">
              <Card {...m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
