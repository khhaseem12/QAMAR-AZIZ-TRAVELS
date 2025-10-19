import React from 'react';
import { VALUE_PROPOSITIONS } from '../constants';

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-sandy-beige/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ocean-blue-900 mb-4">Why Trust Global Getaways?</h2>
            <p className="text-ocean-blue-700/90 mb-6">
              With over a decade of experience in crafting bespoke travel experiences, we believe in a simple philosophy: travel should be personal, seamless, and transformative. Our dedicated agents are passionate explorers themselves, bringing firsthand knowledge and meticulous attention to detail to every itinerary.
            </p>
            <p className="text-ocean-blue-700/90">
              From securing exclusive deals to providing 24/7 on-the-ground support, we're with you every step of the way. We don't just plan trips; we build memories that last a lifetime.
            </p>
          </div>
          <div className="space-y-6">
            {VALUE_PROPOSITIONS.map((prop) => (
              <div key={prop.title} className="flex items-start p-6 bg-white rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105">
                <div className="flex-shrink-0 bg-accent-teal/10 p-3 rounded-full mr-5">
                   <prop.icon className="h-7 w-7 text-accent-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ocean-blue-900">{prop.title}</h3>
                  <p className="text-ocean-blue-700/90 mt-1">{prop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;