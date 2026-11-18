import Reveal from '../../ui/Reveal';
import './SectionTitle.css';

export default function SectionTitle({ eyebrow, title }) {
  return (
    <Reveal className="section-title">
      <span className="eyebrow">
        {eyebrow}
      </span>
      <h2>{title}</h2>
    </Reveal>
  );
}
