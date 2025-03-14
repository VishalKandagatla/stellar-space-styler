
import React from 'react';
import { Mail, Globe, ArrowRight } from 'lucide-react';
import { SectionContainer } from '@/components/ui/section-container';
import { Button } from '@/components/ui/button';

export const NewsletterHero = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <SectionContainer background="gradient-3">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Mail className="h-4 w-4" />
            <span className="text-sm font-medium">Market Newsletter</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Stay Informed with <span className="text-primary">Global Market</span> Insights
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Get localized market updates, investment opportunities, and expert analysis delivered directly to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              Subscribe Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Globe className="h-4 w-4" />
              View Past Newsletters
            </Button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
