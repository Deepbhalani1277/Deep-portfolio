"use client"

import { CursorFollower } from "@/components/cursor-follower"
import { FloatingParticles } from "@/components/floating-particles"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { ProjectsSection } from "@/components/projects-section"
import { HackathonsSection } from "@/components/hackathons-section"
import { GithubSection } from "@/components/github-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Custom cursor */}
      <CursorFollower />
      
      {/* Floating particles background */}
      <FloatingParticles />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <HackathonsSection />
      <GithubSection />
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
