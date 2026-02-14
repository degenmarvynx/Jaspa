import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeatureCards } from '@/components/FeatureCards';
import { BuiltForYouSection } from '@/components/BuiltForYouSection';
import { StepsSection } from '@/components/StepsSection';
import { ReferralSection } from '@/components/ReferralSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { Footer } from '@/components/Footer';
import { SkipNavigation } from '@/components/ui/SkipNavigation';

export default function Home() {
  return (
    <div className="min-h-screen">
      <SkipNavigation />
      <Header />
      <main id="main-content" className="pt-0 md:pt-24">
        <HeroSection />
        <FeatureCards />
        <BuiltForYouSection />
        <StepsSection />
        <ReferralSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
