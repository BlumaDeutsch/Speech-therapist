import React, { useState } from 'react';
import { FAQ } from '../content';

function Item({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen((v) => !v)}>
        <span>{q}</span>
        <span className="chev">{open ? '־' : '+'}</span>
      </button>
      {open && <div className="faq-answer">{a}</div>}
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <h2>שאלות ותשובות</h2>
        <div className="faq-grid">
          {FAQ.map((f, i) => (
            <Item key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
