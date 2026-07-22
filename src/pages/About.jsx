import React from 'react';
import { Link } from 'react-router-dom';
import { Swatch, pillClass } from '../components/Shared.jsx';
import { useLanguage } from '../LanguageContext.jsx';
import useReveal from '../useReveal.js';
import './About.css';

const GRAIN = 'linear-gradient(135deg, var(--kaiu-ink), var(--kaiu-brown-deep) 60%, var(--kaiu-brown-mid))';

export default function About() {
  const { t } = useLanguage();
  const introRef = useReveal();
  const wideRef = useReveal();
  const missionRef = useReveal();
  const statsRef = useReveal();
  const ctaRef = useReveal();
  return (
    <div>
      <div className="about-hero">
        <div className="about-intro reveal" ref={introRef}>
          <div>
            <span className="eyebrow">{t.about.eyebrow}</span>
            <h1>{t.about.title1}<br />{t.about.title2}</h1>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
          <Swatch color={GRAIN} className="about-swatch-tall" />
        </div>

        <div className="reveal" ref={wideRef}>
          <Swatch color={GRAIN} className="about-wide" />
        </div>

        <div className="about-mission reveal" ref={missionRef}>
          <Swatch color={GRAIN} className="swatch" />
          <div>
            <span className="eyebrow">{t.about.missionEyebrow}</span>
            <h3>{t.about.missionTitle}</h3>
            <p>{t.about.missionDesc}</p>
          </div>
        </div>

        <div className="about-stats reveal" ref={statsRef}>
          {t.about.stats.map(([num, label]) => (
            <div key={label} className="about-stat">
              <b>{num}</b>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* <section className="section-alt reveal" ref={ctaRef}>
        <span className="eyebrow">Work With Us</span>
        <h2>Let's talk about your next space.</h2>
        <Link to="/contact" className={pillClass()} style={{ marginTop: 26 }}>Get in Touch</Link>
      </section> */}
    </div>
  );
}
