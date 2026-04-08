import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { HeroSection } from './components/HeroSection';
import { DivineGallery } from './components/DivineGallery';
import { AboutSection } from './components/AboutSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { VillageHeritageSection } from './components/VillageHeritageSection';
import { TempleSection } from './components/TempleSection';
import { SocialImpactSection } from './components/SocialImpactSection';
import { SocialConnectSection } from './components/SocialConnectSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-amber-50 to-white overflow-x-hidden">
      <HeroSection />
      <DivineGallery />
      <AboutSection />
      <ActivitiesSection />
      <VillageHeritageSection />
      <TempleSection />
      <SocialImpactSection />
      <SocialConnectSection />
      <Footer />
    </div>
  );
}
