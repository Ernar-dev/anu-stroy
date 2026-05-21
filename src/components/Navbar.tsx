"use client";

import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-[0.2em] uppercase">
          ANUSTROY
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-wide">
          <a href="#">Басты бет</a>
          <a href="#">Қызметтер</a>
          <a href="#">Жобалар</a>
          <a href="#">Байланыс</a>

          {/* Language */}
          <div className="flex gap-2 text-orange-400">
            <button>KZ</button>
            <span>/</span>
            <button>RU</button>
          </div>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-5 uppercase text-sm">
          <a href="#">Басты бет</a>
          <a href="#">Қызметтер</a>
          <a href="#">Жобалар</a>
          <a href="#">Байланыс</a>

          <div className="flex gap-2 text-orange-400">
            <button>KZ</button>
            <span>/</span>
            <button>RU</button>
          </div>
        </div>
      )}
    </motion.nav>
  );
}