
import React from 'react';
import { Satellite } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';
import { TarsNetProps } from './placeholder';

const TarsNet = () => {
  // Create sections from vision data
  const sections = TarsNetProps.vision.map((vision, index) => ({
    title: `Vision ${index + 1}`,
    content: vision
  }));

  return (
    <ProjectDetailTemplate
      {...TarsNetProps}
      icon={<Satellite className="h-8 w-8 text-white" />}
      sections={sections}
    />
  );
};

export default TarsNet;
