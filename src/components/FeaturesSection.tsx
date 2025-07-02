import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "💻",
    title: "Coding & Algorithms",
    description:
      "Learn programming, logic, and problem-solving with fun, hands-on projects.",
  },
  {
    icon: "🤖",
    title: "AI & Robotics",
    description:
      "Explore artificial intelligence and build real robots in teams.",
  },
  {
    icon: "🛡️",
    title: "Cyber Consciousness",
    description: "Stay safe online and develop digital citizenship skills.",
  },
  {
    icon: "💡",
    title: "Life Skills",
    description:
      "Grow in leadership, communication, and emotional intelligence.",
  },
  {
    icon: "⚽",
    title: "Sports & Fitness",
    description: "Stay active with games, sports, and urban hiking adventures.",
  },
  {
    icon: "🤝",
    title: "Social Service",
    description:
      "Give back to the community through meaningful service projects.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 60 },
  },
};

const FeaturesSection: React.FC = () => (
  <section className="py-section bg-white">
    <div className="max-w-content mx-auto px-6">
      <h2 className="text-heading-2 font-bold text-center text-primary mb-12">
        Why Join Our Summer Camp?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            className="bg-white rounded-card shadow-card p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{
              delay: i * 0.1,
              type: "spring" as const,
              stiffness: 60,
            }}
            whileHover={{ scale: 1.04, rotateZ: 1.5 }}
            whileTap={{ scale: 0.98 }}
          >
            <span
              className="text-4xl mb-4 select-none"
              style={{ filter: "drop-shadow(0 2px 8px #1e88e533)" }}
            >
              {feature.icon}
            </span>
            <h3 className="text-heading-4 font-bold text-primary mb-2">
              {feature.title}
            </h3>
            <p className="text-body-lg text-textSecondary">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
