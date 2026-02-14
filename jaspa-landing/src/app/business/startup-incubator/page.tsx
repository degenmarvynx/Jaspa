import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SkipNavigation } from '@/components/ui/SkipNavigation';
import { BusinessIncubatorHero } from '@/components/BusinessIncubatorHero';
import { BusinessIncubatorOverview } from '@/components/BusinessIncubatorOverview';
import { BusinessIncubatorApply } from '@/components/BusinessIncubatorApply';
import { RectangleSeparator } from '@/components/RectangleSeparator';

export default function StartupIncubatorPage() {
  return (
    <div className="min-h-screen">
      <SkipNavigation />
      <Header />
      <main id="main-content" className="pt-12 md:pt-24">
        <BusinessIncubatorHero />
        <BusinessIncubatorOverview />
        <BusinessIncubatorApply />
        <RectangleSeparator />
      </main>
      <Footer />
    </div>
  );
}
