import React, { useEffect, useRef, useState } from 'react';

export default function WhatsAppButton() {
  const phone = '628131205377';
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const footer = document.querySelector('.site-footer');
    if (!footer) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: 'fixed',
        right: 24,
        bottom: 24,
        width: 56,
        height: 56,
        borderRadius: '50%',
        overflow: 'hidden',
        boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
        zIndex: 1000,
        display: 'block',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.3s ease',
      }}
    >
      <img
        src="/assets/icons/whatsapp.png"
        alt=""
        style={{ width: '135%', height: '135%', display: 'block', objectFit: 'cover', marginLeft: '-17.5%', marginTop: '-17.5%' }}
      />
    </a>
  );
}
