import { Link } from "react-scroll";
import { motion } from "framer-motion";
import heroImage from "../assets/hero/hero-bg-2.jpg";
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* 🎾 Background image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Soft gradient overlay (adds luxury feel) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#0E7C6A]/70" />

      {/* ✨ Hero content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 max-w-3xl text-white"
      >
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD84D] via-white to-[#FF6B2C] drop-shadow-md">
            Learn Tennis
          </span>{" "}
          <br />
          <span className="font-light text-white">
            the Way It Is Taught Worldwide.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-200 mb-10 font-light tracking-wide">
          Where Passion Meets Performance
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-80}
            className="bg-[#0E7C6A] text-white px-8 py-3 rounded-full font-semibold cursor-pointer shadow-md hover:shadow-xl hover:bg-[#0c6759] hover:scale-105 transition-all duration-300"
          >
            Book Free Trial
          </Link>

          {/* <Link
            to="programs"
            smooth
            duration={600}
            offset={-80}
            className="bg-gradient-to-r from-[#FFD84D] to-[#FFB84D] text-black px-8 py-3 rounded-full font-semibold cursor-pointer shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Join Now
          </Link> */}
        </div>

        {/* Stats */}
        <div className="mt-16 flex justify-center gap-8 text-sm text-gray-200">
          <div className="group">
            <div className="text-3xl font-bold text-[#FFD84D] group-hover:scale-110 transition">
              12+
            </div>
            <div className="uppercase tracking-wide text-xs">
              Years Coaching
            </div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-[#FFD84D] group-hover:scale-110 transition">
              500+
            </div>
            <div className="uppercase tracking-wide text-xs">
              Players Trained
            </div>
          </div>
          <div className="group">
            <div className="text-3xl font-bold text-[#FFD84D] group-hover:scale-110 transition">
              5
            </div>
            <div className="uppercase tracking-wide text-xs">Programs</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-16 text-gray-300 text-sm tracking-wide"
        >
          ↓ Scroll to explore
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
