
import React from 'react';
import { Satellite } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';
import { SyntrilProps } from './placeholder';

const Syntril = () => {
  // Create sections from vision data
  const sections = SyntrilProps.vision.map((vision, index) => ({
    title: `Vision ${index + 1}`,
    content: vision
  }));

  return (
    <ProjectDetailTemplate
      {...SyntrilProps}
      icon={<Satellite className="h-8 w-8 text-white" />}
      sections={sections}
    />
  );
};

export default Syntril;
