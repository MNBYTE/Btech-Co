"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ExternalLink, TrendingUp, Users, Eye, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

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
  show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── marquee ───────────────────────────────────────────────────── */
const marqueeWords = [
  "Website Design", "Local SEO", "Lead Generation", "Care Sector", "Brand Identity",
  "Social Media", "Digital Marketing", "Conversion Optimisation",
];


/* ─── device mockup card ─────────────────────────────────────────── */
interface ProjectCardProps {
  title: string;
  description: string;
  tag: string;
  href: string;
  imageSrc: string;
  mobileSrc?: string;
  stat: string;
  statLabel: string;
  flip?: boolean;
}

function ProjectCard({ title, description, tag, href, imageSrc, mobileSrc, stat, statLabel, flip }: ProjectCardProps) {
  return (
    <motion.div
      {...fadeUp()}
      className={`grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-white shadow-[0_8px_40px_rgba(26,10,7,0.08)] border border-[#F1E5E2] group`}
    >
      {/* TEXT */}
      <motion.div
        {...(flip ? fadeRight(0.1) : fadeLeft(0.1))}
        className={`p-8 md:p-12 flex flex-col justify-center ${flip ? "lg:order-2" : ""}`}
      >
        <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] text-[#FF6347] uppercase mb-6">
          <span className="w-5 h-px bg-[#FF6347]" />{tag}
        </span>

        <h3 className="text-2xl md:text-3xl font-black text-[#1A0A07] leading-tight tracking-tight mb-4">
          {title}
        </h3>

        <p className="text-[#4F4F4F] text-sm leading-relaxed mb-8 max-w-sm">
          {description}
        </p>

        {/* Stat */}
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-[#FFF7F6] border border-[#F1E5E2] rounded-xl px-5 py-3">
            <p className="text-xl font-black text-[#FF6347]">{stat}</p>
            <p className="text-[10px] text-[#828282] font-medium tracking-wide mt-0.5">{statLabel}</p>
          </div>
        </div>

        {/* CTA */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn inline-flex items-center gap-2 bg-[#1A0A07] text-white text-sm font-semibold px-6 py-3 rounded-full w-fit hover:bg-[#FF6347] transition-colors duration-300"
        >
          Visit Live Site
          <ExternalLink size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </a>
      </motion.div>

      {/* MOCKUP */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative bg-[#F3F3F3] flex items-end justify-center pt-8 px-6 overflow-hidden min-h-[340px] ${flip ? "lg:order-1" : ""}`}
      >
        {/* Laptop mockup */}
        <div className="relative w-full max-w-[420px] group/mock cursor-pointer">
          {/* Screen frame */}
          <div className="relative bg-[#1A0A07] rounded-t-xl pt-3 px-3 pb-0 shadow-2xl">
            {/* Camera dot */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#333]" />
            {/* Screen */}
            <div className="relative overflow-hidden rounded-t-lg aspect-[16/10] bg-white">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover object-top transition-transform duration-[2s] ease-out group-hover/mock:translate-y-[-25%]"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#FF6347]/0 group-hover/mock:bg-[#FF6347]/10 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover/mock:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 text-sm font-semibold text-[#1A0A07]">
                  <ExternalLink size={13} /> Open Site
                </div>
              </div>
            </div>
          </div>
          {/* Base */}
          <div className="h-3 bg-[#2a2a2a] rounded-b-lg" />
          <div className="h-1.5 w-1/3 mx-auto bg-[#1a1a1a] rounded-b-full" />
        </div>

        {/* Mobile mockup — floating */}
        {mobileSrc && (
          <div className="absolute right-4 bottom-0 w-[80px] md:w-[100px] group/mob cursor-pointer">
            <div className="bg-[#1A0A07] rounded-[14px] p-1 shadow-2xl border-2 border-[#333]">
              <div className="relative overflow-hidden rounded-[10px] aspect-[9/16] bg-white">
                <Image
                  src={mobileSrc}
                  alt={`${title} mobile`}
                  fill
                  className="object-cover object-top"
                />
              </div>
              {/* Home bar */}
              <div className="w-6 h-0.5 bg-[#555] rounded-full mx-auto mt-1 mb-0.5" />
            </div>
          </div>
        )}
      </a>
    </motion.div>
  );
}

/* ─── social card ────────────────────────────────────────────────── */
function SocialCard({ imageSrc, caption, stats }: {
  imageSrc: string;
  caption: string;
  stats: { icon: React.ReactNode; value: string; label: string }[];
}) {
  return (
    <motion.div
      {...fadeUp()}
      whileHover={{ y: -6 }}
      className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(26,10,7,0.06)] border border-[#F1E5E2] group"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={imageSrc} alt={caption} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-5">
        <p className="text-xs text-[#4F4F4F] leading-relaxed mb-4">{caption}</p>
        <div className="flex gap-4">
          {stats.map((s, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <span className="text-[#FF6347]">{s.icon}</span>
              <div>
                <p className="text-sm font-black text-[#1A0A07]">{s.value}</p>
                <p className="text-[9px] text-[#828282] tracking-wide">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── case study card ────────────────────────────────────────────── */
function CaseStudyCard({ number, client, need, action, result, accent }: {
  number: string; client: string; need: string; action: string; result: string; accent?: boolean;
}) {
  return (
    <motion.div
      {...fadeUp()}
      whileHover={{ y: -4 }}
      className={`rounded-2xl p-8 md:p-10 relative overflow-hidden ${
        accent ? "bg-[#A13A28] text-white" : "bg-[#F3F3F3] text-[#1A0A07]"
      }`}
    >
      {accent && <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/10" />}
      <span className={`text-6xl font-black leading-none mb-6 block ${accent ? "text-white/10" : "text-[#1A0A07]/8"}`}>
        {number}
      </span>
      <h4 className={`font-black text-lg mb-5 ${accent ? "text-white" : "text-[#1A0A07]"}`}>{client}</h4>
      <div className="space-y-4">
        {[
          { label: "The Need", text: need },
          { label: "What We Did", text: action },
          { label: "The Result", text: result },
        ].map((row) => (
          <div key={row.label}>
            <p className={`text-[9px] font-bold tracking-[0.2em] uppercase mb-1 ${accent ? "text-white/50" : "text-[#828282]"}`}>
              {row.label}
            </p>
            <p className={`text-sm leading-relaxed ${accent ? "text-white/85" : "text-[#4F4F4F]"}`}>{row.text}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ─── page ──────────────────────────────────────────────────────── */
export default function PortfolioPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const ghostY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <main className="bg-[#FFF7F6] font-sans overflow-x-hidden">

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[90svh] flex items-center overflow-hidden">

        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: `radial-gradient(circle, #1A0A07 1px, transparent 1px)`, backgroundSize: "30px 30px" }}
        />

        {/* Ghost text */}
        <motion.div style={{ y: ghostY }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        >
          <span className="text-[20vw] font-black text-[#1A0A07]/[0.03] leading-none whitespace-nowrap tracking-tighter">
            WORK
          </span>
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-16 w-full">

          {/* Label */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="w-8 h-px bg-[#FF6347]" />
            <span className="text-[10px] font-bold tracking-[0.25em] text-[#FF6347] uppercase">Our Portfolio</span>
          </motion.div> */}

          <div className="grid lg:grid-cols-2 gap-14 items-end">

            {/* LEFT */}
            <motion.h1
              variants={stagger} initial="hidden" animate="show"
              className="text-[clamp(2.8rem,6vw,5.5rem)] font-black text-[#1A0A07] leading-[0.95] tracking-tight"
            >
              <motion.span variants={staggerItem} className="block">Our Work</motion.span>
              <motion.span variants={staggerItem} className="block text-[#FF6347] italic">with Care</motion.span>
              <motion.span variants={staggerItem} className="block">Providers.</motion.span>
            </motion.h1>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              className="lg:mb-4"
            >
              <p className="text-[#4F4F4F] text-base md:text-lg leading-relaxed mb-8 max-w-md">
                Take a look at how we've helped care providers improve their online presence, attract enquiries, and present their services more clearly.
              </p>

              {/* Stats row */}
              <div className="flex gap-6 flex-wrap">
                {[
                  { value: "94%", label: "Avg. visibility increase" },
                  { value: "5.2k", label: "Leads generated" },
                  { value: "£4.1M", label: "Revenue impact" },
                ].map((s) => (
                  <div key={s.value}>
                    <p className="text-2xl font-black text-[#FF6347]">{s.value}</p>
                    <p className="text-[10px] text-[#828282] font-medium tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WEBSITE PROJECTS */}
      <section className="py-24 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">

          <motion.div {...fadeUp()} className="mb-16">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-[#FF6347] uppercase mb-4">
              <span className="w-6 h-px bg-[#FF6347]" />Website Projects
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-5xl font-black text-[#1A0A07] leading-tight tracking-tight">
                Websites That Work.
              </h2>
              <p className="text-[#828282] text-sm max-w-[36ch] md:text-right leading-relaxed">
                Click any mockup to visit the live website. Each one is built to attract enquiries and reflect the quality of care delivered.
              </p>
            </div>
          </motion.div>

          <div className="space-y-8">

            {/* PROJECT 1 */}
            <ProjectCard
              title="Eligible Hands Care"
              description="A full website build for a supported living provider, designed to communicate trust, clarity, and professionalism from the very first visit."
              tag="Website Design & Development"
              href="https://eligiblehands.co.uk"
              imageSrc="/imgs/eligiblehands.jpg"
              mobileSrc="/imgs/eligiblehands2.jpg"
              stat="+312%"
              statLabel="ENQUIRY RATE INCREASE"
            />

            {/* PROJECT 2 */}
            <ProjectCard
              title="Horizon Supported Care"
              description="A complete digital overhaul focused on local SEO and conversion, restructured so families could find the right information fast."
              tag="Website Redesign + Local SE0"
              href="https://eligiblehands.co.uk"
              imageSrc="/imgs/eligiblehands2.jpg"
              mobileSrc="/imgs/eligiblehands.jpg"
              stat="-45%"
              statLabel="COST PER LEAD"
              flip
            />

          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA & MARKETING */}
      <section className="py-24 px-6 md:px-10 bg-[#1A0A07] relative overflow-hidden">

        {/* Ghost */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[16vw] font-black text-white/[0.025] leading-none whitespace-nowrap tracking-tighter">
            CONTENT
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto">

          <motion.div {...fadeUp()} className="mb-16">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-[#FF6347] uppercase mb-4">
              <span className="w-6 h-px bg-[#FF6347]" />Social Media & Marketing
            </span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
                Content That Converts.
              </h2>
              <p className="text-[#828282] text-sm max-w-[40ch] md:text-right leading-relaxed">
                Consistent, care-focused content designed to build trust and drive engagement from families and decision-makers.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <SocialCard
              imageSrc="/imgs/portfolio3.jpeg"
              caption="Improved engagement and visibility through consistent, care-focused content strategy."
              stats={[
                { icon: <Eye size={12} />, value: "+128%", label: "REACH" },
                { icon: <TrendingUp size={12} />, value: "3.4×", label: "ENGAGEMENT" },
              ]}
            />

            <SocialCard
              imageSrc="/imgs/portfolio2.jpeg"
              caption="Branded social media posts that reflect the quality of care and build community trust."
              stats={[
                { icon: <Users size={12} />, value: "+89%", label: "FOLLOWERS" },
                { icon: <TrendingUp size={12} />, value: "+64%", label: "IMPRESSIONS" },
              ]}
            />

            {/* Analytics card */}
            <motion.div
              {...fadeUp(0.2)}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#FF6347] uppercase block mb-6">
                  Analytics Overview
                </span>

                {[
                  { label: "Avg. Monthly Reach", value: "18.4k", bar: 78 },
                  { label: "Engagement Rate", value: "6.2%", bar: 62 },
                  { label: "Profile Visits", value: "+214%", bar: 88 },
                  { label: "Link Clicks", value: "+176%", bar: 72 },
                ].map((row) => (
                  <div key={row.label} className="mb-5">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[11px] text-[#828282]">{row.label}</span>
                      <span className="text-[11px] font-bold text-[#FF6347]">{row.value}</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${row.bar}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="h-full bg-[#FF6347] rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-[10px] text-[#828282] leading-relaxed mt-4">
                Results based on 6-month content management campaigns for care providers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-24 px-6 md:px-10 bg-[#FFF7F6]">
        <div className="max-w-7xl mx-auto">

          <motion.div {...fadeUp()} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#1A0A07] leading-tight tracking-tight">
              The Work Behind the Numbers.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CaseStudyCard
              number="01"
              client="Eligible Hands Care"
              need="Outdated website failing to convert visitors, families couldn't quickly understand the service or find contact details."
              action="Full website redesign with clear service pages, prominent CTAs, local SEO implementation, and mobile-first layout."
              result="312% increase in enquiry rate within 90 days of launch."
            />
            <CaseStudyCard
              number="02"
              client="Horizon Supported Care"
              need="High advertising spend with poor quality leads, cost per enquiry was unsustainable."
              action="Restructured landing pages, improved content targeting, and built organic local search visibility."
              result="Cost per lead reduced by 45% while enquiry volume increased."
              accent
            />
            <CaseStudyCard
              number="03"
              client="Olivian Homes"
              need="A strong care standards but limited social media presence, making it hard to reach families and local authorities online."
              action="Consistent social media content strategy built around their person-centred approach, showcasing their homes, resident activities."
              result="Significantly improved brand visibility and community engagement, helping Olivian Homes better communicate their services."
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 px-6 md:px-10 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp()}>
            <div className="flex items-center justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#FF6347] text-lg">★</span>
              ))}
            </div>

            <blockquote className="text-2xl md:text-4xl font-black text-[#1A0A07] leading-tight tracking-tight mb-8">
              "BTech&Co didn't just bring us leads — they brought us the right families. Their understanding of the care sector is unmatched."
            </blockquote>

            <div>
              <p className="font-bold text-sm text-[#1A0A07]">Eleanor Vance</p>
              <p className="text-xs text-[#828282] mt-1">Director, Oakwood Living</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-10 bg-[#FFF7F6]">
        <motion.div
          {...fadeUp()}
          className="max-w-5xl mx-auto relative overflow-hidden bg-[#A13A28] rounded-3xl px-8 py-16 md:px-16 md:py-24 text-center shadow-[0_24px_60px_rgba(161,58,40,0.22)]"
        >
          {/* Ghost */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden">
            <span className="text-[clamp(4rem,14vw,9rem)] font-black text-white/[0.06] leading-none tracking-tighter whitespace-nowrap">
              GROWTH
            </span>
          </div>

          {/* Rings */}
          <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-white/10" />
          <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full border border-white/10" />

          <div className="relative z-10 flex flex-col items-center gap-5">
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight max-w-[20ch]">
              Want Results Like These for Your Care Facility?
            </h2>
            <p className="text-white/75 text-base leading-relaxed max-w-[40ch]">
              Let's talk about where you are now and what's possible with the right digital strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/partner"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#A13A28] px-8 py-4 rounded-full text-sm font-black shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300"
              >
                Start Your Partnership <ArrowRight size={13} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full text-sm font-semibold hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}