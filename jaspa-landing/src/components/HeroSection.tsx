"use client";
import React from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import { TrustBadge } from './ui/TrustBadge';
import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { CertRow } from './ui/CertRow';

export const HeroSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const heroUrl = '/figma/hero-person.png';
  return (
    <section 
      className="bg-gradient-to-br from-[#0A3D9E] via-[#053279] to-[#031F55] relative overflow-hidden min-h-screen flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-35 pointer-events-none">
        <Image src="/figma/blue-spirally-1.png" alt="blue spirally pattern" fill className="object-cover rotate-90" />
      </div>
      
      <Container>
        <div className="relative z-10 pt-8 md:pt-6 pb-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 flex flex-col lg:min-h-[60vh] justify-center items-center md:items-start text-center md:text-left">
              
              {/* Headline */}
              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-white uppercase leading-tight tracking-tight">
                BANK YOUR WAY
                <br />
                TO FINANCIAL
                <br />
                FREEDOM
              </h1>
              
              {/* Subtext */}
              <p className="text-sm md:text-lg text-white/90 leading-relaxed max-w-xl">
                At Jaspa Microfinance Bank, we provide secure<br />
                savings, flexible loans, and digital banking<br />
                solutions that help you take control of your money.<br />
                With us, financial freedom isn't just a dream—it's<br />
                within your reach.
              </p>

              {/* Certifications Row */}
              <CertRow />
              
              {/* CTA Button */}
              <div className="pt-4">
                <Button 
                  size="lg" 
                  href="/download"
                  ariaLabel="Open a Personal Account - Download our mobile app"
                  className="px-8 py-4"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Open a Personal Account
                </Button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative lg:bottom-0 lg:right-0 lg:w-[645px] lg:translate-y-[2px]">
              <div className="relative rounded-2xl overflow-hidden">
                {!imgError ? (
                  <Image
                    src={heroUrl}
                    alt="Jaspa hero"
                    width={645}
                    height={708}
                    className="rounded-2xl object-contain w-full h-auto"
                    onError={() => setImgError(true)}
                    priority
                  />
                ) : (
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-700 to-blue-600 rounded-2xl" />
                )}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-jaspa-red/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-jaspa-orange/20 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
