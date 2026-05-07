import React from "react";
import { motion } from "framer-motion";

const ProjectSection = () => {
  return (
    <section className="w-full bg-[#f5f5f3] py-16 md:py-24 px-5 sm:px-8 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="space-y-5">
            <p className="uppercase tracking-[0.25em] text-xs sm:text-sm text-gray-500 font-medium">
              Premium Marble & Sanitary
            </p>

            <h2 className="text-[2.5rem] sm:text-[4rem] lg:text-[5rem] leading-[0.9] font-black uppercase text-black">
              Have A <br />
              Project <br />
              In Mind?
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              From luxurious marble collections to premium sanitary solutions,
              we bring elegance, durability, and craftsmanship together for
              homes, villas, hotels, and commercial spaces.
            </p>
          </div>

          <button className="bg-black text-white px-8 sm:px-10 py-3 sm:py-4 uppercase tracking-[0.2em] text-xs sm:text-sm hover:bg-neutral-800 transition-all duration-300">
            Let’s Discuss
          </button>
        </motion.div>

        {/* RIGHT IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[420px] sm:h-[520px] lg:h-[650px] w-full"
        >
          {/* Main Image */}
          <div className="absolute right-0 top-0 w-[78%] sm:w-[72%] h-[300px] sm:h-[420px] lg:h-[520px] overflow-hidden shadow-2xl rounded-sm">
            <img
              src="/images/p1.jpeg"
              alt="Marble Design"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Small Floating Image */}
          <div className="absolute left-0 bottom-0 w-[55%] sm:w-[48%] h-[180px] sm:h-[240px] lg:h-[280px] overflow-hidden shadow-xl border-4 sm:border-8 border-[#f5f5f3] rounded-sm">
            <img
              src="/images/p2.jpeg"
              alt="Architect Planning"
              className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
            />
          </div>

          {/* Decorative Borders */}
          <div className="absolute top-8 sm:top-12 -right-4 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 border border-gray-300 -z-10"></div>

          <div className="absolute bottom-6 left-8 sm:left-12 w-16 sm:w-24 h-16 sm:h-24 border border-gray-300 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;