import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

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
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, type: "spring" as const, stiffness: 60 },
  }),
};

const SCROLL_AMOUNT = 350;

const CoursesCarousel: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true, amount: 0.2 });

  const scrollLeft = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (ref.current) {
      ref.current.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
    }
  };

  return (
    <section className="py-section bg-background relative">
      <div className="max-w-content mx-auto px-6">
        <h2 className="text-heading-2 font-bold text-center text-primary mb-12">
          Explore Our Programs
        </h2>
        <div className="relative">
          {/* Left Arrow */}
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-primary hover:text-white shadow-card rounded-full p-2 transition-all hidden md:block"
            onClick={scrollLeft}
            aria-label="Scroll left"
            type="button"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>
          {/* Right Arrow */}
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-primary hover:text-white shadow-card rounded-full p-2 transition-all hidden md:block"
            onClick={scrollRight}
            aria-label="Scroll right"
            type="button"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
          {/* Gradient Fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-background to-transparent z-10" />
          <motion.div
            ref={inViewRef}
            className="overflow-x-auto scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-background -mx-2 pb-2"
            style={{ scrollBehavior: "smooth" }}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div
              ref={ref}
              className="flex gap-8 min-w-max px-2"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {courses.map((course, i) => (
                <Tilt
                  key={course.title}
                  tiltMaxAngleX={20}
                  tiltMaxAngleY={20}
                  perspective={700}
                  scale={1.08}
                  transitionSpeed={500}
                  gyroscope={true}
                  glareEnable={true}
                  glareMaxOpacity={0.18}
                  className="w-[340px] md:w-[380px] lg:w-[420px] flex-shrink-0 scroll-snap-align-start"
                  style={{ willChange: "transform" }}
                >
                  <motion.div
                    className="bg-white rounded-card shadow-card overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    custom={i}
                    whileHover={{
                      scale: 1.1,
                      rotateZ: -2,
                      boxShadow: "0 12px 32px rgba(30,136,229,0.18)",
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="relative">
                      <img
                        src={course.img}
                        alt={course.title}
                        className="aspect-video w-full object-cover group-hover:scale-110 transition-transform duration-300 rounded-t-card"
                      />
                      {/* Glitch effect overlay */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          opacity: [0, 1, 0.7, 1, 0],
                          filter: [
                            "none",
                            "url(#glitch)",
                            "none",
                            "url(#glitch)",
                            "none",
                          ],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.2,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="w-full h-full animate-glitch bg-primary/10" />
                      </motion.div>
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
                </Tilt>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoursesCarousel;
