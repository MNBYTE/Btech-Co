"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

/* ───────── animation helpers ───────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});

export default function OurStoryPage() {
  return (
    <main className="bg-[#FFF7F6] font-sans">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>
          <motion.span
            {...fadeUp(0)}
            className="text-xs tracking-[0.2em] text-[#A13A28] uppercase bg-[#FFEDE9] px-4 py-1 rounded-full inline-block mb-6"
          >
            ABOUT BTECH&CO
          </motion.span>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1A0A07]"
          >
            Your Specialist Digital{" "}
            <span className="text-[#FF6347]">Growth Partner</span> for the UK’s
            Care Sector.
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 text-[#4F4F4F] max-w-md text-sm md:text-base"
          >
            We help UK care providers increase local referrals and occupancy
            through bespoke digital ecosystems and human-centric growth
            strategies.
          </motion.p>
        </div>

        {/* IMAGE */}
        <motion.div
          {...fadeRight(0.2)}
          className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src="/imgs/abouthero.png"
            alt="Hero"
            fill
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* FOUNDATION */}
      <section className="bg-[#F3F3F3] py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2
            {...fadeUp()}
            className="text-3xl md:text-4xl font-bold text-[#1A0A07]"
          >
            Foundation of Trust
          </motion.h2>

          <motion.div
            {...fadeUp(0.1)}
            className="w-12 h-[2px] bg-[#A13A28] mx-auto mt-3 mb-16"
          />

          <div className="grid md:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <motion.div
              {...fadeUp(0.1)}
              className="bg-white p-10 rounded-2xl shadow-md text-left hover:shadow-xl transition"
            >
              <div className="w-14 h-14 bg-[#FFEDE9] rounded-xl mb-6 flex items-center justify-center text-[#A13A28] text-xl">
                ♥
              </div>

              <h3 className="font-semibold text-lg text-[#1A0A07] mb-3">
                Empathy and Compassion
              </h3>

              <p className="text-sm text-[#4F4F4F] leading-relaxed">
                We don’t just see data points; we see lives improved. Our strategies are built on the deep understanding that care is personal, and digital growth must respect the dignity of every involved.
              </p>
            </motion.div>

            {/* CARD ACTIVE */}
            <motion.div
              {...fadeUp(0.2)}
              className="bg-[#A13A28] text-white p-10 rounded-2xl shadow-xl text-left scale-[1.03]"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl mb-6 flex items-center justify-center text-2xl">
                ⚙
              </div>

              <h3 className="font-semibold text-lg mb-3">
                Specialisation and Expertise
              </h3>

              <p className="text-sm text-white/85 leading-relaxed">
                By focusing exclusively on the UK care sector, we understand the regulatory landscape, the nuances of referral pathways, and the specific needs of supported living providers.
              </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              {...fadeUp(0.3)}
              className="bg-white p-10 rounded-2xl shadow-md text-left hover:shadow-xl transition"
            >
              <div className="w-14 h-14 bg-[#FFEDE9] rounded-xl mb-6 flex items-center justify-center text-[#A13A28] text-xl">
                👁
              </div>

              <h3 className="font-semibold text-lg text-[#1A0A07] mb-3">
                Integrity and Transparency
              </h3>

              <p className="text-sm text-[#4F4F4F] leading-relaxed">
                We provide clear, honest reporting and strategies that align with the highest ethical standards of the care profession. No gimmicks, just sustainable growth based on truth.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PARTNERSHIP */}
      <section className="bg-[#FFF7F6] py-24 px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-16 relative">

            {/* ITEM 01 */}
            <motion.div {...fadeLeft()} className="relative pl-16">

              {/* BIG NUMBER */}
              <span className="absolute left-0 top-0 text-[80px] font-black text-[#A13A28]/10 leading-none">
                01
              </span>

              <div className="space-y-3">
                <h3 className="font-bold text-lg text-[#1A0A07]">
                  Partnership
                </h3>

                <p className="text-sm text-[#4F4F4F] leading-relaxed max-w-md">
                  We don’t work for you; we work with you. Our success is measured
                  by the strength of our long-term alliances with providers who are
                  dedicated to excellence in support.
                </p>
              </div>
            </motion.div>

            {/* ITEM 02 */}
            <motion.div {...fadeLeft(0.2)} className="relative pl-16">

              {/* BIG NUMBER */}
              <span className="absolute left-0 top-0 text-[80px] font-black text-[#A13A28]/10 leading-none">
                02
              </span>

              <div className="space-y-3">
                <h3 className="font-bold text-lg text-[#1A0A07]">
                  Impact
                </h3>

                <p className="text-sm text-[#4F4F4F] leading-relaxed max-w-md">
                  Growth is only valuable if it translates into better care outcomes
                  and sustainable service provision. We focus on the KPIs that
                  actually matter to your bottom line and your residents.
                </p>
              </div>
            </motion.div>

          </div>
          {/* IMAGE */}
          <motion.div
            {...fadeRight(0.2)}
            className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/imgs/about2.png"
              alt="Partnership"
              fill
              className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
              <div>
                <p className="text-white font-semibold text-base md:text-lg leading-snug">
                  &quot;Digital growth for the human soul.&quot;
                </p>
                <span className="text-xs text-[#BDBDBD] tracking-widest">
                  — OUR CORE PHILOSOPHY
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* DISTINCTION */}
      <section className="bg-[#FFFFFF] py-24 px-6 md:px-10 text-center">
        <div className="max-w-3xl mx-auto">

          <motion.h2
            {...fadeUp()}
            className="text-2xl md:text-3xl font-bold text-[#1A0A07]"
          >
            The BTech&Co Distinction
          </motion.h2>

          <motion.p
            {...fadeUp(0.1)}
            className="mt-6 text-[#4F4F4F] text-sm md:text-base leading-relaxed"
          >
            In an era of generic digital agencies, BTech&Co stands as a lighthouse for the UK care sector. We recognized early on that standard &quot;lead generation&quot; tactics often fail to capture the sensitivity and trust required for supported living referrals.
          </motion.p>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-6 text-[#4F4F4F] text-sm md:text-base leading-relaxed"
          >
            Our approach combines high-end editorial storytelling with rigorous data analytics. We bridge the gap between technical digital growth and the empathetic heart of social care, ensuring your message reaches those who need your services most.
          </motion.p>

          <Link href="/services">
            <motion.span
              {...fadeUp(0.3)}
              className="mt-10 inline-block text-sm font-medium text-[#A13A28] hover:text-[#FF6347] transition cursor-pointer"
            >
              DISCOVER OUR METHODOLOGY →
            </motion.span>
          </Link>

        </div>
      </section>

    </main>
  );
}