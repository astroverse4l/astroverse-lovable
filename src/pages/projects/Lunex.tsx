
import React from 'react';
import { Star } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';
import { LunexProps } from './placeholder';

const Lunex = () => {
  return (
    <ProjectDetailTemplate
      {...LunexProps}
      icon={<Star className="h-8 w-8 text-white" />}
    />
  );
};

export default Lunex;
