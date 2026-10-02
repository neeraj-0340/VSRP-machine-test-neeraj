import React, { useState } from 'react';
import truckImg from '../assets/truck image.jpg';
import truckIcon from '../assets/truck icon.png';
import '../styles/page6.css';

export function Page6Section() {
  const [activeIndustry, setActiveIndustry] = useState('Mining');

  return (
    <section className="page6-section" id="industries">
      <div className="page6-container">
        <h3 className="page6-heading">
          Rubber Solutions Built For <span className="highlight-orange">Industry.</span>
        </h3>

        <p className="page6-subtext">
          From infrastructure and mining to agriculture and transport, we help businesses solve
          complex challenges with engineered rubber solutions.
        </p>

        <div className="page6-grid">
          <div className="page6-widget-left">
            <span className="page6-category-label">OUR INDUSTRIES</span>

            <div className="page6-selector-stack">
              <div
                className="industry-item-faded"
                onClick={() => setActiveIndustry('Agriculture & Irrigation')}
              >
                Agriculture & Irrigation
              </div>

              <div className="industry-item-active">
                {activeIndustry}
              </div>

              <div
                className="industry-item-faded"
                onClick={() => setActiveIndustry('Defence')}
              >
                Defence
              </div>
            </div>

            <div className="page6-widget-bottom">
              <div className="page6-widget-divider">
                <div className="page6-divider-orange" />
                <div className="page6-divider-dark" />
              </div>

              <ul className="page6-widget-footer">
                <li className="footer-link active">Civil</li>
                <li className="footer-link" onClick={() => setActiveIndustry('Mining')}>Mining</li>
                <li className="footer-link" onClick={() => setActiveIndustry('Agriculture & Irrigation')}>Agriculture</li>
                <li className="footer-link">Building</li>
                <li className="footer-link">Transport & Infrastructure</li>
              </ul>
            </div>
          </div>

          <div className="page6-card-right">
            <img
              src={truckImg}
              alt="Mining Site Operations"
              className="page6-bg-img"
            />

            <img
              src={truckIcon}
              alt=""
              aria-hidden="true"
              className="page6-truck-icon"
            />

            <a href="#capabilities" className="page6-cta-btn">
              <span className="page6-cta-text">SEE OUR CAPABILITIES</span>
              <div className="page6-cta-circle" aria-hidden="true">
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
