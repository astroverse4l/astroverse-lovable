
import React from 'react';
import { Atom } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';
import { AetherProps } from './placeholder';

const Aether = () => {
  // Create sections from vision data
  const sections = AetherProps.vision.map((vision, index) => ({
    title: `Vision ${index + 1}`,
    content: vision
  }));

  return (
    <ProjectDetailTemplate
      {...AetherProps}
      icon={<Atom className="h-8 w-8 text-white" />}
      sections={sections}
    />
  );
};

export default Aether;
