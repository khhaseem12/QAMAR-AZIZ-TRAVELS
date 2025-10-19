
import React from 'react';
import type { Testimonial } from '../types';
import { StarIcon } from './icons/Icons';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { quote, name, rating } = testimonial;

  return (
    <div className="bg-sandy-beige/60 p-8 rounded-2xl shadow-md flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-2">
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-accent-gold' : 'text-ocean-blue-700/30'}`}
          />
        ))}
      </div>
      <blockquote className="text-ocean-blue-800 italic flex-grow">
        "{quote}"
      </blockquote>
      <footer className="mt-6">
        <p className="font-bold text-ocean-blue-900">— {name}</p>
      </footer>
    </div>
  );
};

export default TestimonialCard;
