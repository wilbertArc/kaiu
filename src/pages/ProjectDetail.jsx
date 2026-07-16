import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { pillClass } from '../components/Shared.jsx';
import { PROJECTS } from '../data.js';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="project-detail" style={{ textAlign: 'center' }}>
        <p style={{ fontSize: 18, color: 'var(--kaiu-brown-deep)' }}>Project not found.</p>
        <Link to="/projects" className={pillClass('outline')} style={{ marginTop: 20 }}>Back to Projects</Link>
      </div>
    );
  }

  const rows = [
    ['Location', 'Jakarta, Indonesia'],
    ['Veneer Used', project.veneerUsed],
    ['Scope', project.scope],
    ['Finish', project.finish],
  ];

  return (
    <div className="project-detail">
      <Link to="/projects" className="back-link">← Back to Projects</Link>
      <div className="project-detail-banner">
        <div className="scene" style={{ background: project.gradient }} />
      </div>
      <div className="project-detail-grid">
        <div>
          <span className="eyebrow">Mercure Hotel</span>
          <h1>{project.room}</h1>
          <p className="project-detail-desc">{project.longDesc}</p>
        </div>
        <div className="detail-info-grid">
          {rows.map(([label, val]) => (
            <div key={label} className="detail-info-cell">
              <span className="label">{label}</span>
              <span className="value">{val}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
