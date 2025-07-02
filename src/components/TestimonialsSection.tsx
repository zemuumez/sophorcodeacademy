import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mekdes T.",
    quote:
      "My son loved the robotics and coding sessions! He learned so much and made new friends.",
    avatar: "https://placehold.co/64x64?text=MT",
    rating: 5,
  },
  {
    name: "Samuel A.",
    quote:
      "The camp was fun and educational. I enjoyed the AI projects and the urban hiking!",
    avatar: "https://placehold.co/64x64?text=SA",
    rating: 4,
  },
  {
    name: "Hanna G.",
    quote:
      "Great mentors and a safe, friendly environment. Highly recommend for any parent!",
    avatar: "https://placehold.co/64x64?text=HG",
    rating: 5,
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring" as const, stiffness: 60 },
  }),
};

const TestimonialsSection: React.FC = () => (
  <section className="py-section bg-white">
    <div className="max-w-content mx-auto px-6">
      <h2 className="text-heading-2 font-bold text-center text-primary mb-12">
        What Parents & Students Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            className="bg-background rounded-card shadow-card p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            custom={i}
            whileHover={{ scale: 1.03, rotateZ: 1 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-16 h-16 rounded-full mb-4 shadow-md"
            />
            <p className="text-body-lg text-textSecondary mb-4">“{t.quote}”</p>
            <div className="flex gap-1 mb-2">
              {[...Array(t.rating)].map((_, idx) => (
                <span key={idx} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
              {[...Array(5 - t.rating)].map((_, idx) => (
                <span key={idx} className="text-gray-300 text-xl">
                  ★
                </span>
              ))}
            </div>
            <div className="font-bold text-primary">{t.name}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
