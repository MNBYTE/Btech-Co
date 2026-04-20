"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";

/* ─── animations ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay },
});


export default function ServicesPage() {
  return (
    <main className="bg-[#FFF7F6]">

      {/* HERO*/}
        <section className="pt-24 pb-16 px-6 md:px-10 bg-[#FFF7F6]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

            {/* TEXT */}
            <motion.div {...fadeUp()}>
            <h1 className="text-[40px] md:text-[52px] font-black text-[#1A0A07] leading-[1.1]">
                Growth-Focused <br />
                <span className="text-[#FF6347]">Digital Marketing</span> <br />
                For The Care Industry.
            </h1>

            <p className="mt-6 text-[#4F4F4F] max-w-md text-[15px] leading-relaxed">
                We blend clinical empathy with technical precision to build digital
                systems that attract, engage, and convert the families seeking your care.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
                <Link
                    href="/portfolio"
                    className="bg-[#FF6347] text-white px-7 py-3.5 rounded-full text-sm font-medium shadow-md hover:scale-105 transition-all inline-block"
                    >
                    Explore Our Expertise
                    </Link>

                    <Link
                    href="/partner"
                    className="text-black border-2 border-[#FF6347] px-7 py-3.5 rounded-full text-sm font-medium hover:border-black hover:text-white hover:bg-[#FF6347] transition-all inline-block"
                    >
                    Book A Strategy Call
                    </Link>
            </div>
            </motion.div>

            {/* IMAGE SYSTEM */}
            <motion.div
            {...fadeUp(0.2)}
            className="relative h-[380px] md:h-[460px] w-full"
            >

            {/* 🔴 BACKGROUND CONTAINER CARD */}
            <div className="absolute inset-0 bg-[#E85C35] rounded-[28px]" />

            {/* ⚪ INNER WHITE UI CARD */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute left-6 right-16 top-10 bottom-6 bg-white rounded-[22px] overflow-hidden shadow-xl"
            >
                <Image
                src="/imgs/service1.png"
                alt="Care service showcase"
                fill
                className="object-cover"
                />
            </motion.div>

            {/* 🟨 SMALL FLOATING CARD (BOTTOM LEFT) */}
            <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="
                absolute 
                left-10 
                bottom-6 
                w-[38%] 
                h-[32%] 
                bg-white 
                rounded-[18px] 
                overflow-hidden 
                shadow-2xl
                z-20
            "
            >
            <Image
                src="/imgs/service3.png"
                alt="Additional showcase"
                fill
                className="object-cover"
            />
            </motion.div>

            {/* ⚫ RIGHT DARK CARD (OVERLAP) */}
            <motion.div
                initial={{ opacity: 0, x: 60, rotate: 4 }}
                animate={{ opacity: 1, x: 0, rotate: 4 }}
                transition={{ duration: 0.8 }}
                className="
                absolute 
                right-0 
                top-4 
                bottom-4 
                w-[48%] 
                bg-[#1A1A1A] 
                rounded-[22px] 
                overflow-hidden 
                shadow-2xl
                z-10
                "
            >
                <Image
                src="/imgs/service2.png"
                alt="Care facility digital marketing"
                fill
                className="object-cover opacity-90"
                />
            </motion.div>

            </motion.div>
        </div>
        </section>


      {/* SERVICES GRID */}
        <section className="px-6 md:px-10 pb-20">
        <div className="max-w-7xl mx-auto bg-[#F3F3F3] rounded-3xl p-6 md:p-10">

            {/* TITLE */}
            <motion.div {...fadeUp()} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A0A07]">
                Precision Services
            </h2>
            <p className="text-base md:text-lg text-[#828282] mt-3 max-w-xl mx-auto">
                Engineered specifically for care providers who demand more from their digital presence.
            </p>
            </motion.div>

            {/* GRID */}
            <div className="grid md:grid-cols-3 gap-6">

            {/* ───────── 3 PANEL SECTION ───────── */}
            <div className="md:col-span-3 flex flex-col lg:flex-row items-stretch relative">

                {/* LEFT CARD */}
                <motion.div
                {...fadeUp()}
                className="
                    bg-white rounded-2xl p-6 
                    flex-1 z-10
                    lg:mr-[-60px]
                    lg:pr-16
                "
                >
                <div className="text-[#FF6347] mb-5">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="2" y="3" width="13" height="10" rx="1.5" />
                    <rect x="17" y="7" width="5" height="8" rx="1.5" />
                    </svg>
                </div>

                <h3 className="text-lg font-bold text-[#1A0A07] mb-3">
                    Website Design
                </h3>

                <p className="text-sm text-[#4F4F4F] leading-relaxed mb-5">
                    Mobile-first, fully accessible platforms that navigate the complexities of care with grace and technical excellence.
                </p>

                <ul className="space-y-2">
                    {[
                    "WCAG 2.1 Accessibility Standards",
                    "Ultra-Fast Mobile Optimization",
                    ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#333333]">
                        <svg className="w-4 h-4 text-[#FF6347]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <circle cx="12" cy="12" r="9" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.5 12 2.5 2.5 4.5-4.5" />
                        </svg>
                        {item}
                    </li>
                    ))}
                </ul>
                </motion.div>

                {/* CENTER IMAGE */}
                <motion.div
                {...fadeUp(0.1)}
                className="
                    relative z-20 
                    w-full lg:w-[320px]
                    h-[260px] lg:h-auto
                    rounded-2xl overflow-hidden
                    bg-[#FF6347] shadow-xl
                    mt-6 lg:mt-0
                "
                >
                <Image
                    src="/imgs/service1.png"
                    alt=""
                    fill
                    className="object-cover"
                />
                </motion.div>

                {/* RIGHT CARD */}
                <motion.div
                {...fadeUp(0.2)}
                className="
                    bg-white rounded-2xl p-6 
                    flex-1 z-10
                    lg:ml-[-60px]
                    lg:pl-16
                    mt-6 lg:mt-0
                "
                >
                <div className="text-[#FF6347] mb-5">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="12" cy="12" r="3" />
                    <path strokeLinecap="round" d="M12 2v2M12 20v2M2 12h2M20 12h2" />
                    </svg>
                </div>

                <h3 className="text-lg font-bold text-[#1A0A07] mb-3">
                    Digital Marketing
                </h3>

                <p className="text-sm text-[#4F4F4F] leading-relaxed mb-5">
                    Strategic SEO and PPC campaigns designed to capture intent at the local level.
                </p>

                <div className="space-y-2">
                    {[
                    { label: "Local SEO Mastery", value: "+45%" },
                    { label: "PPC Conversion", value: "+22%" },
                    ].map((stat) => (
                    <div
                        key={stat.label}
                        className="flex items-center justify-between bg-[#F5F5F5] rounded-xl px-4 py-2.5 text-sm"
                    >
                        <span className="text-[#333333] font-medium">
                        {stat.label}
                        </span>
                        <span className="text-[#FF6347] font-bold">
                        {stat.value}
                        </span>
                    </div>
                    ))}
                </div>
                </motion.div>
            </div>

            {/* GRAPHIC DESIGN */}
            <motion.div
                {...fadeUp(0.3)}
                className="bg-white p-6 rounded-2xl flex flex-col"
            >
                <div className="text-[#FF6347] text-xl mb-4">✎</div>

                <h3 className="font-semibold mb-2 text-[#1A0A07]">
                Graphic Design
                </h3>

                <p className="text-sm text-[#4F4F4F]">
                Creating empathetic branding kits and physical brochures that families trust.
                </p>

                <div className="relative h-[200px] mt-4 rounded-xl overflow-hidden">
                <Image src="/imgs/servicepre3.jpg" alt="" fill className="object-cover" />
                </div>
            </motion.div>

            {/* ───────── DARK CARD + FUNNEL ───────── */}
            <motion.div
                {...fadeUp(0.4)}
                className="
                md:col-span-2
                bg-[#1D1D1D]
                text-white
                p-8 md:p-10
                rounded-2xl
                grid md:grid-cols-2
                gap-10
                items-center
                "
            >

                {/* LEFT */}
                <div className="max-w-md">
                <h3 className="text-xl font-bold mb-3">
                    Seamless Integrations
                </h3>

                <p className="text-sm text-white/70 leading-relaxed">
                    We bridge the gap between digital visibility and clinical compliance.
                    Our systems are built to sync with your operational realities.
                </p>
                </div>

                {/* RIGHT */}
                <div className="flex justify-center md:justify-end">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-md px-6 py-5 rounded-xl w-full max-w-[260px]"
                >
                    {/* HEADER */}
                    <div className="flex items-center justify-between mb-4">
                    <p className="text-xs text-white/80 font-medium">
                        Conversion Funnel
                    </p>
                    <BarChart3 size={16} className="text-white/60" />
                    </div>

                    {/* BARS */}
                    <div className="space-y-2.5">
                    {[85, 65, 45].map((w, i) => (
                        <div key={i} className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${w}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.15 }}
                            className="h-full bg-[#FF6347] rounded-full"
                        />
                        </div>
                    ))}
                    </div>

                    {/* LABELS */}
                    <div className="flex justify-between text-[10px] text-white/50 mt-3">
                    <span>Awareness</span>
                    <span>Consideration</span>
                    <span>Conversion</span>
                    </div>
                </motion.div>
                </div>

            </motion.div>

            </div>
        </div>
        </section>


      {/* CTA */}
      <section className="px-6 md:px-10 pb-20">
        <motion.div
          {...fadeUp()}
          className="max-w-4xl mx-auto bg-[#A13A28] text-white text-center py-14 px-6 rounded-3xl shadow-xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to grow your care facility?
          </h2>

          <p className="text-sm text-white/80 mt-3">
            Join the elite group of care providers partnering with BTech&Co to redefine digital excellence.
          </p>

          <Link
            href="/partner"
            className="mt-6 inline-block bg-white text-[#A13A28] px-6 py-3 rounded-full text-sm font-medium hover:scale-105 transition"
            >
            Start Your Partnership
            </Link>
        </motion.div>
      </section>
    </main>
  );
}