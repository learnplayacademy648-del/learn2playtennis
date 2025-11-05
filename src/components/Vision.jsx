import React from "react";
import { motion } from "framer-motion";

function Vision() {
  return (
    <section
      id="vision"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-[#f9fafb] via-white to-[#f3f7f6]"
    >
      {/* Background decorative gradient blobs */}
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

      {/* Vision Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-3xl mx-auto px-6 text-center"
      >
        {/* Section label */}
        <div className="w-20 h-1.5 bg-gradient-to-r from-[#FFD84D] to-[#FF6B2C] mx-auto mb-8 rounded-full"></div>

        {/* Heading */}
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Our <span className="text-[#0E7C6A]">Vision</span>
        </h3>

        {/* Body text */}
        <p className="text-gray-700 text-lg leading-relaxed mb-10 font-light">
          To provide{" "}
          <span className="font-semibold text-[#0E7C6A]">
            world-class tennis coaching
          </span>{" "}
          that builds strong fundamentals, competitive skills, and a lifelong
          love for the sport — all in a fun, motivating, and professional
          environment.
        </p>

        {/* Floating tennis ball */}
        <div className="mt-12 flex justify-center relative">
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="text-5xl"
          >
            🎾
          </motion.div>

          {/* Decorative circle pulse */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-[#FFD84D]/60 rounded-full w-24 h-24"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 italic text-gray-500 text-base"
        >
          “Train with passion, play with purpose.”
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Vision;
