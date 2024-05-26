import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProjectForm: React.FC = () => {
    const [name, setName] = useState('');
    const [departmentId, setDepartmentId] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        
        const requestBody = {
            name: name,
            departmentId: departmentId
        };

        try {
            const response = await fetch('http://localhost:8080/project/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (response.ok) {
                const newProject = await response.json();
                console.log('Project created:', newProject);
                window.alert('Project created successfully!');
                navigate('/');
            } else {
                console.error('Failed to create project:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Create a New Project</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Project Name:
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Department ID:
                        <input 
                            type="text" 
                            value={departmentId} 
                            onChange={(e) => setDepartmentId(e.target.value)} 
                            required 
                        />
                    </label>
                </div>
                <div>
                    <button type="submit">Create Project</button>
                </div>
            </form>
        </div>
    );
}

export default AddProjectForm;
