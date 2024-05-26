import React from 'react';
import Project from './Project';
import { ProjectType } from '../types/types';
import "../style/AddButton.css";

const ProjectList: React.FC<{ projects: ProjectType[]}> = ({ projects }) => {
  return (
    <div>
      <div className="project-list">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};
export default ProjectList;
