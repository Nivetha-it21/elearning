import React from 'react';
import { BookOpen, Clock, Award, Users } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    icon: <BookOpen className="h-6 w-6 text-teal-600" />,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of experience',
  },
  {
    icon: <Clock className="h-6 w-6 text-teal-600" />,
    title: 'Flexible Learning',
    description: 'Study at your own pace, anywhere and anytime',
  },
  {
    icon: <Award className="h-6 w-6 text-teal-600" />,
    title: 'Certification',
    description: 'Earn recognized certificates upon course completion',
  },
  {
    icon: <Users className="h-6 w-6 text-teal-600" />,
    title: 'Community',
    description: 'Join a global community of learners and experts',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;