import { useEffect } from 'react';

/** Delegation also covers cards mounted by project filters and profile changes. */
export default function useCardInteraction() {
  useEffect(() => {
    const allowed = matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let card: HTMLElement | null = null;
    let frame = 0;
    let x = 0, y = 0;
    const reset = () => {
      cancelAnimationFrame(frame); frame = 0;
      if (card) {
        card.classList.remove('pointer-active');
        ['--tilt-x', '--tilt-y', '--pointer-x', '--pointer-y'].forEach(name => card?.style.removeProperty(name));
      }
      card = null;
    };
    const draw = () => {
      frame = 0;
      if (!card) return;
      const bounds = card.getBoundingClientRect();
      const px = Math.max(0, Math.min(1, (x - bounds.left) / bounds.width));
      const py = Math.max(0, Math.min(1, (y - bounds.top) / bounds.height));
      card.style.setProperty('--tilt-x', `${(0.5 - py) * 5}deg`);
      card.style.setProperty('--tilt-y', `${(px - 0.5) * 5}deg`);
      card.style.setProperty('--pointer-x', `${px * 100}%`);
      card.style.setProperty('--pointer-y', `${py * 100}%`);
      card.classList.add('pointer-active');
    };
    const move = (event: PointerEvent) => {
      if (!allowed.matches || event.pointerType !== 'mouse') { reset(); return; }
      const next = (event.target as Element).closest<HTMLElement>('.neural-card, .interactive-console');
      if (next !== card) { reset(); card = next; }
      if (!card) return;
      x = event.clientX; y = event.clientY;
      if (!frame) frame = requestAnimationFrame(draw);
    };
    document.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('pointerleave', reset);
    window.addEventListener('blur', reset);
    window.addEventListener('scroll', reset, { passive: true });
    allowed.addEventListener('change', reset);
    return () => { reset(); document.removeEventListener('pointermove', move); document.documentElement.removeEventListener('pointerleave', reset); window.removeEventListener('blur', reset); window.removeEventListener('scroll', reset); allowed.removeEventListener('change', reset); };
  }, []);
}
