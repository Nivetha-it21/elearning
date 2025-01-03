import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

const TeamMember = ({ name, role, image, bio, social }: TeamMemberProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-teal-600 mb-2">{role}</p>
      <p className="text-gray-600 mb-4">{bio}</p>
      <div className="flex justify-center space-x-4">
        {social.linkedin && (
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-600 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        )}
        {social.twitter && (
          <a
            href={social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-600 transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamMember;