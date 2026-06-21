import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/sections/hero-section";
import dynamic from "next/dynamic";

const AboutSection = dynamic(() => import("@/components/sections/about-section").then(mod => mod.AboutSection));
const SkillsSection = dynamic(() => import("@/components/sections/skills-section").then(mod => mod.SkillsSection));
const ProjectsSection = dynamic(() => import("@/components/sections/projects-section").then(mod => mod.ProjectsSection));
const ServicesSection = dynamic(() => import("@/components/sections/services-section").then(mod => mod.ServicesSection));
const WhyChooseSection = dynamic(() => import("@/components/sections/why-choose-section").then(mod => mod.WhyChooseSection));
const ChatSection = dynamic(() => import("@/components/sections/chat-section").then(mod => mod.ChatSection));
const ContactSection = dynamic(() => import("@/components/sections/contact-section").then(mod => mod.ContactSection));
const Footer = dynamic(() => import("@/components/footer").then(mod => mod.Footer));
import { PageLoader } from "@/components/page-loader";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PageLoader>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ServicesSection />
        <WhyChooseSection />
        <ChatSection />
        <ContactSection />
        <Footer />
      </PageLoader>
    </main>
  );
}
