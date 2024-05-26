import React, { useEffect, useState } from 'react';
import { DepartmentType } from '../../types/types';
import AdminView from '../admin/AdminView';

const AdminViewFetched: React.FC = () => {
  const [departments, setDepartments] = useState<DepartmentType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch('http://localhost:8080/departments', {
        method: 'GET',
        credentials: 'include'});
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDepartments(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDepartments();
  }, []);

  console.log(departments);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <AdminView departments={departments} />;
};

export default AdminViewFetched;
