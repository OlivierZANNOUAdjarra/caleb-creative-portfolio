import HeroSection from '@/components/HeroSection';
import StatsCounter from '@/components/StatsCounter';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ToolsSection from '@/components/ToolsSection';
import FaqSection from '@/components/FaqSection';
import ContactSection from '@/components/ContactSection';
import CommentsSection from '@/components/CommentsSection';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <StatsCounter />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <PortfolioSection />
      <SectionDivider />
      <ToolsSection />
      <SectionDivider />
      <FaqSection />
      <SectionDivider />
      <ContactSection />
      <SectionDivider />
      <CommentsSection />
    </main>
  );
}