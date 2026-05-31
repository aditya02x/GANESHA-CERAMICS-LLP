import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Luxury Villa Construction",
    location: "Ranchi, Jharkhand",
    category: "Residential",
    image: "/images/k1.jpg",
  },
  {
    id: 2,
    title: "Corporate Office Building",
    location: "Patna, Bihar",
    category: "Commercial",
    image: "/images/s2.jpg",
  },
  {
    id: 3,
    title: "Modern Interior Design",
    location: "Ranchi, Jharkhand",
    category: "Interior",
    image: "/images/s3.jpg",
  },
  {
    id: 4,
    title: "Premium Duplex House",
    location: "Jamshedpur, Jharkhand",
    category: "Residential",
    image: "/images/s4.jpg",
  },
];

const Our = () => {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-amber-600 uppercase tracking-[0.3em] text-xs sm:text-sm font-semibold">
            Our Portfolio
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 text-gray-900">
            Recent <span className="text-amber-600">Projects</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 text-base leading-relaxed">
            Explore our completed residential, commercial, and interior
            projects crafted with precision, quality, and attention to detail.
          </p>
        </div>

        {/* Mobile Horizontal Slider */}
        <div className="lg:hidden flex gap-5 overflow-x-auto snap-x snap-mandatory pb-6 -mx-5 px-5 sm:-mx-8 sm:px-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-[85%] sm:min-w-[70%] h-[450px] snap-center relative overflow-hidden rounded-3xl flex-shrink-0 shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

              <div className="absolute top-5 left-5">
                <span className="bg-amber-500 text-black px-4 py-2 rounded-full text-xs font-semibold uppercase">
                  {project.category}
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-5">
                  <h3 className="text-white text-xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mt-2 text-sm">
                    📍 {project.location}
                  </p>

                  <button className="mt-4 text-amber-400 font-semibold">
                    View Project →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] overflow-hidden rounded-3xl shadow-xl cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              <div className="absolute top-6 left-6">
                <span className="bg-amber-500 text-black px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
                  <h3 className="text-white text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mt-2">
                    📍 {project.location}
                  </p>

                  <button className="mt-4 text-amber-400 font-semibold">
                    View Project →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 lg:mt-14">
          <button className="bg-black text-white px-10 py-4 rounded-2xl font-medium hover:bg-neutral-800 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Our;