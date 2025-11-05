import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const programs = [
  {
    title: "Mini Tennis",
    age: "For Ages 4 and Above",
    description:
      "Fun, play-based sessions on smaller courts — building balance, coordination, and early motor skills. A perfect first step into tennis for little champions!",
    emoji: "👧",
    color: "from-[#FFD84D] to-[#FFB84D]",
  },
  {
    title: "Kids Tennis Batch",
    age: "For Ages 7 and Above",
    description:
      "Progressive skill development with proper technique, footwork, and match basics — helping kids build confidence, discipline, and a love for the game.",
    emoji: "🧒",
    color: "from-[#0E7C6A] to-[#139E86]",
  },
  {
    title: "Recreational Adults",
    age: "All Levels",
    description:
      "Learn consistency, control, and match play strategies in a friendly, energetic environment. Ideal for fitness, fun, and social tennis enthusiasts.",
    emoji: "👨‍🦱",
    color: "from-[#FF6B2C] to-[#FFD84D]",
  },
  {
    title: "Private 1-on-1 Sessions",
    age: "All Ages",
    description:
      "Accelerate your improvement with personalized attention, tailored drills, and detailed performance feedback from our certified coaches.",
    emoji: "🎯",
    color: "from-[#0E7C6A] to-[#139E86]",
  },
  {
    title: "High Performance Elite",
    age: "Tournament Players",
    description:
      "Intensive program designed for competitive players — focusing on tactical training, match strategy, strength, and mental conditioning.",
    emoji: "🏅",
    color: "from-[#FF6B2C] to-[#FFD84D]",
  },
];

function CoachingPrograms() {
  return (
    <section
      id="programs"
      className="relative py-28 bg-gradient-to-b from-[#f3f7f6] via-white to-[#f9fafb]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#FFD84D] to-[#FF6B2C] mx-auto mb-6 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Our <span className="text-[#0E7C6A]">Coaching Programs</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Whether you're a beginner, a rising junior, or a competitive player
            — we offer world-class programs tailored to your age, level, and
            goals.
          </p>
        </motion.div>

        {/* Program Cards Grid */}
        <div className="flex flex-wrap justify-center gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group max-w-sm w-full"
            >
              {/* Top Gradient Accent */}
              <div className={`h-1.5 bg-gradient-to-r ${program.color}`} />
              <div className="p-8 flex flex-col items-center text-center">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl mb-4"
                >
                  {program.emoji}
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {program.title}
                </h3>

                <p className="text-sm font-medium text-[#0E7C6A] mb-3">
                  {program.age}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">
                  {program.description}
                </p>

                <Link
                  to="contact"
                  smooth
                  duration={600}
                  offset={-80}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${program.color} shadow-md hover:shadow-lg hover:scale-105 transition-transform cursor-pointer`}
                >
                  Join Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Accent Circles */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-[#FFD84D]/30 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-72 h-72 bg-[#0E7C6A]/30 rounded-full blur-3xl opacity-25"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />
    </section>
  );
}

export default CoachingPrograms;
