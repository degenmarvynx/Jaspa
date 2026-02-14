import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SkipNavigation } from '@/components/ui/SkipNavigation';
import { ProductsHero } from '@/components/ProductsHero';
import { ProductsIntro } from '@/components/ProductsIntro';
import { ProductsCarousel } from '@/components/ProductsCarousel';
import { ProductsComprehensive } from '@/components/ProductsComprehensive';
import { ProductsPartnerships } from '@/components/ProductsPartnerships';
import { ProductsXero } from '@/components/ProductsXero';
import { ProductsSecurity } from '@/components/ProductsSecurity';
import { ProductsPersonalCards } from '@/components/ProductsPersonalCards';
import { ProductsBusinessCards } from '@/components/ProductsBusinessCards';
import { ProductsBankingServices } from '@/components/ProductsBankingServices';

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <SkipNavigation />
      <Header />
      <main id="main-content" className="pt-16 md:pt-20">
        <ProductsHero />
        <ProductsIntro />
        <ProductsCarousel />
        <ProductsComprehensive />
        <ProductsPartnerships />
        <ProductsXero />
        <ProductsSecurity />
        <ProductsPersonalCards />
        <ProductsBusinessCards />
        <ProductsBankingServices />
        <div className="w-full h-[50px] bg-[#df2202]" />
        <div className="w-full h-[24px] bg-white" />
      </main>
      <Footer />
    </div>
  );
}
