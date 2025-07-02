import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeaturesSection from "../components/FeaturesSection";
import CoursesCarousel from "../components/CoursesCarousel";
import TestimonialsSection from "../components/TestimonialsSection";
import CallToActionSection from "../components/CallToActionSection";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Hero Section Placeholder */}
        <section className="flex flex-col items-center justify-center py-section text-center">
          <h1 className="text-heading-1 font-bold text-primary mb-4">
            Welcome to Sophor Code Academy
          </h1>
          <p className="text-body-lg text-textSecondary max-w-xl mb-8">
            Special Summer Camp for Ethiopian youth: Coding, AI, Robotics, Life
            Skills, and more!
          </p>
          <a
            href="/registration"
            className="bg-primary text-white rounded-button px-8 py-3 font-semibold shadow-button hover:shadow-lg transition-all"
          >
            Register Now
          </a>
        </section>
        <FeaturesSection />
        <CoursesCarousel />
        <TestimonialsSection />
        <CallToActionSection />
        {/* More sections (Testimonials, Call to Action, etc.) will go here */}
      </main>
      <Footer />
    </>
  );
};

export default Home;
