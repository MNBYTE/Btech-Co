"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  MonitorSmartphone,
  Brush,
  SquareMousePointer,
  Play,
  ArrowRight,
  BarChart3,
  Globe,
  Search,
  Users,
  Star,
  ChevronDown,
} from "lucide-react";

/* ─── animation helpers ─────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/* ─── video box ─────────────────────────────────────────────────── */
function VideoBox({ videoUrl, title, tag }: { videoUrl: string; title: string; tag: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      {...fadeUp()}
      className="group relative cursor-pointer rounded-2xl overflow-hidden bg-[#1D1D1D]"
      onClick={() => setIsPlaying(true)}
    >
      <div className="relative w-full aspect-video bg-black overflow-hidden">
        <video
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          muted
          loop
          controls={isPlaying}
          autoPlay={isPlaying}
          src={videoUrl}
        />
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center w-16 h-16 rounded-full bg-[#FF6347] shadow-[0_0_40px_rgba(255,99,71,0.5)] mb-4"
            >
              <Play size={26} className="text-white fill-white ml-1" />
            </motion.div>
            <span className="text-white/70 text-xs tracking-widest uppercase">{tag}</span>
          </motion.div>
        )}
      </div>
      <div className="p-5 md:p-6 bg-[#1D1D1D] border-t border-white/5">
        <h3 className="text-white font-semibold text-base md:text-lg">{title}</h3>
      </div>
    </motion.div>
  );
}

/* ─── service card ──────────────────────────────────────────────── */
interface ServiceCardProps {
  number: string;
  icon: React.ReactNode;
  heading: string;
  title: string;
  description: string;
  items: string[];
  imageSrc: string;
  flip?: boolean;
  accent?: string;
}

