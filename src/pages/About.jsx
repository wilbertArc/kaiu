import React from 'react';
import { Link } from 'react-router-dom';
import { Swatch, pillClass } from '../components/Shared.jsx';
import useReveal from '../useReveal.js';
import './About.css';

const GRAIN = 'linear-gradient(135deg, var(--kaiu-ink), var(--kaiu-brown-deep) 60%, var(--kaiu-brown-mid))';
const STATS = [['200+', 'Veneer Collections'], ['30+', 'Projects Delivered'], ['1', 'Continent Sourced'], ['100%', 'Natural Material']];

export default function About() {
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
            <span className="eyebrow">About KAIU</span>
            <h1>Crafted by nature.<br />Refined by design.</h1>
            <p>At KAIU, we believe exceptional interiors begin with exceptional materials. Inspired by the natural beauty of wood, we curate premium veneer solutions that bring warmth, character and timeless elegance to every space.</p>
            <p>Every veneer tells a unique story through its grain, texture and colour. Rather than concealing nature's imperfections, we celebrate them — preserving the authenticity that makes each piece truly one of a kind.</p>
          </div>
          <Swatch color={GRAIN} className="about-swatch-tall" />
        </div>

        <div className="reveal" ref={wideRef}>
          <Swatch color={GRAIN} className="about-wide" />
        </div>

        <div className="about-mission reveal" ref={missionRef}>
          <Swatch color={GRAIN} className="swatch" />
          <div>
            <span className="eyebrow">Our Mission</span>
            <h3>Elegance, performance and authenticity — for the long term.</h3>
            <p>We provide architects, designers, manufacturers and homeowners with premium natural wood veneers that combine elegance, performance and authenticity, while preserving the beauty of nature for future generations.</p>
          </div>
        </div>

        <div className="about-stats reveal" ref={statsRef}>
          {STATS.map(([num, label]) => (
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
