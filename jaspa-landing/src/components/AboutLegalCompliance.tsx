import React from 'react';
import { Container } from './ui/Container';

export const AboutLegalCompliance: React.FC = () => {
  return (
    <section className="bg-[#f5f5f5] py-10 md:py-14">
      <Container>
        <div className="text-center max-w-[900px] mx-auto">
          <h3 className="text-[#044ea4] font-extrabold text-[30px] md:text-[40px] leading-tight">Legal & Compliance</h3>
          <p className="mt-4 text-[#012e6d] text-[15px] md:text-[18px] leading-[28px]">
            Jaspa operates with strict adherence to CBN guidelines, NDIC requirements, data protection principles, and industry-wide security standards. See our full legal and compliance documentation for details.
          </p>
          <div className="mt-8">
            <a
              href="/legal"
              className="inline-flex items-center justify-center rounded-[10px] bg-[#df2202] px-6 md:px-8 py-3 md:py-4 min-w-[200px] md:min-w-[240px] h-[48px] md:h-[56px] text-white text-[16px] md:text-[18px] font-semibold"
              aria-label="Learn More about Legal & Compliance"
            >
              Learn More
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
