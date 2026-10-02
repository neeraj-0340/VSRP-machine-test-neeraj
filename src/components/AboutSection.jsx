import React from 'react';
import '../styles/about.css';

export function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-bg-accent" aria-hidden="true" />

      <div className="about-container">
        <div className="about-grid">
          <div className="about-left-col">
            <h3 className="about-heading-left">
              Wherever Precision Is Needed,{' '}
              <span className="highlight-orange">VSRP Delivers.</span>
            </h3>

            <div className="about-stats-wrapper">
              <div className="about-stats-grid">
                <div className="stat-item">
                  <div className="stat-number">
                    20<span className="stat-plus">+</span>
                  </div>
                  <div className="stat-label">Years of experience</div>
                </div>

                <div className="stat-item">
                  <div className="stat-number">
                    122K<span className="stat-plus">+</span>
                  </div>
                  <div className="stat-label">Ventilation tube joins</div>
                </div>

                <div className="stat-row-divider" aria-hidden="true" />

                <div className="stat-item">
                  <div className="stat-number">
                    5M<span className="stat-plus">+</span>
                  </div>
                  <div className="stat-label">Rubber seals supplied</div>
                </div>

                <div className="stat-item">
                  <div className="stat-number">
                    450K<span className="stat-plus">+</span>
                  </div>
                  <div className="stat-label">Traffic light seals</div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-right-col">
            <h3 className="about-heading-right">
              We're engineers, manufacturers and problem-solvers.
            </h3>

            <div className="about-description">
              <p>
                Whether you need a custom seal, a specialised extrusion, a
                bonded rubber component or a completely new product, we'll work
                with you to find the right solution.
              </p>
              <p>
                We've been doing it for more than two decades, helping
                businesses across Australia keep projects moving.
              </p>
            </div>

            <a href="#about-detail" className="btn-about-vsrp">
              <span>ABOUT VSRP</span>
              <div className="icon-circle-orange-about" aria-hidden="true">
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
        </div>
      </div>
    </section>
  );
}
