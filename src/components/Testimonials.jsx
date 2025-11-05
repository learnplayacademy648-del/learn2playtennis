import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Anup Bordoloi",
    rating: 5,
    text: "Pradeep Arya’s tennis coaching is outstanding! He focuses on the smallest details in technique, helping both adults and kids improve their game. His approach breaks down complex movements into easy-to-understand steps, ensuring quick progress. Whether you’re a beginner or advanced, his classes are engaging and effective. Highly recommended!",
    date: "a week ago",
  },
  {
    name: "Ruptika Vohra",
    rating: 5,
    text: "Great coach Pradeep Sir! His personal attention and 1:1 classes really help improve and learn correct techniques. The training sessions are disciplined and motivating. Highly recommended for anyone passionate about tennis! 🎾",
    date: "a week ago",
  },
  {
    name: "Baani Sukhamrit Kaur",
    rating: 5,
    text: "Amazing experience! The sessions are well-structured, encouraging, and full of energy. I’ve learned so much in such a short time!",
    date: "a week ago",
  },
  {
    name: "Kushal Debnath",
    rating: 5,
    text: "Pradeep has been very instrumental in my tennis journey. He is one of the top tennis coaches in Gurgaon, ATP certified. Whether beginner or advanced, you can reach out to him. His academy, Learn2PlayTennis, is located in Sector 61.",
    date: "6 days ago",
  },
  {
    name: "Rajat Matta",
    rating: 5,
    text: "We've been training with Pradeep sir for a while and are very pleased with the clear improvement in my daughter's game. His fantastic eye for detail, structured training, and clear feedback help players grow fast. Highly recommend for anyone looking to build a strong foundation.",
    date: "a day ago",
  },
  {
    name: "Pintu Kumar",
    rating: 5,
    text: "Good Tennis Academy. Well maintained and focused on improving players’ game.",
    date: "3 weeks ago",
  },
];

// helper to generate avatar initials
const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative py-28 bg-gradient-to-b from-white via-[#f9fafb] to-[#f3f7f6] overflow-hidden"
    >
      {/* Background glow accents */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-[#FFD84D]/25 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 left-10 w-72 h-72 bg-[#0E7C6A]/25 rounded-full blur-3xl opacity-25"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
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
            What Our <span className="text-[#0E7C6A]">Players Say</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Real stories from our learners, parents, and players who’ve grown
            with us.
          </p>
        </motion.div>

        {/* Reviews Feed */}
        <div className="flex flex-col gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-md rounded-2xl shadow-sm hover:shadow-lg transition-all p-6 border border-gray-100"
            >
              {/* Top Section */}
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-[#0E7C6A]/10 flex items-center justify-center text-[#0E7C6A] font-bold text-lg">
                  {getInitials(review.name)}
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-900">
                      {review.name}
                    </h4>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex items-center mt-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-[#FFD84D] fill-[#FFD84D]"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="mt-4 text-gray-700 leading-relaxed text-[15px] border-l-4 border-[#FFD84D] pl-4 italic">
                “{review.text}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
