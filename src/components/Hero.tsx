import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <section className="relative min-h-[800px] flex items-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-secondary/40"></div>
      
      {/* Decorative geometric elements */}
      <div className="absolute inset-0">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30"></div>
        
        {/* Colorful gradient orbs */}
        <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-fin-blue/10 to-fin-green/10 blur-3xl"></div>
        <div className="absolute bottom-40 right-[5%] w-80 h-80 rounded-full bg-gradient-to-tr from-fin-purple/10 to-fin-blue/10 blur-3xl"></div>
        <div className="absolute top-1/3 right-[30%] w-40 h-40 rounded-full bg-gradient-to-r from-fin-yellow/10 to-fin-green/10 blur-2xl"></div>
      </div>
      
      {/* Hero content */}
      <div className="container relative z-10">
        <div className="space-y-5 max-w-xl">
          <Badge className="w-fit gap-2 text-sm px-3 py-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.915c.547-.153 1.108.157 1.261.704l1.709 6.076a.75.75 0 01-1.159.951L12 14.114l-1.889 1.632a.75.75 0 01-1.159-.951l1.709-6.076c.152-.547.713-.857 1.26-.704zm-4.663 0c.547-.153 1.108.157 1.261.704l1.709 6.076a.75.75 0 01-1.159.951L6 14.114 4.111 15.746a.75.75 0 01-1.159-.951l1.709-6.076c.152-.547.713-.857 1.26-.704z"
                clipRule="evenodd"
              />
            </svg>
            AI Powered
          </Badge>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Unlock the Future of Solar Energy Investments
          </h1>
          <p className="text-lg text-muted-foreground">
            Harnessing the power of AI to revolutionize solar energy
            investment. Discover, analyze, and invest in sustainable energy
            projects with confidence.
          </p>
          <div className="flex gap-3">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
