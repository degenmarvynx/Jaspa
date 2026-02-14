import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SkipNavigation } from '@/components/ui/SkipNavigation';
import { CSRHero } from '@/components/CSRHero';
import { CSRInitiatives } from '@/components/CSRInitiatives';
import { AboutHero } from '@/components/AboutHero';
import { CSRImpact } from '@/components/CSRImpact';

export default function CSRPage() {
  return (
    <div className="min-h-screen">
      <SkipNavigation />
      <Header />
      <main id="main-content" className="pt-16 md:pt-20">
        <AboutHero />
        <CSRHero />
        <CSRInitiatives />
        <CSRImpact />
      </main>
      <Footer />
    </div>
  );
}
