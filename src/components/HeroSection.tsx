import { motion, useScroll, useTransform } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrambleText from './ScrambleText';
import Scroll3D from './Scroll3D';

export default function HeroSection() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const desktopVideoPath = '/hero.mkv';
  const mobileVideoPath = '/hero.mkv';
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const title = "Your success story begins here".split(" ");
  const subtitle = "Explore new possibilities with our seamless Premium Business Set Up Services.".split(" ");

  const MotionLink = motion(Link);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);
    updateIsMobile();
    mediaQuery.addEventListener('change', updateIsMobile);
    return () => mediaQuery.removeEventListener('change', updateIsMobile);
  }, []);

  return (
    <section id="home" ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        key={isMobile ? 'mobile-video' : 'desktop-video'}
      >
        <source src={isMobile ? mobileVideoPath : desktopVideoPath} />
      </video>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-brand-gray rounded-full opacity-20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * -500],
              opacity: [0.2, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <Scroll3D className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
        <motion.div style={{ y, opacity }}>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4">
          {title.map((word, index) => (
            <motion.span
              key={index}
              className="text-5xl md:text-7xl font-bold tracking-tight fx-text-depth"
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
            >
              <ScrambleText text={word} />
            </motion.span>
          ))}
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mb-10 mt-4 text-white">
          {subtitle.map((word, index) => (
            <motion.span
              key={index}
              className="text-xl md:text-2xl font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.05,
                ease: "easeOut",
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <MotionLink
          to="/explore"
          className="group fx-3d relative inline-flex items-center gap-2 px-8 py-4 bg-brand-blue text-white rounded-full font-normal overflow-hidden transition-all"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(36, 122, 147, 0.8)" }}
        >
          <span className="relative z-10">
            <ScrambleText text="Apply Now" />
          </span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
          <div className="absolute inset-0 bg-brand-gray/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </MotionLink>
        </motion.div>
      </Scroll3D>

      {/* Floating UI Elements */}
      <motion.div 
        className="absolute top-1/4 left-10 glass fx-3d p-4 rounded-2xl hidden lg:block"
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-12 h-12 rounded-full bg-brand-blue/50 flex items-center justify-center">
          <div className="w-4 h-4 bg-brand-gray rounded-full animate-pulse" />
        </div>
      </motion.div>

      <motion.div 
        className="absolute bottom-1/4 right-10 glass fx-3d p-6 rounded-2xl hidden lg:block"
        animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex gap-2">
          <div className="w-2 h-8 bg-brand-blue rounded-full" />
          <div className="w-2 h-12 bg-brand-gray rounded-full" />
          <div className="w-2 h-6 bg-brand-gray rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
