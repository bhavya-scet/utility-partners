import { motion } from 'motion/react';
import { Mail, Globe, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Scroll3D from './Scroll3D';

export default function FooterSection() {
  const headingText = "Let's Build the Future Together".split(" ");

  return (
    <footer id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-transparent relative overflow-hidden border-t border-brand-gray/15">
      {/* Background Glow */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-brand-blue/20 filter blur-[100px] rounded-full pointer-events-none"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <div className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-16 flex flex-wrap justify-center gap-x-4 gap-y-2 fx-text-depth">
          {headingText.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: -45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
              className="inline-block text-white"
            >
              {word}
            </motion.span>
          ))}
        </div>

        <Scroll3D className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center mb-12" delay={0.2}>
          <div className="group fx-3d flex items-center gap-3 text-white hover:text-white transition-colors cursor-pointer">
            <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-brand-blue/20 transition-colors">
              <MapPin className="w-5 h-5 text-brand-blue" />
            </div>
            <span className="text-sm md:text-base font-light tracking-wide text-left max-w-xs">
              Business Central Towers (Tower B Office # 2608, 26th floor , Al Sufouh 2 – Dubai Media City)
            </span>
          </div>
        </Scroll3D>

        <Scroll3D className="mt-20 pt-8 border-t border-brand-gray/20 w-full flex flex-col md:flex-row justify-between items-center text-white text-sm font-light" delay={0.4}>
          <p>&copy; {new Date().getFullYear()} - Unity Partners. All Rights Reserved | Developed by SawaTech.</p>
          <div className="flex gap-4 mt-4 md:mt-0 flex-wrap justify-center">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms and Conditions</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Use</Link>
            <Link to="#" className="hover:text-white transition-colors">Payment Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">FAQ</Link>
          </div>
        </Scroll3D>
      </div>
    </footer>
  );
}
