
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Product from "@/components/Product";
import SolarDashboardPreview from "@/components/SolarDashboardPreview";
import Mission from "@/components/Mission";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] overflow-hidden">
      {/* Dynamic background elements */}
      <div className="fixed inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>
      
      {/* Animated gradient orbs in background */}
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-fin-blue/10 rounded-full blur-3xl opacity-70 animate-float"></div>
      <div className="fixed top-1/4 -right-20 w-72 h-72 bg-fin-purple/10 rounded-full blur-3xl opacity-70 animate-float [animation-delay:2s]"></div>
      <div className="fixed bottom-20 left-20 w-80 h-80 bg-fin-green/10 rounded-full blur-3xl opacity-70 animate-float [animation-delay:4s]"></div>
      <div className="fixed bottom-40 right-40 w-64 h-64 bg-fin-yellow/10 rounded-full blur-3xl opacity-70 animate-float [animation-delay:6s]"></div>
      
      <Navbar />
      <main className="relative">
        <Hero />
        <WhatWeDo />
        <Product />
        <SolarDashboardPreview />
        <Mission />
        <Values />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
