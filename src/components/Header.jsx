import React, { useState, useEffect } from 'react';
import logoImg from '../assets/logo_white_text.png';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', ' ');
      return;
    }

    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  useEffect(() => {
    const sections = ['about', 'products', 'industries', 'projects', 'insights', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -55% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const hashId = window.location.hash.replace('#', '');
      const targetEl = document.getElementById(hashId);
      if (targetEl) {
        setTimeout(() => {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, []);

  return (
    <header className="site-header">
      <a
        href="#"
        onClick={(e) => handleNavClick(e, 'top')}
        className="header-logo-container"
        aria-label="VSRP Homepage"
      >
        <div className="logo-image-wrapper">
          <img
            src={logoImg}
            alt="VSRP Engineered Rubber"
            className="logo-img-base"
          />
        </div>
      </a>

      <div className="header-nav-container">
        <nav aria-label="Main Navigation">
          <ul className={`header-nav-list ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <li>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#industries"
                onClick={(e) => handleNavClick(e, 'industries')}
                className={`nav-link ${activeSection === 'industries' ? 'active' : ''}`}
              >
                INDUSTRIES <span className="dropdown-chevron">▼</span>
              </a>
            </li>
            <li>
              <a
                href="#products"
                onClick={(e) => handleNavClick(e, 'products')}
                className={`nav-link ${activeSection === 'products' ? 'active' : ''}`}
              >
                PRODUCTS
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              >
                PROJECTS
              </a>
            </li>
            <li>
              <a
                href="#insights"
                onClick={(e) => handleNavClick(e, 'insights')}
                className={`nav-link ${activeSection === 'insights' ? 'active' : ''}`}
              >
                INSIGHTS
              </a>
            </li>
          </ul>
        </nav>

        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, 'contact')}
          className="btn-contact"
        >
          <span className="btn-text-wrapper">
            <span className="btn-text-orig">CONTACT</span>
            <span className="btn-text-roll" aria-hidden="true">CONTACT</span>
          </span>
          <div className="icon-circle" aria-hidden="true">
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

        <button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
