
import React from 'react';
import { Triangle } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';
import { SpacecraftProps } from './placeholder';

const Spacecraft = () => {
  return (
    <ProjectDetailTemplate
      {...SpacecraftProps}
      icon={<Triangle className="h-8 w-8 text-white" />}
    />
  );
};

export default Spacecraft;
