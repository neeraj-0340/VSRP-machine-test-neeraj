import React from 'react';

export function Button({ variant = 'primary', text, href = '#', onClick }) {
  if (variant === 'primary') {
    return (
      <a href={href} onClick={onClick} className="btn-primary-pill">
        <span className="btn-text-wrapper">
          <span className="btn-text-orig">{text}</span>
          <span className="btn-text-roll" aria-hidden="true">{text}</span>
        </span>
        <div className="icon-circle-orange" aria-hidden="true">
          <svg
            className="arrow-orig"
            width="14"
            height="14"
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
          <svg
            className="arrow-roll"
            width="14"
            height="14"
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
    );
  }

  if (variant === 'secondary') {
    return (
      <a href={href} onClick={onClick} className="btn-secondary-link">
        <span className="btn-text-wrapper">
          <span className="btn-text-orig">{text}</span>
          <span className="btn-text-roll" aria-hidden="true">{text}</span>
        </span>
        <span className="btn-secondary-arrow-wrapper" aria-hidden="true">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="btn-secondary-arrow arrow-orig"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="btn-secondary-arrow arrow-roll"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </span>
      </a>
    );
  }

  return null;
}
