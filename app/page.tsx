import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ToolsSection from '@/components/ToolsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import CommentsSection from '@/components/CommentsSection';

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ToolsSection />
      <FaqSection />
      <ContactSection />
      <CommentsSection />
    </main>
  );
}