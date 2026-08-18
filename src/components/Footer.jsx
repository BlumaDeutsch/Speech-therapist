import React from 'react';
import { SITE } from '../content';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">{SITE.clinicName}</div>
        <div className="footer-right">© {new Date().getFullYear()} {SITE.clinicName}</div>
      </div>
    </footer>
  );
}
