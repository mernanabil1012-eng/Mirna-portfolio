import Sidebar from "@/components/Sidebar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JourneySection from "@/components/JourneySection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="ml-20">
        <HeroSection />
        <AboutSection />
        <JourneySection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
