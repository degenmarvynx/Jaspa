import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SkipNavigation } from '@/components/ui/SkipNavigation';
import { AboutHero } from '@/components/AboutHero';
import { AboutIntro } from '@/components/AboutIntro';
import { AboutVisionMission } from '@/components/AboutVisionMission';
import { AboutCSR } from '@/components/AboutCSR';
import { AboutTeamMarquee } from '@/components/AboutTeamMarquee';
import { AboutLegalCompliance } from '@/components/AboutLegalCompliance';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <SkipNavigation />
      <Header />
      <main id="main-content" className="pt-16 md:pt-20">
        <AboutHero />
        <AboutIntro />
        <AboutVisionMission />
        <AboutCSR />
        <AboutTeamMarquee />
        <AboutLegalCompliance />
      </main>
      <Footer />
    </div>
  );
}
