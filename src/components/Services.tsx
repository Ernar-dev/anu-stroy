"use client";

import {
  Paintbrush,
  Building2,
  Hammer,
  Shield,
  Wind,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Герметизация швов",
    desc: "Защита здания от влаги, холода и разрушений.",
    icon: Shield,
  },

  {
    title: "Утепление фасадов",
    desc: "Профессиональное утепление Пеноплэксом.",
    icon: Building2,
  },

  {
    title: "Фасадные работы",
    desc: "Покраска, реставрация и отделка фасадов.",
    icon: Paintbrush,
  },

  {
    title: "Монтажные работы",
    desc: "Монтаж и демонтаж конструкций любой сложности.",
    icon: Hammer,
  },

  {
    title: "Высотный клининг",
    desc: "Мойка окон, фасадов и очистка конструкций.",
    icon: Wind,
  },

  {
    title: "Ремонтные работы",
    desc: "Комплексные работы на высоте с гарантией.",
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-[#132238]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="max-w-3xl mb-16">

          <p className="uppercase tracking-[0.3em] text-yellow-400 mb-4">
            Наши услуги
          </p>

          <h2 className="text-4xl md:text-6xl font-bold uppercase leading-tight">
            Высотные работы любой сложности
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group bg-[#0E1A2B] border border-white/10 rounded-3xl p-8 hover:border-yellow-400 transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}