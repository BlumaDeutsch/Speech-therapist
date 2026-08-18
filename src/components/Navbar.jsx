import React, { useState } from 'react';
import '../styles/site.css';
import { SITE } from '../content';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '#about', label: 'אודות' },
    { href: '#services', label: 'תחומי טיפול' },
    { href: '#approach', label: 'הגישה הטיפולית' },
    { href: '#faq', label: 'שאלות ותשובות' },
    { href: '#contact', label: 'צור קשר' },
  ];

  return (
    <header className="site-navbar">
      <div className="nav-inner">
        <div className="brand">{SITE.clinicName}</div>
        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="ניווט ראשי">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className={`hamburger ${open ? 'is-open' : ''}`}
          aria-label="תפריט"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
