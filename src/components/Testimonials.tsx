
import React from 'react';
import { Card } from '@/components/ui/card';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "NYC Renter",
      quote: "Got my renters insurance in literally 90 seconds. The AI explained everything perfectly and I'm paying 40% less than my old policy.",
      rating: 5,
      avatar: "👩‍💻"
    },
    {
      name: "Marcus Rodriguez",
      role: "Digital Nomad",
      quote: "Travel insurance that actually makes sense. When my flight got cancelled, I filed a claim through the app and got paid the same day.",
      rating: 5,
      avatar: "🧳"
    },
    {
      name: "Emily Davis",
      role: "Pet Owner",
      quote: "My dog needed emergency surgery and Riskstream covered it instantly. No forms, no waiting - just upload the vet bill and done.",
      rating: 5,
      avatar: "🐕"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Loved by Modern Consumers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what people are saying about their experience with AI-powered insurance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-green-50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white text-xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
