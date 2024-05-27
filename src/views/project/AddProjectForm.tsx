import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProjectForm: React.FC = () => {
    const [projectName, setProjectName] = useState('');
    const [departmentId, setDepartmentId] = useState('');
    const [description, setDescription] = useState('');
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch departments to populate the dropdown
        fetch('http://localhost:8080/departments')
            .then(response => response.json())
            .then(data => setDepartments(data))
            .catch(error => console.error('Error fetching departments:', error));
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const createProjectRequest = {
            name: projectName,
            departmentId: departmentId,
            description: description
        };

        fetch('http://localhost:8080/project/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createProjectRequest)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                console.log('Project created successfully:', data);
                navigate('/');
            })
            .catch(error => console.error('Error creating project:', error));
    };

    return (
        <div>
            <h2>Create New Project</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="projectName">Project Name:</label>
                    <input
                        type="text"
                        id="projectName"
                        value={projectName}
                        onChange={(e) => setProjectName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="departmentId">Department:</label>
                    <select
                        id="departmentId"
                        value={departmentId}
                        onChange={(e) => setDepartmentId(e.target.value)}
                        required
                    >
                        <option value="">Select a department</option>
                        {departments.map(department => (
                            <option key={department.id} value={department.id}>
                                {department.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Create Project</button>
            </form>
        </div>
    );
};

export default AddProjectForm;
