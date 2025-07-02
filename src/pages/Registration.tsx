import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const initialForm = {
  parentName: "",
  studentName: "",
  age: "",
  email: "",
  phone: "",
  program: "",
};

const programs = [
  "Intro to Coding",
  "AI for Kids",
  "Robotics Lab",
  "Cyber Safety",
  "Life Skills",
  "Urban Hiking & Fitness",
  "Social Service",
];

const Registration: React.FC = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !form.parentName ||
      !form.studentName ||
      !form.age ||
      !form.email ||
      !form.phone ||
      !form.program
    ) {
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
            Registration
          </motion.h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-card shadow-card p-8 flex flex-col gap-5 animate-fade-in"
          >
            <motion.input
              type="text"
              name="parentName"
              placeholder="Parent/Guardian Name"
              value={form.parentName}
              onChange={handleChange}
              className="input"
              whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #1e88e5" }}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            />
            <motion.input
              type="text"
              name="studentName"
              placeholder="Student Name"
              value={form.studentName}
              onChange={handleChange}
              className="input"
              whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #1e88e5" }}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            />
            <motion.input
              type="number"
              name="age"
              placeholder="Student Age"
              value={form.age}
              onChange={handleChange}
              className="input"
              min={8}
              max={18}
              whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #1e88e5" }}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            />
            <motion.input
              type="email"
              name="email"
              placeholder="Parent Email"
              value={form.email}
              onChange={handleChange}
              className="input"
              whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #1e88e5" }}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            />
            <motion.input
              type="tel"
              name="phone"
              placeholder="Parent Phone"
              value={form.phone}
              onChange={handleChange}
              className="input"
              whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #1e88e5" }}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            />
            <motion.select
              name="program"
              value={form.program}
              onChange={handleChange}
              className="input"
              whileFocus={{ scale: 1.03, boxShadow: "0 0 0 2px #1e88e5" }}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <option value="">Select Program</option>
              {programs.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </motion.select>
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
              transition={{ delay: 0.7 }}
            >
              {submitted ? "Submitted!" : "Register"}
            </motion.button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Registration;
