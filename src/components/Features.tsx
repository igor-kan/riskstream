
import React from 'react';
import { Card } from '@/components/ui/card';

export const Features = () => {
  const features = [
    {
      title: "AI-Powered Underwriting",
      description: "Our AI analyzes thousands of data points in seconds to offer you the most accurate pricing possible.",
      icon: "🧠",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Instant Policy Issuance",
      description: "Get fully executed policies and certificates in under 2 minutes. No human intervention required.",
      icon: "⚡",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Smart Claims Processing",
      description: "Upload photos, chat with AI, or call us. Most claims are processed and paid within hours.",
      icon: "🤖",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Dynamic Risk Pricing",
      description: "Your premium adjusts based on real-world data and your behavior. Safe customers save more.",
      icon: "📊",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Transparent Coverage",
      description: "Plain English policies with interactive explanations. No fine print surprises.",
      icon: "🔍",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "24/7 AI Support",
      description: "Get answers instantly from our AI assistant. Escalate to humans when needed.",
      icon: "💬",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Insurance Built for the Future
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every aspect of our platform is designed with AI-first principles, 
            delivering experiences that traditional insurers simply can't match.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                <span className="text-2xl">{feature.icon}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Trusted & Secure</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="font-semibold text-gray-700">SOC 2 Compliant</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="font-semibold text-gray-700">256-bit Encryption</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="font-semibold text-gray-700">State Licensed</span>
            </div>
            <div className="bg-white px-6 py-3 rounded-lg shadow-sm">
              <span className="font-semibold text-gray-700">99.9% Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
