import { useEffect, useState } from 'react';
import useTheme from '../../../hooks/useTheme.js';
import { profile } from '../../../data/portfolio.js';
import { SunIcon, MoonIcon } from '../../ui/Icons';
import './Navbar.css';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = '';
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <nav className={`nav-pill ${scrolled ? 'scrolled' : ''}`}>
        <a href="#top" className="logo" onClick={close}>
          <span className="logo-mark">AN</span>
          <span className="logo-text">{profile.name}</span>
        </a>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={active === l.id ? 'active' : ''}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button
            className="icon-btn"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <SunIcon width={18} height={18} /> : <MoonIcon width={18} height={18} />}
          </button>
          <a href={profile.resume} className="btn btn-primary btn-sm nav-resume" target="_blank" rel="noreferrer">
            Resume
          </a>
          <button
            className={`hamburger ${open ? 'open' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''} onClick={close}>
            {l.label}
          </a>
        ))}
        <a href={profile.resume} className="btn btn-primary btn-block" target="_blank" rel="noreferrer" onClick={close}>
          Resume
        </a>
      </div>
    </header>
  );
}
