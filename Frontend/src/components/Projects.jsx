import React from "react";

const projects = [
  {
    id: 1,
    title: "Flagship Channel Seoul",
    image: "/images/s1.jpeg",
    size: "small",
  },
  {
    id: 2,
    title: "Bloc Croûte Blanc",
    image: "/images/l1.jpg",
    size: "small",
  },
  {
    id: 3,
    title: "Escalier Hélicoïdal En Pierre",
    image: "/images/l2.jpg",
    size: "large",
    cta: "Découvrir",
  },
  {
    id: 4,
    title: "Salle De Bains En Marbre",
    image: "/images/l3.jpg",
    size: "large",
  },
];

const Projects = () => {
  return (
    <section className="bg-white px-6 md:px-16 lg:px-24 py-20">
      {/* Row 1 — two equal cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.id} project={project} aspectClass="aspect-[16/9]" />
        ))}
      </div>

      {/* Row 2 — asymmetric: wide left, narrow right */}
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-4">
        {projects.slice(2, 4).map((project) => (
          <ProjectCard key={project.id} project={project} aspectClass="aspect-[16/9]" />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, aspectClass }) => {
  return (
    <div className={`relative overflow-hidden group cursor-pointer ${aspectClass}`}>
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-300" />

      {/* Text overlay — bottom left */}
      <div className="absolute bottom-0 left-0 p-5 md:p-6">
        <h3 className="text-white text-base md:text-lg font-semibold tracking-[0.15em] uppercase leading-tight max-w-[240px]">
          {project.title}
        </h3>

        {project.cta && (
          <p className="mt-2 text-white/70 text-[0.65rem] tracking-[0.2em] uppercase font-medium hover:text-white transition-colors cursor-pointer">
            {project.cta}
          </p>
        )}
      </div>
    </div>
  );
};

export default Projects;