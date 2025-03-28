
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import Introduction from "@/components/about/Introduction";
import ServiceDomains from "@/components/about/ServiceDomains";
import Commitment from "@/components/about/Commitment";
import TeamMembers from "@/components/about/TeamMembers";
import Timeline from "@/components/about/Timeline";
import AboutCTA from "@/components/about/AboutCTA";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] overflow-hidden">
      {/* Dynamic background elements */}
      <div className="fixed inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-80"></div>
      
      {/* Animated gradient orbs in background */}
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-fin-blue/40 rounded-full blur-3xl opacity-90 animate-float"></div>
      <div className="fixed top-1/4 -right-20 w-80 h-80 bg-fin-purple/40 rounded-full blur-3xl opacity-90 animate-float [animation-delay:2s]"></div>
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-fin-green/40 rounded-full blur-3xl opacity-90 animate-float [animation-delay:4s]"></div>
      <div className="fixed bottom-40 right-40 w-72 h-72 bg-fin-yellow/40 rounded-full blur-3xl opacity-90 animate-float [animation-delay:6s]"></div>
      
      <Navbar />
      <main className="relative z-10">
        <AboutHero />
        <Introduction />
        <ServiceDomains />
        <Timeline />
        <Commitment />
        <TeamMembers />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
};

export default About;
