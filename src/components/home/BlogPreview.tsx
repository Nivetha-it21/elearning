import React from 'react';
import { ArrowRight } from 'lucide-react';
import BlogCard from '../blog/BlogCard';
import Button from '../common/Button';

const recentPosts = [
  {
    title: 'The Future of Online Learning in 2024',
    excerpt: 'Discover how AI and virtual reality are transforming the education landscape.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    date: 'Mar 18, 2024',
    category: 'Education',
    slug: 'future-online-learning-2024',
  },
  {
    title: 'Essential Skills for Remote Work Success',
    excerpt: 'Learn the key skills needed to thrive in the remote work environment.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80',
    date: 'Mar 16, 2024',
    category: 'Career Development',
    slug: 'remote-work-skills',
  },
];

const BlogPreview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">Latest from Our Blog</h2>
            <p className="mt-4 text-xl text-gray-600">Stay updated with the latest in education and technology</p>
          </div>
          <Button href="/blog" variant="outline" className="hidden md:flex items-center">
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recentPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button href="/blog" variant="outline" className="inline-flex items-center">
            View All Posts
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;