import React from 'react';
import DepartmentList from '../../components/DepartmentList';
import { DepartmentType } from '../../types/types';

const AdminView: React.FC<{ departments: DepartmentType[] }> = ({ departments }) => {
  return (
    <div>
      <h1>Admin Panel</h1>
      <DepartmentList departments={departments} />
    </div>
  );
};

export default AdminView;
