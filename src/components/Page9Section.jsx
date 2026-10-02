import React, { useState } from 'react';
import cornerDesign from '../assets/page-9-left-bottom-design.png';
import '../styles/page9.css';

const FAQ_ITEMS = [
  {
    id: 1,
    question: 'What type of rubber should I use?',
    answer:
      'At VSRP, we know rubber. Across any application, our experts are well equipped to advise on the best make and material for your rubber products. If you need reliable performance, we can show you exactly how to get it. All you need to do is give us a call.',
  },
  {
    id: 2,
    question: 'What is the hardness scale for rubber?',
    answer:
      'At VSRP, we provide a comprehensive hardness scale (Shore A / Shore D) guidance tailored to your specific application requirements and environmental conditions.',
  },
  {
    id: 3,
    question: 'What are minimum order quantities?',
    answer:
      'We support both low-volume custom prototyping and full-scale high-volume manufacturing runs depending on your project needs.',
  },
  {
    id: 4,
    question: 'How can I get a quote?',
    answer:
      'Simply send us your technical drawing, sample, or specifications via our contact form or email, and our engineering team will provide a detailed quote.',
  },
  {
    id: 5,
    question: 'Which materials types do VSRP offer?',
    answer:
      'We work with EPDM, Natural Rubber, Neoprene, Nitrile, Silicone, Viton, and custom-engineered rubber compounds tailored to strict standards.',
  },
  {
    id: 6,
    question: 'Can VSRP source products & materials?',
    answer:
      'Yes, we leverage our global supply network to source specialty raw materials, tooling, and finished components efficiently.',
  },
];

export function Page9Section() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="page9-section" id="faq">
      <div className="page9-container">
        <div className="page9-left-col">
          <h3 className="page9-heading">
            Frequently Asked<br />
            <span className="highlight-orange">Questions</span>
          </h3>

          <p className="page9-subtext">
            We’ve heard it all. Here’s everything you need to know before working with us.
          </p>

          <a href="#contact" className="page9-cta-btn" aria-label="Ask a question">
            <span className="page9-cta-text">ASK A QUESTION</span>
            <div className="page9-cta-circle" aria-hidden="true">
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

        <div className="page9-right-col">
          <div className="page9-accordion-list">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.id}
                  className={`page9-faq-item ${isOpen ? 'active' : ''}`}
                >
                  <button
                    type="button"
                    className="page9-faq-question-btn"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="page9-faq-question-text">
                      {item.question}
                    </span>
                    <div className="page9-faq-toggle-circle">
                      {isOpen ? (
                        <svg
                          width="14"
                          height="2"
                          viewBox="0 0 14 2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          <line x1="1" y1="1" x2="13" y2="1" />
                        </svg>
                      ) : (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          <line x1="7" y1="1" x2="7" y2="13" />
                          <line x1="1" y1="7" x2="13" y2="7" />
                        </svg>
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="page9-faq-answer-wrapper">
                      <p className="page9-faq-answer-text">{item.answer}</p>
                    </div>
                  )}

                  <div className={`page9-faq-divider ${isOpen ? 'orange' : 'gray'}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <img
        src={cornerDesign}
        alt=""
        aria-hidden="true"
        className="page9-corner-design"
      />
    </section>
  );
}
