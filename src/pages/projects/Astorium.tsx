
import React from 'react';
import { Rocket } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';
import { AstoriumProps } from './placeholder';

const Astorium = () => {
  // Create sections from vision data
  const sections = AstoriumProps.vision.map((vision, index) => ({
    title: `Vision ${index + 1}`,
    content: vision
  }));

  return (
    <ProjectDetailTemplate
      {...AstoriumProps}
      icon={<Rocket className="h-8 w-8 text-white" />}
      sections={sections}
    />
  );
};

export default Astorium;
