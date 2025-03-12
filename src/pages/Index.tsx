
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import MarketTrends from "@/components/MarketTrends";
import Portfolio from "@/components/Portfolio";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Dashboard />
      <MarketTrends />
      <Portfolio />
      <News />
      <Footer />
    </div>
  );
};

export default Index;
