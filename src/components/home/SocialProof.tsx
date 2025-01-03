import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'John Anderson',
    role: 'Software Engineer at Google',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
    text: 'The quality of instruction is outstanding. I learned more in 3 months than I did in a year of self-study.',
  },
  {
    name: 'Lisa Chen',
    role: 'UX Designer at Apple',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
    text: 'The practical projects and real-world applications have been invaluable for my career growth.',
  },
  {
    name: 'Mark Thompson',
    role: 'Data Scientist at Amazon',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
    text: 'Excellent platform for learning advanced concepts. The instructors are true experts in their fields.',
  },
];

const SocialProof = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">What Our Students Say</h2>
          <p className="mt-4 text-xl text-gray-600">Join thousands of satisfied learners worldwide</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;