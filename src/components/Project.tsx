import React, { useState } from 'react';
import MemberList from './MemberList';
import { ProjectType } from '../types/types';
import "../style/AddButton.css";
import EditableProject from './EditableProject';

interface ProjectProps {
  project: ProjectType;
}

const Project: React.FC<ProjectProps> = ({ project }) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const isProjectPath = location.pathname === `/project/${project.id}`;

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
    console.log("delete button clicked")
  };

  const handleEditing = () => {
    setIsEditing(true);
  }

  if (isDeleted) {
    return null;
  }

  if (isProjectPath) {
    return (
      <div className='project-card'>
        <button className='delete-button' onClick={() => onDelete(project.id)}>X</button>
        {isEditing ? (
          <EditableProject projectId={project.id} />
        ) : (
          <>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <MemberList members={project.members} />
            <button type='button' onClick={handleEditing} className='show-project-button'>Edit Project</button>
          </>
        )}
      </div>
    );
  }  

  return (
    <div className='project-card'>
      <button className='delete-button' onClick={() => onDelete(project.id)}>X</button>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <MemberList members={project.members} />
      <div className='show-project-button-container'>
        <a href={`/project/${project.id}`} className='show-project-button'>Show Project</a>
      </div>
    </div>
  );
};

export default Project;
