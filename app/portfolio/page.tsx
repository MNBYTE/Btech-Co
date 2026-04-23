"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

export default function PortfolioPage() {
  return (
    <main className="bg-[#FFFFFF] font-sans">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 grid lg:grid-cols-2 gap-10 md:gap-12 items-start">

        {/* LEFT */}
        <div className="w-[350px]">
          <motion.p {...fadeUp()} className="text-xs tracking-[0.2em] text-[#A13A28] mb-4 md:mb-6">
            OUR PORTFOLIO
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1A0A07]"
          >
            Our Work {" "}
            <span className="text-[#FF6347]">with Care </span>{" "}
            Providers
          </motion.h1>
        </div>

        {/* RIGHT */}
        <motion.div {...fadeRight(0.2)} className="relative lg:mt-20">

          <div className="absolute -inset-6 bg-gradient-to-tr from-[#FF6347]/20 via-transparent to-[#A13A28]/20 blur-3xl rounded-3xl" />

          <div className="absolute top-6 right-6 w-20 h-20 md:w-24 md:h-24 bg-[#FF6347]/20 rounded-full blur-2xl" />
          <div className="absolute bottom-6 left-6 w-24 h-24 md:w-28 md:h-28 bg-[#A13A28]/20 rounded-full blur-2xl" />

          <div className="relative backdrop-blur-xl bg-white/40 border border-white/30 rounded-2xl p-5 md:p-6 shadow-xl">

            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF6347]" />
              <span className="text-[10px] md:text-xs tracking-widest text-[#A13A28]">
                STRATEGIC GROWTH ENGINE
              </span>
            </div>

            <p className="text-[#4F4F4F] text-xs md:text-sm leading-relaxed">
              Take a look at how we’ve helped care providers improve their online presence, attract enquiries, and present their services more clearly.
            </p>

            <div className="mt-4 md:mt-6 grid grid-cols-2 gap-3 md:gap-4">
              <div className="p-3 rounded-xl bg-white/50 border border-[#A13A28]">
                <p className="text-[10px] md:text-xs text-[#A13A28]">Engagement</p>
                <p className="text-base md:text-lg font-bold text-[#1A0A07]">+128%</p>
              </div>

              <div className="p-3 rounded-xl bg-white/50 border border-[#A13A28]">
                <p className="text-[10px] md:text-xs text-[#A13A28]">Growth</p>
                <p className="text-base md:text-lg font-bold text-[#1A0A07]">3.4x</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FEATURE GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-12 md:pb-14 grid lg:grid-cols-3 gap-6">

        {/* BIG CARD */}
        <motion.div
          {...fadeUp()}
          className="relative lg:col-span-2 h-[220px] sm:h-[260px] md:h-[320px] rounded-3xl overflow-hidden"
        >
          <Image src="/imgs/portfolio1.png" alt="" fill className="object-cover" />

          <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 bg-white/95 backdrop-blur-xl p-4 md:p-6 rounded-2xl max-w-[85%] md:max-w-sm shadow-xl">
            <h3 className="font-semibold text-[#1A0A07] text-sm md:text-base">
              Oakwood Premium Living
            </h3>
            <p className="text-xs md:text-sm text-[#4F4F4F] mt-2">
              Strategic branding and lead generation pipeline for luxury dementia care.
            </p>
            <p className="text-[#FF6347] text-xs md:text-sm mt-2 font-semibold">
              +312% Inquiry Rate
            </p>
          </div>

          <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FF6347] flex items-center justify-center text-white text-lg">
            <ArrowUpRight size={20} />
          </div>
        </motion.div>

        {/* ROI */}
        <motion.div
          {...fadeRight(0.2)}
          className="bg-[#FBEAE6] rounded-3xl p-6 md:p-8 flex flex-col justify-between border-b-[4px] border-[#FF6347]"
        >
          <span className="text-[#E5C7BF] text-2xl md:text-3xl font-bold">01</span>

          <div>
            <p className="text-[#1A0A07] text-sm md:text-base font-medium">
              Average ROI
            </p>
            <p className="text-3xl md:text-4xl font-black text-[#A13A28] mt-2">
              14.2x
            </p>
            <p className="text-[10px] md:text-xs text-[#828282] mt-2">
              ACROSS ALL 2023 COHORTS
            </p>
          </div>
        </motion.div>
      </section>

      {/* SMALL CARDS */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-12 md:pb-14 grid md:grid-cols-3 gap-6">

        {[2, 3].map((n, i) => (
          <motion.div key={n} {...fadeUp(i * 0.1)} className="relative h-[300px] sm:h-[360px] md:h-[400px] rounded-3xl overflow-hidden">
            <Image src={`/imgs/portfolio${n}.png`} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 md:p-6 flex flex-col justify-end text-white">
              <h4 className="font-semibold text-sm md:text-base">
                {n === 2 ? "Horizon Supported Care" : "St. Jude’s Specialty Care"}
              </h4>
              <p className="text-xs md:text-sm text-[#FF6347] mt-1">
                {n === 2 ? "↓ -45% Cost Per Lead" : "↑ 89% Occupancy Growth"}
              </p>
            </div>
          </motion.div>
        ))}

        {/* TESTIMONIAL */}
        <motion.div
          {...fadeUp(0.2)}
          className="bg-[#1A0A07] text-white p-6 md:p-7 rounded-3xl flex flex-col justify-between h-[300px] sm:h-[360px] md:h-[400px]"
        >
          <p className="text-lg md:text-2xl leading-relaxed text-white/80">
            “BTech&Co didn’t just bring us leads; they brought us the right families.
            Their understanding of the care soul is unmatched.”
          </p>

          <div className="text-xs text-white/60 mt-6">
            <p className="font-semibold text-white">Eleanor Vance</p>
            <p>Director, Oakwood Living</p>
          </div>
        </motion.div>
      </section>

      {/* FRAMEWORK */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <motion.div
          {...fadeUp()}
          className="relative h-[300px] sm:h-[360px] md:h-[440px] rounded-3xl overflow-hidden"
        >
          <Image
            src="/imgs/portfolio4.png"
            alt=""
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="bg-white/85 backdrop-blur-2xl rounded-3xl px-5 md:px-12 py-6 md:py-10 max-w-3xl w-full shadow-2xl">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-8">

                {/* LEFT TEXT */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-3xl font-bold text-[#1A0A07] mb-2 md:mb-3 leading-tight">
                    The Growth Engine<br className="hidden sm:block" /> Framework
                  </h3>
                  <p className="text-[#4F4F4F] text-[11px] sm:text-xs md:text-sm leading-relaxed max-w-[280px] md:max-w-none">
                    Our proprietary 12-week scaling system for multi-site care operators looking to dominate local search.
                  </p>
                </div>

                {/* RIGHT STATS — always a single row */}
                <div className="flex flex-row gap-3 flex-shrink-0">
                  <div className="bg-white px-4 py-3 md:px-5 md:py-4 shadow-md text-center min-w-[100px] md:min-w-[120px]">
                    <p className="text-[#A13A28] font-bold text-base md:text-lg">5.2k</p>
                    <p className="text-[9px] md:text-[10px] text-[#828282] font-medium tracking-wide mt-0.5 whitespace-nowrap">
                      LEADS GENERATED
                    </p>
                  </div>

                  <div className="bg-white px-4 py-3 md:px-5 md:py-4 shadow-md text-center min-w-[100px] md:min-w-[120px]">
                    <p className="text-[#A13A28] font-bold text-base md:text-lg">£4.1M</p>
                    <p className="text-[9px] md:text-[10px] text-[#828282] font-medium tracking-wide mt-0.5 whitespace-nowrap">
                      REVENUE IMPACT
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}