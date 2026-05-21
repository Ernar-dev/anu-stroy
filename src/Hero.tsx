"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [lang, setLang] = useState("kz");

  const content = {
    kz: {
      title: "Биік ғимараттардағы құрылыс жұмыстары",
      desc: "Фасад реконструкциясы, өндірістік альпинизм және шатыр қаптау жұмыстары.",
      btn1: "Консультация алу",
      btn2: "Жобаларды көру",
    },

    ru: {
      title: "Высотные строительные работы",
      desc: "Реконструкция фасадов, промышленный альпинизм и кровельные работы.",
      btn1: "Получить консультацию",
      btn2: "Смотреть проекты",
    },
  };

  return (
    <section className="relative h-screen overflow-hidden">

      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* LANGUAGE SWITCH */}
      <div className="absolute top-28 right-8 z-30 flex gap-3">
        <button
          onClick={() => setLang("kz")}
          className={`px-4 py-2 rounded-full border transition ${
            lang === "kz"
              ? "bg-orange-500 border-orange-500"
              : "border-white/30"
          }`}
        >
          KZ
        </button>

        <button
          onClick={() => setLang("ru")}
          className={`px-4 py-2 rounded-full border transition ${
            lang === "ru"
              ? "bg-orange-500 border-orange-500"
              : "border-white/30"
          }`}
        >
          RU
        </button>
      </div>

      {/* CONTENT */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-8xl font-black uppercase leading-tight max-w-5xl"
          >
            {content[lang as "kz" | "ru"].title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-8 text-gray-300 text-lg md:text-2xl max-w-2xl"
          >
            {content[lang as "kz" | "ru"].desc}
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <a
              href="https://wa.me/+77075212161"
              target="_blank"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 transition rounded-full font-semibold text-lg shadow-2xl"
            >
              {content[lang as "kz" | "ru"].btn1}
            </a>

            <button className="px-8 py-4 border border-white/30 hover:bg-white/10 transition rounded-full font-semibold text-lg">
              {content[lang as "kz" | "ru"].btn2}
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}