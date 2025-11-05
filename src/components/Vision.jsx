import React from "react";
import { motion } from "framer-motion";
import jumpingShot from "../assets/vision/jumping shotjpg.jpg";

function Vision() {
  return (
    <section
      id="vision"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-[#f9fafb] via-white to-[#f3f7f6]"
    >
      {/* 🌈 Decorative animated gradient blobs */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-[#FFD84D]/40 rounded-full blur-3xl opacity-40"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-[#0E7C6A]/30 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
      />

      {/* 🧩 Content grid */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* TEXT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          {/* Accent bar */}
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#FFD84D] to-[#FF6B2C] mx-auto md:mx-0 mb-8 rounded-full"></div>

          {/* Heading */}
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Our <span className="text-[#0E7C6A]">Vision</span>
          </h3>

          {/* Full Vision Text */}
          <div className="text-gray-700 text-lg leading-relaxed font-light space-y-6">
            <p>
              At <strong>Learn2PlayTennis – A Tennis Academy</strong>, our
              vision is to create a world-class training environment where
              players of all ages and levels can learn tennis the way it is
              taught worldwide.{" "}
              <span role="img" aria-label="globe and tennis ball">
                🌍🎾
              </span>
            </p>

            <p>
              We aim to bridge the gap between local coaching and international
              standards by combining global teaching methodologies, modern
              techniques, and personalized coaching led by certified
              professionals.
            </p>

            <p>
              Our goal is to nurture confident, skillful, and disciplined
              players—from beginners to aspiring champions—while instilling a
              lifelong love for the game of tennis.
            </p>
          </div>

          {/* Floating tennis ball */}
          <motion.div
            className="mt-10 text-5xl opacity-80 flex justify-center md:justify-start"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎾
          </motion.div>

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            viewport={{ once: true }}
            className="mt-8 italic text-gray-500 text-base"
          >
            “Train with passion, play with purpose.”
          </motion.p>
        </motion.div>

        {/* IMAGE COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="overflow-hidden rounded-3xl shadow-xl relative h-[400px] md:h-[500px] lg:h-[550px]">
            <img
              src={jumpingShot}
              alt="Player performing tennis jumping shot"
              className="object-cover w-full h-full object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
          </div>

          {/* Decorative badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute -bottom-6 left-6 bg-gradient-to-r from-[#FFD84D] to-[#FFB84D] text-gray-900 px-6 py-3 rounded-xl font-semibold shadow-lg border border-[#f5e48b]/40"
          >
            Inspiring Champions
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Vision;
