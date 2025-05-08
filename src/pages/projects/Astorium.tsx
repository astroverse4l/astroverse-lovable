
import React from 'react';
import { Rocket } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';
import { AstoriumProps } from './placeholder';

const Astorium = () => {
  return (
    <ProjectDetailTemplate
      {...AstoriumProps}
      icon={<Rocket className="h-8 w-8 text-white" />}
    />
  );
};

export default Astorium;
