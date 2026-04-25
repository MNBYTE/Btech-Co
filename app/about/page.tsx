"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

/* ─── animation helpers ─────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 40 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
});

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── pull-quote ────────────────────────────────────────────────── */
function PullQuote({ text }: { text: string }) {
  return (
    <motion.div
      {...fadeUp(0.1)}
      className="relative my-12 md:my-16 pl-6 md:pl-10 border-l-[3px] border-[#FF6347]"
    >
      <p className="text-2xl md:text-3xl lg:text-4xl font-black text-[#1A0A07] leading-tight tracking-tight">
        {text}
      </p>
    </motion.div>
  );
}

/* page */
export default function OurStoryPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <main className="bg-[#FFF7F6] font-sans overflow-x-hidden">

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[92svh] flex items-center overflow-hidden">

        {/* Dot grid bg */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle, #1A0A07 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />

        {/* Ghost letters */}
        <div className="absolute inset-0 flex items-center justify-start overflow-hidden pointer-events-none select-none pl-4">
          <span className="text-[22vw] font-black text-[#1A0A07]/[0.03] leading-none whitespace-nowrap tracking-tighter">
            STORY
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-16 w-full grid lg:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <motion.div style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#FF6347] uppercase">
                About BTech&Co
              </span>
            </motion.div>

            <motion.h1
              variants={stagger}
              initial="hidden"
              animate="show"
              className="text-[clamp(2.8rem,6vw,5.5rem)] font-black text-[#1A0A07] leading-[0.95] tracking-tight mb-8"
            >
              <motion.span variants={staggerItem} className="block">Your Specialist</motion.span>
              <motion.span variants={staggerItem} className="block">
                Digital <span className="text-[#FF6347] italic">Growth Partner</span>
              </motion.span>
              <motion.span variants={staggerItem} className="block">for the UK's</motion.span>
              <motion.span variants={staggerItem} className="block">Care Sector.</motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-[#4F4F4F] text-sm md:text-base leading-relaxed max-w-md mb-10"
            >
              We help UK care providers increase local referrals and occupancy through bespoke digital ecosystems and human-centric growth strategies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
            >
              <Link
                href="/partner"
                className="group inline-flex items-center gap-2 bg-[#FF6347] text-white px-7 py-3.5 rounded-full text-sm font-semibold shadow-[0_8px_30px_rgba(255,99,71,0.3)] hover:bg-[#A13A28] transition-all duration-300"
              >
                Work With Us
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            <motion.div
              style={{ y: imgY }}
              className="relative h-[380px] md:h-[500px] rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(26,10,7,0.15)]"
              style={{ y: imgY, rotate: "2deg" } as React.CSSProperties}
            >
              <Image src="/imgs/abouthero.png" alt="BTech&Co team" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A07]/30 to-transparent" />
            </motion.div>

            {/* Decorative ring */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-2 border-[#FF6347]/30" />
          </motion.div>
        </div>
      </section>

      {/* THE STORY */}
      <section className="py-24 md:py-32 px-6 md:px-10 bg-[#FFF7F6]">
        <div className="max-w-6xl mx-auto">

          {/* Label */}
          <motion.div {...fadeUp()} className="inline-flex items-center gap-2 mb-12">
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#FF6347] uppercase">Our Story</span>
          </motion.div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-16 lg:gap-24 items-start">

            {/* STORY COPY */}
            <div>
              <motion.p {...fadeUp()} className="text-lg md:text-xl text-[#333333] leading-relaxed mb-8">
                We started BTech&Co as a digital services company working across different industries, building websites, creating content, and helping businesses grow online.
              </motion.p>

              <PullQuote text="Over time, one thing became clear." />

              <motion.p {...fadeUp(0.1)} className="text-base text-[#4F4F4F] leading-relaxed mb-8">
                Care providers were delivering quality services, but their online presence didn't reflect it. Websites were outdated, difficult to navigate, or didn't clearly explain what the service actually offered. Families and decision-makers couldn't get the information they needed quickly, which meant missed enquiries and lost opportunities.
              </motion.p>

              <PullQuote text="We saw a gap." />

              <motion.p {...fadeUp(0.1)} className="text-base text-[#4F4F4F] leading-relaxed mb-8">
                The care sector relies heavily on trust, yet many providers were not being properly represented online. First impressions were being made through weak or unclear digital platforms, even when the standard of care was high.
              </motion.p>

              <PullQuote text="That's where we stepped in." />

              <motion.p {...fadeUp(0.1)} className="text-base text-[#4F4F4F] leading-relaxed">
                We chose to focus on the care sector, not just supported living, but domiciliary care, residential care, and other care services across the UK. Our goal was simple: help care providers present their services clearly, professionally, and in a way that builds confidence from the very first interaction.
              </motion.p>
            </div>

            {/* STICKY SIDEBAR */}
            <div className="lg:sticky lg:top-28 space-y-4">

              <motion.div
                {...fadeRight(0.1)}
                className="relative h-[280px] rounded-2xl overflow-hidden shadow-xl"
              >
                <Image src="/imgs/story.png" alt="Care providers" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A07]/70 to-transparent flex items-end p-6">
                  {/* <div>
                    <p className="text-white font-bold text-base italic leading-snug">
                      "Digital growth for the human soul."
                    </p>
                    <span className="text-[10px] text-[#BDBDBD] tracking-widest uppercase mt-1 block">
                      — Our Core Philosophy
                    </span>
                  </div> */}
                </div>
              </motion.div>
            </div>
          </div>

          {/* CLOSING STATEMENT */}
          <motion.div
            {...fadeUp(0.2)}
            className="mt-20 pt-16 border-t border-[#E0E0E0]"
          >
            <p className="text-[clamp(1.5rem,4vw,2.8rem)] font-black text-[#1A0A07] leading-tight tracking-tight max-w-[22ch]">
              Today, everything we do is built around that.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 mt-8 text-sm font-bold text-[#1A0A07]">
              {["Better websites.", "Clearer messaging.", "Stronger visibility."].map((item, i) => (
                <motion.span
                  key={item}
                  {...fadeUp(0.1 + i * 0.1)}
                  className="flex items-center gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF6347] flex-shrink-0" />
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOUNDATION */}
      <section className="py-24 px-6 md:px-10 bg-[#1A0A07] relative overflow-hidden">

        {/* Ghost */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[18vw] font-black text-white/[0.025] leading-none whitespace-nowrap tracking-tighter">
            TRUST
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Foundation of Trust
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "♥",
                title: "Empathy and Compassion",
                body: "We don't just see data points; we see lives improved. Our strategies are built on the deep understanding that care is personal, and digital growth must respect the dignity of every individual involved.",
                accent: false,
              },
              {
                emoji: "⚙",
                title: "Specialisation and Expertise",
                body: "By focusing exclusively on the UK care sector, we understand the regulatory landscape, the nuances of referral pathways, and the specific needs of supported living providers.",
                accent: true,
              },
              {
                emoji: "👁",
                title: "Integrity and Transparency",
                body: "We provide clear, honest reporting and strategies that align with the highest ethical standards of the care profession. No gimmicks, just sustainable growth based on truth.",
                accent: false,
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp(i * 0.12)}
                whileHover={{ y: -6 }}
                className={`rounded-2xl p-8 md:p-10 text-left transition-shadow duration-300 relative overflow-hidden ${
                  card.accent
                    ? "bg-[#A13A28] text-white"
                    : "bg-white/5 border border-white/10 text-white"
                }`}
              >
                {card.accent && (
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                )}
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center text-xl ${
                  card.accent ? "bg-white/20" : "bg-[#FF6347]/10 text-[#FF6347]"
                }`}>
                  {card.emoji}
                </div>
                <h3 className="font-bold text-lg mb-3">{card.title}</h3>
                <p className={`text-sm leading-relaxed ${card.accent ? "text-white/80" : "text-white/60"}`}>
                  {card.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP + IMPACT */}
      <section className="py-24 px-6 md:px-10 bg-[#FFF7F6]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="space-y-14">
            {[
              {
                num: "01",
                title: "Partnership",
                body: "We don't work for you; we work with you. Our success is measured by the strength of our long-term alliances with providers who are dedicated to excellence in support.",
              },
              {
                num: "02",
                title: "Impact",
                body: "Growth is only valuable if it translates into better care outcomes and sustainable service provision. We focus on the KPIs that actually matter to your bottom line and your residents.",
              },
            ].map((item, i) => (
              <motion.div key={item.num} {...fadeLeft(i * 0.15)} className="relative pl-20">
                <span className="absolute left-0 top-0 text-[72px] font-black text-[#A13A28]/10 leading-none select-none">
                  {item.num}
                </span>
                <h3 className="font-black text-xl text-[#1A0A07] mb-3">{item.title}</h3>
                <p className="text-sm text-[#4F4F4F] leading-relaxed max-w-md">{item.body}</p>
              </motion.div>
            ))}
          </div>

          {/* IMAGE */}
          <motion.div {...fadeRight(0.2)} className="relative h-[440px] rounded-2xl overflow-hidden shadow-xl">
            <Image src="/imgs/about2.png" alt="Partnership" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0A07]/75 via-[#1A0A07]/20 to-transparent flex items-end p-8">
              <div>
                <p className="text-white font-bold text-lg italic leading-snug mb-1">
                  "Digital growth for the human soul."
                </p>
                <span className="text-[10px] text-[#BDBDBD] tracking-widest uppercase">
                  — Our Core Philosophy
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DISTINCTION */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-5xl mx-auto">

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">

            <div>
              <motion.h2 {...fadeUp()} className="text-3xl md:text-5xl font-black text-[#1A0A07] tracking-tight leading-tight mb-8">
                The BTech<span className="text-[#FF6347]">&</span>Co Distinction.
              </motion.h2>

              <motion.p {...fadeUp(0.1)} className="text-[#4F4F4F] text-sm md:text-base leading-relaxed mb-6">
                In an era of generic digital agencies, BTech&Co stands as a lighthouse for the UK care sector. We recognized early on that standard "lead generation" tactics often fail to capture the sensitivity and trust required for supported living referrals.
              </motion.p>

              <motion.p {...fadeUp(0.15)} className="text-[#4F4F4F] text-sm md:text-base leading-relaxed mb-10">
                Our approach combines high-end editorial storytelling with rigorous data analytics. We bridge the gap between technical digital growth and the empathetic heart of social care, ensuring your message reaches those who need your services most.
              </motion.p>

              <motion.div {...fadeUp(0.2)}>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 text-[#1A0A07] font-bold text-sm border-b-2 border-[#FF6347] pb-0.5 hover:text-[#FF6347] transition-colors"
                >
                  Discover Our Methodology
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* RIGHT — values grid */}
            <div className="grid grid-cols-1 gap-4 pt-2">
              {[
                { label: "Care-only focus", body: "We don't split our attention across industries. The care sector is all we do." },
                { label: "First-impression obsessed", body: "We optimise for the moment a family lands on your page for the first time." },
                { label: "Enquiry-led thinking", body: "Every design decision ties back to one goal: getting more calls and messages." },
              ].map((v, i) => (
                <motion.div
                  key={v.label}
                  {...fadeRight(0.1 + i * 0.1)}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-4 bg-[#FFF7F6] border border-[#F1E5E2] rounded-xl p-5"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF6347] flex-shrink-0 mt-1.5" />
                  <div>
                    <p className="font-bold text-sm text-[#1A0A07] mb-1">{v.label}</p>
                    <p className="text-xs text-[#828282] leading-relaxed">{v.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-24 px-6 md:px-10 bg-[#FFF7F6]">
        <motion.div
          {...fadeUp()}
          className="max-w-5xl mx-auto relative overflow-hidden bg-[#A13A28] rounded-3xl px-8 py-16 md:px-16 md:py-24 text-center shadow-[0_24px_60px_rgba(161,58,40,0.22)]"
        >
          {/* Ghost */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden">
            <span className="text-[clamp(4rem,14vw,9rem)] font-black text-white/[0.06] leading-none tracking-tighter whitespace-nowrap">
              CARE
            </span>
          </div>

          {/* Rings */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-white/10" />
          <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full border border-white/10" />

          <div className="relative z-10 flex flex-col items-center gap-5">
            <motion.p
              {...fadeUp(0.1)}
              className="text-[10px] font-bold tracking-[0.3em] text-white/50 uppercase"
            >
              Our Closing Line
            </motion.p>

            <motion.h2
              {...fadeUp(0.15)}
              className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight max-w-[20ch]"
            >
              We don't just build websites.
            </motion.h2>

            <motion.p {...fadeUp(0.2)} className="text-white/75 text-base md:text-lg leading-relaxed max-w-[40ch]">
              We help care providers show the quality of care they deliver every day.
            </motion.p>

            <motion.div {...fadeUp(0.25)} className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/partner"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#A13A28] px-8 py-4 rounded-full text-sm font-black shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300"
              >
                Start Your Partnership
                <ArrowRight size={13} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full text-sm font-semibold hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                See Our Services
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}