import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';

type CardSpec = {
  title: string;
  body: string;
  angle: number;
  bg: string;
  cardBg?: string;
  inverted?: boolean;
};

const cards: CardSpec[] = [
  {
    title: "Kids & Students’ Account",
    body:
      "Empower the next generation with tailored savings and spending solutions. Kids Accounts help parents teach children financial responsibility, while Students Accounts offer flexible banking for allowances, pocket money, and daily expenses.\n\nFeatures:\n- No minimum opening balance\n- Parental control options\n- Free debit cards for students\n- Locked savings to build discipline\n\nIdeal for: Families, teenagers, students.",
    angle: -6,
    bg: '#012e6d',
    cardBg: '#f5f5f5',
  },
  {
    title: 'Locked & Flexible Savings Account',
    body:
      "Save your money safely and earn interest without the hassle of hidden fees. Jaspa’s savings accounts are designed to help you reach your goals, your way.\n\nFeatures:\n- Locked savings to encourage discipline\n- Flexible accounts for emergency access\n- Competitive interest rates\n- Accessible through mobile, USSD, and web app\n\nIdeal for: Salary earners, freelancers, families, and students.",
    angle: 6,
    bg: '#012e6d',
    cardBg: '#044ea4',
    inverted: true,
  },
  {
    title: 'Multi-Layer Account',
    body:
      "Jaspa lets you create multiple accounts under one profile — so you can separate your business, savings, and expenses without using multiple banks.\n\nFeatures:\n- Multiple account names & numbers under one login\n- Easily track income, savings & expenses\n- No need to open accounts in different banks\n- Accounting system included\n\nIdeal for: Entrepreneurs, freelancers, small business owners.",
    angle: -6,
    bg: '#012e6d',
    cardBg: '#f5f5f5',
  },
];

const SlantedCard: React.FC<CardSpec> = ({ title, body, angle, bg, cardBg = '#f5f5f5', inverted = false }) => {
  return (
    <div className="relative my-40">
      <div
        className="absolute inset-0 rounded-[15px]"
        style={{ transform: `rotate(${angle}deg)`, background: bg }}
      />
      <div className="relative rounded-[15px] border-2 border-[#012e6d] p-5 md:p-8 shadow-sm"
           style={{ background: cardBg }}>
        <h4 className={`${inverted ? 'text-white' : 'text-[#044ea4]'} font-extrabold text-[22px] md:text-[34px] leading-[1.1]`}>
          {title}
        </h4>
        <p className={`mt-3 whitespace-pre-line text-[13px] md:text-[16px] leading-[22px] md:leading-[26px] ${inverted ? 'text-white' : 'text-[#012e6d]'}`}>
          {body}
        </p>
      </div>
    </div>
  );
};

export const ProductsPersonalCards: React.FC = () => {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-[#044ea4]">
      <Image
        src="/figma/screenshot_853_405.png"
        alt=""
        width={174}
        height={1024}
        className="hidden md:block absolute left-0 top-0 h-full w-auto"
      />
      <Image
        src="/figma/screenshot_853_408.png"
        alt=""
        width={174}
        height={1024}
        className="hidden md:block absolute right-0 top-0 h-full w-auto"
      />
      <Container>
        <h3 className="text-center text-white font-extrabold text-[24px] md:text-[32px]">
          Personal Banking Products
        </h3>
        <div className="mx-auto max-w-[1100px]">
          {cards.map((c, i) => (
            <SlantedCard key={i} {...c} />
          ))}
        </div>
      </Container>
    </section>
  );
}
