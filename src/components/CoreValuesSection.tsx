import { motion } from 'motion/react';
import { ShieldCheck, Lightbulb, Users, HeartHandshake, Award } from 'lucide-react';
import Scroll3D from './Scroll3D';

const values = [
  {
    title: "Integrity",
    description: "We act with honesty and integrity in everything we do.",
    icon: ShieldCheck,
  },
  {
    title: "Unity",
    description: "Fostering a culture of collaboration and teamwork.",
    icon: HeartHandshake,
  },
  {
    title: "Innovation",
    description: "We embrace creativity and strive for continuous improvement.",
    icon: Lightbulb,
  },
  {
    title: "Customer Focus",
    description: "Centricity on our clients, tailoring solutions to their unique needs.",
    icon: Users,
  },
  {
    title: "Excellence",
    description: "Delivering excellence and reliability in every service we provide.",
    icon: Award,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function CoreValuesSection() {
  return (
    <section id="values" className="py-32 px-6 md:px-12 lg:px-24 bg-transparent relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <Scroll3D className="text-center mb-20">
          <h2 className="text-sm uppercase tracking-[0.2em] text-white font-light mb-4">
            Core Values
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white fx-text-depth">
            The Principles That Guide Us
          </h3>
        </Scroll3D>

        <motion.div 
          className="flex flex-wrap justify-center gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ perspective: 1000 }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
            <Scroll3D
              key={index}
              className="glass-card fx-3d p-8 rounded-3xl flex flex-col items-start transition-colors duration-300 relative overflow-hidden group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
              delay={index * 0.08}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-brand-blue/20 flex items-center justify-center mb-6 text-white group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-7 h-7" />
                </motion.div>
                
                <h4 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h4>
                
                <p className="text-white font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Scroll3D>
          )})}
        </motion.div>
      </div>
    </section>
  );
}
