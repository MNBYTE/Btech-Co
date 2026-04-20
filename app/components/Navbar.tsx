"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Portfolio", href: "/portfolio" },
  { name: "Services", href: "/services" },
  { name: "Our Story", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="w-full bg-[#FFF7F6] border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 md:px-5 py-2 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/imgs/b-bg.png"
            alt="BTech & Co Logo"
            width={80}
            height={55}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-[#333333] group transition"
              >
                <span
                  className={`transition ${
                    isActive
                      ? "text-[#FF6347]"
                      : "group-hover:text-[#FF6347]"
                  }`}
                >
                  {link.name}
                </span>

                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#FF6347] transition-all duration-300 ${
                    isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/partner"
            className="
              bg-[#1A0A07]
              text-white
              px-6 py-2.5
              rounded-full
              text-sm
              transition-all
              duration-300
              hover:bg-[#282828]
              hover:scale-105
            "
          >
            Partner With Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[2px] bg-[#1A0A07] transition ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[#1A0A07] transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-[#1A0A07] transition ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 space-y-5 bg-[#FFF7F6]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block text-base transition ${
                  isActive
                    ? "text-[#FF6347] font-semibold"
                    : "text-[#333333]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/partner"
            className="
              w-full
              block
              text-center
              bg-[#1A0A07]
              text-white
              py-3
              rounded-full
              text-sm
              transition
              hover:bg-[#282828]
              hover:scale-[1.02]
            "
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </nav>
  );
}