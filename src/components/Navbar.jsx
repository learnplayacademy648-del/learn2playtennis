import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo/logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-gray-200/40">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/70 backdrop-blur-xl" />

      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          {/* Circular framed logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="w-12 h-12 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center overflow-hidden"
          >
            <img
              src={logo}
              alt="Learn2PlayTennis logo"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div>
            <h1 className="font-poppins text-lg font-semibold text-gray-900 tracking-wide leading-tight">
              <span className="text-gray-900">Learn</span>
              <span className="text-[#FF6B2C] font-bold">2</span>
              <span className="text-gray-900">PlayTennis</span>
            </h1>
            <p className="text-[10px] uppercase text-gray-500 tracking-[0.15em]">
              A Tennis Academy
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700">
          {[
            { to: "about", label: "About" },
            { to: "programs", label: "Programs" },
            { to: "coaches", label: "Coaches" },
            { to: "whyus", label: "Why Us" },
            { to: "contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={600}
              offset={-80}
              className="relative cursor-pointer hover:text-[#0E7C6A] transition group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FFD84D] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="contact"
              smooth
              duration={600}
              offset={-80}
              className="ml-4 bg-gradient-to-r from-[#FFD84D] to-[#FFE788] text-[#1E293B] font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all border border-[#f5e48b]/40"
            >
              Join Now
            </Link>
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-white/70 text-gray-700 px-3 py-2 rounded-md shadow-sm border border-gray-200 focus:outline-none"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg border-t border-gray-200"
          >
            <div className="flex flex-col items-center gap-4 py-6 text-gray-800 font-medium">
              {[
                { to: "about", label: "About" },
                { to: "programs", label: "Programs" },
                { to: "coaches", label: "Coaches" },
                { to: "whyus", label: "Why Us" },
                { to: "contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setIsOpen(false)} // closes menu on click
                  className="cursor-pointer hover:text-[#0E7C6A] transition"
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-[#FFD84D] to-[#FFE788] text-[#1E293B] font-semibold px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all border border-[#f5e48b]/40"
              >
                Join Now
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
