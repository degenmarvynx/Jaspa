import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  title?: string;
  buttonLabel?: string;
  href?: string;
  ariaLabel?: string;
}

export const FinalCTASection: React.FC<FinalCTAProps> = ({
  title = 'Join thousands of Nigerians already banking the smart way.',
  buttonLabel = 'Open a Personal Account',
  href = '#open-account',
  ariaLabel = 'Open a Personal Account - Download our mobile app',
}) => {
  return (
    <section className="py-16 lg:py-20 bg-white relative overflow-hidden">
      <Container>
        <div className="relative z-10 text-center">
          <h2 className="text-lg md:text-xl font-semibold text-[#044ea4] mb-4">
            {title}
          </h2>
          
          <div className="flex justify-center items-center">
            <Button 
              size="lg"
              href={href}
              ariaLabel={ariaLabel}
              className="px-5 py-3 text-[15px] md:text-[16px] whitespace-nowrap"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              {buttonLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
