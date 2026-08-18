import React from 'react';
import { ABOUT } from '../content';

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2>{ABOUT.title}</h2>
        <div className="about-grid">
          <div className="about-text">
            {ABOUT.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p className="note">*טקסט זה הוא תוכן הדגמה וקל להחליפו בפרופיל אמיתי.</p>
          </div>
          <aside className="about-aside">
            <h3>ניסיון מקצועי (הדגמה)</h3>
            <ul>
              <li>מרכז להתפתחות הילד — הערכות וטיפול קבוצתי/אישי</li>
              <li>קליניקה פרטית — טיפולים פרטניים והדרכת הורים</li>
              <li>מסגרות חינוכיות וטיפוליות — ליווי והכשרת צוות</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
