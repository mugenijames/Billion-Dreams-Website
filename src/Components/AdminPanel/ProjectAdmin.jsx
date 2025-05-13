import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectsAdmin = () => {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({ title: '', description: '', image_url: '' });

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await axios.get('/projects');
            setProjects(response.data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    const addProject = async () => {
        try {
            await axios.post('/admin/projects', newProject);
            fetchProjects();
            setNewProject({ title: '', description: '', image_url: '' });
        } catch (error) {
            console.error('Error adding project:', error);
        }
    };

    const deleteProject = async (id) => {
        try {
            await axios.delete(`/admin/projects/${id}`);
            fetchProjects();
        } catch (error) {
            console.error('Error deleting project:', error);
        }
    };

    return (
        <div>
            <h2>Manage Projects</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addProject();
                }}
            >
                <input
                    type="text"
                    placeholder="Title"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    required
                />
                <input
                    type="url"
                    placeholder="Image URL"
                    value={newProject.image_url}
                    onChange={(e) => setNewProject({ ...newProject, image_url: e.target.value })}
                    required
                />
                <button type="submit">Add Project</button>
            </form>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <img src={project.image_url} alt={project.title} style={{ maxWidth: '200px' }} />
                        <button onClick={() => deleteProject(project.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProjectsAdmin;
