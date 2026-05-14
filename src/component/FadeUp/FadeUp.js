import { useEffect, useRef, useState } from 'react';
import './FadeUp.css';

const FadeUp = ({ children, delay = 0, direction = 'up' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const dirClass = {
    up:    'fade-up-el',
    left:  'fade-left-el',
    right: 'fade-right-el',
  }[direction];

  return (
    <div
      ref={ref}
      className={`${dirClass}${visible ? ' fade-visible' : ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default FadeUp;
