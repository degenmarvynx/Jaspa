'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';
import { DebitCardIcon, MobileBankingIcon, FeaturePhoneIcon, TransferPhonesIcon, PosIcon } from './icons/BankingIcons';

type Item = {
  id: number;
  label: string;
  title: string;
  description: string;
  icon?: string;
};

const items: Item[] = [
  {
    id: 1,
    label: 'Debit Cards',
    title: 'Debit Cards',
    description:
      'Enjoy seamless spending with Jaspa Debit Cards — designed for convenience, security, and global access. Shop online, withdraw cash, or make in-store payments anytime, anywhere.',
    icon: '/figma/icon-debit-card.png',
  },
  {
    id: 2,
    label: 'Mobile Banking',
    title: 'Mobile Banking',
    description:
      'Take your bank with you wherever you go. The Jaspa Mobile App lets you send money, pay bills, and manage your finances in real time — all from your smartphone.',
    icon: '/figma/icon-mobile-phone.png',
  },
  {
    id: 3,
    label: 'USSD Banking',
    title: 'USSD Banking',
    description:
      'Stay connected even without internet access. Dial *XXX# to transfer funds, check balances, and perform transactions easily from any mobile device.',
    icon: '/figma/icon-shield.png',
  },
  {
    id: 4,
    label: 'Transfers',
    title: 'Transfers',
    description:
      'Move money instantly and securely to any bank in Nigeria. With Jaspa, every transfer is fast, free, and reliable — no hidden fees, no delays.',
    icon: '/figma/icon-money-wings.png',
  },
  {
    id: 5,
    label: 'POS System',
    title: 'POS System',
    description:
      'Power your business with Jaspa POS solutions. Accept card and mobile payments effortlessly, track transactions, and enjoy prompt settlements — anytime, anywhere.',
    icon: '/figma/icon-mobile-phone.png',
  },
];

export const ProductsComprehensive: React.FC = () => {
  const [active, setActive] = useState<Item>(items[0]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const current = hoveredId ? items.find(i => i.id === hoveredId)! : active;

  const IconRenderer: React.FC<{ id: number }> = ({ id }) => {
    const [err, setErr] = useState(false);
    if (!err) {
      let src = '';
      if (id === 1) src = '/figma/screenshot_424_147.png';
      if (id === 2) src = '/figma/screenshot_435_390.png';
      if (id === 3) src = '/figma/screenshot_434_375.png';
      if (id === 4) src = '/figma/screenshot_436_394.png';
      if (id === 5) src = '/figma/screenshot_436_395.png';
      const sizes = { 1: [74,45], 2: [67,70], 3: [48,75], 4: [75,76], 5: [76,75] } as const;
      const [w, h] = sizes[id as 1|2|3|4|5] ?? [64,64];
      return <Image src={src} alt="" width={w} height={h} onError={() => setErr(true)} />;
    }
    if (id === 1) return <DebitCardIcon w={74} h={45} />;
    if (id === 2) return <MobileBankingIcon w={67} h={70} />;
    if (id === 3) return <FeaturePhoneIcon w={48} h={75} />;
    if (id === 4) return <TransferPhonesIcon w={76} h={75} />;
    return <PosIcon w={76} h={75} />;
  };

  return (
    <section className="relative bg-[#044ea4] py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[180px] opacity-30 pointer-events-none">
        <Image src="/figma/csr-dots-top.png" alt="" fill className="object-cover" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[180px] opacity-30 pointer-events-none">
        <Image src="/figma/csr-dots-bottom.png" alt="" fill className="object-cover" />
      </div>
      <Container>
        <h3
          className="text-center text-white font-extrabold text-[26px] md:text-[40px] leading-[1.1] mb-6 md:mb-8"
          style={{ textShadow: '0px 4px 10px #00000040' }}
        >
          Comprehensive Banking Services
        </h3>
        <div className="rounded-[15px] bg-white border-2 border-[#044ea4] p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {items.map((item) => {
                const isHovered = hoveredId === item.id;
                return (
                  <button
                    key={item.id}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => setActive(item)}
                    className={`w-full grid grid-cols-[60px_1fr] items-center rounded-[10px] border-2 ${
                      isHovered ? 'bg-[#87b6ed] border-[#87b6ed]' : 'bg-white border-[#044ea4]'
                    } px-4 md:px-5 h-[80px] md:h-[96px]`}
                  >
                    <div className="flex items-center justify-center">
                      <div className="rounded-[8px] border-2 border-[#044ea4] bg-white px-3 py-2">
                        <span className="text-[#044ea4] font-semibold text-[18px] md:text-[22px]">
                          {item.id}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span
                        className="text-[#044ea4] text-[17px] md:text-[22px] font-semibold"
                      >
                        {item.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className={`rounded-[10px] border-2 border-[#044ea4] p-6 md:p-8 ${hoveredId ? 'bg-[#87b6ed]' : 'bg-white'} min-h-[280px] md:min-h-[360px] flex`}>
              <div className="flex justify-center items-center w-full">
                <div className="flex flex-col items-start gap-3 max-w-[620px]">
                  <div className="pt-0">
                    <IconRenderer id={current.id} />
                  </div>
                  <h4 className="text-[#044ea4] font-semibold text-[26px] md:text-[45px] leading-[1.1]">
                    {current.title}
                  </h4>
                  <p className="text-[#012e6d] text-[16px] md:text-[22px] leading-[26px] md:leading-[32px]">
                    {current.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
