import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { CertificateSection } from "../components/CertificateSection";
import { AcademicProjectsSection } from "../components/AcademicProjectsSection";
import GallerySection from "../components/GallerySection";
import BadgesSection from "../components/BadgesSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
     {/* <ThemeToggle/> */}
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificateSection/>
        <AcademicProjectsSection/>
        <GallerySection/>
        <BadgesSection/>

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};