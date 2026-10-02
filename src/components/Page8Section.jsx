import React, { useRef } from 'react';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';
import '../styles/page8.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Custom Extrusion Solution',
    description: 'A specialised rubber extrusion profile engineered to meet strict performance and dimensional requirements.',
    image: project1,
    tags: ['MINING', 'EPDM', 'EXTRUSION', 'CONVEYOR SYSTEM'],
  },
  {
    id: 2,
    title: 'Custom Extrusion Solution',
    description: 'A specialised rubber extrusion profile engineered to meet strict performance and dimensional requirements.',
    image: project2,
    tags: ['MINING', 'EPDM', 'EXTRUSION', 'CONVEYOR SYSTEM'],
  },
  {
    id: 3,
    title: 'Custom Extrusion Solution',
    description: 'A specialised rubber extrusion profile engineered to meet strict performance and dimensional requirements.',
    image: project3,
    tags: ['MINING', 'EPDM', 'EXTRUSION', 'CONVEYOR SYSTEM'],
  },
];

export function Page8Section() {
  const galleryRef = useRef(null);

  return (
    <section className="page8-section" id="projects">
      <div className="page8-container">
        <div className="page8-header-row">
          <h2 className="page8-heading">
            Wherever Precision Is Needed,<br />
            <span className="highlight-orange">VSRP Delivers.</span>
          </h2>

          <a href="#projects" className="page8-view-all-btn" aria-label="View all projects">
            <span className="page8-view-all-text">VIEW ALL PROJECTS</span>
            <div className="page8-view-all-circle" aria-hidden="true">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </a>
        </div>

        <div className="page8-gallery-wrapper">
          <div className="page8-gallery-scroll" ref={galleryRef}>
            {PROJECTS.map((project) => (
              <div key={project.id} className="page8-project-card">
                <div className="page8-card-img-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="page8-card-img"
                  />

                  <a href="#project-detail" className="page8-view-project-link">
                    VIEW PROJECT
                  </a>

                  <div className="page8-overlay-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="page8-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="page8-card-info">
                  <h3 className="page8-card-title">{project.title}</h3>
                  <p className="page8-card-desc">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
