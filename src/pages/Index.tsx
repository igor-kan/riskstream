
import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { QuoteDemo } from '../components/QuoteDemo';
import { Testimonials } from '../components/Testimonials';
import { CTA } from '../components/CTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Hero />
      <QuoteDemo />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Index;
