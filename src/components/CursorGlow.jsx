import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorGlow() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 25 });
  const sy = useSpring(y, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    if (!fine) return;

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', leave);
    };
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ left: sx, top: sy, opacity: visible ? 0.55 : 0 }}
      className="pointer-events-none fixed -z-10 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/20 blur-[100px] transition-opacity duration-500 md:block"
    />
  );
}