import React from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import InstructorsSection from '../components/home/InstructorsSection';
import BlogPreview from '../components/home/BlogPreview';
import FAQSection from '../components/home/FAQSection';
import SocialProof from '../components/home/SocialProof';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <FeaturesSection />
      <InstructorsSection />
      <BlogPreview />
      <FAQSection />
      <SocialProof />
      <CTASection />
    </div>
  );
};

export default Home;