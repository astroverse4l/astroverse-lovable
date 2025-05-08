
import React from 'react';
import { Atom } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';
import { AetherProps } from './placeholder';

const Aether = () => {
  return (
    <ProjectDetailTemplate
      {...AetherProps}
      icon={<Atom className="h-8 w-8 text-white" />}
    />
  );
};

export default Aether;
