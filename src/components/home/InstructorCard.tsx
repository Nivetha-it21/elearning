import React from 'react';
import { Star, Users } from 'lucide-react';
import Button from '../common/Button';

interface InstructorCardProps {
  name: string;
  image: string;
  expertise: string;
  rating: number;
  studentsCount: number;
  coursesCount: number;
}

const InstructorCard = ({ name, image, expertise, rating, studentsCount, coursesCount }: InstructorCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center space-x-4">
        <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover" />
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-teal-600">{expertise}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600">{rating}</span>
        </div>
        <div className="flex items-center">
          <Users className="h-4 w-4 text-gray-400" />
          <span className="ml-1 text-sm text-gray-600">{studentsCount} students</span>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-600">{coursesCount} courses</p>
      </div>
      <Button href="/instructors" variant="outline" className="w-full mt-4">
        View Profile
      </Button>
    </div>
  );
};

export default InstructorCard;