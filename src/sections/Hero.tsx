"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
} from "lucide-react";

export default function Hero() {
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
      <div className="absolute inset-0 bg-[#0B1624]/75" />

      {/* CONTENT */}
      <div className="relative z-20 h-full flex items-center pt-28">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >

            <p className="uppercase tracking-[0.4em] text-yellow-400 mb-5">
              Высотные работы в Алматы
            </p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.95]">
              Промышленный альпинизм и фасадные работы
            </h1>

            <p className="mt-8 text-xl text-slate-300 leading-relaxed max-w-2xl">
              Герметизация швов, утепление фасадов,
              монтажные работы и высотный клининг
              с гарантией качества.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="https://wa.me/+77075212161"
                target="_blank"
                className="bg-yellow-400 text-black px-8 py-5 rounded-full font-bold text-lg hover:scale-105 transition shadow-2xl"
              >
                WhatsApp консультация
              </a>

              <a
                href="tel:+77000000000"
                className="border border-white/30 px-8 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition"
              >
                Позвонить сейчас
              </a>

            </div>

            {/* TRUST BADGES */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl">
                <ShieldCheck className="text-yellow-400 mb-3" />
                <h3 className="font-bold text-xl">
                  Гарантия качества
                </h3>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl">
                <Clock3 className="text-yellow-400 mb-3" />
                <h3 className="font-bold text-xl">
                  Более 10 лет опыта
                </h3>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 p-5 rounded-2xl">
                <BadgeCheck className="text-yellow-400 mb-3" />
                <h3 className="font-bold text-xl">
                  Работаем официально
                </h3>
              </div>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}