import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Component1 from './Component1.jsx';
import LanguageSwitch from './LanguageSwitch.jsx';
import { useLanguage } from '../LanguageContext.jsx';
import './Header.css';

export default function Header() {
  const { pathname } = useLocation();
  const { t } = useLanguage();
  const isActive = (prefix) => pathname === prefix || pathname.startsWith(prefix + '/');
  return (
    <header className="site-header">
      <Link to="/" className="logo-link">
        <img src="/assets/logo/kaiu-logo-cropped.png" alt="KAIU" className="logo-img" />
      </Link>
      <nav>
        <Component1 to="/about" active={isActive('/about')}>{t.nav.about.toUpperCase()}</Component1>
        <Component1 to="/products" active={isActive('/products')}>{t.nav.products.toUpperCase()}</Component1>
        <Component1 to="/projects" active={isActive('/projects')}>{t.nav.projects.toUpperCase()}</Component1>
        <Component1 to="/services" active={isActive('/services')}>{t.nav.services.toUpperCase()}</Component1>
        <Component1 to="/contact" active={isActive('/contact')}>{t.nav.contact.toUpperCase()}</Component1>
      </nav>
      <div className="header-actions">
        <LanguageSwitch />
      </div>
    </header>
  );
}
