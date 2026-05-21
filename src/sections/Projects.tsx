"use client";

import { motion } from "framer-motion";

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2070&auto=format&fit=crop",
    title: "Business Center Renovation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    title: "Facade Modernization",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    title: "Roof Reconstruction",
  },
];

export default function Projects() {
  return (
    <section className="py-32 bg-[#11151C]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-20">
          <p className="text-orange-400 uppercase tracking-[0.3em] mb-4">
            PROJECTS
          </p>

          <h2 className="text-5xl font-black">
            Соңғы жобалар
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="relative overflow-hidden rounded-3xl group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-[500px] w-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute bottom-0 p-8">
                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}