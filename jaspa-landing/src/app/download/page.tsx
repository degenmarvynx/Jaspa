import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/ui/Container';

export const metadata = {
  title: 'Download Jaspa App',
  description: 'Download the Jaspa mobile app on Google Play or App Store and get started.',
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />
      <main className="pt-28 pb-24">
        <section className="relative">
          <div className="absolute inset-0 -z-10">
            <Image src="/figma/blue-spirally-1-alt.png" alt="" fill className="object-cover opacity-20" priority />
          </div>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-1 lg:order-none">
                <h1 className="text-center lg:text-left text-[#044ea4] font-extrabold leading-tight text-[28px] md:text-[40px] lg:text-[48px]">
                  Download
                  <br />
                  the app now
                  <br />
                  to get started
                </h1>
              </div>
              <div className="order-2 lg:order-none flex justify-center lg:justify-end mt-8 lg:mt-16">
                <Image src="/figma/screenshot_939_309.png" alt="Jaspa app preview" width={260} height={560} priority />
              </div>
              <div className="order-3 lg:order-none">
                <div className="mt-6 flex items-center justify-center lg:justify-start gap-4">
                  <Image src="/figma/screenshot_479_301.png" alt="Get it on Google Play" width={210} height={64} className="rounded-[8px] border-2 border-[#044ea4] bg-white" />
                  <Image src="/figma/screenshot_479_303.png" alt="Download on the App Store" width={210} height={64} className="rounded-[8px] border-2 border-[#044ea4] bg-white" />
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
