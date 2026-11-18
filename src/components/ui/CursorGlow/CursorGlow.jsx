import { useEffect, useRef } from 'react';
import './CursorGlow.css';

// Soft spotlight that follows the mouse (desktop only).
export default function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
      }
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);
  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
