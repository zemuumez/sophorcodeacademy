import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => (
  <>
    <main className="bg-background min-h-screen">
      <section className="max-w-content mx-auto px-6 py-section">
        <motion.h1
          className="text-heading-1 font-bold text-primary mb-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60 }}
        >
          About Sophor Code Academy
        </motion.h1>
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-heading-3 font-bold text-primary mb-2">
            Our Mission
          </h2>
          <p className="text-body-lg text-textSecondary">
            To empower Ethiopian youth with technology, life skills, and a
            spirit of innovation, preparing them for a bright future in a
            digital world.
          </p>
        </motion.div>
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-heading-3 font-bold text-primary mb-2">
            Our Approach
          </h2>
          <p className="text-body-lg text-textSecondary">
            We blend hands-on coding, robotics, AI, and real-world projects with
            personal development, teamwork, and social service. Our summer camp
            and weekend programs are designed to be fun, safe, and
            transformative.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-heading-3 font-bold text-primary mb-2">
            Our Team
          </h2>
          <p className="text-body-lg text-textSecondary mb-4">
            Our mentors are passionate educators, engineers, and innovators from
            Ethiopia and beyond. We believe in nurturing every child's
            potential.
          </p>
          <ul className="list-disc pl-6 text-body-lg text-textSecondary">
            <li>Experienced coding and robotics instructors</li>
            <li>Life skills and leadership coaches</li>
            <li>University student mentors</li>
            <li>Supportive staff and volunteers</li>
          </ul>
        </motion.div>
      </section>
    </main>
  </>
);

export default About;
