import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';

type CardSpec = {
  title: string;
  body: string;
  angle: number;
  cardBg: string;
  inverted: boolean;
};

const cards: CardSpec[] = [
  {
    title: 'SMEs & Corporate Accounts',
    body:
      "Flexible, digital-first business accounts for SMEs, cooperatives, and established companies.\n\nFeatures:\n- Multi-layer structure for different business units\n- Payroll system built in (ready for 2026 tax reforms)\n- Free accounting dashboard (Xero integration available)\n- USSD & mobile app banking\n\nIdeal for: SMEs, cooperatives, NGOs, and growing businesses.",
    angle: 6,
    cardBg: '#044ea4',
    inverted: true,
  },
  {
    title: 'Business Loans & Credit Facilities',
    body:
      "Grow faster with Jaspa’s tailored credit solutions for Nigerian businesses.\n\nFeatures:\n- SME loans with flexible terms\n- Fast approval process\n- Transparent interest rates\n- Dedicated relationship managers\n\nIdeal for: Startups, SMEs, traders, service providers.",
    angle: -6,
    cardBg: '#f5f5f5',
    inverted: false,
  },
  {
    title: 'POS & QR Payment Solutions',
    body:
      "Accept payments anywhere with Jaspa POS terminals and our upcoming QR code payment system.\n\nFeatures:\n- Secure, real-time transactions\n- International card support\n- QR Code for contactless payments (coming soon)\n- Settlement within minutes\n\nIdeal for: Merchants, supermarkets, restaurants, service providers.",
    angle: 6,
    cardBg: '#044ea4',
    inverted: true,
  },
];

const SlantedCard: React.FC<CardSpec> = ({ title, body, angle, cardBg, inverted }) => {
  return (
    <div className="relative my-40">
      <div
        className="absolute inset-0 rounded-[15px]"
        style={{ transform: `rotate(${angle}deg)`, background: '#012e6d' }}
      />
      <div className="relative rounded-[15px] border-2 border-[#012e6d] p-5 md:p-8 shadow-sm" style={{ background: cardBg }}>
        <h4 className={`${inverted ? 'text-white' : 'text-[#044ea4]'} font-extrabold text-[24px] md:text-[32px] leading-[1.1]`}>
          {title}
        </h4>
        <p className={`${inverted ? 'text-white' : 'text-[#012e6d]'} mt-3 whitespace-pre-line text-[13px] md:text-[16px] leading-[22px] md:leading-[26px]`}>
          {body}
        </p>
      </div>
    </div>
  );
};

export const ProductsBusinessCards: React.FC = () => {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-[#f5f5f5]">
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
        <h3 className="text-center text-[#044ea4] font-extrabold text-[32px] md:text-[40px]">
          Business Banking Products
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
