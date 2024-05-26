import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginView from './views/login/LoginView';
import AdminViewFetched from './views/admin/AdminViewFetched';
import DepartmentViewFetched from './views/department/DepartmentsViewFetched';
import ProjectViewFetched from './views/project/ProjectViewFetched';
import MemberViewFetched from './views/member/MemberViewFetched';
import PrivateRoute from './components/PrivateRoute';
import AddProjectForm from './views/project/AddProjectForm';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginView />} />
        <Route path="/" element={<PrivateRoute element={<AdminViewFetched />} />} />
        <Route path="/department/:id" element={<PrivateRoute element={<DepartmentViewFetched />} />} />
        <Route path="/project/:id" element={<PrivateRoute element={<ProjectViewFetched />} />} />
        <Route path="/member/:id" element={<PrivateRoute element={<MemberViewFetched />} />} />
        <Route path="/add-project" element={<PrivateRoute element={<AddProjectForm />} />} />
      </Routes>
    </Router>
  );
};

export default App;
