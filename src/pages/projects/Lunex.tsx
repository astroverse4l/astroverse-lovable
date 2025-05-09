
import React from 'react';
import { Star } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';
import { LunexProps } from './placeholder';

const Lunex = () => {
  // Create sections from vision data
  const sections = LunexProps.vision.map((vision, index) => ({
    title: `Vision ${index + 1}`,
    content: vision
  }));

  return (
    <ProjectDetailTemplate
      {...LunexProps}
      icon={<Star className="h-8 w-8 text-white" />}
      sections={sections}
    />
  );
};

export default Lunex;
