import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Calendar } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-[#f3f7f6] via-white to-[#f9fafb] overflow-hidden"
    >
      {/* Background Accents */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-[#FFD84D]/30 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
      />
      <motion.div
        className="absolute bottom-0 right-10 w-72 h-72 bg-[#0E7C6A]/30 rounded-full blur-3xl opacity-25"
        animate={{ y: [0, -15, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
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
            Get in <span className="text-[#0E7C6A]">Touch</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Whether you’re picking up a racquet for the first time or training
            for tournaments — we’d love to hear from you!
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#0E7C6A]" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Visit Us
                </h4>
                <p className="text-gray-600 text-sm">
                  Sector 61, Gurugram, Haryana, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#0E7C6A]" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Call / WhatsApp
                </h4>
                <p className="text-gray-600 text-sm">
                  <a
                    href="tel:+919717567897"
                    className="hover:text-[#0E7C6A] transition"
                  >
                    +91 97175 67897
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://wa.me/919717567897"
                    className="hover:text-[#0E7C6A] transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#0E7C6A]" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                <p className="text-gray-600 text-sm">
                  <a
                    href="mailto:learn2playtennis@gmail.com"
                    className="hover:text-[#0E7C6A] transition"
                  >
                    learn2playtennis@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-[#0E7C6A]" />
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  UPI for Payments
                </h4>
                <p className="text-gray-600 text-sm">arya.pdp@oksbi</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-8 text-sm md:text-base">
              Join Gurugram’s most trusted tennis academy and learn tennis the
              way it’s taught worldwide. Book your free trial session today!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="https://wa.me/919717567897"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-[#0E7C6A] to-[#139E86] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Book Free Trial
              </motion.a>

              <motion.a
                href="mailto:learn2playtennis@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-[#FFD84D] to-[#FFB84D] text-gray-900 px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Google Map Embed */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.31557421203!2d77.0948301!3d28.409733199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d230aa373dd47%3A0x9889da0b819ff5e!2sLearn2PlayTennis%20-%20A%20Tennis%20Academy!5e0!3m2!1sen!2sin!4v1762350965733!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Learn2PlayTennis Location"
              className="w-full h-[400px] md:h-[450px]"
            />
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-16 pt-8 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Learn2PlayTennis — All rights reserved.
          </p>
          <p className="mt-1 text-gray-400">
            Designed with ❤️ for players who love tennis.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
