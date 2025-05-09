
import React from 'react';
import { Layers } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';
import { AstralStudiosProps } from './placeholder';

const AstralStudios = () => {
  // Create sections from vision data
  const sections = AstralStudiosProps.vision.map((vision, index) => ({
    title: `Vision ${index + 1}`,
    content: vision
  }));

  return (
    <ProjectDetailTemplate
      {...AstralStudiosProps}
      icon={<Layers className="h-8 w-8 text-white" />}
      sections={sections}
    />
  );
};

export default AstralStudios;
