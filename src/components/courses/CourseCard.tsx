import React from 'react';
import { Star } from 'lucide-react';
import Button from '../common/Button';

interface CourseCardProps {
  title: string;
  instructor: {
    name: string;
    image: string;
  };
  thumbnail: string;
  price: number;
  rating: number;
  level: string;
}

const CourseCard = ({ title, instructor, thumbnail, price, rating, level }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={thumbnail} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-teal-600">{level}</span>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center mb-4">
          <img src={instructor.image} alt={instructor.name} className="h-8 w-8 rounded-full" />
          <span className="ml-2 text-sm text-gray-600">{instructor.name}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            {price === 0 ? 'Free' : `$${price}`}
          </span>
          <Button variant="primary" className="text-sm">Enroll Now</Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;