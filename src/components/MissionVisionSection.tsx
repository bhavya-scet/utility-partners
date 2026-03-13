import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Scroll3D from './Scroll3D';
import { CheckCircle2 } from 'lucide-react';

export default function MissionVisionSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const leftY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  const titleText = "Why Choose Unity Partners?".split(" ");
  
  const features = [
    "Personalized Approach",
    "Industry Expertise",
    "Extensive Network",
    "Excellent Customer Service"
  ];

  return (
    <section id="why-us" ref={ref} className="py-40 px-6 md:px-12 lg:px-24 bg-transparent relative overflow-hidden">
      {/* Slow moving gradient waves */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{
          background: "linear-gradient(45deg, var(--color-brand-blue) 0%, transparent 50%, var(--color-brand-blue) 100%)",
          backgroundSize: "400% 400%"
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 relative z-10">
        {/* Left Side */}
        <Scroll3D className="fx-3d" distance={70}>
        <motion.div style={{ y: leftY }} className="space-y-8">
          <h2 className="text-sm uppercase tracking-[0.2em] text-white font-light">
            Our Expertise
          </h2>
          <div className="text-4xl md:text-5xl font-bold leading-tight fx-text-depth flex flex-wrap gap-x-3 gap-y-2">
            {titleText.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
          <p className="text-white/80 font-light text-lg leading-relaxed mt-6">
            Dubai has established itself as a leading global business hub, drawing entrepreneurs and investors from around the world. With its strategic location, robust economy, dynamic market, and tax-free environment, Dubai presents countless opportunities for business growth.
          </p>
          <p className="text-white/80 font-light text-lg leading-relaxed mt-4">
            In the first quarter of 2024, over 19,000 new companies joined the Dubai Chamber of Commerce, marking a year-on-year growth of 17.6%. This growth is a testament to the thriving business landscape in Dubai.
          </p>
        </motion.div>
        </Scroll3D>

        {/* Right Side */}
        <Scroll3D className="fx-3d lg:mt-20" delay={0.2} distance={70}>
        <motion.div style={{ y: rightY }} className="space-y-8">
          <h2 className="text-sm uppercase tracking-[0.2em] text-white font-light">
            Stand Out Features
          </h2>
          <h3 className="text-3xl font-bold text-white fx-text-depth">
            Hassle-Free With Unity Partners
          </h3>
          <p className="text-white/80 font-light text-lg leading-relaxed mb-8">
            Starting a business in Dubai can be overwhelming. Unity Partners is here to help you navigate the process easily and confidently. We offer bespoke solutions based on your industry and budget.
          </p>
          
          <div className="space-y-4">
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                className="flex items-center gap-4 glass-card p-4 rounded-2xl border border-brand-gray/20"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1 }}
              >
                <CheckCircle2 className="text-brand-blue w-6 h-6 flex-shrink-0" />
                <span className="text-white font-medium text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        </Scroll3D>
      </div>
    </section>
  );
}
