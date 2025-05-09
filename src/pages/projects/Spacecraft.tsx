
import React from 'react';
import { Triangle } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';
import { SpacecraftProps } from './placeholder';

const Spacecraft = () => {
  // Create sections from vision data
  const sections = SpacecraftProps.vision.map((vision, index) => ({
    title: `Vision ${index + 1}`,
    content: vision
  }));

  return (
    <ProjectDetailTemplate
      {...SpacecraftProps}
      icon={<Triangle className="h-8 w-8 text-white" />}
      sections={sections}
    />
  );
};

export default Spacecraft;
