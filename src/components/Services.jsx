import React from 'react';
import { SERVICES } from '../content';

export default function Services() {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <h2>תחומי טיפול</h2>
        <p className="section-lead">שירותים מותאמים אישית לילדים ולמשפחות.</p>
        <div className="services-grid">
          {SERVICES.map((s) => (
            <article key={s.id} className="service-card">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
