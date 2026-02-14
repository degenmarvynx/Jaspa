import React from 'react';
import Image from 'next/image';
import { Container } from './ui/Container';

const testimonials = [
  {
    quote:
      'Getting a salary advance from Jaspa was stress-free and quick. The repayment was flexible, and it really helped me cover urgent bills before payday.',
    author: 'Adeyemi Olatunji',
  },
  {
    quote:
      'I opened a student savings account easily with just my phone. Jaspa’s app helps me track expenses, and I’ve finally built consistent savings habits.',
    author: 'Chiamaka Okafor',
  },
  {
    quote:
      'I started a target savings plan with Jaspa for my daughter’s school fees. Knowing the funds are secure gives me real peace of mind.',
    author: 'Grace Ebiware',
  },
  {
    quote:
      'I love how Jaspa makes everyday banking simple. Opening my account online was quick, and now I save regularly without worrying about hidden charges.',
    author: 'Terver Aondo',
  },
  {
    quote:
      'As a shop owner, Jaspa’s micro loan helped me restock during tough times. Their support was fast, fair, and genuinely focused on small businesses.',
    author: 'Usman Bello',
  },
];

export const BusinessTestimonialsSection: React.FC = () => {
  // Duplicate testimonials for seamless loop
  const loop = [...testimonials, ...testimonials];
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden py-16 md:py-20 lg:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/figma/testimonials-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <Container full>
        <div className="text-center mb-8 md:mb-10">
          <h2
            id="testimonials-heading"
            className="text-[#044ea4] font-extrabold text-[32px] md:text-[42px] lg:text-[48px]"
          >
            Trusted by Nigerians
          </h2>
        </div>

        {/* Scrolling track */}
        <div
          className="group testimonials relative"
          aria-label="Customer testimonials"
        >
          <div
            className="testimonials-track flex items-stretch gap-6 md:gap-8 will-change-transform"
            role="list"
          >
            {loop.map((t, idx) => (
              <article
                key={`${t.author}-${idx}`}
                role="article"
                aria-label={`Testimonial by ${t.author}`}
                className="min-w-[280px] md:min-w-[320px] lg:min-w-[360px] min-h-[300px] md:min-h-[340px] lg:min-h-[380px] rounded-[15px] border-[3px] border-[#df2202] shadow-[0_4px_10px_0_#00000040] p-6 md:p-7 lg:p-8 flex flex-col justify-between"
                style={{
                  backgroundColor: 'rgba(135, 182, 237, 0.2)',
                  backgroundImage:
                    'radial-gradient(rgba(4, 78, 164, 0.18) 1.2px, transparent 1.2px)',
                  backgroundSize: '12px 12px',
                }}
              >
                <p className="text-[#044ea4] text-[14px] md:text-[16px] lg:text-[18px] leading-[26px]">
                  {t.quote}
                </p>
                <p className="mt-5 md:mt-6 text-[#df2202] text-[15px] md:text-[18px] lg:text-[20px] italic font-semibold">
                  —{t.author}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
