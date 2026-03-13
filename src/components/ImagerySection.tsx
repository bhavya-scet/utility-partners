import { motion } from 'motion/react';
import Scroll3D from './Scroll3D';

const stats = [
  { value: "600+", label: "Golden Visas" },
  { value: "15,000+", label: "Business Setup" },
  { value: "200+", label: "Citizenship by Investment" },
  { value: "30,000+", label: "Concierge Services" },
];

export default function ImagerySection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Scroll3D className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.2em] text-white font-light mb-4">
            Our Track Record
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white fx-text-depth">
            What Makes Us Unique?
          </h3>
        </Scroll3D>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Scroll3D 
              key={index}
              className="relative rounded-3xl overflow-hidden group fx-3d glass-card p-10 text-center border border-brand-gray/20"
              delay={index * 0.1}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div 
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-brand-blue to-white bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-white/80 font-medium uppercase tracking-wider text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            </Scroll3D>
          ))}
        </div>
      </div>
    </section>
  );
}
