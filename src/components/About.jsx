import React from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/about/coach.jpg"; // ✅ use local image if you have one

function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-white via-[#f9fafb] to-[#f3f7f6]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* TEXT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Accent bar */}
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#FFD84D] to-[#FF6B2C] mb-6 rounded-full"></div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-snug">
            About <span className="text-[#0E7C6A]">Learn2PlayTennis</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-5">
            Founded and led by{" "}
            <span className="font-semibold text-[#0E7C6A]">
              Mr. Pradeep Arya
            </span>
            , an{" "}
            <strong>
              ATP Certified and Internationally Accredited Head Coach
            </strong>
            , Learn2PlayTennis is one of Gurugram’s most recognized and
            respected tennis academies.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Established in <strong>2013</strong> (formerly known as{" "}
            <strong>Phoenix Tennis Academy</strong>), the academy is renowned
            for its <em>professional coaching methods</em>,{" "}
            <em>structured training programs</em>, and{" "}
            <em>personalized attention</em> — helping every player achieve their
            full potential.
          </p>

          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-[#0E7C6A] to-[#139E86] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-all"
          >
            Learn More
          </motion.button> */}

          {/* Decorative floating tennis ball */}
          <motion.div
            className="absolute -right-12 top-12 text-5xl opacity-10 select-none"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🎾
          </motion.div>
        </motion.div>

        {/* IMAGE COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Image wrapper */}
          <div className="overflow-hidden rounded-3xl shadow-xl relative h-[500px] md:h-[550px]">
            <img
              src={aboutImage}
              alt="Coach training players"
              className="object-cover w-full  object-center"
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent" />
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="absolute -bottom-6 left-6 bg-gradient-to-r from-[#FFD84D] to-[#FFB84D] text-gray-900 px-6 py-3 rounded-xl font-semibold shadow-lg border border-[#f5e48b]/40"
          >
            Since 2013
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
