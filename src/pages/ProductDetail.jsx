import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Swatch, pillClass } from '../components/Shared.jsx';
import { PRODUCTS } from '../data.js';
import './ProductDetail.css';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="product-detail" style={{ textAlign: 'center' }}>
        <p style={{ fontSize: 18, color: 'var(--kaiu-brown-deep)' }}>Product not found.</p>
        <Link to="/products" className={pillClass('outline')} style={{ marginTop: 20 }}>Back to Collections</Link>
      </div>
    );
  }

  const rows = [
    ['Species', product.species],
    ['Cut Method', product.cutMethod],
    ['Best For', product.bestFor],
    ['Finish', product.finish],
  ];

  return (
    <div className="product-detail">
      <Link to="/products" className="back-link">← Back to Collections</Link>
      <div className="product-detail-grid">
        <Swatch color={product.color} className="product-detail-swatch" />
        <div>
          <span className="eyebrow">{product.collectionLabel} Collection</span>
          <h1>{product.name}</h1>
          <span className="product-detail-cut">{product.cut}</span>
          <p className="product-detail-desc">{product.longDesc}</p>
          <div className="detail-info-grid">
            {rows.map(([label, val]) => (
              <div key={label} className="detail-info-cell">
                <span className="label">{label}</span>
                <span className="value">{val}</span>
              </div>
            ))}
          </div>
          <button className={`${pillClass()} product-detail-cta`} onClick={() => navigate('/contact')}>Request a Sample</button>
        </div>
      </div>
    </div>
  );
}
