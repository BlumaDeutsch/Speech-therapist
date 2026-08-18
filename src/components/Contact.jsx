import React from 'react';
import { CONTACT } from '../content';

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-inner">
        <div className="contact-card">
          <h2>{CONTACT.title}</h2>
          <p className="contact-note">{CONTACT.note}</p>
          <ul className="contact-list">
            <li>
              <strong>טלפון:</strong>{' '}
              <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
            </li>
            <li>
              <strong>אימייל:</strong>{' '}
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </li>
            <li>
              <strong>כתובת:</strong> {CONTACT.address}
            </li>
            <li>
              <strong>שעות פעילות:</strong> {CONTACT.hours}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
