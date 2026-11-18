import { useState } from 'react';
import { projects } from '../../../data/portfolio.js';
import SectionTitle from '../../ui/SectionTitle';
import Reveal from '../../ui/Reveal';
import ProjectCard from './ProjectCard';
import './Projects.css';

const filters = ['All', 'LG Soft India', 'Infosys'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const list = projects.filter((p) => filter === 'All' || p.company === filter);

  return (
    <section id="projects" className="section container">
      <SectionTitle eyebrow="Projects" title="Things I've built" />

      <Reveal className="filters">
        {filters.map((f) => (
          <button key={f} className={`chip ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
            {f}
          </button>
        ))}
      </Reveal>

      <div className="projects-grid">
        {list.map((p, i) => (
          <ProjectCard key={p.title} p={p} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
