import React, { useState } from 'react';
import useReveal from '../useReveal.js';
import './Contact.css';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const infoRef = useReveal();
  const formRef = useReveal();

  return (
    <div className="contact-body">
      <span className="eyebrow">Get in touch</span>
      <h1>Let's talk about your next surface</h1>
      <div className="contact-grid">
        <div className="contact-info reveal" ref={infoRef}>
          <dl>
            <dt>Studio</dt>
            <dd>Pluit Blok No. 1<br />Jakarta, Indonesia</dd>
            <dt>Email</dt>
            <dd><a href="mailto:kaiuveneer@gmail.com">kaiuveneer@gmail.com</a></dd>
            <dt>Phone / WhatsApp</dt>
            <dd><a href="tel:+628131205377">+62 813 1205 377</a></dd>
            <dt>Studio Hours</dt>
            <dd>Monday – Saturday, 09:00 – 18:00</dd>
          </dl>
          <div className="contact-socials">
            <a href="https://www.instagram.com/kaiuveneer/" aria-label="Instagram"><img src="/assets/icons/instagram.svg" alt="Instagram" /></a>
            <a href="https://wa.me/628131205377" aria-label="WhatsApp"><img src="/assets/icons/whatsapp.svg" alt="WhatsApp" /></a>
          </div>
        </div>

        {sent ? (
          <div className="contact-success">
            <p>Thank you — we'll be in touch shortly.</p>
          </div>
        ) : (
          <form className="reveal" ref={formRef} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <div className="contact-form-field">
              <label>Full Name</label>
              <input type="text" required placeholder="Your name" />
            </div>
            <div className="contact-form-field">
              <label>Email</label>
              <input type="email" required placeholder="you@company.com" />
            </div>
            <div className="contact-form-field">
              <label>Enquiry Type</label>
              <input type="text" placeholder="Sample request, project quote, partnership…" />
            </div>
            <div className="contact-form-field">
              <label>Message</label>
              <textarea required placeholder="Tell us about your project" />
            </div>
            <button type="submit" className="contact-submit">Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
}
