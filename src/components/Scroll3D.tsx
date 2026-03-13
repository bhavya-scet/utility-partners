import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import type { HTMLMotionProps } from 'motion/react';

type Scroll3DProps = HTMLMotionProps<'div'> & {
  children: ReactNode;
  delay?: number;
  distance?: number;
  once?: boolean;
};

export default function Scroll3D({
  children,
  className,
  delay = 0,
  distance = 90,
  once = true,
  ...rest
}: Scroll3DProps) {
  return (
    <motion.div
      className={className}
      style={{ transformStyle: 'preserve-3d', perspective: 1400 }}
      initial={{
        opacity: 0,
        y: distance,
        z: -220,
        rotateX: -22,
        rotateY: 12,
        scale: 0.9,
        filter: 'blur(10px)',
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        z: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        filter: 'blur(0px)',
      }}
      viewport={{ once, margin: '-120px' }}
      transition={{
        type: 'spring',
        stiffness: 90,
        damping: 16,
        mass: 0.9,
        delay,
      }}
      whileHover={{
        rotateX: 6,
        rotateY: -6,
        y: -8,
        scale: 1.02,
      }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
