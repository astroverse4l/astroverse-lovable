
import React from 'react';
import { Satellite } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';
import { SyntrilProps } from './placeholder';

const Syntril = () => {
  return (
    <ProjectDetailTemplate
      {...SyntrilProps}
      icon={<Satellite className="h-8 w-8 text-white" />}
    />
  );
};

export default Syntril;
