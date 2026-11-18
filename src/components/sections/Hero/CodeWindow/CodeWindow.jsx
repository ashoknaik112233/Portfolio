import { profile } from '../../../../data/portfolio.js';
import './CodeWindow.css';

// Editor-style card showing the developer profile as code.
export default function CodeWindow() {
  return (
    <div className="code-wrap">
      <div className="code-glow" />
      <div className="code-card">
        <div className="code-bar">
          <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
          <span className="code-file mono">ashok.js</span>
        </div>
        <pre className="code-body mono">
          <code>
            <span className="k">const</span> <span className="v">developer</span> = {'{'}{'\n'}
            {'  '}name: <span className="s">'{profile.name}'</span>,{'\n'}
            {'  '}role: <span className="s">'Full Stack Developer'</span>,{'\n'}
            {'  '}experience: <span className="n">'4+ years'</span>,{'\n'}
            {'  '}stack: [{'\n'}
            {'    '}<span className="s">'React'</span>, <span className="s">'Python'</span>,{'\n'}
            {'    '}<span className="s">'FastAPI'</span>, <span className="s">'WebSockets'</span>{'\n'}
            {'  '}],{'\n'}
            {'  '}loves: <span className="s">'real-time & AI apps'</span>,{'\n'}
            {'  '}available: <span className="k">true</span>,{'\n'}
            {'}'};
          </code>
        </pre>
      </div>
    </div>
  );
}
