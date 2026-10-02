import React from 'react';
import { Header } from './Header';
import { Button } from './Button';
import heroVideo from '../assets/0_Ribbons_Glossy_1920x1080.mp4';
import '../styles/hero.css';

export function Hero() {
  return (
    <section className="hero-section" id="hero">
      <video
        className="hero-video-bg"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      <div className="hero-video-overlay" />

      <Header />

      <div className="hero-content-container">
        <div className="hero-grid">
          <div className="hero-left-col">
            <div className="hero-headline-wrapper">
              <hr className="hero-headline-line" />
              <h1 className="hero-headline">
                Custom Rubber
                <br />
                Solutions<span className="dot-orange">.</span>
              </h1>
            </div>

            <p className="hero-description">
              For more than 20 years, we’ve helped Australian businesses
              solve problems with engineered rubber solutions. From design
              and tooling to manufacturing and delivery, we make what you
              need, when you need it.
            </p>
          </div>

          <div className="hero-right-col">
            <h3 className="hero-headline-right">
              Engineered To
              <br />
              Perform<span className="dot-orange">.</span>
            </h3>

            <div className="hero-ctas">
              <Button
                variant="primary"
                text="DISCUSS YOUR PROJECT"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '#contact');
                }}
              />

              <Button
                variant="secondary"
                text="SEE WHAT WE DO"
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '#products');
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-footer-bar">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', '#about');
          }}
          className="scroll-down-indicator"
          aria-label="Scroll down to about section"
        >
          <div className="scroll-down-circle" aria-hidden="true">
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
          <span className="scroll-down-text">SCROLL DOWN</span>
        </a>
      </div>

      <div id="next-section" style={{ position: 'absolute', bottom: 0 }} />
    </section>
  );
}
