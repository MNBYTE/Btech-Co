"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#FFF7F6] text-[#1A0A07] overflow-hidden">

      {/* Soft Animated Background Glow */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 flex justify-center items-center pointer-events-none"
        >
        <div className="
            w-[320px] h-[320px]
            sm:w-[500px] sm:h-[500px]
            md:w-[650px] md:h-[650px]
            rounded-full
            bg-[#FDE4D1]
        " />
        </motion.div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-8 md:py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* Left */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-sm text-[#4F4F4F]">Contact</p>
            <p className="text-base font-medium hover:text-[#FF6347] transition">
              info@btechco.co.uk
            </p>
            <p className="text-base font-medium hover:text-[#FF6347] transition">
              +44 7788963239
            </p>
          </motion.div>

          {/* Center CTA */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center space-y-6"
          >
            <h2 className="text-xl sm:text-xl md:text-xl font-semibold leading-snug text-align-center">
              Got a project? Want to collaborate?
            </h2>

            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              className="bg-[#FF6347] text-white px-7 py-3 rounded-full text-sm md:text-base shadow-md hover:shadow-xl transition-all duration-300"
            >
              Discuss your project
            </motion.button>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 md:text-right"
          >
            <p className="text-sm text-[#4F4F4F]">United Kingdom</p>
            <p className="text-base font-medium leading-relaxed">
              Jln. Bambu No. 375 <br />
              Samarinda, Kalimantan Timur
            </p>
          </motion.div>
        </div>

        {/* Middle Row */}
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="
                grid grid-cols-1 md:grid-cols-3
                items-center
                mt-10 md:mt-12
                text-sm text-[#828282]
                gap-6 md:gap-0
            "
            >
            {/* Left */}
            <p className="text-center md:text-left">
                © Copyright 2026. Btech&Co. All rights reserved.
            </p>

            {/* Center (perfectly centered always) */}
            <div className="flex justify-center gap-6">
                <span className="hover:text-[#FF6347] cursor-pointer transition">
                Terms & Conditions
                </span>
                <span className="hover:text-[#FF6347] cursor-pointer transition">
                Privacy Policy
                </span>
            </div>

            {/* Right */}
          <div className="flex justify-center md:justify-end gap-5 text-sm font-medium">

            <a
              href="#"
              className="hover:text-[#FF6347] transition"
              aria-label="Instagram"
            >
              <FaInstagram size={18} className="text-[#1A0A07]" />
            </a>

            <a
              href="#"
              className="hover:text-[#FF6347] transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} className="text-[#1A0A07]" />
            </a>

          </div>
            </motion.div>
      </div>

      {/* Massive Animated Text */}
      <div className="relative w-full overflow-hidden">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-[60px] sm:text-[100px] md:text-[120px] font-extrabold leading-none tracking-tight text-black whitespace-nowrap px-4 md:px-10 py-4 opacity-10 pointer-events-none"
        >
          let’s work together
        </motion.h1>
      </div>
    </footer>
  );
}