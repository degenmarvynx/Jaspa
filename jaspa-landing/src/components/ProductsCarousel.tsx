'use client';
import React, { useEffect, useRef } from 'react';
import { Container } from './ui/Container';
import Link from 'next/link';

type CardItem = {
  title: string;
  description: string;
  variant: 'primary' | 'muted';
};

const items: CardItem[] = [
  {
    title: 'Payroll System for SMEs',
    description:
      'Jaspa MFB is one of the few banks in Nigeria to integrate a payroll system directly into its banking platform. This innovation helps small businesses to prepare for the upcoming 2026...',
    variant: 'primary',
  },
  {
    title: 'Built-In Accounting System',
    description:
      'Jaspa provides a banking-integrated accounting system that eliminates the need for external auditors. Businesses can track expenses, income, taxes, and cash flow—all from...',
    variant: 'muted',
  },
  {
    title: 'Segmented Accounts',
    description:
      'Unlike most banks, Jaspa MFB allows customers to create specialized accounts tailored to different life stages and financial goals. These include Kids’ Accounts, Students’ Accounts, Expenses...',
    variant: 'primary',
  },
  {
    title: 'Multi-Layer Account System',
    description:
      'Jaspa’s multi-layer banking system allows one customer to operate multiple distinct bank accounts under a single profile. A single business owner can create separate...',
    variant: 'muted',
  },
];

const Card: React.FC<CardItem> = ({ title, description, variant }) => {
  const isPrimary = variant === 'primary';
  return (
    <div
      className={`flex flex-col items-center rounded-[30px] ${
        isPrimary ? 'bg-[#044ea4]' : 'bg-[#87b6ed]'
      } px-[40px] py-[36px] w-[540px] md:w-[600px] min-h-[300px] md:min_h-[340px]`}
    >
      <p
        className={`text-center leading-[38px] font-semibold text-[22px] md:text-[28px] ${
          isPrimary ? 'text-white' : 'text-[#044ea4]'
        }`}
      >
        {title}
      </p>
      <p
        className={`mt-[20px] w-full max-w-[520px] text-center leading-[24px] text-[14px] md:text-[16px] break-words whitespace-normal ${
          isPrimary ? 'text-white' : 'text-[#012e6d]'
        }`}
      >
        {description}
      </p>
      <Link
        href="/#products"
        className="mt-[22px] rounded-[10px] bg-[#df2202] px-[36px] py-[14px]"
      >
        <span className="block w-[110px] h-[22px] text-center text-white font-semibold text-[15px] md:text-[17px]">
          Learn More
        </span>
      </Link>
    </div>
  );
};

export const ProductsCarousel: React.FC = () => {
  const duplicated = [...items, ...items];
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let rafId = 0;
    let last = performance.now();
    let offset = 0;
    const run = (now: number) => {
      const dt = now - last;
      last = now;
      if (!pausedRef.current) {
        offset -= dt * 0.12;
      }
      const half = el.scrollWidth / 2;
      if (-offset >= half) offset = 0;
      el.style.transform = `translate3d(${offset}px,0,0)`;
      rafId = requestAnimationFrame(run);
    };
    rafId = requestAnimationFrame(run);
    const onEnter = () => { pausedRef.current = true; };
    const onLeave = () => { pausedRef.current = false; };
    el.addEventListener('mouseenter', onEnter);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(rafId);
      el.removeEventListener('mouseenter', onEnter);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section className="py-6 md:py-8">
      <Container>
        <div className="relative overflow-hidden">
          <div
            ref={trackRef}
            className="inline-flex items-center gap-6 min-w-max will-change-transform whitespace-nowrap"
          >
            {duplicated.map((item, idx) => (
              <Card key={idx} {...item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
