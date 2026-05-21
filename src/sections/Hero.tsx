"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center pt-28">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-black uppercase leading-tight max-w-5xl"
          >
            Биік ғимараттардағы құрылыс жұмыстары
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-8 text-gray-300 text-lg md:text-2xl max-w-2xl"
          >
            Фасад реконструкциясы, өндірістік альпинизм,
            шатыр қаптау және коммерциялық құрылыс жұмыстары.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-5"
          >
            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 transition rounded-full font-semibold text-lg">
              Консультация алу
            </button>

            <button className="px-8 py-4 border border-white/30 hover:bg-white/10 transition rounded-full font-semibold text-lg">
              Жобаларды көру
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}