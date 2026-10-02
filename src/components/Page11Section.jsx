import React from 'react';
import coverImg from '../assets/page-11-cover-image.png';
import '../styles/page11.css';

export function Page11Section() {
  return (
    <section className="page11-section" id="furthering-quality">
      <div className="page11-bg-wrapper">
        <img
          src={coverImg}
          alt="VSRP engineered rubber technician"
          className="page11-bg-img"
        />
        <div className="page11-overlay" aria-hidden="true" />
      </div>

      <div className="page11-container">
        <div className="page11-left-col">
          <h3 className="page11-heading">
            VSRP are<br />
            furthering quality<br />
            in <span className="highlight-orange">our industries.</span>
          </h3>
        </div>

        <div className="page11-right-col">
          <p className="page11-subtext">
            Across private, commercial and civil projects, our rubber products are custom-engineered to be reliable and cost-effective. We support the specific needs of specialised providers, plugging the gaps in their projects so they can continue to deliver at the highest level.
          </p>

          <a href="#contact" className="page11-contact-btn" aria-label="Contact us">
            <span className="page11-contact-text">CONTACT US</span>
            <div className="page11-contact-circle" aria-hidden="true">
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
    </section>
  );
}
