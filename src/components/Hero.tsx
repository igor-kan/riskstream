
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-green-600/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          AI-Powered Insurance Platform
        </div>
        
        {/* Main Headline */}
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-green-700 bg-clip-text text-transparent mb-6 leading-tight">
          Insurance<br />
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Reimagined
          </span>
        </h1>
        
        {/* Tagline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
          Instant, intelligent, AI-powered.
        </p>
        
        {/* Subtext */}
        <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
          Get covered in under 2 minutes with our AI-native platform. No brokers, no paperwork, no waiting on hold. 
          Just smart insurance that adapts to your life.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Get Instant Quote
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
          >
            See How It Works
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">< 2 min</div>
            <div className="text-gray-500">Policy Issuance</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
            <div className="text-gray-500">AI Claims Processing</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <div className="text-gray-500">Digital Experience</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};
