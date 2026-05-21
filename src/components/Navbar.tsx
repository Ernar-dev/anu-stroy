"use client";

import { Menu, Phone, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#0E1A2B]/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="flex items-center gap-3">

  <Link
    href={`/ru`}
    className="text-sm hover:text-yellow-400"
  >
    RU
  </Link>

  <Link
    href={`/kz`}
    className="text-sm hover:text-yellow-400"
  >
    KZ
  </Link>

    </div>
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <div>
          <h1 className="text-3xl font-bold tracking-[0.25em] text-white uppercase">
            ANUSTROY
          </h1>

          <p className="text-xs text-yellow-400 tracking-[0.3em] uppercase mt-1">
            Industrial Rope Access
          </p>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center gap-10 text-sm uppercase tracking-wider">

          <a href="#services" className="hover:text-yellow-400 transition">
            Услуги
          </a>

          <a href="#projects" className="hover:text-yellow-400 transition">
            Проекты
          </a>

          <a href="#reviews" className="hover:text-yellow-400 transition">
            Отзывы
          </a>

          <a href="#contact" className="hover:text-yellow-400 transition">
            Контакты
          </a>

          {/* PHONE */}
          <a
            href="tel:+77000000000"
            className="flex items-center gap-2 bg-yellow-400 text-black px-5 py-3 rounded-full font-bold hover:scale-105 transition"
          >
            <Phone size={18} />
            Позвонить
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-[#132238] border-t border-white/10 px-6 py-6 flex flex-col gap-6 uppercase text-sm">

          <a href="#services">Услуги</a>
          <a href="#projects">Проекты</a>
          <a href="#reviews">Отзывы</a>
          <a href="#contact">Контакты</a>

          <a
            href="tel:+77000000000"
            className="bg-yellow-400 text-black px-5 py-4 rounded-full text-center font-bold"
          >
            Позвонить
          </a>
        </div>
      )}
    </motion.nav>
  );
}