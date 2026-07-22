import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext.jsx';
import useReveal from '../useReveal.js';
import './Contact.css';

// Google Apps Script Web App endpoint (writes each submission as a row in the connected Google Sheet)
const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzCdoB0ZOT1TAbTZqn2QfKkr69AF3dFczAWSPKQ6BTBMTv4Yr8z7zqs8IBXxWNJOaRn/exec';

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const infoRef = useReveal();
  const formRef = useReveal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus('sending');
    const payload = {
      name: form.name.value,
      email: form.email.value,
      enquiryType: form.enquiryType.value,
      message: form.message.value,
    };
    try {
      await fetch(SHEET_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(payload),
      });
      // no-cors gives an opaque response (can't check res.ok), so treat the request completing as success
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-body">
      <span className="eyebrow">{t.contact.eyebrow}</span>
      <h1>{t.contact.title}</h1>
      <div className="contact-grid">
        <div className="contact-info reveal" ref={infoRef}>
          <dl>
            <dt>{t.contact.studio}</dt>
            <dd>Pluit Blok No. 1<br />Jakarta, Indonesia</dd>
            <dt>{t.contact.email}</dt>
            <dd><a href="mailto:kaiuveneer@gmail.com">kaiuveneer@gmail.com</a></dd>
            <dt>{t.contact.phone}</dt>
            <dd><a href="tel:+628131205377">+62 813 1205 377</a></dd>
            <dt>{t.contact.hours}</dt>
            <dd>{t.contact.hoursValue}</dd>
          </dl>
          <div className="contact-socials">
            <a href="https://www.instagram.com/kaiuveneer/" aria-label="Instagram"><img src="/assets/icons/instagram.svg" alt="Instagram" /></a>
            <a href="https://wa.me/628131205377" aria-label="WhatsApp"><img src="/assets/icons/whatsapp.svg" alt="WhatsApp" /></a>
          </div>
        </div>

        {status === 'sent' ? (
          <div className="contact-success">
            <p>{t.contact.success}</p>
          </div>
        ) : (
          <form className="reveal" ref={formRef} onSubmit={handleSubmit}>
            <div className="contact-form-field">
              <label>{t.contact.fullName}</label>
              <input type="text" name="name" required placeholder={t.contact.fullNamePh} />
            </div>
            <div className="contact-form-field">
              <label>{t.contact.emailField}</label>
              <input type="email" name="email" required placeholder={t.contact.emailPh} />
            </div>
            <div className="contact-form-field">
              <label>{t.contact.enquiryType}</label>
              <input type="text" name="enquiryType" placeholder={t.contact.enquiryPh} />
            </div>
            <div className="contact-form-field">
              <label>{t.contact.message}</label>
              <textarea name="message" required placeholder={t.contact.messagePh} />
            </div>
            <button type="submit" className="contact-submit" disabled={status === 'sending'}>
              {status === 'sending' ? t.contact.sending : t.contact.send}
            </button>
            {status === 'error' && <p style={{ color: '#b23b3b', fontSize: 13, marginTop: 10 }}>{t.contact.error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
