import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const TestimonialCard = ({ name, role, image, quote }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center">
        <img
          className="h-12 w-12 rounded-full"
          src={image}
          alt={name}
        />
        <div className="ml-4">
          <h4 className="text-lg font-bold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{quote}</p>
    </div>
  );
};

export default TestimonialCard;