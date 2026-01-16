import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import VisibilitySection from '@/components/sections/VisibilitySection';
import AIExposureSection from '@/components/sections/AIExposureSection';
import { Reveal } from '@/components/ui';
import { getLandingPageData } from '@/lib/backend';

export default async function Home() {
  // Fetch landing page data server-side
  let brandData;
  try {
    brandData = await getLandingPageData();
  } catch (error) {
    console.error('Failed to fetch landing page data:', error);
    // brandData will be undefined, Hero will use fallback mock data
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection brandData={brandData} />
        <Reveal delay={0.24} duration={2.0}>
          <VisibilitySection />
        </Reveal>
        <Reveal delay={0.24} duration={2.0}>
          <AIExposureSection />
        </Reveal>
      </main>
      <Reveal delay={0.24} duration={2.0}>
        <Footer />
      </Reveal>
    </div>
  );
}
