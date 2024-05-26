import React from 'react';
import Department from '../../components/Department';
import { DepartmentType } from '../../types/types';

const DepartmentView: React.FC<{ department: DepartmentType }> = ({ department }) => {
  return (
    <div>
      <h1>Department Details</h1>
      <Department department={department} />
    </div>
  );
};

export default DepartmentView;
