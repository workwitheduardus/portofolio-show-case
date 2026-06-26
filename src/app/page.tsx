"use client"
import Navbar from "./home/partials/Navbar";
import Hero from "./home/partials/Hero";
import ServicesSection from "./home/partials/Service";
import AboutSection from "./home/partials/About";
import SkillsSection from "./home/partials/Skill";
import WorkingSection from "./home/partials/Working";
import ExperienceSection from "./home/partials/Experience";
import Project from "./home/partials/Portofolio";
import Portofolio from "./home/partials/Portofolio";
import TestimonialsSection from "./home/partials/Testimonials";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <SkillsSection />
        <WorkingSection />
        <ExperienceSection />
        <Portofolio />
        <TestimonialsSection />
      </main>
    </div>
  );
}