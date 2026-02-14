import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/ui/Container';
import BranchLocator from './BranchLocator';

export const metadata = {
  title: 'Contact Us | Jaspa MFB',
  description: 'Get in touch with Jaspa MFB — branch locator, support contacts, and message form.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content" className="pt-16 md:pt-20 pb-0" aria-labelledby="contact-title">
        {/* Hero */}
        <section className="relative overflow-hidden" role="region" aria-label="Contact hero">
          <div className="relative h-[220px] md:h-[300px]">
            <div className="absolute inset-0 bg-[url('/figma/screenshot_683_208.png')] bg-cover bg-center" aria-hidden="true" />
            <div className="absolute inset-0 bg-[url('/figma/screenshot_683_209.png')] bg-cover bg-center opacity-40 mix-blend-multiply" aria-hidden="true" />
            <Container>
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 id="contact-title" className="z-10 text-white font-extrabold text-[36px] md:text-[56px] leading-[1.1] drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
                  Contact Us
                </h1>
              </div>
            </Container>
          </div>
        </section>

        <Container>
          {/* Branch Locator */}
          <section className="mt-10" aria-labelledby="branch-locator-title">
            <h2 id="branch-locator-title" className="text-[#044ea4] font-extrabold text-[22px] md:text-[28px]">Branch Locator</h2>
            <p className="mt-1 text-[#012e6d] text-[14px] md:text-[16px]">See locations to all our branches across Nigeria.</p>

            <div className="mt-4 bg-white rounded-[12px] p-4 md:p-6 shadow-[0_6px_24px_rgba(0,0,0,0.12)]">
              <BranchLocator />
            </div>
          </section>

          <div
            className="mt-6 h-[4px] w-full"
            aria-hidden="true"
            style={{ backgroundImage: "url('/figma/screenshot_553_346.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>

          {/* Contact Form + Info */}
          <section className="mt-10" aria-labelledby="message-title">
            <h2 id="message-title" className="text-[#044ea4] font-extrabold text-[22px] md:text-[28px]">Send us a message</h2>
            <p className="mt-1 text-[#012e6d] text-[14px] md:text-[16px] max-w-2xl">
              Do you have a question? A complaint? Or do you need help choosing the right product from Jaspa MFB? Then feel free to contact us.
            </p>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Form */}
              <form className="md:col-span-2 bg-white rounded-[12px] p-4 md:p-6 shadow-[0_6px_24px_rgba(0,0,0,0.12)]" aria-label="Contact form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-[#012e6d] text-[14px] font-semibold">First Name</label>
                    <input id="firstName" type="text" placeholder="Enter your first name" className="mt-2 w-full h-[44px] rounded-[8px] border border-[#044ea4] px-3 text-[#012e6d]" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-[#012e6d] text-[14px] font-semibold">Last Name</label>
                    <input id="lastName" type="text" placeholder="Enter your last name" className="mt-2 w-full h-[44px] rounded-[8px] border border-[#044ea4] px-3 text-[#012e6d]" />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="email" className="block text-[#012e6d] text-[14px] font-semibold">Email</label>
                  <input id="email" type="email" placeholder="Enter your email address" className="mt-2 w-full h-[44px] rounded-[8px] border border-[#044ea4] px-3 text-[#012e6d]" />
                </div>
                <div className="mt-4">
                  <label htmlFor="message" className="block text-[#012e6d] text-[14px] font-semibold">Message</label>
                  <textarea id="message" placeholder="Type your message" className="mt-2 w-full min-h-[120px] rounded-[8px] border border-[#044ea4] px-3 py-2 text-[#012e6d]" />
                </div>
                <div className="mt-4">
                  <button type="button" className="bg-[#044ea4] text-white rounded-[8px] px-6 py-3">Send Message</button>
                </div>
              </form>

              {/* Contact Info */}
              <aside
                className="rounded-[15px] p-6 text-white"
                aria-label="Contact information"
                style={{ backgroundImage: "url('/figma/screenshot_528_200.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <h3 className="font-extrabold text-[18px]">Drop us a line to get in touch with us</h3>
                <div className="mt-4 space-y-4">
                  {/* Email */}
                  <div className="flex items-center gap-3 bg-white/90 rounded-[10px] px-4 py-3">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center bg-white">
                      <Image src="/figma/screenshot_1052_760.png" alt="Email" width={28} height={28} />
                    </div>
                    <div className="flex-1">
                      <div className="text-[#012e6d] font-semibold">Chat with us</div>
                      <div className="text-[#012e6d] text-sm">support@jaspa.com.ng</div>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className="flex items-center gap-3 bg-white/90 rounded-[10px] px-4 py-3">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center bg-white">
                      <Image src="/figma/screenshot_1052_761.png" alt="Phone" width={28} height={28} />
                    </div>
                    <div className="flex-1">
                      <div className="text-[#012e6d] font-semibold">Call us</div>
                      <div className="text-[#012e6d] text-sm">+234-909-444-3444</div>
                    </div>
                  </div>
                  {/* Location */}
                  <div className="flex items-center gap-3 bg-white/90 rounded-[10px] px-4 py-3">
                    <div className="w-10 h-10 rounded-md flex items-center justify-center bg-white">
                      <Image src="/figma/screenshot_1552_1503.png" alt="Visit us" width={22} height={34} />
                    </div>
                    <div className="flex-1">
                      <div className="text-[#012e6d] font-semibold">Visit us</div>
                      <div className="text-[#012e6d] text-sm">Mon - Fri (9am to 5pm)</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-white font-semibold mb-2">Connect with us</div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
                      <Image src="/figma/icon-whatsapp.png" alt="WhatsApp" width={24} height={24} />
                    </div>
                    <div className="w-12 h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
                      <Image src="/figma/icon-instagram.png" alt="Instagram" width={24} height={24} />
                    </div>
                    <div className="w-12 h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
                      <Image src="/figma/icon-facebook.png" alt="Facebook" width={14} height={14} />
                    </div>
                    <div className="w-12 h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
                      <Image src="/figma/icon-linkedin.png" alt="LinkedIn" width={24} height={24} />
                    </div>
                    <div className="w-12 h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
                      <Image src="/figma/icon-x.png" alt="X" width={24} height={22} />
                    </div>
                    <div className="w-12 h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
                      <Image src="/figma/icon-tiktok.png" alt="TikTok" width={22} height={24} />
                    </div>
                    <div className="w-12 h-12 bg-[#df2202] rounded-md shadow-[0_4px_20px_rgba(0,0,0,0.3)] flex items-center justify-center">
                      <Image src="/figma/icon-youtube.png" alt="YouTube" width={24} height={18} />
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </section>
        </Container>
        {/* Full-width red bar flush with footer */}
        <div className="pt-16" aria-hidden="true" />
        <div className="w-full m-0 p-0 h-[62px] bg-[#df2202]" aria-hidden="true" />
      </main>
      <Footer />
    </div>
  );
}