function ServiceCard({ number, icon, heading, title, description, items, imageSrc, flip, accent = "#FF6347" }: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(26,10,7,0.08)] ${flip ? "lg:grid-flow-dense" : ""}`}
    >
      {/* TEXT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: flip ? 40 : -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`bg-white p-8 md:p-12 flex flex-col justify-center ${flip ? "lg:col-start-2" : ""}`}
      >
        {/* Number + Icon */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#BDBDBD] uppercase">{number}</span>
          <div className="w-px h-6 bg-[#E0E0E0]" />
          <div style={{ color: accent }}>{icon} {heading}</div>
        </div>

        <h3 className="text-2xl md:text-3xl font-black text-[#1A0A07] leading-tight mb-4 tracking-tight">
          {title}
        </h3>

        <p className="text-[#4F4F4F] text-sm leading-relaxed mb-8 max-w-md">
          {description}
        </p>

        <motion.ul
          variants={stagger}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="space-y-3"
        >
          {items.map((item) => (
            <motion.li key={item} variants={staggerItem} className="flex items-center gap-3 text-sm text-[#333333]">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* IMAGE SIDE */}
      <motion.div
        initial={{ opacity: 0, x: flip ? -40 : 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`relative min-h-[300px] md:min-h-[420px] overflow-hidden group ${flip ? "lg:col-start-1 lg:row-start-1" : ""}`}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
      </motion.div>
    </div>
  );
}

/* page */
export default function ServicesPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <main className="bg-[#FFF7F6] overflow-x-hidden">

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center overflow-hidden">

        {/* Background texture */}
        <div className="absolute inset-0 bg-[#FFF7F6]">
          <div className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage: `radial-gradient(circle, #1A0A07 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Big ghost text */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        >
          <span className="text-[20vw] font-black text-[#1A0A07]/[0.03] leading-none whitespace-nowrap tracking-tighter">
            DIGITAL
          </span>
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-16 w-full grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <motion.h1
              variants={stagger}
              initial="hidden"
              animate="show"
              className="text-[clamp(2.8rem,6vw,5.5rem)] font-black text-[#1A0A07] leading-[0.95] tracking-tight mb-8"
            >
              <motion.span variants={staggerItem} className="block">Growth-Focused</motion.span>
              <motion.span variants={staggerItem} className="block text-[#FF6347] italic">Digital Marketing</motion.span>
              <motion.span variants={staggerItem} className="block">For The Care Industry.</motion.span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="text-[#4F4F4F] max-w-md text-[15px] leading-relaxed mb-10"
            >
              We offer digital services designed to help care providers attract enquiries, build trust, and present their services clearly online.
            </motion.p>

            <motion.div
              {...fadeUp(0.4)}
              className="flex gap-4 flex-wrap"
            >
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 bg-[#FF6347] text-white px-7 py-3.5 rounded-full text-sm font-semibold shadow-[0_8px_30px_rgba(255,99,71,0.3)] hover:bg-[#A13A28] transition-all duration-300"
              >
                Explore Our Expertise
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 border-2 border-[#1A0A07] text-[#1A0A07] px-7 py-3.5 rounded-full text-sm font-semibold hover:bg-[#1A0A07] hover:text-white transition-all duration-300"
              >
                Book A Strategy Call
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — image stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative h-[420px] md:h-[480px] w-[80%] md:w-[70%] mx-auto overflow-hidden rounded-[28px] bg-[#E85C35]"
          >
            {/* White card — left, CCW */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute rounded-[20px] overflow-hidden shadow-2xl z-10"
              style={{
                top: "8%", left: "5%",
                width: "72%", height: "110%",
                rotate: "-4deg",
                transformOrigin: "bottom left",
              }}
            >
              <Image src="/imgs/service2.png" alt="" fill className="object-cover object-top" />
            </motion.div>

            {/* Dark card — right, CW */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="absolute rounded-[20px] overflow-hidden shadow-2xl z-20"
              style={{
                top: "2%", left: "38%", right: "-8%",
                height: "110%",
                rotate: "4deg",
                transformOrigin: "bottom right",
              }}
            >
              <Image src="/imgs/service1.png" alt="" fill className="object-cover object-top" />
            </motion.div>

            {/* Small card — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="absolute left-3 bottom-3 rounded-[16px] overflow-hidden shadow-2xl z-30"
              style={{ width: "44%", height: "44%" }}
            >
              <Image src="/imgs/service3.png" alt="" fill className="object-cover object-top" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES INTRO */}
      <section className="px-6 md:px-10 pt-24 pb-10">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              {/* <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-[#FF6347] uppercase mb-4">
                <span className="w-6 h-px bg-[#FF6347]" />
                What We Do
              </span> */}
              <h2 className="text-3xl md:text-5xl font-black text-[#1A0A07] leading-tight tracking-tight max-w-[14ch]">
                Core Services
              </h2>
            </div>
            <p className="text-[#4F4F4F] text-sm leading-relaxed max-w-[38ch] md:text-right">
              Not generic digital services. Purpose-built solutions for care providers who want families to find them, trust them, and reach out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 md:px-10 pb-24 space-y-8">
        <div className="max-w-7xl mx-auto space-y-8">

          <ServiceCard
            number="01"
            icon={<MonitorSmartphone size={28} />}
            heading="Website Design, Development & Management"
            title="Websites Built to Bring Enquiries"
            description="Mobile-first, fully accessible platforms that navigate the complexities of care with grace and technical excellence. Every pixel earns its place."
            items={[
              "New website design and development",
              "Website redesign (revamp)",
              "Mobile-friendly and responsive layouts",
              "Clear enquiry and contact sections",
              "Ongoing monthly updates and maintenance",
            ]}
            imageSrc="/imgs/core1.png"
          />

          <ServiceCard
            number="02"
            icon={<Brush size={28} />}
            heading="Graphic & Multimedia Design"
            title="Content That Shows What You Do Properly"
            description="We help you present your services in a way people understand — from branded materials to social media and animated videos, everything communicates your care clearly."
            items={[
              "Social media content design",
              "Flyers, brochures, and branded materials",
              "Visual identity and brand consistency",
              "Animated explainer videos",
              "Marketing visuals for campaigns",
            ]}
            imageSrc="/imgs/core2.png"
            flip
            accent="#A13A28"
          />

          <ServiceCard
            number="03"
            icon={<SquareMousePointer size={28} />}
            heading="Digital Marketing for Care Providers"
            title="Helping the Right People Find and Contact You"
            description="Practical marketing that brings visibility and enquiries. Everything is tailored to how families and decision-makers actually search for care services."
            items={[
              "Local SEO (visibility in your area)",
              "Google Business Profile optimisation",
              "Social media management",
              "Content creation based on real questions",
              "Enquiry & lead generation setup",
              "Review and reputation support",
            ]}
            imageSrc="/imgs/core3.png"
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 md:px-10 py-24 bg-[#1A0A07] relative overflow-hidden">
        {/* Ghost text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[18vw] font-black text-white/[0.025] leading-none whitespace-nowrap tracking-tighter">
            PROCESS
          </span>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="mb-16 text-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.25em] text-[#FF6347] uppercase mb-4">
              <span className="w-6 h-px bg-[#FF6347]" />
              How It Works
              <span className="w-6 h-px bg-[#FF6347]" />
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Our Process
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Consultation", body: "We understand your service and needs." },
              { step: "02", title: "Audit", body: "We review your current online presence." },
              { step: "03", title: "Build / Setup", body: "We design and build what's needed." },
              { step: "04", title: "Improve", body: "We optimise based on real results." },
              { step: "05", title: "Ongoing Support", body: "We support and scale continuously." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                {...fadeUp(i * 0.08)}
                whileHover={{ y: -4 }}
                className="relative bg-white/5 border border-white/8 rounded-2xl p-6 overflow-hidden group"
              >
                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FF6347] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <p className="text-[#FF6347] font-black text-2xl mb-4 tracking-tight">{item.step}</p>
                <h4 className="font-bold text-white text-sm mb-2">{item.title}</h4>
                <p className="text-[11px] text-[#828282] leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div {...fadeUp()}>
              <h2 className="text-3xl md:text-5xl font-black text-[#1A0A07] leading-tight tracking-tight mb-6">
                Why Work With Us
              </h2>
              <p className="text-[#4F4F4F] text-sm leading-relaxed max-w-md mb-10">
                We work exclusively with care providers. That means we already understand the language your families speak, the regulations you navigate, and the trust you need to earn before we write a single line of code.
              </p>

              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-[#1A0A07] font-semibold text-sm hover:text-[#FF6347] transition-colors"
              >
                Read our story
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* RIGHT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Globe size={20} />, title: "Sector Specialists", body: "We understand how the care sector works" },
                { icon: <BarChart3 size={20} />, title: "Enquiry-Focused", body: "We focus on enquiries, not just design" },
                { icon: <Search size={20} />, title: "Simple & Clear", body: "We keep things simple and clear" },
                { icon: <Users size={20} />, title: "Built for Growth", body: "We build for the long term not a quick fix" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  {...fadeUp(i * 0.1)}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-[#F1E5E2] rounded-2xl p-6 shadow-[0_4px_20px_rgba(26,10,7,0.05)]"
                >
                  <div className="text-[#FF6347] mb-4">{item.icon}</div>
                  <h4 className="font-bold text-[#1A0A07] text-sm mb-2">{item.title}</h4>
                  <p className="text-[#828282] text-xs leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IT FEELS LIKE */}
      <section className="px-6 md:px-10 py-24 bg-[#1D1D1D]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp()} className="mb-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight max-w-[16ch]">
                What It Feels Like to Live With It.
              </h2>
              <p className="text-[#828282] text-sm leading-relaxed max-w-[36ch] md:text-right">
                Animated stories that build the empathy that makes a real difference in care.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <VideoBox
              videoUrl="https://res.cloudinary.com/duhpmbxst/video/upload/v1776721673/WhatsApp_Video_2026-04-20_at_11.22.47_AM_vxbl8h.mp4"
              title="Understanding ADHD"
              tag="Watch the story"
            />
            <VideoBox
              videoUrl="https://res.cloudinary.com/duhpmbxst/video/upload/v1776721668/WhatsApp_Video_2026-04-20_at_11.23.24_AM_dpejkv.mp4"
              title="Autism Awareness"
              tag="Watch the story"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 py-24 bg-[#FFF7F6]">
        <motion.div
          {...fadeUp()}
          className="max-w-5xl mx-auto relative overflow-hidden bg-[#A13A28] rounded-3xl px-8 py-16 md:px-16 md:py-24 shadow-[0_24px_60px_rgba(161,58,40,0.25)]"
        >
          {/* Ghost */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden">
            <span className="text-[clamp(5rem,16vw,10rem)] font-black text-white/[0.06] leading-none tracking-tighter whitespace-nowrap">
              GROWTH
            </span>
          </div>

          {/* Decorative rings */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full border border-white/10" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border border-white/10" />

          <div className="relative z-10 flex flex-col items-center text-center gap-4">

            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight max-w-[16ch]">
              Ready to Grow Your Care Facility?
            </h2>

            <p className="text-white/75 text-sm leading-relaxed max-w-[40ch]">
              Join the group of care providers partnering with BTech&Co to redefine digital excellence in the UK's care sector.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/partner"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#A13A28] px-8 py-4 rounded-full text-sm font-bold shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:scale-105 transition-all duration-300"
              >
                Start Your Partnership
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full text-sm font-semibold hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}