"use client";
import Banner from "../components/Banner";
import HeroSection from "../components/HeroSection";
import QualitiesBadges from "../components/QualitiesBadges";
import ProjectShowcase from "../components/ProjectShowcase";
import MethodSection from "../components/MethodSection";
import Separator from "../components/Separator";
import ServicesSection from "../components/ServicesSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-start">
      <Banner />
      <HeroSection />
      <QualitiesBadges />
      <Separator />
      <ProjectShowcase />
      <Separator />
      <MethodSection />
      <Separator />
      <ServicesSection />
      <Separator />
      <Footer />
    </main>
  );
}
