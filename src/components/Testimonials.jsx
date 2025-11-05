import React from "react";
import { motion } from "framer-motion";
import { Star, MessageCircle } from "lucide-react";

const reviews = [
  {
    name: "Kushal Debnath",
    rating: 5,
    text: `Pradeep has been very instrumental in my tennis journey. He is one of the top tennis coaches in Gurgaon, ATP certified. Tennis enthusiasts - whether beginner or have played before, can reach out to him. His tennis academy Learn2play tennis is located in sector 61.`,
    date: "6 days ago",
  },
  {
    name: "Ruptika Vohra",
    rating: 5,
    text: `Great coach Pradeep Sir, his personal attention, 1:1 classes really helps improve and learn correct techniques. The training sessions are also disciplined. Highly recommended for anyone passionate about tennis! 🎾 …`,
    date: "a week ago",
  },

  {
    name: "Aarika Sharma",
    rating: 5,
    text: `I had an incredible experience at phoenix tennis academy, The coach Mr. Pradeep js highly skilled and passionate about developing players of all levels. The academy offers personalized training programs that focus on both technique and strategy, helping players improve quickly. This has greatly helped me develop a more consistent and strong game. Whether you're a beginner or an advanced player, this academy provides the perfect blend of professional guidance and a fun, motivating atmosphere. Highly recommend it for anyone serious about improving their game!`,
    date: "10 months ago",
  },

  {
    name: "Jacques B",
    rating: 5,
    text: `Pradeep is an exceptional tennis coach, and I highly recommend his lessons. Over the course of 45 sessions, he has proven to be extraordinarily reliable, never missing a single session. His attention to detail is very good and his techniques are up to date with the latest styles in tennis. Whether you're a seasoned player or a beginner, Pradeep caters to all skill levels. For those seeking a top-notch coach from abroad, Pradeep is the perfect choice.`,
    date: "a year ago",
  },
  {
    name: "Sanchit Shorewala",
    rating: 5,
    text: `Mr. Pradeep is an excellent coach. He has a real passion for tennis, which translates to a real passion for coaching. This passion motivates the student to keep learning and improving under his watchful eye, and he keeps the player's growth in mind from both a short- and long-term perspective. Both my sister and I have learnt under him, and I can credit his enthusiasm, knowledge, and infectious energy for making tennis my new favourite sport.
    
    I highly recommend for anyone wanting to start with tennis, or even just looking for a coach or partner to play with.`,
    date: "7 months ago",
  },
  {
    name: "Rajat Matta",
    rating: 5,
    text: `We've been training with Pradeep sir for a while now, and we are very pleased with the clear improvement in my daughter's game. He has a fantastic eye for detail and has been exceptional at refining her forehand and backhand techniques. He quickly identifies areas for improvement and provides clear, step-by-step guidance to achieve it. While we have primarily focused on groundstrokes so far, his methodical approach and deep understanding of the game give us great confidence in his ability to teach all other aspects as well. Highly recommend for any player looking to move beyond the beginner level and build a strong technical foundation.`,
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
