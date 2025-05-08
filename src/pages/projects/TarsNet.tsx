
import React from 'react';
import { Satellite } from 'lucide-react';
import ProjectDetailTemplate from '@/components/projects/ProjectDetailTemplate';
import { TarsNetProps } from './placeholder';

const TarsNet = () => {
  return (
    <ProjectDetailTemplate
      {...TarsNetProps}
      icon={<Satellite className="h-8 w-8 text-white" />}
    />
  );
};

export default TarsNet;
