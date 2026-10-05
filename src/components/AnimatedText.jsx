import { motion } from 'framer-motion';

export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  stagger = 0.03,
  as: Comp = 'span',
}) {
  const MotionComp = motion[Comp] ?? motion.span;
  const chars = Array.from(text);

  return (
    <MotionComp
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {chars.map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 20, rotateX: -40 },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
            },
          }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </MotionComp>
  );
}