import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedCareers } from '@/components/home/FeaturedCareers';
import { ResourcesSection } from '@/components/home/ResourcesSection';
import { ARVRSection } from '@/components/home/ARVRSection';
import { AppDownloadSection } from '@/components/home/AppDownloadSection';

const Home = () => {
  return (
    <div className="min-h-full">
      <HeroSection />
      <FeaturedCareers />
      <ResourcesSection />
      <ARVRSection />
      <AppDownloadSection />
    </div>
  );
};

export default Home;
