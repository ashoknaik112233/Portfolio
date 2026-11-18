import { profile, education } from '../../../data/portfolio.js';
import SectionTitle from '../../ui/SectionTitle';
import Reveal from '../../ui/Reveal';
import { CapIcon } from '../../ui/Icons';
import './About.css';

const focus = [
  { title: 'Frontend', text: 'Responsive, accessible React apps with clean state management.' },
  { title: 'Backend', text: 'Async Python APIs with FastAPI & Flask, built to scale.' },
  { title: 'Real-time', text: 'WebSockets & SSE pipelines with sub-second latency.' },
  { title: 'AI Apps', text: 'LLM, RAG and computer-vision powered products.' },
];

export default function About() {
  return (
    <section id="about" className="section container">
      <SectionTitle eyebrow="About me" title="Turning complex problems into fast, delightful software" />

      <div className="about-grid">
        <Reveal className="about-text">
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="edu-card glass">
            <div className="edu-icon"><CapIcon /></div>
            <div>
              <h4>{education.degree}</h4>
              <p>{education.school}</p>
            </div>
            <span className="edu-score">{education.score}</span>
          </div>
        </Reveal>

        <div className="focus-grid">
          {focus.map((f, i) => (
            <Reveal key={f.title} delay={i * 100} className="focus-card glass">
              <span className="focus-dot" />
              <h4>{f.title}</h4>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
