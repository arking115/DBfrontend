import React, { useState } from 'react';
import MemberList from './MemberList';
import { ProjectType } from '../types/types';
import "../style/AddButton.css";

interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const onDelete = async (projectId: number) => {
    try {
      const response = await fetch(`http://localhost:8080/project/delete/${projectId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setIsDeleted(true);
      } else {
        console.error('Failed to delete the project');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (isDeleted) {
    return null;
  }

  return (
    <div className='project-card'>
      <button className='delete-button' onClick={() => onDelete(project.id)}>X</button>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <MemberList members={project.members} />
      <a href={`/project/${project.id}`} className='show-project-button'>Show Project</a>
    </div>
  );
};

export default Project;
