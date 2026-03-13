import { motion } from 'motion/react';
import { useRef } from 'react';
import ScrambleText from './ScrambleText';
import Scroll3D from './Scroll3D';

export default function AboutSection() {
  const containerRef = useRef(null);

  const text = "Since 2019, Unity Partners has earned a reputation as a trusted leader in business support services, dedicated to providing customized solutions that cater to diverse business and career needs.".split(" ");

  return (
    <section 
      id="about"
      ref={containerRef}
      className="py-32 px-6 md:px-12 lg:px-24 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Animated Typography */}
        <Scroll3D className="space-y-8">
          <motion.h2 
            className="text-sm uppercase tracking-[0.2em] text-white font-light"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <ScrambleText text="About Us" />
          </motion.h2>
          
          <div className="text-3xl md:text-4xl font-normal leading-tight text-white fx-text-depth flex flex-wrap gap-x-3 gap-y-2">
            {text.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.02,
                  ease: "easeOut"
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
          
          <motion.p
            className="text-white/80 text-lg leading-relaxed mt-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Our team of experienced professionals offers a wide range of services, from company formation, licensing, and regulatory compliance to financial planning and strategic advisory, ensuring your business is positioned for long-term success.
          </motion.p>
          
          <motion.p
            className="text-white/80 text-lg leading-relaxed mt-4 font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            With each client, we assign a dedicated account manager who serves as a single point of contact, delivering personalized guidance. Leveraging our extensive international network, we open doors to global markets.
          </motion.p>
        </Scroll3D>

        {/* Right Side: Interactive Visual Element */}
        <Scroll3D className="relative h-[500px] w-full rounded-3xl overflow-hidden group cursor-pointer fx-3d" delay={0.15}>
          {/* Abstract Illustration */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent z-10" />
          
          <motion.div 
            className="absolute inset-0 bg-brand-blue/10 flex items-center justify-center"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Morphing Shapes */}
            <motion.div 
              className="w-64 h-64 bg-brand-blue rounded-full mix-blend-screen filter blur-3xl opacity-50 absolute"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, -50, 0],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="w-72 h-72 bg-brand-gray rounded-full mix-blend-overlay filter blur-3xl opacity-20 absolute"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -50, 0],
                y: [0, 50, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Central Element */}
            <div className="relative z-20 w-32 h-32 glass fx-3d rounded-2xl flex items-center justify-center border border-brand-gray/20 shadow-2xl">
              <motion.div 
                className="w-16 h-16 border-4 border-brand-blue rounded-full border-t-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </Scroll3D>
      </div>
    </section>
  );
}
