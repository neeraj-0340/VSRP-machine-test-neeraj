import React from 'react';
import logoImg from '../assets/logo_white_text.png';
import instagramIcon from '../assets/instagram.png';
import facebookIcon from '../assets/facebook.png';
import linkedinIcon from '../assets/linkedin.png';
import xIcon from '../assets/x.png';
import isoBadge from '../assets/iso9001_badge.png';
import '../styles/footer.css';

export function Footer() {
  return (
    <footer className="vsrp-footer" id="contact">
      <div className="vsrp-footer-container">
        <div className="vsrp-footer-grid">
          <div className="vsrp-footer-brand-col">
            <img
              src={logoImg}
              alt="VSRP Engineered Rubber Logo"
              className="vsrp-footer-logo"
            />

            <p className="vsrp-footer-desc">
              For over 20 years, VSRP has delivered engineered rubber solutions built around the unique requirements of Australian businesses.
            </p>

            <div className="vsrp-footer-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="vsrp-social-icon">
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="vsrp-social-icon">
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="vsrp-social-icon">
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X" className="vsrp-social-icon">
                <img src={xIcon} alt="X" />
              </a>
            </div>

            <div className="vsrp-footer-iso">
              <img src={isoBadge} alt="ISO9001:2015 Accredited" className="vsrp-iso-badge" />
              <span className="vsrp-iso-text">ISO9001:2015 Accredited</span>
            </div>
          </div>

          <div className="vsrp-footer-right-grid">
            <div className="vsrp-nav-group company-group">
              <div className="vsrp-group-divider" aria-hidden="true" />
              <h4 className="vsrp-nav-title">COMPANY</h4>
              <ul className="vsrp-nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#blogs">Blogs</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="vsrp-nav-group industries-group">
              <div className="vsrp-group-divider" aria-hidden="true" />
              <h4 className="vsrp-nav-title">INDUSTRIES</h4>
              <ul className="vsrp-nav-links">
                <li><a href="#industries">Agriculture & Irrigation</a></li>
                <li><a href="#industries">Plumbing</a></li>
                <li><a href="#industries">Civil Engineering and Construction</a></li>
                <li><a href="#industries">Mining</a></li>
                <li><a href="#industries">Defence</a></li>
                <li><a href="#industries">Architectural Industry</a></li>
                <li><a href="#industries">Road Transport</a></li>
              </ul>
            </div>

            <div className="vsrp-nav-group contact-group">
              <div className="vsrp-group-divider" aria-hidden="true" />
              <h4 className="vsrp-nav-title">CONTACT</h4>
              <div className="vsrp-info-block">
                <p className="vsrp-info-bold">1800 787 777, +61 (2) 8834 9958</p>
                <p className="vsrp-info-bold">enquiries@vsrp.com.au</p>
              </div>
            </div>

            <div className="vsrp-nav-group location-group">
              <div className="vsrp-group-divider" aria-hidden="true" />
              <h4 className="vsrp-nav-title">LOCATION</h4>
              <div className="vsrp-info-block">
                <p className="vsrp-info-bold">
                  Unit 3, 10 Banksia Place,<br />
                  South Windsor NSW 2756
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="vsrp-footer-divider" aria-hidden="true" />

        <div className="vsrp-footer-bottom-bar">
          <span className="vsrp-copyright">COPYRIGHT © 2026 VSRP</span>
          <span className="vsrp-agency">SITE BY ACODEZ</span>
          <div className="vsrp-bottom-links">
            <a href="#privacy">PRIVACY POLICY</a>
            <span className="vsrp-separator">|</span>
            <span>ALL RIGHTS RESERVED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
