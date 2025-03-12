
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
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
      <div className="fixed inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
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
