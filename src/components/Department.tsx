import React from 'react';
import { DepartmentType } from '../types/types';
import { useNavigate } from 'react-router-dom';
import "../style/DepartmentList.css";
import ProjectList from './ProjectList';
import "../style/Department.css";
import "../style/AddButton.css";

const Department: React.FC<{ department: DepartmentType }> = ({ department }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(`/department/${department.id}`);
  };
  const handleAddClick = () => {
    navigate(`/add-project`);
    console.log("Add button clicked");
  };

  const isDepartmentPath = location.pathname === `/department/${department.id}`;

  if (isDepartmentPath) {
    return (
      <div>
        <button className="button-27" onClick={handleAddClick}>Add</button>
        <div onClick={handleOnClick}>
          <h2>{department.name}</h2>
          <p>{department.description}</p>
          <ProjectList projects={department.projects}/>
        </div>
      </div>
    );
  }

  return (
    <div className='department-card' onClick={handleOnClick}>
      <div className='department-card-bg'></div>
      <h2>{department.name}</h2>
      <p>{department.description}</p>
    </div>
  );
};

export default Department;
