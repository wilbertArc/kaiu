import React from 'react';
import './LanguageSwitch.css';

/** "EN" language pill — ink by default, warm-brown on hover. */
export default function LanguageSwitch({ label = 'EN' }) {
  return (
    <button type="button" className="lang-switch">
      <span>{label}</span>
    </button>
  );
}
