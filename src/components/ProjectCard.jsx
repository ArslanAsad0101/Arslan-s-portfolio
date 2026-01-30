import React, { useState } from 'react';
import ImageCarousel from './ImageCarousel';
import './ProjectCard.css';

function ProjectCard({ project, theme }) {
  const [showDetails, setShowDetails] = useState(false);

  // Check if project has multiple images (carousel) or single image
  const hasCarousel = project.images && project.images.length > 1;

  return (
    <div className={`project-card ${theme}`}>
      {/* Project Image or Carousel */}
      <div className="project-image-container">
        {hasCarousel ? (
          <ImageCarousel images={project.images} />
        ) : (
          <>
            <img
              src={project.image || project.images?.[0]}
              alt={project.title}
              className="project-image"
            />
            <div className="project-overlay">
              <button
                className="details-btn"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? 'Hide Details' : 'View Details'}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Card Content */}
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>

        {/* Tags */}
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Description - Show on hover or click */}
        {showDetails && (
          <p className="project-description">{project.description}</p>
        )}

        {/* GitHub Link */}
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
