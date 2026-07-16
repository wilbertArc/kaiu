import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/assets/logo/kaiu-logo-cropped.png" alt="KAIU" className="footer-logo" />
          <p>Premium natural wood veneer for architects, designers, manufacturers and homeowners.</p>
        </div>
        <div className="footer-cols">
          <div>
            <h5>Explore</h5>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/services">Services</Link>
          </div>
          <div>
            <h5>Studio</h5>
            <p>Pluit Blok No. 1<br />Jakarta, Indonesia</p>
            <a href="mailto:kaiuveneer@gmail.com">kaiuveneer@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} KAIU. All rights reserved.</span>
        <div className="socials">
          <a href="https://www.instagram.com/kaiuveneer/" aria-label="Instagram"><img src="/assets/icons/instagram.svg" alt="" /></a>
          <a href="https://wa.me/628131205377" aria-label="WhatsApp"><img src="/assets/icons/whatsapp.svg" alt="" /></a>
        </div>
      </div>
    </footer>
  );
}
