import React from 'react';
import { APPROACH } from '../content';

export default function Approach() {
  return (
    <section id="approach" className="section approach-section">
      <div className="container">
        <h2>{APPROACH.title}</h2>
        <p className="section-lead">{APPROACH.intro}</p>
        <ul className="approach-list">
          {APPROACH.points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
        <p className="approach-note">{APPROACH.note}</p>
      </div>
    </section>
  );
}
