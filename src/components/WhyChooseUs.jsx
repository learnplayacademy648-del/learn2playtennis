import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Users,
  Target,
  ShieldCheck,
  HeartHandshake,
  Globe2,
} from "lucide-react";

const reasons = [
  {
    icon: <Trophy className="w-10 h-10 text-[#FFD84D]" />,
    title: "Over a Decade of Excellence",
    description:
      "Established in 2013, we’ve helped hundreds of players transform their tennis through structured, modern coaching.",
    color: "from-[#FFD84D] to-[#FFB84D]",
  },
  {
    icon: <Users className="w-10 h-10 text-[#0E7C6A]" />,
    title: "ATP Certified Leadership",
    description:
      "Led by ATP Certified Head Coach Mr. Pradeep Arya, our academy follows international coaching methods trusted worldwide.",
    color: "from-[#0E7C6A] to-[#139E86]",
  },
  {
    icon: <Target className="w-10 h-10 text-[#FF6B2C]" />,
    title: "Focused Training Programs",
    description:
      "Every batch and session is designed for skill-specific goals — from playful beginnings to tournament-ready athletes.",
    color: "from-[#FF6B2C] to-[#FFD84D]",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-[#0E7C6A]" />,
    title: "Safe & Professional Environment",
    description:
      "We maintain a motivating, inclusive, and secure environment — where growth, respect, and discipline come first.",
    color: "from-[#0E7C6A] to-[#139E86]",
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-[#FF6B2C]" />,
    title: "Personalized Attention",
    description:
      "Our coaches ensure every player gets the personal focus needed to develop confidence and long-term performance.",
    color: "from-[#FF6B2C] to-[#FFD84D]",
  },
  {
    icon: <Globe2 className="w-10 h-10 text-[#FFD84D]" />,
    title: "Global Coaching Standards",
    description:
      "We teach tennis as it’s played worldwide — modern drills, mental training, and performance-focused methods.",
    color: "from-[#FFD84D] to-[#FFB84D]",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="whyus"
      className="relative py-28 bg-gradient-to-b from-[#f9fafb] via-white to-[#f3f7f6] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#FFD84D] to-[#FF6B2C] mx-auto mb-6 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Why Choose <span className="text-[#0E7C6A]">Learn2PlayTennis</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Discover what sets us apart — our experience, passion, and
            commitment to helping every player unlock their potential.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-all p-8 text-center w-full sm:w-[320px] md:w-[360px] group overflow-hidden"
            >
              {/* Accent Line */}
              <div
                className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${reason.color}`}
              />
              <div className="mb-5 flex justify-center">
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {reason.icon}
                </motion.div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating background accents */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-[#FFD84D]/30 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-80 h-80 bg-[#0E7C6A]/30 rounded-full blur-3xl opacity-25"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
    </section>
  );
}

export default WhyChooseUs;
