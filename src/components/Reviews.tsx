const reviews = [
  {
    name: "Александр",
    text: "Все сделали быстро и качественно. Очень довольны результатом.",
  },

  {
    name: "Айгуль",
    text: "Профессиональная команда. Работают аккуратно и официально.",
  },

  {
    name: "Марат",
    text: "Утепление фасада сделали идеально. Рекомендую.",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      className="py-28 bg-[#132238]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mb-16">

          <p className="uppercase tracking-[0.3em] text-yellow-400 mb-4">
            Отзывы
          </p>

          <h2 className="text-4xl md:text-6xl font-bold uppercase">
            Что говорят клиенты
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#0E1A2B] border border-white/10 rounded-3xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">
                {review.name}
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}