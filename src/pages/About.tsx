import React from 'react';
import TeamMember from '../components/about/TeamMember';

const team = [
  {
    name: 'David Wilson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Former Google engineer with a passion for education.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Sarah Chen',
    role: 'Head of Content',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    bio: 'Education expert with 10+ years of experience.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  // Add more team members as needed
];

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-teal-700 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-white mb-4">
            Empowering Learners Worldwide
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Our mission is to provide quality education that's accessible to everyone,
            anywhere in the world.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe that education should be accessible to everyone. Our platform
            combines cutting-edge technology with expert instruction to deliver an
            unparalleled learning experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { number: '10,000+', label: 'Active Students' },
            { number: '500+', label: 'Expert Instructors' },
            { number: '1,000+', label: 'Courses Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-teal-600">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals behind EduLearn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;