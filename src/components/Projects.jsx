import React from 'react';
import { VideoIcon, DocumentIcon, ChatIcon } from '../assets/icons'
import './Projects.css';

const Projects = () => {

  const projects = [
    {
      id: 1,
      title: 'Multi user video Call Application',
      category: 'web',
      image: <VideoIcon width={48} height={48} />,
      description: 'A full-stack e-commerce platform with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    },
    {
      id: 2,
      title: 'Resume Builder Application',
      category: 'web',
      image: <DocumentIcon width={48} height={48} />,
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    },
    {
      id: 6,
      title: 'Speech to text voice Chat Application',
      category: 'web',
      image: <ChatIcon width={48} height={48} />,
      description: 'Real-time voice chat application with multiple rooms.',
      technologies: ['React', 'Socket.io', 'Node.js', 'Redis'],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <span className="project-emoji">{project.image}</span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;