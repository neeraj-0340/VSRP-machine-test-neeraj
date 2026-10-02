import React from 'react';
import emblemMask from '../assets/emblem.png';
import rubberTransformVideo from '../assets/Rubber_profile_transforms_into_p…_202606221615.mp4';
import '../styles/page3.css';

export function Page3Section() {
  return (
    <section className="page3-section" id="build">
      <div className="page3-container">
        <h3 className="page3-heading">
          What Can We Help You <span className="highlight-orange">Build?</span>
        </h3>

        <p className="page3-subtext">
          We work with you to design, engineer and manufacture rubber solutions
          that meet your exact requirements.
        </p>

        <div
          className="page3-logo-video-wrapper"
          style={{ '--emblem-mask': `url(${emblemMask})` }}
        >
          <video
            className="page3-logo-video"
            src={rubberTransformVideo}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
        </div>

        <a href="#next-section-p4" className="page3-scroll-wrapper" aria-label="Scroll down to next section">
          <div className="page3-scroll-circle" aria-hidden="true">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <span className="page3-scroll-text">SCROLL DOWN</span>
        </a>
      </div>

      <div id="next-section-p4" style={{ position: 'absolute', bottom: 0 }} />
    </section>
  );
}
