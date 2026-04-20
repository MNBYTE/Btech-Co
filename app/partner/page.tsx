"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function PartnerPage() {
  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      className="bg-[#FFFFFF] min-h-screen"
    >

      {/* Hero */}
      <motion.section
        variants={container}
        className="max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-12 text-center"
      >
        <motion.p
          variants={item}
          className="text-xs tracking-[0.2em] text-[#A13A28] mb-4"
        >
          CONNECT WITH EXCELLENCE
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A0A07]"
        >
          Let’s Talk.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-[#4F4F4F] max-w-xl mx-auto text-sm md:text-base"
        >
          Whether you want to learn more about our services or you’re ready to begin planning, we want to hear from you.
        </motion.p>
      </motion.section>

      {/* Content */}
      <motion.section
        variants={container}
        className="max-w-7xl mx-auto px-6 md:px-10 pb-20"
      >
        <div className="grid lg:grid-cols-[320px_1fr] gap-10 items-start">

          {/* LEFT PANEL */}
          <motion.div variants={container} className="space-y-6">

            {/* Direct Access */}
            <motion.div
              variants={item}
              className="bg-[#E0E0E0] p-6 rounded-2xl shadow-sm"
            >
              <motion.h3
                variants={item}
                className="font-bold mb-6 text-[#1A0A07]"
              >
                Direct Access
              </motion.h3>

              <div className="space-y-6 text-sm">

                {/* Email */}
                <motion.div
                  variants={item}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3"
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <Mail className="w-5 h-5 text-[#A13A28] mt-1" />
                  </motion.div>

                  <div>
                    <p className="text-xs text-[#828282] mb-1">EMAIL US</p>
                    <p className="text-[#1A0A07] font-medium">
                      info@btechco.co.uk
                    </p>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  variants={item}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3"
                >
                  <motion.div whileHover={{ scale: 1.2 }}>
                    <MapPin className="w-5 h-5 text-[#A13A28] mt-1" />
                  </motion.div>

                  <div>
                    <p className="text-xs text-[#828282] mb-1">
                      VISIT OUR HUB
                    </p>
                    <p className="text-[#1A0A07] font-medium leading-relaxed">
                      Dorset House, Kingston road,
                      Leatherhead, KT227PL.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Image Card */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="relative h-[180px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/imgs/Btech&Co Office.jpg"
                alt="BTech & Co Office"
                fill
                className="object-cover"
                priority
              />

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black/40 flex items-end p-4 transition"
              >
                <p className="text-white text-sm font-medium">
                  Collaborative Excellence
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* FORM */}
          <motion.div
            variants={item}
            className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-6 md:p-10"
          >
            <motion.form variants={container} className="space-y-8">

              {/* Row */}
              <div className="grid md:grid-cols-2 gap-8">

                {[ "FULL NAME", "EMAIL ADDRESS" ].map((label, i) => (
                  <motion.div key={i} variants={item}>
                    <label className="text-xs text-[#828282]">{label}</label>
                    <input
                      type="text"
                      placeholder={i === 0 ? "Julian Thorne" : "julian@organization.com"}
                      className="w-full mt-2 border-b border-[#A13A28] bg-transparent py-2 focus:outline-none focus:border-[#FF6347] transition"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Organization */}
              <motion.div variants={item}>
                <label className="text-xs text-[#828282]">ORGANIZATION</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full mt-2 border-b border-[#A13A28] bg-transparent py-2 focus:outline-none focus:border-[#FF6347]"
                />
              </motion.div>

              {/* Goals */}
              <motion.div variants={item}>
                <label className="text-xs text-[#828282]">STRATEGIC GOALS</label>
                <textarea
                  rows={3}
                  placeholder="How can we help scale your impact?"
                  className="w-full mt-2 border-b border-[#A13A28] bg-transparent py-2 focus:outline-none focus:border-[#FF6347]"
                />
              </motion.div>

              {/* Bottom */}
              <motion.div
                variants={item}
                className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
              >
                <p className="text-xs text-[#828282] max-w-sm">
                  By submitting this form, you agree to our privacy policy regarding the handling of your data.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-[#A13A28] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#8a2f20] transition"
                >
                  INITIATE PARTNERSHIP →
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>

        </div>
      </motion.section>
    </motion.main>
  );
}