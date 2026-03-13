import { motion, useScroll, useSpring } from 'motion/react';
import HeroSection from './components/HeroSection';
import IslandNavbar from './components/IslandNavbar';
import AboutSection from './components/AboutSection';
import CoreValuesSection from './components/CoreValuesSection';
import MissionVisionSection from './components/MissionVisionSection';
import ColorPaletteSection from './components/ColorPaletteSection';
import TypographySection from './components/TypographySection';
import BrandApplicationsSection from './components/BrandApplicationsSection';
import ImagerySection from './components/ImagerySection';
import FooterSection from './components/FooterSection';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-transparent min-h-screen text-white font-sans selection:bg-brand-blue selection:text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-blue origin-left z-50"
        style={{ scaleX }}
      />
      <IslandNavbar />
      <HeroSection />
      <AboutSection />
      <CoreValuesSection />
      <MissionVisionSection />
      <ColorPaletteSection />
      <TypographySection />
      <BrandApplicationsSection />
      <ImagerySection />
      <FooterSection />
    </div>
  );
}
