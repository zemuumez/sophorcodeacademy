import React from "react";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Intro to Coding",
    desc: "Start your programming journey.",
    img: "https://placehold.co/320x180?text=Coding",
  },
  {
    title: "AI for Kids",
    desc: "Discover the world of AI.",
    img: "https://placehold.co/320x180?text=AI",
  },
  {
    title: "Robotics Lab",
    desc: "Build and code real robots.",
    img: "https://placehold.co/320x180?text=Robotics",
  },
  {
    title: "Cyber Safety",
    desc: "Stay safe and smart online.",
    img: "https://placehold.co/320x180?text=Cyber",
  },
  {
    title: "Life Skills",
    desc: "Grow as a leader and friend.",
    img: "https://placehold.co/320x180?text=Life+Skills",
  },
  {
    title: "Urban Hiking",
    desc: "Explore the city and stay fit.",
    img: "https://placehold.co/320x180?text=Hiking",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.12, type: "spring" as const, stiffness: 60 },
  }),
};

const CoursesCarousel: React.FC = () => {
  return (
    <section className="py-section bg-background">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-heading-2 font-bold text-center text-primary mb-12">
          Explore Our Programs
        </h2>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-background -mx-2 pb-2">
          <div className="flex gap-6 min-w-max px-2">
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                className="bg-white rounded-card shadow-card w-80 flex-shrink-0 overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                custom={i}
                whileHover={{ scale: 1.04, rotateZ: -1.5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="aspect-video w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Glitch effect overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-full h-full animate-glitch bg-primary/10" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-heading-4 font-bold text-primary mb-1">
                    {course.title}
                  </h3>
                  <p className="text-body-lg text-textSecondary">
                    {course.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesCarousel;
