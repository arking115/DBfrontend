import React from 'react';
import Project from '../../components/Project';
import { ProjectType } from '../../types/types';

const ProjectView: React.FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <div>
      <h1>Project Details</h1>
      <Project project={project} />
    </div>
  );
};

export default ProjectView;
