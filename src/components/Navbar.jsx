import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { navigation, profile } from '../data/portfolio';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const media = window.matchMedia('(min-width: 851px)');
    const closeOnDesktop = () => { if (media.matches) setOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    media.addEventListener('change', closeOnDesktop);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      media.removeEventListener('change', closeOnDesktop);
    };
  }, [open]);

  return (
    <motion.header id="home" className="wrap site-nav" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <a className="brand" href="#home" aria-label="Shella Waramena home">SW <span>/ SHELLA WARAMENA</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map(({ id, label }) => <a key={id} href={`#${id}`}>{label}</a>)}
        <a href="#contact">Contact</a>
        <a className="pill" href={profile.resume} download>Resume ↗</a>
      </nav>
      <button ref={toggle} className="menu-toggle pill" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation"
            initial={reduced ? false : { opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            {navigation.map(({ id, label }) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label} <span>↗</span></a>)}
            <a href="#contact" onClick={() => setOpen(false)}>Contact <span>↗</span></a>
            <a href={profile.resume} download onClick={() => setOpen(false)}>Resume <span>↓</span></a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
