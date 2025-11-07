import React from "react";
import { motion } from "framer-motion";
import { Award, UserCheck, ShieldCheck } from "lucide-react";
import headCoach from "../assets/about/coach.jpg"; // portrait image

const founder = {
  name: "Mr. Pradeep Arya",
  title:
    "Founder & Head Coach – Learn2PlayTennis (Formerly Phoenix Tennis Academy)",
  image: headCoach,
  credentials: [
    "ATP Certified Coach",
    "AITA Certified Coach",
    "Former British Tennis (LTA) Member",
  ],
  description: `With over 18 years of coaching experience, Mr. Pradeep Arya has dedicated his career 
  to developing tennis talent and growing the sport at the grassroots level in Gurugram. 
  His modern, technique-focused training methods emphasize precision, motion, and performance — 
  the foundation for any successful tennis player. Every trainee receives personalized attention 
  and structured development plans suited to their age, skill, and goals.`,
  philosophy:
    "A coach plays a major role not only in the development of the game but also in creating a good human being.",
};

const team = [
  {
    name: "Daulat Gusain",
    role: "Certified Tennis Coach",
    details: [
      "Certified by AATC, USPTR, and AITA",
      "Certified Mini Tennis Coach",
    ],
  },
  {
    name: "Parveen Arya",
    role: "Certified Coach",
    details: [
      "Certified Tennis Coach from AITA (All India Tennis Association)",
    ],
  },
  {
    name: "Kundan Kumar",
    role: "Certified Tennis Coach",
    details: ["Certified Fitness Trainer by Ace Fitness"],
  },
];

function CoachingTeam() {
  return (
    <section
      id="coaches"
      className="relative py-28 bg-gradient-to-b from-white via-[#f9fafb] to-[#f3f7f6]"
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
            Meet Our <span className="text-[#0E7C6A]">Coaching Team</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Our internationally certified coaches combine expertise, experience,
            and passion to nurture every player’s growth — both on and off the
            court.
          </p>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg overflow-hidden mb-20 flex flex-col md:flex-row items-stretch"
        >
          {/* Image */}
          {/* Image */}
          <div className="md:w-1/2 w-full flex justify-center bg-black/5 overflow-hidden">
            <img
              src={founder.image}
              alt={founder.name}
              className="
      w-full 
      h-full 
      max-h-[700px] 
      object-cover 
      object-[center_35%]  /* Crop from bottom on mobile */
      sm:object-[center_25%]  /* Slightly less crop on small tablets */
      md:object-[center_20%]  /* Subtle crop on desktop */
      md:rounded-l-3xl 
      transition-transform 
      duration-700 
      hover:scale-[1.03]
    "
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 w-full p-8 md:p-12 text-center md:text-left flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {founder.name}
            </h3>
            <p className="text-[#0E7C6A] font-medium mb-4">{founder.title}</p>

            <ul className="text-gray-700 text-sm mb-6 space-y-1">
              {founder.credentials.map((cred, i) => (
                <li
                  key={i}
                  className="flex items-center justify-center md:justify-start gap-2"
                >
                  <Award className="w-4 h-4 text-[#FFD84D]" /> {cred}
                </li>
              ))}
            </ul>

            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              {founder.description}
            </p>

            {/* Coach's Philosophy */}
            <motion.blockquote
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="border-l-4 border-[#FFD84D] pl-4 italic text-gray-700 text-[15px] leading-relaxed mb-6"
            >
              “{founder.philosophy}”
            </motion.blockquote>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block bg-gradient-to-r from-[#FFD84D] to-[#FFB84D] text-gray-900 px-5 py-2 rounded-full font-semibold shadow self-center md:self-start"
            >
              Founder & Head Coach
            </motion.div>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="flex flex-wrap justify-center gap-10">
          {team.map((coach, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all p-8 text-center group relative overflow-hidden w-full sm:w-[320px] md:w-[360px]"
            >
              {/* Top Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0E7C6A] to-[#139E86]" />

              {/* Icon */}
              <div className="text-5xl mb-4 text-[#FFD84D] group-hover:scale-110 transition">
                <UserCheck />
              </div>

              {/* Name & Role */}
              <h4 className="text-lg font-bold text-gray-900 mb-1">
                {coach.name}
              </h4>
              <p className="text-[#0E7C6A] text-sm font-medium mb-4">
                {coach.role}
              </p>

              {/* Details */}
              <ul className="text-gray-600 text-sm text-left space-y-1 inline-block">
                {coach.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#FFD84D] mt-[2px]" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Support Team Note */}
        <p className="text-gray-600 text-center mt-16 max-w-2xl mx-auto text-sm italic">
          Supported by a dedicated team of assistant coaches who ensure every
          trainee receives personal attention and quality guidance.
        </p>
      </div>

      {/* Background Accents */}
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

export default CoachingTeam;
