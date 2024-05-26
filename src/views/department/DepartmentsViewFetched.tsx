import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DepartmentView from './DepartmentsView';
import { DepartmentType } from '../../types/types';

const DepartmentViewFetched: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [department, setDepartment] = useState<DepartmentType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const response = await fetch(`http://localhost:8080/department/${id}`, {
          method: 'GET',
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDepartment(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDepartment();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return department ? <DepartmentView department={department} /> : <div>No department data available</div>;
};

export default DepartmentViewFetched;
