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

        {/* Right Side: About visual card */}
        <Scroll3D className="relative h-[500px] w-full rounded-3xl overflow-hidden group cursor-pointer fx-3d" delay={0.15}>
          {/* Background image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/Ultrarealistic_architectural_photography_of_the_me_delpmaspu.png')" }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10 group-hover:from-black/80 group-hover:via-black/60 transition-colors duration-500" />

          {/* Content overlay */}
          <div className="relative z-20 h-full w-full flex flex-col justify-end p-10 space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-white/70">
              Tailored business support
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-white fx-text-depth">
              Built for ambitious founders and professionals who want a seamless setup experience in the UAE.
            </h3>
            <p className="text-white/80 text-sm md:text-base max-w-md">
              From licensing to compliance and concierge-level assistance, our team handles the complexities so you can stay focused on growth.
            </p>
          </div>
        </Scroll3D>
      </div>
    </section>
  );
}
