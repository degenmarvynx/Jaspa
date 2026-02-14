import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SkipNavigation } from '@/components/ui/SkipNavigation';
import { AboutHero } from '@/components/AboutHero';
import { LegalExact } from '@/components/LegalExact';

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      <SkipNavigation />
      <Header />
      <main id="main-content" className="pt-16 md:pt-20">
        <AboutHero />
        <LegalExact />
      </main>
      <Footer />
    </div>
  );
}
