import React from 'react';
import rubberTransformVideo from '../assets/Rubber_profile_transforms_into_p…_202606221615.mp4';
import '../styles/page4.css';

export function Page4Section() {
  return (
    <section className="page4-section" id="products">
      <video
        className="page4-video-bg"
        src={rubberTransformVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className="page4-video-overlay" />

      <div className="page4-container">
        <h3 className="page4-heading">
          Whatever You Need in
          <br />
          <span className="span-rubber">Rubber</span>, We Can{' '}
          <span className="span-shape-it">Shape It.</span>
        </h3>

        <a href="#products" className="page4-cta-btn">
          <span className="page4-cta-text">SEE PRODUCTS CATEGORIES</span>
          <div className="page4-cta-arrow-circle" aria-hidden="true">
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
    </section>
  );
}
