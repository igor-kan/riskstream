
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

export const QuoteDemo = () => {
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    { label: "Basic Info", time: "5 seconds", status: "complete" },
    { label: "AI Risk Analysis", time: "10 seconds", status: "complete" },
    { label: "Dynamic Pricing", time: "3 seconds", status: "complete" },
    { label: "Policy Generated", time: "2 seconds", status: "complete" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % steps.length);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Watch AI Work Its Magic
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI underwrites and prices your policy in real-time. 
            What takes traditional insurers days, we do in under 2 minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Demo Steps */}
          <div className="space-y-6">
            {steps.map((stepItem, index) => (
              <div 
                key={index}
                className={`flex items-center p-6 rounded-xl transition-all duration-500 ${
                  index <= step 
                    ? 'bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200' 
                    : 'bg-gray-50 border-2 border-gray-200'
                }`}
              >
                <div className={`flex items-center justify-center w-12 h-12 rounded-full mr-4 transition-all duration-500 ${
                  index <= step 
                    ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white' 
                    : 'bg-gray-300 text-gray-500'
                }`}>
                  {index <= step ? <Check className="w-6 h-6" /> : <span className="font-bold">{index + 1}</span>}
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold text-lg ${index <= step ? 'text-blue-700' : 'text-gray-500'}`}>
                    {stepItem.label}
                  </h3>
                  <p className="text-gray-500">{stepItem.time}</p>
                </div>
                {index === step && (
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                )}
              </div>
            ))}
          </div>

          {/* Quote Card */}
          <Card className="p-8 shadow-2xl border-0 bg-gradient-to-br from-white to-blue-50">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Renters Insurance</h3>
              <p className="text-gray-600">New York, NY - Studio Apartment</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Personal Property</span>
                <span className="font-semibold">$25,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Liability Coverage</span>
                <span className="font-semibold">$100,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Medical Payments</span>
                <span className="font-semibold">$1,000</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between items-center text-lg">
                <span className="font-semibold text-gray-900">Monthly Premium</span>
                <span className={`font-bold text-2xl transition-all duration-500 ${
                  isAnimating ? 'text-green-600 scale-110' : 'text-blue-600'
                }`}>
                  $18.50
                </span>
              </div>
            </div>

            <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white py-3 text-lg font-semibold rounded-xl">
              Get This Policy Now
            </Button>

            <p className="text-sm text-gray-500 text-center mt-4">
              ✓ Instant coverage • ✓ No waiting period • ✓ Cancel anytime
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
