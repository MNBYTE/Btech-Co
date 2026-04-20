"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  MapPinHouse,
  Award,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";

/* shared variants */
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 30, scale: 0.98 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.75 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7 },
  },
};

/* section 4 data */
const steps = [
  {
    id: "01",
    title: "Consultation",
    description:
      "Deep dive into your current challenges, occupancy goals, and the unique care culture of your facilities.",
  },
  {
    id: "02",
    title: "Digital Audit",
    description:
      "A rigorous technical assessment of your online footprint, local search performance, and competitive landscape.",
  },
  {
    id: "03",
    title: "Conversion Optimization",
    description:
      "Refining user journeys to ensure families find the answers they need and take action with confidence.",
  },
  {
    id: "04",
    title: "Visibility Review",
    description:
      "Implementing local SEO and content strategies that amplify your authority in the care community.",
  },
  {
    id: "05",
    title: "Online Transformation",
    description:
      "Deployment of a modern, empathetic digital presence that serves as a 24/7 ambassador for your care services.",
  },
];

const stepsContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const stepItem = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

/* section 5 data */
const features = [
  {
    icon: Award,
    title: "Higher Rankings",
    description:
      "We don't just place you on the first page; we ensure you dominate the searches that matter most to local families.",
  },
  {
    icon: TrendingUp,
    title: "Higher Conversion",
    description:
      "Moving beyond traffic we focus on high-quality inquiries that lead to sustainable occupancy levels.",
  },
  {
    icon: BadgeCheck,
    title: "Enhanced Credibility",
    description:
      "Your website becomes a testament to your care standards, building trust long before a site visit occurs.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const impactFadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};


export default function HomeSection1() {
  return (
    <main className="w-full bg-[#fdf8f6]">

      {/* SECTION 1: HERO*/}
      <section className="w-full bg-[#fdf8f6]">
        <div className="mx-auto flex min-h-[100svh] w-full max-w-[1440px] items-center px-4 py-6 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-8"
          >
            {/* Left Content */}
            <div className="max-w-[650px]">
              <motion.h1
                variants={container}
                className="max-w-[580px] text-balance font-extrabold tracking-[-0.06em] text-[#1f1110] text-[clamp(2.65rem,6vw,5.55rem)] leading-[0.95] sm:text-[clamp(3.25rem,5.6vw,5.9rem)]"
              >
                <motion.span variants={fadeUp} className="block">Specialist</motion.span>
                <motion.span variants={fadeUp} className="block">
                  digital <span className="text-[#ff6a4d]">growth</span>
                </motion.span>
                <motion.span variants={fadeUp} className="block">partner for</motion.span>
                <motion.span variants={fadeUp} className="block">supported</motion.span>
                <motion.span variants={fadeUp} className="block">living providers</motion.span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-[560px] text-[15px] leading-[1.45] text-[#6f5f5b] sm:text-[16px]"
              >
                We help supported living and care providers in the UK deliver growth through strategic website design and digital marketing expertise.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
              >
                <motion.a
                  href="/partner"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#ff6a4d] px-8 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,106,77,0.28)] transition-colors hover:bg-[#ff5b3c]"
                >
                  Arrange a consultation
                </motion.a>
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#ff6a4d] bg-transparent px-8 text-sm font-semibold text-[#ff6a4d] transition-colors hover:bg-[#ff6a4d]/5"
                >
                  ABOUT US
                </motion.a>
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div
              variants={slideInRight}
              className="relative mx-auto w-full max-w-[520px] lg:ml-auto lg:max-w-[560px]"
            >
              <div className="relative mx-auto w-[92%] sm:w-[86%] lg:w-[80%]">
                <motion.div
                  initial={{ opacity: 0, y: 16, rotate: -1.5 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                  className="relative aspect-[4/5] overflow-hidden rounded-[18px] shadow-[0_18px_40px_rgba(31,17,16,0.12)]"
                >
                  <Image
                    src="/imgs/homehero.jpg"
                    alt="Supported living residents in a lounge"
                    fill
                    priority
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
                className="absolute bottom-[-10px] left-0 z-10 w-[40%] min-w-[145px] max-w-[190px] rounded-[14px] bg-white px-4 py-4 shadow-[0_14px_30px_rgba(31,17,16,0.12)] sm:bottom-[-14px] sm:left-[-8px] sm:px-5 sm:py-5 rotate-[-4deg]"
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.45, delay: 0.6 }}
                  className="text-[28px] font-extrabold leading-none tracking-[-0.05em] text-[#d84e2e] sm:text-[34px]"
                >
                  94%
                </motion.div>
                <p className="mt-1 text-[9.5px] leading-[1.25] text-[#7c6c68] sm:text-[10px]">
                  Increase in digital visibility for our care partners in 2023.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: ABOUT */}
      <section className="w-full bg-[#FFF7F6]">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-20 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-10"
          >
            {/* LEFT TEXT */}
            <div className="max-w-[560px]">
              <motion.p
                variants={fadeUp}
                className="text-[11px] font-semibold tracking-[0.18em] text-[#A13A28] uppercase"
              >
                ABOUT BTECH&CO LTD.
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-4 text-[clamp(2rem,4vw,2.9rem)] leading-[1.15] font-bold text-[#1A0A07] tracking-[-0.02em]"
              >
                Digital Marketers Passionate About Supporting the UK's Care Providers.
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-5 text-[14.5px] leading-[1.6] text-[#4F4F4F] max-w-[500px]"
              >
                The care sector is built on trust, but in a digital-first world, that trust must be established before the first phone call. We specialize in bridge-building between providers and those in need.
              </motion.p>
            </div>

            {/* RIGHT CARDS */}
            <div className="flex flex-col gap-5">
              <motion.div
                variants={cardVariant}
                whileHover={{ y: -4 }}
                className="rounded-[18px] border border-[#F1E5E2] bg-white p-6 shadow-[0_8px_25px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-1 text-[#FF6347]"
                  >
                    <ArrowUpRight size={20} />
                  </motion.div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#1A0A07]">Lead Generation</h3>
                    <p className="mt-2 max-w-[320px] text-[13.5px] leading-[1.5] text-[#828282]">
                      Connecting you with families and local authorities through high-intent digital pathways.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={cardVariant}
                whileHover={{ y: -4 }}
                className="rounded-[18px] border border-[#F1E5E2] bg-white p-6 shadow-[0_8px_25px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-1 text-[#FF6347]"
                  >
                    <MapPin size={20} />
                  </motion.div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#1A0A07]">Local SEO</h3>
                    <p className="mt-2 max-w-[320px] text-[13.5px] leading-[1.5] text-[#828282]">
                      Dominating the regional landscape to ensure your facility is the first choice in your community.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={cardVariant}
                whileHover={{ y: -4 }}
                className="rounded-[18px] border border-[#F1E5E2] bg-white p-6 shadow-[0_8px_25px_rgba(0,0,0,0.04)]"
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-1 text-[#FF6347]"
                  >
                    <CheckCircle2 size={20} />
                  </motion.div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-[#1A0A07]">Professionalizing Institutions</h3>
                    <p className="mt-2 max-w-[340px] text-[13.5px] leading-[1.5] text-[#828282]">
                      Elevating your digital presence to reflect the gold-standard care you provide daily.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: EXPERTISE*/}
      <section className="w-full bg-[#FFF7F6]">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-24 sm:px-6 md:px-10 lg:px-12 xl:px-16">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* HEADER */}
            <div className="mx-auto max-w-[900px] text-center">
              <motion.p
                variants={fadeUp}
                className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#FF6347]"
              >
                OUR EXPERTISE
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-4 text-[clamp(2.2rem,4vw,3.4rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#1A0A07]"
              >
                Digital Solutions for Care Providers.
              </motion.h2>
            </div>

            {/* BENTO GRID */}
            <div className="mt-14 grid grid-cols-1 gap-6 auto-rows-[180px] md:grid-cols-2 lg:grid-cols-3">
              <motion.div
                variants={card}
                whileHover={{ y: -6 }}
                className="flex flex-col justify-center rounded-[22px] bg-[#F3F3F3] p-8 lg:col-span-2"
              >
                <h3 className="text-[22px] font-semibold text-[#1A0A07]">Referral-Focused User Journeys</h3>
                <p className="mt-3 max-w-[480px] text-[14px] leading-[1.6] text-[#4F4F4F]">
                  We map every click to a human need, ensuring smooth transitions from curiosity to conversion for families and care managers.
                </p>
              </motion.div>

              <motion.div
                variants={card}
                whileHover={{ y: -6 }}
                className="flex flex-col justify-between rounded-[22px] bg-[#1A0A07] p-8 text-white"
              >
                <div className="text-xl text-[#FF6347]"><ShieldCheck size={20} /></div>
                <div>
                  <h3 className="text-[18px] font-semibold leading-[1.2]">Trust and Compliance</h3>
                  <p className="mt-3 text-[13px] leading-[1.5] text-[#E0E0E0]">
                    Building digital systems that meet strict UK healthcare standards while maintaining an empathetic touch.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={card}
                whileHover={{ y: -6 }}
                className="flex flex-col justify-between rounded-[22px] bg-[#A13A28] p-8 text-white"
              >
                <div className="text-xl text-white"><MapPinHouse size={20} /></div>
                <div>
                  <h3 className="text-[18px] font-semibold">Local SEO Mastery</h3>
                  <p className="mt-3 text-[13px] leading-[1.5] text-[#F5EAEA]">
                    Hyper-targeted strategies that put your care facility on the map literally and figuratively.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={card}
                whileHover={{ y: -6 }}
                className="flex flex-col justify-center rounded-[22px] bg-[#EAD6C7] p-8 md:col-span-2"
              >
                <h3 className="text-[22px] font-semibold text-[#1A0A07]">Data-Driven Growth</h3>
                <p className="mt-3 max-w-[520px] text-[14px] leading-[1.6] text-[#4F4F4F]">
                  We don't just design; we measure. Constant iterations to improve occupancy rates and visibility.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: STRATEGIC TRANSFORMATION */}
      <section className="w-full bg-[#1A0A07] text-white overflow-hidden">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-10 xl:px-14 py-10 sm:py-14 lg:py-16">
          <motion.div
            variants={stepsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative rounded-none border border-white/5 bg-[#1A0A07] px-2 sm:px-0"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-white/5" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-white/5" />

            <div className="grid grid-cols-1 gap-10 pb-10 pt-10 sm:pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:pb-12 xl:grid-cols-[1.08fr_0.92fr]">
              <div className="relative">
                <motion.h2
                  variants={stepItem}
                  className="max-w-[6.6ch] text-[clamp(2.4rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-white"
                >
                  Our Strategic Transformation.
                </motion.h2>
              </div>

              <div className="flex items-start justify-start lg:justify-end">
                <motion.div variants={stepItem} className="pt-2 lg:pt-1">
                  <span className="inline-flex flex-col items-start gap-1 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#FF6347] sm:text-[11px]">
                    <span>THE PROCESS</span>
                    <span className="h-px w-16 bg-[#FF6347]" />
                  </span>
                </motion.div>
              </div>
            </div>

            <div className="space-y-0">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  variants={stepItem}
                  className="group grid grid-cols-1 gap-4 border-t border-white/6 py-7 first:border-t-0 first:pt-0 last:pb-0 sm:py-8 lg:grid-cols-[64px_minmax(240px,320px)_1fr] lg:items-start lg:gap-8 lg:py-9"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="pt-1">
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.45, delay: index * 0.04 }}
                      className="block text-[13px] font-medium tracking-[0.18em] text-[#828282] sm:text-sm lg:text-[14px]"
                    >
                      {step.id}
                    </motion.span>
                  </div>

                  <div className="max-w-[18ch] sm:max-w-none">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="text-[clamp(1.25rem,2vw,1.9rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white"
                    >
                      {step.title}
                    </motion.h3>
                  </div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.5, delay: index * 0.05 + 0.05 }}
                    className="max-w-[44ch] text-[12px] leading-[1.55] text-[#BDBDBD] sm:text-[13px] lg:pt-1 lg:text-[13px] xl:max-w-[52ch]"
                  >
                    {step.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 5: IMPACT */}
      <section className="w-full bg-[#FFF7F6] text-[#1A0A07]">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 xl:px-10">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-10 sm:space-y-14 lg:space-y-16"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_1.6fr] lg:items-start lg:gap-10 xl:grid-cols-[0.92fr_1.72fr]">
              <motion.div variants={impactFadeUp} className="max-w-[360px]">
                <motion.div
                  variants={impactFadeUp}
                  className="mb-4 h-[2px] w-12 bg-[#FF6347] sm:mb-5 sm:w-14"
                />
                <motion.h2
                  variants={impactFadeUp}
                  className="max-w-[6ch] text-[clamp(2.05rem,5vw,3.45rem)] font-semibold leading-[0.92] tracking-[-0.05em] text-[#1D1D1D]"
                >
                  The BTech&Co Impact.
                </motion.h2>
              </motion.div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-10">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.title}
                      variants={impactFadeUp}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="max-w-[320px]"
                    >
                      <motion.div
                        variants={impactFadeUp}
                        className="mb-4 inline-flex h-9 w-9 items-center justify-center text-[#FF6347]"
                        aria-hidden="true"
                      >
                        <Icon className="h-8 w-8 stroke-[2.2]" />
                      </motion.div>

                      <motion.h3
                        variants={impactFadeUp}
                        className="mb-3 text-[1.05rem] font-semibold tracking-[-0.03em] text-[#1D1D1D] sm:text-[1.1rem]"
                      >
                        {feature.title}
                      </motion.h3>

                      <motion.p
                        variants={impactFadeUp}
                        className="text-[0.92rem] leading-[1.55] text-[#4F4F4F] sm:text-[0.95rem]"
                      >
                        {feature.description}
                      </motion.p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.div
              variants={impactFadeUp}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="relative overflow-hidden rounded-[18px] bg-[#A13A28] px-5 py-12 shadow-[0_18px_50px_rgba(26,10,7,0.14)] sm:px-8 sm:py-14 lg:px-12 lg:py-16"
            >
              <motion.div
                variants={impactFadeUp}
                className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
                aria-hidden="true"
              >
                <span className="text-[clamp(4.5rem,14vw,9rem)] font-semibold leading-none tracking-[-0.08em] text-white/[0.08] sm:text-[clamp(6rem,13vw,10rem)]">
                  GROWTH
                </span>
              </motion.div>

              <div className="relative z-10 mx-auto flex max-w-[800px] flex-col items-center text-center gap-3">
                <motion.h3
                  variants={impactFadeUp}
                  className="max-w-[34ch] text-[clamp(2.2rem,5.6vw,3.8rem)] font-bold leading-[1.0] tracking-[-0.03em] text-white"
                >
                  Ready to Professionalize Your Digital Care Presence?
                </motion.h3>

                <motion.p
                  variants={impactFadeUp}
                  className="max-w-[80ch] text-[0.95rem] leading-[1.5] text-white/80 sm:text-[1rem]"
                >
                  Book a strategy session with our care-focused digital experts today.
                </motion.p>

                <motion.a
                  variants={impactFadeUp}
                  href="/partner"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="mt-2 inline-flex h-[52px] items-center justify-center rounded-full bg-white px-10 text-[0.85rem] font-bold tracking-[0.01em] text-[#A13A28] shadow-[0_10px_24px_rgba(0,0,0,0.15)] sm:px-12"
                >
                  Arrange a Consultation
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}

