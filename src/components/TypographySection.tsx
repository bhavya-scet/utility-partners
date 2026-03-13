import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import Scroll3D from './Scroll3D';

const reviews = [
  {
    name: "Ahmad Reshad Salehi",
    date: "2024-12-26",
    text: "Unity Partners is known for providing high-quality services and strong client support. Their employees, Mirella and Salim, stand out for their professionalism and dedication.",
  },
  {
    name: "rachel ann estacio",
    date: "2024-12-25",
    text: "Angel and Salim made the process of getting equivalency certificate straightforward and easy. They were helpful, responsive, and handled everything efficiently.",
  },
  {
    name: "Mohammad Ikhlaif",
    date: "2024-12-23",
    text: "Seamless experience, Mirella and Salim handled my golden visa application from start to finish, highly recommended 10/10 !",
  },
];

export default function TypographySection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Scroll3D className="text-center mb-24">
          <div className="flex justify-center gap-1 mb-6 text-brand-gray">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-current" />
            ))}
          </div>
          <h2 className="text-sm uppercase tracking-[0.2em] text-white font-light mb-4">
            Excellent Based on 362 reviews
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white fx-text-depth">
            Client Testimonials
          </h3>
        </Scroll3D>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Scroll3D 
              key={index}
              className="glass-card fx-3d p-8 rounded-3xl border border-brand-gray/20 relative"
              delay={index * 0.1}
            >
              <div className="flex gap-1 mb-4 text-brand-gray">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-white/80 font-light leading-relaxed mb-8 italic">
                "{review.text}"
              </p>
              <div className="mt-auto">
                <h4 className="text-white font-medium text-lg">{review.name}</h4>
                <p className="text-white/50 text-sm font-light">{review.date}</p>
              </div>
            </Scroll3D>
          ))}
        </div>
      </div>
    </section>
  );
}
