import { motion } from 'motion/react';
import { useState } from 'react';
import { Building2, Plane, UserCheck, Globe2 } from 'lucide-react';
import Scroll3D from './Scroll3D';

const services = [
  { name: "Business Setup", description: "Streamlined support for establishing your business in the UAE.", icon: Building2, color: "from-brand-blue to-brand-gray" },
  { name: "Immigration Services", description: "Expert guidance for all your visa and immigration needs.", icon: Plane, color: "from-brand-charcoal to-brand-gray" },
  { name: "Concierge Services", description: "Personalized assistance to enhance your business experience.", icon: UserCheck, color: "from-brand-blue to-brand-gray" },
  { name: "Citizenship by Investment", description: "Achieve global mobility through strategic investments.", icon: Globe2, color: "from-brand-gray to-brand-charcoal" },
];

export default function BrandApplicationsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <Scroll3D className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.2em] text-white font-light mb-4">
            Our Solutions
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white fx-text-depth">
            Best Business Setup Consultants In Dubai
          </h3>
        </Scroll3D>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
            <Scroll3D
              key={index}
              className="relative aspect-video rounded-3xl overflow-hidden cursor-pointer group glass-card fx-3d border border-brand-gray/20"
              delay={index * 0.08}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Hover Preview Background */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                animate={{
                  scale: hoveredIndex === index ? 1.1 : 1,
                  rotate: hoveredIndex === index ? 2 : 0,
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                <motion.div 
                  className="w-20 h-20 rounded-full bg-brand-gray/10 flex items-center justify-center mb-6 backdrop-blur-md border border-brand-gray/20"
                  animate={{
                    y: hoveredIndex === index ? -10 : 0,
                    scale: hoveredIndex === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>
                
                <motion.h4 
                  className="text-2xl font-bold text-white"
                  animate={{ y: hoveredIndex === index ? -5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.name}
                </motion.h4>

                <motion.p
                  className="mt-4 px-6 py-2 text-sm font-normal text-white opacity-0"
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 10,
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {service.description}
                </motion.p>
              </div>
            </Scroll3D>
          )})}
        </div>
      </div>
    </section>
  );
}
