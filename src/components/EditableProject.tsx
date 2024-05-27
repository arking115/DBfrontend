import React, { useState, useEffect } from 'react';
import MemberList from './MemberList';
import { ProjectType, MemberType } from '../types/types';
import "../style/AddButton.css";

interface EditableProjectProps {
  projectId: number;
}

const EditableProject: React.FC<EditableProjectProps> = ({ projectId }) => {
  const [project, setProject] = useState<ProjectType | null>(null);
  const [members, setMembers] = useState<MemberType[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchProject = async () => {
      const response = await fetch(`http://localhost:8080/project/${projectId}`);
      const data = await response.json();
      setProject(data);
      setName(data.name);
      setDescription(data.description);
    };

    const fetchMembers = async () => {
      const response = await fetch(`http://localhost:8080/members`);
      const data = await response.json();
      setMembers(data);
    };

    fetchProject();
    fetchMembers();
  }, [projectId]);

  const updateProject = async (updatedName: string, updatedDescription: string) => {
    await fetch(`http://localhost:8080/project/update/${projectId}/${updatedName}/${updatedDescription}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  const handleNameChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setName(newName);
    await updateProject(newName, description);
  };

  const handleDescriptionChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = e.target.value;
    setDescription(newDescription);
    await updateProject(name, newDescription);
  };

  const handleAddMember = async (memberId: number) => {
    await fetch(`http://localhost:8080/project/new_member/${projectId}/${memberId}`);
    const updatedProject = { ...project, members: [...project!.members, members.find(m => m.id === memberId)!] } as ProjectType;
    setProject(updatedProject);
  };

  const handleRemoveMember = async (memberId: number) => {
    // Make the fetch call to remove the member from the project
    await fetch(`http://localhost:8080/project/remove_member/${projectId}/${memberId}`, {
      method: 'GET', // Use 'DELETE' if the endpoint is set up to handle DELETE requests
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Update the local project state to reflect the removal
    const updatedProject = { 
      ...project, 
      members: project!.members.filter(m => m.id !== memberId) 
    } as ProjectType;
    
    setProject(updatedProject);
  };

  if (!project) return null;

  return (
    <div>
      <h3>Edit Project</h3>
      <label>
        Name:
        <input value={name} onChange={handleNameChange} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={handleDescriptionChange} />
      </label>
      <div>
        <h4>Members</h4>
        <MemberList members={project.members} onRemoveMember={handleRemoveMember} />
        <select onChange={(e) => handleAddMember(Number(e.target.value))}>
          <option value="">Add a member</option>
          {members.filter(m => !project.members.find(pm => pm.id === m.id)).map(member => (
            <option key={member.id} value={member.id}>{member.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default EditableProject;
