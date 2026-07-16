import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swatch, pillClass, ProjectCard } from '../components/Shared.jsx';
import { PRODUCTS, PROJECTS } from '../data.js';
import useReveal from '../useReveal.js';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();
  const heroSwatches = ['#DCC9A6', '#C08F55', '#8B5A3C', '#9C6B3E', '#6B4429', '#2E1D14'];
  const homeProducts = PRODUCTS.slice(0, 4);
  const homeProjects = PROJECTS.slice(0, 3);
  const collectionsRef = useReveal();
  const storyRef = useReveal();
  const worksRef = useReveal();
  const ctaRef = useReveal();

  return (
    <div>
      <section className="hero">
        <div className="hero-swatches">
          {heroSwatches.map((c, i) => (
            <Swatch key={i} color={c} className="hero-swatch" />
          ))}
        </div>
        <div className="hero-copy">
          <span className="eyebrow">KAIU · Natural Wood Veneer</span>
          <h1>Where nature's elegance<br />meets modern craftsmanship.</h1>
          <button className="hero-cta" onClick={() => navigate('/products')}>Learn More →</button>
        </div>
      </section>

      <hr className="hairline" />

      <section className="home-section reveal" ref={collectionsRef}>
        <div className="section-head">
          <div>
            <span className="eyebrow">Our Collections</span>
            <h2>A palette drawn from the grain.</h2>
          </div>
          <p>Twelve veneer families, each cut to reveal the character already living inside the timber — from pale Scandinavian oak to deep, smoke-dark walnut.</p>
        </div>
        <div className="product-grid">
          {homeProducts.map((p) => (
            <Link key={p.id} to={`/products/${p.id}`} className="product-card">
              <Swatch color={p.color} className="swatch" />
              <h4>{p.name}</h4>
              <span>{p.cut}</span>
            </Link>
          ))}
        </div>
        <div className="center-cta">
          <Link to="/products" className={pillClass('outline')}>View All Collections</Link>
        </div>
      </section>

      <section className="story-section reveal" ref={storyRef}>
        <div>
          <span className="eyebrow">Crafted by Nature</span>
          <h2>Every panel begins as a story told by the tree — grain, colour, and character we simply refine, never invent.</h2>
          <p>We select premium veneer logs, slice them with precision, and pair each face for architects, designers and homeowners who want authenticity without compromise.</p>
          <Link to="/about" className="story-cta">Our Story</Link>
        </div>
        <Swatch color="linear-gradient(135deg, var(--kaiu-ink), var(--kaiu-brown-deep) 60%, var(--kaiu-brown-mid))" className="story-swatch" />
      </section>

      <section className="home-section reveal" ref={worksRef}>
        <div className="section-head">
          <div>
            <span className="eyebrow">Selected Work</span>
            <h2>Interiors finished in KAIU veneer.</h2>
          </div>
          <p>A recent installation for the Mercure Hotel — kitchens, dining halls and facades unified by one material language.</p>
        </div>
        <div className="project-grid">
          {homeProjects.map((pr) => (
            <ProjectCard key={pr.id} project={pr} to={`/projects/${pr.id}`} />
          ))}
        </div>
        <div className="center-cta">
          <Link to="/projects" className={pillClass('outline')}>View All Projects</Link>
        </div>
      </section>

      <section className="section-alt reveal" ref={ctaRef}>
        <span className="eyebrow">Start a Project</span>
        <h2 style={{ maxWidth: 560, marginLeft: 'auto', marginRight: 'auto' }}>Bring the warmth of natural wood into your next space.</h2>
        <Link to="/contact" className={pillClass()} style={{ marginTop: 30 }}>Talk to Our Team</Link>
      </section>
    </div>
  );
}
