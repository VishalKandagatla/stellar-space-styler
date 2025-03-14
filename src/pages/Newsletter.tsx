
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { NewsletterHero } from '@/components/newsletter/NewsletterHero';
import { MarketInsights } from '@/components/newsletter/MarketInsights';
import { NewsletterSignup } from '@/components/newsletter/NewsletterSignup';

const Newsletter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <NewsletterHero />
        <MarketInsights />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Newsletter;
