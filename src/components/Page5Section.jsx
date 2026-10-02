import React from 'react';
import widgetIcon1 from '../assets/widget-icon-1.png';
import widgetIcon2 from '../assets/widget-icon-2.png';
import widgetIcon3 from '../assets/widget-icon-3.png';
import '../styles/page5.css';

export function Page5Section() {
  return (
    <section className="page5-section" id="company">
      <div className="page5-container">
        <div className="page5-header-grid">
          <h3 className="page5-heading-left">
            More Than A<br />
            <span className="highlight-orange">Rubber Company.</span>
          </h3>

          <p className="page5-description-right">
            We're engineers, problem-solvers and manufacturing partners, helping
            businesses turn unique requirements into reliable, high-performance
            rubber solutions.
          </p>
        </div>

        <div className="page5-cards-grid">
          <div className="page5-card">
            <img
              src={widgetIcon1}
              alt=""
              aria-hidden="true"
              className="page5-card-icon"
            />
            <div className="page5-card-bottom">
              <div className="page5-card-divider-two-tone">
                <div className="divider-orange" />
                <div className="divider-dark" />
              </div>
              <h3 className="page5-card-title">We Engineer Solutions.</h3>
              <p className="page5-card-description">
                Custom products designed around your exact requirements.
              </p>
            </div>
          </div>

          <div className="page5-card">
            <img
              src={widgetIcon2}
              alt=""
              aria-hidden="true"
              className="page5-card-icon"
            />
            <div className="page5-card-bottom">
              <div className="page5-card-divider-single" />
              <h3 className="page5-card-title">We Know Rubber.</h3>
              <p className="page5-card-description">
                Material expertise backed by 20+ years of industry experience.
              </p>
            </div>
          </div>

          <div className="page5-card">
            <img
              src={widgetIcon3}
              alt=""
              aria-hidden="true"
              className="page5-card-icon"
            />
            <div className="page5-card-bottom">
              <div className="page5-card-divider-single" />
              <h3 className="page5-card-title">We Deliver Confidence.</h3>
              <p className="page5-card-description">
                Quality, traceability and reliability at every stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
