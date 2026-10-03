import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function CustomCursor() {
  const cursor = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => {
    const media = window.matchMedia('(pointer: fine) and (min-width: 851px)');
    if (reduced || !media.matches) return undefined;
    const element = cursor.current;
    const move = (event) => {
      element.style.left = `${event.clientX}px`;
      element.style.top = `${event.clientY}px`;
      element.classList.add('cursor-visible');
      element.classList.toggle('cursor-active', Boolean(event.target.closest('a, button, summary')));
    };
    const hide = () => element.classList.remove('cursor-visible');
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', hide);
    window.addEventListener('blur', hide);
    media.addEventListener('change', hide);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('pointerleave', hide);
      window.removeEventListener('blur', hide);
      media.removeEventListener('change', hide);
    };
  }, [reduced]);
  return <div ref={cursor} className="custom-cursor" aria-hidden="true" />;
}
