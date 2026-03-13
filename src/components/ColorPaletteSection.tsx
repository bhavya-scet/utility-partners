import { motion } from 'motion/react';
import { useState } from 'react';
import Scroll3D from './Scroll3D';

const countries = [
  { name: "Dubai Mainland", desc: "A Dubai Mainland license allows entrepreneurs to operate their businesses both within the UAE and internationally.", bgClass: "bg-brand-blue" },
  { name: "Abu Dhabi Mainland", desc: "Establish your presence in the capital with a wide range of business activities and opportunities.", bgClass: "bg-brand-charcoal" },
  { name: "ADGM", desc: "Abu Dhabi Global Market is an award-winning international financial center.", bgClass: "bg-brand-gray" },
  { name: "International", desc: "Expand your horizons globally with our international network and expertise.", bgClass: "bg-brand-blue" },
];

export default function ColorPaletteSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="countries" className="py-32 px-6 md:px-12 lg:px-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <Scroll3D className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.2em] text-white font-light mb-4">
            Plan Your Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white fx-text-depth">
            Choose The Country Of Your Ambition!
          </h3>
        </Scroll3D>

        <div className="flex flex-col md:flex-row gap-6 h-[400px]">
          {countries.map((country, index) => (
            <Scroll3D
              key={index}
              className={`fx-3d relative flex-1 rounded-2xl overflow-hidden cursor-pointer ${country.bgClass} flex flex-col justify-end p-6 border border-white/5 shadow-2xl`}
              delay={index * 0.1}
              distance={80}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                animate={{
                  flex: hoveredIndex === index ? 2 : 1,
                  boxShadow: hoveredIndex === index ? `0 0 40px rgba(255,255,255,0.1)` : "none",
                }}
                style={{
                  transition: "flex 0.5s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease",
                }}
                className="absolute inset-0 pointer-events-none"
              />
              <motion.div
                className="absolute inset-0 bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
              
              <div className="relative z-10 p-2">
                <motion.h4 
                  className="text-2xl font-bold text-white mb-2"
                  animate={{ y: hoveredIndex === index ? 0 : 10 }}
                >
                  {country.name}
                </motion.h4>
                
                <motion.p 
                  className="text-white/90 font-light text-sm tracking-wide"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0,
                    height: hoveredIndex === index ? "auto" : 0,
                    marginTop: hoveredIndex === index ? 8 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {country.desc}
                </motion.p>
              </div>
            </Scroll3D>
          ))}
        </div>
      </div>
    </section>
  );
}
