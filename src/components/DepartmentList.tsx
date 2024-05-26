import React from 'react';
import Department from './Department';
import { DepartmentType } from '../types/types';
import "../style/DepartmentList.css";

const DepartmentList: React.FC<{ departments: DepartmentType[] }> = ({ departments }) => {
  return (
    <div className='grid'>
      {departments.map((department) => (
        <Department key={department.id} department={department} />
      ))}
    </div>
  );
};

export default DepartmentList;
