
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Sparkles, Globe, Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] overflow-hidden">
      {/* Dynamic background elements - background pattern */}
      <div className="fixed inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-80"></div>
      
      {/* Animated gradient orbs in background */}
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-fin-blue/40 rounded-full blur-3xl opacity-90 animate-float"></div>
      <div className="fixed top-1/4 -right-20 w-80 h-80 bg-fin-purple/40 rounded-full blur-3xl opacity-90 animate-float [animation-delay:2s]"></div>
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-fin-green/40 rounded-full blur-3xl opacity-90 animate-float [animation-delay:4s]"></div>
      <div className="fixed bottom-40 right-40 w-72 h-72 bg-fin-yellow/40 rounded-full blur-3xl opacity-90 animate-float [animation-delay:6s]"></div>
      
      <Navbar />
      <main className="relative z-10">
        {/* Hero section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <SectionContainer>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block p-2 px-4 bg-white/90 backdrop-blur-sm rounded-full shadow-sm mb-6 animate-fade-in">
                <span className="text-sm font-medium text-fin-blue flex items-center">
                  <Sparkles className="h-4 w-4 mr-2 text-fin-yellow" />
                  Our Story
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                <span className="bg-gradient-to-r from-primary via-fin-blue to-fin-purple bg-clip-text text-transparent animate-fade-in drop-shadow-sm">
                  About FinSat
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in [animation-delay:200ms]">
                Pioneering the future of sustainable real estate investment through innovative technology and data-driven insights.
              </p>
            </div>
            
            {/* Image section */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl mb-20 animate-fade-in [animation-delay:400ms]">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72" 
                alt="FinSat Team" 
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h2 className="text-3xl font-bold mb-2">Our Team</h2>
                <p className="text-white/80">A diverse group of experts committed to revolutionizing solar investment</p>
              </div>
            </div>
          </SectionContainer>
        </section>
        
        {/* Our story section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-white via-white to-fin-blue/10">
          <SectionContainer>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 text-fin-blue font-semibold">
                    <Building2 className="h-5 w-5" />
                    <span>OUR STORY</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold">From Vision to Reality</h2>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Founded in 2020, FinSat emerged from a vision to transform how investors approach solar potential in real estate. Our founders recognized the untapped opportunities in this sector and built a platform that combines cutting-edge AI technology with comprehensive financial analytics.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    What began as a startup with a handful of passionate experts has grown into a company at the forefront of sustainable investment. Today, FinSat serves clients globally, helping them make data-driven decisions that balance profitability with environmental responsibility.
                  </p>
                  
                  <Button className="group" variant="outline">
                    Learn more about our journey
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="absolute -inset-4 rounded-2xl border-2 border-fin-purple/20 transform rotate-3"></div>
                  <div className="absolute -inset-8 rounded-2xl border-2 border-fin-blue/10 transform -rotate-2"></div>
                  
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
                      alt="Our Beginning" 
                      className="w-full h-[350px] object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SectionContainer>
        </section>
        
        {/* Values section */}
        <section className="py-16 md:py-24">
          <SectionContainer>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-fin-purple font-semibold mb-3">
                <Target className="h-5 w-5" />
                <span>OUR VALUES</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">What Drives Us Forward</h2>
              
              <p className="text-muted-foreground">
                At the core of FinSat are principles that guide every decision we make and every solution we develop.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Globe,
                  title: "Sustainability",
                  description: "We're committed to environmental stewardship, developing solutions that promote renewable energy and reduce carbon footprints."
                },
                {
                  icon: Users,
                  title: "Collaboration",
                  description: "We believe in the power of diverse perspectives, working closely with clients and partners to create innovative solutions."
                },
                {
                  icon: Award,
                  title: "Excellence",
                  description: "We strive for excellence in everything we do, from the accuracy of our data to the usability of our platform."
                }
              ].map((value, index) => (
                <div key={index} className="glass p-8 rounded-2xl shadow-lg group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-fin-blue/20 to-fin-purple/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </SectionContainer>
        </section>
        
        {/* Team section */}
        <section className="py-16 md:py-24 bg-gradient-to-tr from-fin-blue/10 via-white to-fin-purple/10">
          <SectionContainer>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-fin-blue font-semibold mb-3">
                <Users className="h-5 w-5" />
                <span>OUR TEAM</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">Meet the Experts Behind FinSat</h2>
              
              <p className="text-muted-foreground">
                Our diverse team brings together expertise in renewable energy, finance, data science, and technology.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  name: "Dr. Sarah Johnson",
                  title: "Chief Executive Officer",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                },
                {
                  name: "Michael Chen",
                  title: "Chief Technology Officer",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
                },
                {
                  name: "Elena Rodriguez",
                  title: "Head of Data Science",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
                },
                {
                  name: "James Wilson",
                  title: "Financial Director",
                  image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
                }
              ].map((member, index) => (
                <div key={index} className="glass p-6 rounded-xl shadow-md group hover:shadow-lg transition-all duration-300">
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.title}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button>
                Join Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </SectionContainer>
        </section>
        
        {/* CTA section */}
        <section className="py-16 md:py-24">
          <SectionContainer>
            <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Investment Strategy?</h2>
                <p className="text-muted-foreground">
                  Discover how FinSat can help you identify and leverage solar potential in your real estate investments.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-fin-blue text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-primary/30 backdrop-blur">
                  Contact Our Team
                </Button>
              </div>
            </div>
          </SectionContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
