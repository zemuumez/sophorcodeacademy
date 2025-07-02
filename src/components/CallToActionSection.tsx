import React from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { easeInOut } from "framer-motion";

const glitchKeyframes = {
  initial: { textShadow: "2px 0 #fff, -2px 0 #1e88e5", color: "#fff" },
  animate: {
    textShadow: [
      "2px 0 #fff, -2px 0 #1e88e5",
      "-2px 0 #fff, 2px 0 #1e88e5",
      "2px 0 #fff, -2px 0 #1e88e5",
    ],
    color: ["#fff", "#1e88e5", "#fff"],
    transition: { repeat: Infinity, duration: 1.2, ease: easeInOut },
  },
};

const CallToActionSection: React.FC = () => (
  <section className="py-section bg-primary text-white text-center">
    <motion.h2
      className="text-heading-2 md:text-heading-1 font-bold mb-4"
      initial="initial"
      animate="animate"
      variants={glitchKeyframes}
    >
      Ready to Join the Adventure?
    </motion.h2>
    <p className="text-body-lg mb-8 max-w-xl mx-auto">
      Register now for the Sophor Code Academy Summer Camp and unlock your
      child's potential in tech, life, and leadership!
    </p>
    <motion.a
      href="/registration"
      className="inline-block bg-white text-primary font-bold rounded-button px-8 py-3 shadow-button hover:shadow-lg hover:bg-accent hover:text-white transition-all text-lg"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ type: "spring", stiffness: 60 }}
    >
      Register Now
    </motion.a>
  </section>
);

export default CallToActionSection;
