"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "10+", label: "Жыл тәжірибе" },
  { number: "250+", label: "Аяқталған жоба" },
  { number: "50+", label: "Кәсіби маман" },
  { number: "100%", label: "Қауіпсіздік стандарты" },
];

export default function Stats() {
  return (
    <section className="py-24 bg-[#0B0D12]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <h3 className="text-5xl md:text-7xl font-black text-orange-400">
                {stat.number}
              </h3>

              <p className="mt-4 text-gray-400 uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}