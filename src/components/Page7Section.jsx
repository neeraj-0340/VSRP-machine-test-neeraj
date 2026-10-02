import React, { useState } from 'react';
import processStep1 from '../assets/process-step-1.png';
import processStep2 from '../assets/process-step-2.png';
import processStep3 from '../assets/process-step-3.png';
import processStep4 from '../assets/process-step-4.png';
import '../styles/page7.css';

const PROCESS_STEPS = [
  {
    id: '01',
    title: 'Tell Us What You Need',
    description: 'Send us a drawing, sample or specification.',
    image: processStep1,
  },
  {
    id: '02',
    title: "We'll Engineer The Solution",
    description: 'Materials, tooling and manufacturing approach.',
    image: processStep2,
  },
  {
    id: '03',
    title: "We'll Make It",
    description: 'Materials, tooling and manufacturing approach.',
    image: processStep3,
  },
  {
    id: '04',
    title: "We'll Deliver It",
    description: 'Materials, tooling and manufacturing approach.',
    image: processStep4,
  },
];

export function Page7Section() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section className="page7-section" id="process">
      <div className="page7-container">
        <h3 className="page7-heading">
          From Concept to Delivery,<br />
          We Make it <span className="highlight-orange">Happen</span>
        </h3>

        <p className="page7-subtext">
          A proven process built around collaboration, precision and a
          commitment to quality at every step.
        </p>

        <div className="page7-content-grid">
          <div className="page7-steps-column">
            <div className="page7-timeline-line" aria-hidden="true" />

            <div className="page7-steps-list">
              {PROCESS_STEPS.map((step, index) => {
                const isActive = index === activeStepIndex;
                return (
                  <button
                    key={step.id}
                    type="button"
                    className={`page7-step-item ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveStepIndex(index)}
                    aria-selected={isActive}
                  >
                    <div className="page7-step-number">{step.id}</div>
                    <div className="page7-step-content">
                      <h3 className="page7-step-title">{step.title}</h3>
                      <p className="page7-step-desc">{step.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="page7-image-column">
            <div className="page7-image-wrapper">
              <img
                src={PROCESS_STEPS[activeStepIndex].image}
                alt={PROCESS_STEPS[activeStepIndex].title}
                className="page7-process-img"
              />
            </div>
          </div>
        </div>

        <div className="page7-footer-row">
          <a href="#contact" className="page7-scroll-wrapper" aria-label="Scroll down">
            <div className="page7-scroll-circle" aria-hidden="true">
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
            <span className="page7-scroll-text">SCROLL DOWN</span>
          </a>
        </div>
      </div>
    </section>
  );
}
