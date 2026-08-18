import React from 'react';
import { SITE } from '../content';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <h1>{SITE.headline}</h1>
            <p className="lead">{SITE.subtitle}</p>
            <a href="#contact" className="cta">
              {SITE.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

