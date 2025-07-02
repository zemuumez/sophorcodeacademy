import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const Contact: React.FC = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm(initialForm);
  };

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        <section className="max-w-lg mx-auto px-6 py-section">
          <motion.h1
            className="text-heading-1 font-bold text-primary mb-8 text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60 }}
          >
            Contact Us
          </motion.h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-card shadow-card p-8 flex flex-col gap-5 animate-fade-in"
          >
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="input"
              whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #1e88e5" }}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="input"
              whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #1e88e5" }}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="input min-h-[120px]"
              whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #1e88e5" }}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            />
            {error && (
              <motion.div
                className="text-red-500 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {error}
              </motion.div>
            )}
            <motion.button
              type="submit"
              className="bg-primary text-white rounded-button px-6 py-3 font-bold shadow-button hover:shadow-lg transition-all text-lg mt-2"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {submitted ? "Sent!" : "Send Message"}
            </motion.button>
          </form>
          <div className="mt-10 text-center text-body-lg text-textSecondary">
            <div>
              Email:{" "}
              <a
                href="mailto:info@sophorcodeacademy.com"
                className="hover:text-primary"
              >
                info@sophorcodeacademy.com
              </a>
            </div>
            <div>
              Phone:{" "}
              <a href="tel:+251900000000" className="hover:text-primary">
                +251 900 000 000
              </a>
            </div>
            <div>Addis Ababa, Ethiopia</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
