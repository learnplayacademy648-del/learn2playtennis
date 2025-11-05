import React from "react";
import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";

const reviews = [
  {
    name: "Sanchit Shorewala",
    rating: 5,
    text: `Mr. Pradeep is an excellent coach. He has a real passion for tennis, which translates to a real passion for coaching. His enthusiasm and attention to each player’s growth make learning truly enjoyable.`,
    date: "7 months ago",
  },
  {
    name: "Aarika Sharma",
    rating: 5,
    text: `I've been training under Coach Pradeep for months — his focus on technique, fitness, and match play has completely transformed my game. Every session is motivating and well structured.`,
    date: "10 months ago",
  },
  {
    name: "Jacques B",
    rating: 5,
    text: `Pradeep is an exceptional tennis coach — detailed, reliable, and always up-to-date with modern techniques. Perfect for both beginners and advanced players.`,
    date: "a year ago",
  },
  {
    name: "Ruptika Vohra",
    rating: 5,
    text: `Pradeep Sir’s attention to detail and one-on-one guidance helped me build proper technique. His sessions are disciplined yet fun — a great mix!`,
    date: "a week ago",
  },
  {
    name: "Kushal Debnath",
    rating: 5,
    text: `One of the best coaches in Gurgaon! Extremely professional and supportive. Whether beginner or advanced, Coach Pradeep helps you reach your full potential.`,
    date: "6 days ago",
  },
  {
    name: "Rajat Matta",
    rating: 5,
    text: `We’ve been training with Pradeep sir for months, and the improvement in my daughter’s game is remarkable. His structured coaching and motivation make a real difference.`,
    date: "a day ago",
  },
];

// Get initials from name
const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

// Generate a color based on name hash (consistent per name)
const getProfileColor = (name) => {
  const colors = [
    "from-[#FFD84D] to-[#FFB84D]", // yellow-orange
    "from-[#0E7C6A] to-[#139E86]", // teal
    "from-[#FF6B2C] to-[#FFD84D]", // orange-yellow
    "from-[#7C3AED] to-[#A78BFA]", // violet
    "from-[#F59E0B] to-[#FBBF24]", // amber
    "from-[#3B82F6] to-[#60A5FA]", // blue
    "from-[#10B981] to-[#34D399]", // green
    "from-[#EC4899] to-[#F472B6]", // pink
  ];
  const hash = name
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
};

function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative py-24 bg-[#f9fafb] overflow-hidden"
    >
      {/* Decorative gradient circles */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-[#FFD84D]/25 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-[#0E7C6A]/25 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-20 h-1.5 bg-gradient-to-r from-[#FFD84D] to-[#FF6B2C] mx-auto mb-6 rounded-full"></div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            What Our <span className="text-[#0E7C6A]">Players Say</span>
          </h2>
          <p className="text-gray-600 text-lg mt-3 max-w-2xl mx-auto">
            Hear directly from our players and parents about their tennis
            journey with Learn2PlayTennis 🎾
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 p-6 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-3 text-[#FFD84D]/60">
                <MessageCircle size={28} />
              </div>

              {/* Header */}
              <div className="flex items-center gap-4 mb-3">
                {/* Avatar */}
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${getProfileColor(
                    review.name
                  )} text-white flex items-center justify-center font-semibold text-lg shadow-sm`}
                >
                  {getInitials(review.name)}
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 leading-tight">
                    {review.name}
                  </h4>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#FFD84D] fill-[#FFD84D]"
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-2">
                      {review.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed text-[15px]">
                {review.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-gray-500">
          ⭐ Verified reviews from players on Google
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
