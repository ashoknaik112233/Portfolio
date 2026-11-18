import { skills } from '../../../data/portfolio.js';
import SectionTitle from '../../ui/SectionTitle';
import Reveal from '../../ui/Reveal';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionTitle eyebrow="Skills" title="My tech toolbox" />

        <div className="skills-grid">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 80} className="skill-card glass">
              <div className="skill-head">
                <span className="skill-icon">{s.icon}</span>
                <h4>{s.group}</h4>
              </div>
              <div className="tags">
                {s.items.map((it) => (
                  <span key={it} className="tag">{it}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
