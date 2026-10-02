import React from 'react';
import insights1 from '../assets/insights-1.jpg';
import insights2 from '../assets/insights-2.jpg';
import insights3 from '../assets/insights-3.jpg';
import '../styles/page10.css';

const INSIGHTS = [
  {
    id: 1,
    title: 'Understanding Rubber Compounds: Choosing The Right Material...',
    image: insights1,
  },
  {
    id: 2,
    title: 'Understanding Rubber Compounds: Choosing The Right Material...',
    image: insights2,
  },
  {
    id: 3,
    title: 'Understanding Rubber Compounds: Choosing The Right Material...',
    image: insights3,
  },
];

export function Page10Section() {
  return (
    <section className="page10-section" id="insights">
      <div className="page10-container">
        <div className="page10-header-row">
          <div className="page10-header-left">
            <h3 className="page10-heading">
              Industry <span className="highlight-orange">Insights</span>
            </h3>

            <p className="page10-subtext">
              Practical advice, material expertise and engineering knowledge to help you make informed decisions
            </p>
          </div>

          <a href="#insights" className="page10-view-all-btn" aria-label="View all insights">
            <span className="page10-view-all-text">VIEW ALL INSIGHTS</span>
            <div className="page10-view-all-circle" aria-hidden="true">
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

        <div className="page10-cards-grid">
          {INSIGHTS.map((insight) => (
            <article key={insight.id} className="page10-card">
              <div className="page10-card-img-wrapper">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="page10-card-img"
                />
              </div>

              <div className="page10-card-body">
                <h4 className="page10-card-title">{insight.title}</h4>

                <a href="#insight-detail" className="page10-view-detail-link">
                  <span className="page10-view-detail-text">VIEW DETAIL</span>
                  <span className="page10-view-detail-arrow" aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
