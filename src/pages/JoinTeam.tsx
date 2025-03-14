
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ApplicationForm from "@/components/career/ApplicationForm";

const JoinTeam = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  
  const handleApplicationSuccess = () => {
    setShowApplicationForm(false);
    setSuccessMessage(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
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
      <main className="relative z-10 pt-24 md:pt-32">
        <SectionContainer>
          <div className="max-w-4xl mx-auto">
            {successMessage ? (
              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 mb-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-4">Application Submitted Successfully!</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Thank you for your interest in joining our team! We've received your application and will review it shortly. 
                  We'll be in touch with you regarding next steps.
                </p>
                <Button 
                  onClick={() => setSuccessMessage(false)} 
                  size="lg"
                  className="bg-gradient-to-r from-primary to-fin-blue text-white"
                >
                  Back to Careers
                </Button>
              </div>
            ) : (
              <>
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Be part of our mission to lead transformative change toward a sustainable future by unifying advanced technologies under one visionary platform.
                  </p>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-fin-blue">Why Join Finsat?</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-fin-blue/5 p-6 rounded-xl hover:bg-fin-blue/10 transition-colors">
                      <h3 className="text-xl font-semibold mb-3">Meaningful Impact</h3>
                      <p className="text-muted-foreground">Work on projects that directly contribute to environmental sustainability and social welfare on a global scale.</p>
                    </div>
                    
                    <div className="bg-fin-purple/5 p-6 rounded-xl hover:bg-fin-purple/10 transition-colors">
                      <h3 className="text-xl font-semibold mb-3">Innovation Focus</h3>
                      <p className="text-muted-foreground">Be at the forefront of technological innovation in sustainability, working with cutting-edge tools and methodologies.</p>
                    </div>
                    
                    <div className="bg-fin-green/5 p-6 rounded-xl hover:bg-fin-green/10 transition-colors">
                      <h3 className="text-xl font-semibold mb-3">Global Collaboration</h3>
                      <p className="text-muted-foreground">Join a diverse team of experts from around the world, collaborating across disciplines and cultures.</p>
                    </div>
                    
                    <div className="bg-fin-yellow/5 p-6 rounded-xl hover:bg-fin-yellow/10 transition-colors">
                      <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
                      <p className="text-muted-foreground">Develop your skills and career in a supportive environment that values continuous learning and professional development.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 mb-8">
                  <h2 className="text-2xl font-bold mb-6 text-fin-blue">Current Openings</h2>
                  
                  <div className="space-y-6">
                    <div className="border border-gray-200 p-6 rounded-xl hover:border-fin-blue/30 transition-colors">
                      <div className="flex justify-between items-start flex-wrap gap-4">
                        <div>
                          <h3 className="text-xl font-semibold">Environmental Data Scientist</h3>
                          <p className="text-fin-blue">Remote • Full-time</p>
                        </div>
                        <Button 
                          onClick={() => setShowApplicationForm(true)} 
                          className="bg-gradient-to-r from-primary to-fin-blue text-white"
                        >
                          Apply Now
                        </Button>
                      </div>
                      <p className="mt-4 text-muted-foreground">Analyze environmental datasets and develop models to support our sustainability platforms.</p>
                    </div>
                    
                    <div className="border border-gray-200 p-6 rounded-xl hover:border-fin-purple/30 transition-colors">
                      <div className="flex justify-between items-start flex-wrap gap-4">
                        <div>
                          <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                          <p className="text-fin-purple">Remote • Full-time</p>
                        </div>
                        <Button 
                          onClick={() => setShowApplicationForm(true)} 
                          className="bg-gradient-to-r from-primary to-fin-purple text-white"
                        >
                          Apply Now
                        </Button>
                      </div>
                      <p className="mt-4 text-muted-foreground">Build and maintain our core platform features with modern web technologies.</p>
                    </div>
                    
                    <div className="border border-gray-200 p-6 rounded-xl hover:border-fin-green/30 transition-colors">
                      <div className="flex justify-between items-start flex-wrap gap-4">
                        <div>
                          <h3 className="text-xl font-semibold">Sustainability Consultant</h3>
                          <p className="text-fin-green">Hybrid • Full-time</p>
                        </div>
                        <Button 
                          onClick={() => setShowApplicationForm(true)} 
                          className="bg-gradient-to-r from-primary to-fin-green text-white"
                        >
                          Apply Now
                        </Button>
                      </div>
                      <p className="mt-4 text-muted-foreground">Advise clients on implementing sustainable practices and utilizing our platform effectively.</p>
                    </div>
                  </div>
                </div>
                
                {showApplicationForm ? (
                  <ApplicationForm 
                    onCancel={() => setShowApplicationForm(false)} 
                    onSuccess={handleApplicationSuccess}
                  />
                ) : (
                  <div className="text-center mt-12">
                    <p className="text-lg mb-6">Don't see a role that fits your skills? We're always looking for talented individuals to join our mission.</p>
                    <Button 
                      size="lg" 
                      onClick={() => setShowApplicationForm(true)}
                      className="bg-gradient-to-r from-primary to-fin-blue text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
                    >
                      Submit General Application
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </SectionContainer>
      </main>
      <Footer />
    </div>
  );
};

export default JoinTeam;
