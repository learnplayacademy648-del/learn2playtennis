import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Vision from "./components/Vision";
import CoachingPrograms from "./components/CoachingPrograms";
import CoachingTeam from "./components/CoachingTeam";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Learn2PlayHome() {
  return (
    <div className="font-poppins bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* NAVBAR SECTION*/}
      <Navbar />
      {/* HERO SECTION */}
      <Hero />
      {/* ABOUT SECTION */}
      <About />
      {/* VISION SECTION */}
      <Vision />
      {/*COACHING PROGRAMS SECTION */}
      <CoachingPrograms />
      {/* Coaching Team SECTION */}
      <CoachingTeam />
      {/* WHY US SECTION */}
      <WhyChooseUs />
      {/* Testimonial SECTION */}
      <Testimonials />
      {/* CONTACT SECTION */}
      <Contact />
    </div>
  );
}
