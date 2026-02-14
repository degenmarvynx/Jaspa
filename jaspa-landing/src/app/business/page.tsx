import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { BusinessHeroSection } from '@/components/BusinessHeroSection';
import { BusinessFeaturesSection } from '@/components/BusinessFeaturesSection';
import { BusinessProgramsSection } from '@/components/BusinessProgramsSection';
import { BusinessTestimonialsSection } from '@/components/BusinessTestimonialsSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { SkipNavigation } from '@/components/ui/SkipNavigation';

export default function BusinessHome() {
  return (
    <div className="min-h-screen">
      <SkipNavigation />
      <Header />
      <main id="main-content" className="pt-12 md:pt-20">
        <BusinessHeroSection />
        <BusinessFeaturesSection />
        <BusinessProgramsSection />
        <BusinessTestimonialsSection />
        <FinalCTASection
          title="Join thousands of Nigerians already banking the smart way."
          buttonLabel="Open a Business Account"
          href="/download"
          ariaLabel="Open a Business Account - Learn more"
        />
      </main>
      <Footer />
    </div>
  );
}
