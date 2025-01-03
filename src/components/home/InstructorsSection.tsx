import React from 'react';
import InstructorCard from './InstructorCard';

const instructors = [
  {
    name: 'Dr. Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    expertise: 'Web Development & AI',
    rating: 4.9,
    studentsCount: 15000,
    coursesCount: 12,
  },
  {
    name: 'Prof. Michael Chen',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    expertise: 'Data Science & Machine Learning',
    rating: 4.8,
    studentsCount: 12000,
    coursesCount: 8,
  },
  {
    name: 'Emily Rodriguez',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    expertise: 'UX Design & Product Management',
    rating: 4.9,
    studentsCount: 10000,
    coursesCount: 6,
  },
];

const InstructorsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Meet Our Expert Instructors</h2>
          <p className="mt-4 text-xl text-gray-600">Learn from industry leaders with years of experience</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <InstructorCard key={index} {...instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;