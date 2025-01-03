import React from 'react';
import CourseFilters from '../components/courses/CourseFilters';
import CourseCard from '../components/courses/CourseCard';

const courses = [
  {
    title: 'Complete Web Development Bootcamp',
    instructor: {
      name: 'John Smith',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    price: 99.99,
    rating: 4.8,
    level: 'Beginner',
  },
  {
    title: 'Advanced Machine Learning',
    instructor: {
      name: 'Emily Chen',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    price: 149.99,
    rating: 4.9,
    level: 'Advanced',
  },
  // Add more courses as needed
];

const Courses = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Explore Our Courses
          </h1>
          <p className="text-xl text-gray-600">
            Learn from industry experts and advance your career
          </p>
        </div>

        <CourseFilters onFilterChange={() => {}} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;