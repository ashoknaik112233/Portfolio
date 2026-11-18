import { useEffect, useRef, useState } from 'react';
import './Reveal.css';

// Fades/slides children in when they scroll into view.
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={done ? undefined : { transitionDelay: `${delay}ms` }}
      onTransitionEnd={(e) => {
        if (visible && e.target === e.currentTarget) setDone(true);
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
