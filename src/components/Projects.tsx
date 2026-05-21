const projects = [
  "/projects/1.jpg",
  "/projects/2.jpg",
  "/projects/3.jpg",
  "/projects/4.jpg",
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-[#0E1A2B]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mb-16">

          <p className="uppercase tracking-[0.3em] text-yellow-400 mb-4">
            Наши проекты
          </p>

          <h2 className="text-4xl md:text-6xl font-bold uppercase">
            Выполненные объекты
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-white/10"
            >
              <img
                src={project}
                alt=""
                className="w-full h-[400px] object-cover hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}