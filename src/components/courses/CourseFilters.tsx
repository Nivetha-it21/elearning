import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

interface CourseFiltersProps {
  onFilterChange: (filters: any) => void;
}

const CourseFilters = ({ onFilterChange }: CourseFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <div className="relative flex-grow mb-4 md:mb-0">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          />
        </div>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-gray-700 md:hidden"
        >
          <Filter className="h-5 w-5 mr-2" />
          Filters
        </button>
        
        <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-4 mt-4 md:mt-0`}>
          <select className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500">
            <option value="">Price Range</option>
            <option value="free">Free</option>
            <option value="paid">Paid</option>
          </select>
          
          <select className="w-full md:w-auto mt-2 md:mt-0 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500">
            <option value="">Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          
          <select className="w-full md:w-auto mt-2 md:mt-0 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500">
            <option value="">Rating</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default CourseFilters;