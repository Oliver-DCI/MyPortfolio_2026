"use client";
// KORREKTUR: 'React' entfernt, nur die Hooks importiert
import { useEffect, useState } from 'react'; 
import { motion, useSpring, useMotionValue, useScroll } from 'framer-motion';

const VisualEffects = () => {
  const [mounted, setMounted] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { stiffness: 150, damping: 20 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    setMounted(true);
    let timer: ReturnType<typeof setTimeout>;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsIdle(false);
      
      clearTimeout(timer);
      timer = setTimeout(() => setIsIdle(true), 150);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-[9999] origin-left pointer-events-none bg-[#22c55e]"
        style={{ scaleX, boxShadow: '0 0 15px rgba(34, 197, 94, 0.5)' }}
      />

      <motion.div
        className="fixed inset-0 pointer-events-none z-[50]"
        animate={{
          background: `radial-gradient(${isIdle ? '300px' : '180px'} at ${mouseX.get()}px ${mouseY.get()}px, rgba(34, 197, 94, 0.12), transparent 70%)`,
        }}
        transition={{ type: "tween", ease: "circOut", duration: 0.1 }}
      />

      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#22c55e] rounded-full pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isIdle ? 2 : 1,
          opacity: isIdle ? 0.3 : 0.6
        }}
      />
    </>
  );
};

export default VisualEffects;