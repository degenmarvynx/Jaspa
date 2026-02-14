"use client";
import React, { useState } from 'react';
import { Container } from './ui/Container';
import { Button } from './ui/Button';
import Image from 'next/image';
import { CertRow } from './ui/CertRow';
import { ArrowRight } from 'lucide-react';

export const BusinessHeroSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const heroUrl = '/figma/business-homepage-1-1.png';
  return (
    <section 
      className="bg-gradient-to-br from-[#0A3D9E] via-[#053279] to-[#031F55] relative overflow-hidden min-h-[65vh] flex items-center w-screen -mx-[calc(50vw-50%)]"
      aria-labelledby="business-hero-heading"
    >
      {/* Full-screen background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/figma/blue-spirally-1-alt.png"
          alt="blue spirally background"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A3D9E]/30 via-[#053279]/20 to-[#031F55]/30" />
      </div>
      
      <Container full>
        <div className="relative z-10 pt-8 md:pt-6 pb-0 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-5 lg:gap-6 items-center">
            {/* Left Image */}
            <div className="relative lg:w-[520px] flex-shrink-0 mt-8 lg:mt-10 xl:mt-14 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden">
                {!imgError ? (
                  <Image
                    src={heroUrl}
                    alt="Business hero"
                    width={500}
                    height={560}
                    className="rounded-2xl object-contain w-full h-auto max-h-[440px]"
                    onError={() => setImgError(true)}
                    priority
                  />
                ) : (
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-700 to-blue-600 rounded-2xl" />
                )}
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6 flex flex-col lg:min-h-[60vh] justify-center items-center lg:items-end text-center lg:text-right lg:pr-12 xl:pr-16 order-1 lg:order-2">
              <h1 id="business-hero-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase leading-tight tracking-tight">
                YOUR PARTNER
                <br />
                IN BUSINESS
                <br />
                GROWTH
              </h1>
              <p className="text-sm md:text-base text-white/90 leading-relaxed max-w-[520px] lg:ml-auto lg:text-right">
                From SME loans to corporate banking, Jaspa
                <br />
                gives your business the financial tools to
                <br />
                grow and thrive—securely and sustainably.
              </p>
              <div className="lg:ml-auto">
                <CertRow />
              </div>
              <div className="pt-4 flex justify-center lg:justify-end">
                <Button 
                  size="lg" 
                  href="/download"
                  ariaLabel="Open a Business Account"
                  className="px-8 py-4"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Open a Business Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
