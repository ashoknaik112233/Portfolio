import { useState } from 'react';
import { profile } from '../../../data/portfolio.js';
import SectionTitle from '../../ui/SectionTitle';
import Reveal from '../../ui/Reveal';
import { CheckIcon, CopyIcon, LinkedInIcon, MailIcon, PhoneIcon, PinIcon } from '../../ui/Icons';
import './Contact.css';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <section id="contact" className="section container">
      <SectionTitle eyebrow="Contact" title="Let's build something together" />

      <div className="contact-grid">
        <Reveal className="contact-info">
          <p className="lead">
            I'm currently open to full-stack and frontend roles. Whether you have an opportunity, a project idea,
            or just want to say hi — my inbox is always open.
          </p>

          <div className="contact-item glass">
            <MailIcon />
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <button className="icon-btn small" onClick={copy} aria-label="Copy email">
              {copied ? <CheckIcon width={16} height={16} /> : <CopyIcon width={16} height={16} />}
            </button>
          </div>
          <div className="contact-item glass">
            <PhoneIcon />
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
          </div>
          <div className="contact-item glass">
            <LinkedInIcon />
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn Profile</a>
          </div>
          <div className="contact-item glass">
            <PinIcon />
            <span>{profile.location}</span>
          </div>
        </Reveal>

        <Reveal delay={120} as="form" className="contact-form glass" onSubmit={submit}>
          <label>
            <span>Your name</span>
            <input required value={form.name} onChange={update('name')} placeholder="John Doe" />
          </label>
          <label>
            <span>Your email</span>
            <input required type="email" value={form.email} onChange={update('email')} placeholder="john@company.com" />
          </label>
          <label>
            <span>Message</span>
            <textarea required rows={5} value={form.message} onChange={update('message')} placeholder="Hi Ashok, I'd love to talk about..." />
          </label>
          <button type="submit" className="btn btn-primary btn-block">Send Message</button>
        </Reveal>
      </div>
    </section>
  );
}
