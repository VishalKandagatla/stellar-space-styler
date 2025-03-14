
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { NewsletterHero } from '@/components/newsletter/NewsletterHero';
import { MarketInsights } from '@/components/newsletter/MarketInsights';
import { NewsletterSignup } from '@/components/newsletter/NewsletterSignup';
import MarketTrends from '@/components/market/MarketTrends';

const Newsletter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <NewsletterHero />
        <MarketInsights />
        <MarketTrends />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Newsletter;
