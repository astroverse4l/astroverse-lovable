
import React from 'react';
import { Layers } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';
import { AstralStudiosProps } from './placeholder';

const AstralStudios = () => {
  return (
    <ProjectDetailTemplate
      {...AstralStudiosProps}
      icon={<Layers className="h-8 w-8 text-white" />}
    />
  );
};

export default AstralStudios;
