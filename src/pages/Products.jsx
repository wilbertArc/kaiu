import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Swatch, pillClass } from '../components/Shared.jsx';
import { PRODUCTS, FILTER_OPTIONS, PAGE_SIZE, PAGE_SIZE_MORE } from '../data.js';
import { useLanguage } from '../LanguageContext.jsx';
import useReveal from '../useReveal.js';
import './Products.css';

export default function Products() {
  const { t, lang } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const ctaRef = useReveal();
  const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter((p) => p.collection === filter);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = filtered.length > visibleCount;

  return (
    <div>
      <div className="products-header">
        <span className="eyebrow">{t.products.eyebrow}</span>
        <h1>{t.products.title}</h1>
        <div className="filter-row">
          <div className="filters">
            {FILTER_OPTIONS.map((f) => (
              <button
                key={f.id}
                className={filter === f.id ? 'active' : ''}
                onClick={() => { setFilter(f.id); setVisibleCount(PAGE_SIZE); }}
              >
                {lang === 'id' ? f.idLabel : f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="products-body">
        <div className="product-grid">
          {visible.map((p) => (
            <Link key={p.id} to={`/products/${p.id}`} className="product-card">
              <img src={p.image} className="swatch" loading="lazy"/>
              <h4>{p.name}</h4>
              <span>{lang === 'id' ? p.idCut : p.cut}</span>
            </Link>
          ))}
        </div>
        {hasMore && (
          <div className="show-more">
            <button className={pillClass('outline')} onClick={() => setVisibleCount((c) => c + PAGE_SIZE_MORE)}>{t.products.showMore}</button>
          </div>
        )}
      </div>

      {/* <section className="section-alt reveal" ref={ctaRef}>
        <span className="eyebrow">Need a custom match?</span>
        <h2>We can source and cut veneer to your exact specification.</h2>
        <Link to="/contact" className={pillClass()} style={{ marginTop: 26 }}>Request a Sample</Link>
      </section> */}
    </div>
  );
}
