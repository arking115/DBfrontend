import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await fetch('http://localhost:8080/auth/check', {
        method: 'GET',
        credentials: 'include',
      });

      const data = await response.text();
      setIsAuthenticated(data === 'Valid session');
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    // Optionally, you can show a loading spinner here
    return <div>Loading...</div>;
  }

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
