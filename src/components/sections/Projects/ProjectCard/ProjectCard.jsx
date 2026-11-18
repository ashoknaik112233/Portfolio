import Reveal from '../../../ui/Reveal';
import './ProjectCard.css';

// Card with a mouse-follow spotlight, headline metric, bullet points and tech tags.
export default function ProjectCard({ p, delay }) {
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <Reveal delay={delay} className={`project-card ${p.featured ? 'featured' : ''}`} onMouseMove={onMove}>
      <div className="project-top">
        <div>
          <span className="project-company mono">{p.company} · {p.period}</span>
          <h3>{p.title}</h3>
          <p className="project-sub">{p.subtitle}</p>
        </div>
        <div className="project-metric">
          <span className="gradient-text">{p.metric.value}</span>
          <small>{p.metric.label}</small>
        </div>
      </div>
      <ul className="project-points">
        {p.points.map((pt) => (
          <li key={pt}>{pt}</li>
        ))}
      </ul>
      <div className="tags">
        {p.tech.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>
    </Reveal>
  );
}
