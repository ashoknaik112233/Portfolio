import useTypewriter from '../../../hooks/useTypewriter.js';
import { profile, stats } from '../../../data/portfolio.js';
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, PinIcon } from '../../ui/Icons';
import CodeWindow from './CodeWindow';
import './Hero.css';

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="top" className="hero container">
      <div className="hero-content">
        <div className="badge fade-up" style={{ animationDelay: '0ms' }}>
          <span className="pulse-dot" /> Open to new opportunities
        </div>

        <h1 className="fade-up" style={{ animationDelay: '100ms' }}>
          Hi, I'm <span className="gradient-text">{profile.firstName}</span>
          <span className="wave">👋</span>
        </h1>

        <p className="hero-role fade-up mono" style={{ animationDelay: '200ms' }}>
          <span className="prompt">&gt;</span> {typed}
          <span className="caret" />
        </p>

        <p className="hero-tagline fade-up" style={{ animationDelay: '300ms' }}>
          {profile.tagline}
        </p>

        <div className="hero-cta fade-up" style={{ animationDelay: '400ms' }}>
          <a href="#projects" className="btn btn-primary">
            View My Work <ArrowIcon width={18} height={18} />
          </a>
          <a href={profile.resume} className="btn btn-outline" target="_blank" rel="noreferrer">
            <DownloadIcon width={18} height={18} /> Download CV
          </a>
        </div>

        <div className="hero-meta fade-up" style={{ animationDelay: '500ms' }}>
          <span><PinIcon width={16} height={16} /> {profile.location}</span>
          <div className="socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><MailIcon /></a>
          </div>
        </div>
      </div>

      <div className="hero-visual fade-in">
        <CodeWindow />
      </div>

      <div className="stats fade-up" style={{ animationDelay: '600ms' }}>
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <span className="stat-value gradient-text">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
}
