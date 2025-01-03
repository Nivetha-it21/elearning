import React from 'react';
import { Calendar } from 'lucide-react';
import Button from '../common/Button';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
}

const BlogCard = ({ title, excerpt, image, date, category, slug }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="text-sm font-medium text-teal-600">{category}</span>
          <span className="mx-2 text-gray-300">•</span>
          <div className="flex items-center text-gray-500 text-sm">
            <Calendar className="h-4 w-4 mr-1" />
            {date}
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        <Button href={`/blog/${slug}`} variant="outline">Read More</Button>
      </div>
    </div>
  );
};

export default BlogCard;