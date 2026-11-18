import { experience } from '../../../data/portfolio.js';
import SectionTitle from '../../ui/SectionTitle';
import Reveal from '../../ui/Reveal';
import { BriefcaseIcon } from '../../ui/Icons';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <SectionTitle eyebrow="Experience" title="Where I've worked" />

      <div className="timeline">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 120} className="timeline-item">
            <div className="timeline-dot"><BriefcaseIcon width={16} height={16} /></div>
            <div className="timeline-card glass">
              <div className="timeline-head">
                <div>
                  <h3>{job.role} <span className="at">@ {job.company}</span></h3>
                  <p className="muted">{job.location}</p>
                </div>
                <span className="period mono">{job.period}</span>
              </div>
              <p>{job.summary}</p>
              <ul className="check-list">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
