import React from 'react';
import BlogCard from '../components/blog/BlogCard';

const blogs = [
  {
    title: 'How to Master Web Development in 2024',
    excerpt: 'Learn the essential skills and tools needed to become a successful web developer in 2024.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    date: 'Mar 15, 2024',
    category: 'Web Development',
    slug: 'master-web-development-2024',
  },
  {
    title: 'The Future of AI in Education',
    excerpt: 'Discover how artificial intelligence is transforming the education landscape.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    date: 'Mar 12, 2024',
    category: 'Technology',
    slug: 'ai-in-education',
  },
  // Add more blog posts as needed
];

const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Latest Articles
          </h1>
          <p className="text-xl text-gray-600">
            Stay updated with the latest trends in education and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;