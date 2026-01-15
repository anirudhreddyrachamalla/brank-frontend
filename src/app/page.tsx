import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import VisibilitySection from '@/components/sections/VisibilitySection';
import AIExposureSection from '@/components/sections/AIExposureSection';
import { Reveal } from '@/components/ui';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
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
