import { Link } from "react-scroll";
import { motion } from "framer-motion";
import heroImage from "../assets/hero/hero-bg-2.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden pt-20 sm:pt-24"
    >
      {/* 🎾 Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 blur-sm"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* 🟢 Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#0E7C6A]/70" />

      {/* ✨ Centered content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          relative z-10 flex flex-col items-center justify-center
          w-full max-w-3xl mx-auto px-6 sm:px-8 text-white text-center
        "
      >
        {/* Headline */}
        <h1
          className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
            font-extrabold leading-tight mb-6 break-words
          "
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD84D] via-white to-[#FF6B2C] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Learn Tennis
          </span>
          <br className="hidden sm:block" />
          <span className="font-light text-white block mt-2 sm:mt-0">
            The Way It Is Taught Worldwide.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-10 font-light tracking-wide leading-relaxed">
          Where Passion Meets Performance
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-80}
            className="bg-[#0E7C6A] text-white px-6 sm:px-8 py-3 rounded-full font-semibold cursor-pointer shadow-md hover:shadow-xl hover:bg-[#0c6759] hover:scale-105 transition-all duration-300"
          >
            Book Free Trial
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-16 flex justify-center gap-6 sm:gap-8 text-sm text-gray-200">
          <div className="group">
            <div className="text-2xl sm:text-3xl font-bold text-[#FFD84D] group-hover:scale-110 transition">
              18+
            </div>
            <div className="uppercase tracking-wide text-[10px] sm:text-xs">
              Years Coaching
            </div>
          </div>
          <div className="group">
            <div className="text-2xl sm:text-3xl font-bold text-[#FFD84D] group-hover:scale-110 transition">
              500+
            </div>
            <div className="uppercase tracking-wide text-[10px] sm:text-xs">
              Players Trained
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-12 sm:mt-16 text-gray-300 text-xs sm:text-sm tracking-wide"
        >
          ↓ Scroll to explore
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
