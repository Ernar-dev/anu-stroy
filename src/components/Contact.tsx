"use client";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();

    setLoading(true);

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    alert("Заявка успешно отправлена!");
  }

  return (
    <section
      id="contact"
      className="py-28 bg-[#132238]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[0.3em] text-yellow-400 mb-4">
              Контакты
            </p>

            <h2 className="text-4xl md:text-6xl font-bold uppercase leading-tight">
              Оставьте заявку
            </h2>

            <p className="mt-6 text-slate-300 text-lg leading-relaxed">
              Свяжитесь с нами удобным способом.
              Ответим быстро и бесплатно проконсультируем.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-10 flex flex-col gap-6">

              <a
                href="tel:+77075212161"
                className="text-2xl font-bold hover:text-yellow-400 transition"
              >
                +7 (700) 000-00-00
              </a>

              <a
                href="https://wa.me/+77075212161"
                target="_blank"
                className="text-xl text-slate-300 hover:text-yellow-400 transition"
              >
                WhatsApp
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                className="text-xl text-slate-300 hover:text-yellow-400 transition"
              >
                Instagram
              </a>

            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#0E1A2B] border border-white/10 rounded-3xl p-8"
          >

            <div className="flex flex-col gap-6">

              <input
                name="name"
                placeholder="Ваше имя"
                required
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-yellow-400"
              />

              <input
                name="phone"
                placeholder="Номер телефона"
                required
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-yellow-400"
              />

              <textarea
                name="message"
                placeholder="Опишите задачу"
                rows={5}
                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-yellow-400"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-yellow-400 text-black font-bold py-5 rounded-2xl hover:scale-[1.02] transition"
              >
                {loading ? "Отправка..." : "Отправить заявку"}
              </button>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}