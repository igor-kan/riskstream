
import React from 'react';
import { Button } from '@/components/ui/button';

export const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Experience the Future?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join thousands who've already switched to AI-powered insurance. 
          Get your instant quote and see why traditional insurance is becoming obsolete.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Get Instant Quote
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
          >
            Schedule Demo
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">2 minutes</div>
            <div className="text-blue-100">Average policy time</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">40% less</div>
            <div className="text-blue-100">Than traditional insurers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-blue-100">Customer satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};
