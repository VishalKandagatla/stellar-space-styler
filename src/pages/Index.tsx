
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Product />
      <SolarDashboardPreview />
      <Mission />
      <Values />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
