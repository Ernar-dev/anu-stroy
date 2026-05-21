"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Hammer,
  PanelsTopLeft,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: <Building2 size={42} />,
    title: "Фасад реконструкциясы",
    desc: "Коммерциялық және тұрғын ғимараттарды жаңарту жұмыстары.",
  },
  {
    icon: <PanelsTopLeft size={42} />,
    title: "Шатыр қаптау",
    desc: "Заманауи шатыр жүйелерін орнату және жаңарту.",
  },
  {
    icon: <Hammer size={42} />,
    title: "Жеңіл құрылыс",
    desc: "Биіктегі монтаж және құрылыс жұмыстары.",
  },
  {
    icon: <ShieldCheck size={42} />,
    title: "Өндірістік альпинизм",
    desc: "Қауіпсіздік стандартына сай кәсіби жұмыстар.",
  },
];

export default function Services() {
  return (
    <section className="py-32 bg-[#11151C]">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-orange-400 uppercase tracking-[0.3em] mb-4">
            SERVICES
          </p>

          <h2 className="text-4xl md:text-6xl font-black max-w-3xl leading-tight">
            Құрылыс және биіктегі кәсіби қызметтер
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="bg-[#1A1F29] p-8 rounded-3xl border border-white/10 hover:border-orange-400 transition duration-500"
            >
              <div className="text-orange-400 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}