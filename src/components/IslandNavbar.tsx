import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'About Us', href: '#about' },
  { label: 'Business Setup', href: '#services' },
  { label: 'Countries', href: '#countries' },
  { label: 'Support', href: '#contact' },
];

export default function IslandNavbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[min(95vw,980px)]">
      <motion.nav
        className="relative glass rounded-full px-6 py-4 shadow-2xl backdrop-blur-md border border-white/10"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
      >
        <div className="flex items-center justify-between gap-4 md:gap-8">
          <a
            href="#home"
            className="inline-flex items-center gap-2 text-sm md:text-base tracking-widest text-white font-bold shrink-0"
          >
            <div className="w-8 h-8 rounded-full bg-brand-blue flex items-center justify-center border border-brand-gray/30">
              <span className="text-white text-xs">UP</span>
            </div>
            UNITY PARTNERS
          </a>

          <div className="hidden md:flex items-center gap-8 bg-black/20 px-6 py-2 rounded-full border border-white/5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gray transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <Link
            to="/explore"
            className="text-sm font-semibold text-brand-blue bg-white hover:bg-brand-gray hover:text-white px-5 py-2.5 rounded-full transition-all shrink-0 shadow-lg"
          >
            Cost Calculator
          </Link>
        </div>
      </motion.nav>
    </div>
  );
}
