import { useEffect, useMemo, useRef, useState } from 'react';
import './Preloader.css';

/* ---- Easy to change ---- */
const INITIALS = 'AN';
const NAME = 'ASHOK NAIK';
const TAGLINE = 'Welcome to Portfolio';
// Outer hexagon colours live in Preloader.css as --hx1 … --hx6

const EXIT_AT = 5200; // ms — preloader starts fading out
const FADE_MS = 600; // ms — fade-out length, then it is removed

/* ---- Geometry (SVG units, viewBox 0 0 200 200) ---- */
const R = 27; // circumradius of every hexagon
const RING = 49; // distance of outer hexagons from the centre
const FLY = 240; // how far outside they start / leave to

// Pointy-top hexagon points around (cx, cy)
const hexPoints = (cx, cy, r = R) =>
  Array.from({ length: 6 }, (_, k) => {
    const a = ((k * 60 - 90) * Math.PI) / 180;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(' ');

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/**
 * Hexagon-cluster intro shown before the portfolio.
 * Calls onDone() when it starts fading out, then unmounts itself.
 */
export default function Preloader({ onDone }) {
  const [phase, setPhase] = useState(() => (reducedMotion() ? 'gone' : 'play')); // play | out | gone
  const timers = useRef([]);
  const doneRef = useRef(onDone);
  doneRef.current = onDone;

  // Six outer hexagons, each with its own direction and random spins
  const outer = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => {
        const a = (i * 60 * Math.PI) / 180;
        return {
          points: hexPoints(100 + RING * Math.cos(a), 100 + RING * Math.sin(a)),
          dx: `${(Math.cos(a) * FLY).toFixed(1)}px`,
          dy: `${(Math.sin(a) * FLY).toFixed(1)}px`,
          spinIn: `${Math.round((Math.random() - 0.5) * 360)}deg`,
          spinOut: `${Math.round((Math.random() - 0.5) * 300)}deg`,
        };
      }),
    []
  );

  const exit = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setPhase('out');
    doneRef.current?.();
    timers.current.push(setTimeout(() => setPhase('gone'), FADE_MS));
  };

  useEffect(() => {
    if (phase === 'gone') {
      doneRef.current?.();
      return;
    }
    timers.current.push(setTimeout(exit, EXIT_AT));
    return () => timers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Lock page scroll while visible
  useEffect(() => {
    document.body.style.overflow = phase === 'play' ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [phase]);

  if (phase === 'gone') return null;

  return (
    <div className={`pl-root ${phase === 'out' ? 'pl-out' : ''}`} role="status" aria-label="Loading portfolio">
      <button className="pl-skip" type="button" onClick={exit}>
        Skip
      </button>

      <svg className="pl-logo" viewBox="0 0 200 200" role="img" aria-label={`${NAME} logo`}>
        {outer.map((h, i) => (
          <polygon
            key={i}
            className="pl-hx pl-hx-outer"
            points={h.points}
            style={{
              fill: `var(--hx${i + 1})`,
              '--i': i,
              '--dx': h.dx,
              '--dy': h.dy,
              '--spin-in': h.spinIn,
              '--spin-out': h.spinOut,
            }}
          />
        ))}
        <polygon className="pl-hx pl-hx-center" points={hexPoints(100, 100)} />
        <text className="pl-initials" x="100" y="113" textAnchor="middle">
          {INITIALS}
        </text>
      </svg>

      <div className="pl-name">{NAME}</div>
      <div className="pl-divider" aria-hidden="true">
        <span className="pl-divider-line pl-divider-left" />
        <span className="pl-diamond" />
        <span className="pl-divider-line pl-divider-right" />
      </div>
      <div className="pl-tag">{TAGLINE}</div>
    </div>
  );
}
