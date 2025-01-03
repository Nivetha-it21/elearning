import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Web Developer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
    quote: 'The courses here transformed my career. The instructors are amazing and the content is top-notch.',
  },
  {
    name: 'Michael Chen',
    role: 'Data Scientist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80',
    quote: 'I learned more in 3 months here than I did in a year of self-study. Highly recommended!',
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            What our students say
          </h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;