import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ArrowUp } from 'lucide-react';

const sections = [['ingress', 'Welcome'], ['experience', 'Experience'], ['research', 'Research'], ['skills', 'Skills'], ['projects', 'Projects'], ['education', 'Education'], ['references', 'References']];

export default function InteractiveNavigation() {
  const [active, setActive] = useState('ingress');
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const distance = document.documentElement.scrollHeight - innerHeight;
      setProgress(distance > 0 ? Math.min(1, scrollY / distance) : 0);
      let current = 'ingress';
      for (const [id] of sections) {
        if ((document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= 160) current = id;
      }
      setActive(current);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('keydown', escape);
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    update();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); window.removeEventListener('keydown', escape); };
  }, []);
  return <>
    <div className="reading-progress" aria-hidden="true" style={{ transform: `scaleX(${progress})` }}/>
    <button className="mobile-navigation-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="portfolio-navigation" onClick={() => setOpen(!open)}>{open ? <X size={18}/> : <Menu size={18}/>}</button>
    <nav id="portfolio-navigation" aria-label="Portfolio sections" className={`interactive-navigation ${open ? 'navigation-open' : ''}`}>
      {sections.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
    {progress > .12 && createPortal(<a className="back-to-top" href="#ingress" aria-label="Back to top"><ArrowUp size={18}/></a>, document.body)}
  </>;
}
