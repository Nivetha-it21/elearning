import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="relative">
      <div className="absolute h-12 w-12 flex items-center justify-center rounded-md bg-teal-50">
        {icon}
      </div>
      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{title}</p>
      <p className="mt-2 ml-16 text-base text-gray-500">{description}</p>
    </div>
  );
};

export default FeatureCard;