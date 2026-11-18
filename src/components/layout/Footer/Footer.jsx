import { profile } from '../../../data/portfolio.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          Designed & built by <span className="gradient-text">{profile.name}</span> with React
        </p>
        <p className="muted">© {new Date().getFullYear()} · All rights reserved</p>
      </div>
    </footer>
  );
}
