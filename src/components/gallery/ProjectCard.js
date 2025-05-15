import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className={`project-card ${project.featured ? 'featured' : ''}`}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <h3>{project.title}</h3>
          <div className="project-details">
            <p>{project.description}</p>
            <div className="project-meta">
              <span>Location: {project.location}</span>
              <span>Completion: {project.completionDate}</span>
              <span>Category: {project.category}</span>
              {project.tags && (
                <span className="project-tags">
                  {project.tags.join(', ')}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;