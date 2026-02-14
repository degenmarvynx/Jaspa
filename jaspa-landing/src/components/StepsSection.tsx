import React from 'react';
import { Container } from './ui/Container';
import Image from 'next/image';

interface StepProps {
  number: number;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ number, title, description }) => {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 bg-white/25 text-white rounded-full flex items-center justify-center font-bold text-lg">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-blue-100 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export const StepsSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Download the Jaspa Mobile App",
      description: "Get the app from Google Play Store or Apple App Store and install it on your device."
    },
    {
      number: 2,
      title: "Sign up in Minutes",
      description: "Create your account quickly with our streamlined registration process. Just provide your basic information and verify your identity."
    },
    {
      number: 3,
      title: "Start Banking",
      description: "Once your account is verified, you can start enjoying all our banking services immediately."
    }
  ];

  return (
    <section className="py-12 lg:py-20 bg-[#044ea4] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          {/* Top Group 74: span full width */}
          <div className="absolute opacity-15 rotate-180 inset-x-0 top-0 h-[344px]">
            <Image src="/figma/group82-1.png" alt="" width={726} height={344} className="absolute top-0 left-0" />
            <Image src="/figma/group82-2.png" alt="" width={726} height={344} className="absolute top-0 right-0 rotate-180" />
          </div>
          {/* Bottom Group 73: anchored to bottom */}
          <div className="absolute opacity-15 inset-x-0 bottom-0 h-[344px]">
            <Image src="/figma/group82-3.png" alt="" width={726} height={344} className="absolute bottom-0 left-0" />
            <Image src="/figma/group82-4.png" alt="" width={726} height={344} className="absolute bottom-0 right-0 -rotate-180" />
          </div>
        </div>
      </div>
      
      <Container>
        <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Banking in 3 Easy Steps
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Getting started with Jaspa is simple and fast. Follow these steps to begin your banking journey.
          </p>
        </div>

          {/* Steps Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Steps */}
            <div className="space-y-8">
              {steps.map((step) => (
                <Step
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>

            {/* Right: Phone Image + Badges below */}
            <div className="flex flex-col items-center space-y-6">
              {/* Phone Image */}
              <Image src="/figma/finale-1.png" alt="Jaspa mobile app" width={240} height={516} className="rounded-2xl" />
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-6">Download the App</h3>
                <a
                  href="#download-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get it on Google Play and Download on the App Store"
                  className="inline-block filter drop-shadow-[0_4px_40px_rgba(0,0,0,0.25)]"
                >
                  <Image src="/figma/get-badges-white.png" alt="Get it on Google Play and Download on the App Store" width={482} height={70} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
