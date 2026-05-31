import React from "react";
import { motion } from "framer-motion";

const ProjectSection = () => {
  return (
    <section className="w-full bg-[#f8f8f8] py-20 md:py-28 px-5 sm:px-8 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8 text-center lg:text-left"
        >
          <div className="space-y-5">
            <p className="uppercase tracking-[0.3em] text-xs sm:text-sm text-amber-600 font-semibold">
              AB Construction
            </p>

            <h2 className="text-[2.8rem] sm:text-[4.5rem] lg:text-[5.5rem] leading-[0.9] font-black uppercase text-gray-900">
              Let's Build
              <br />
              Your Dream
              <br />
              Home
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              From architectural planning and structural design to complete
              residential and commercial construction, we bring your vision to
              life with quality craftsmanship, modern techniques, and trusted
              execution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-black text-white px-8 sm:px-10 py-4 uppercase tracking-[0.15em] text-sm font-medium hover:bg-neutral-800 transition-all duration-300">
              Get Free Consultation
            </button>

            <button className="border border-gray-300 px-8 sm:px-10 py-4 uppercase tracking-[0.15em] text-sm font-medium hover:bg-gray-100 transition-all duration-300">
              View Projects
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-6 max-w-lg mx-auto lg:mx-0">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">100+</h3>
              <p className="text-sm text-gray-500">Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900">10+</h3>
              <p className="text-sm text-gray-500">Years</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900">50+</h3>
              <p className="text-sm text-gray-500">Families</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-[420px] sm:h-[550px] lg:h-[680px] w-full"
        >
          {/* Main Image */}
          <div className="absolute right-0 top-0 w-[78%] sm:w-[75%] h-[320px] sm:h-[450px] lg:h-[550px] overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/images/p1.jpg"
              alt="Luxury Home Construction"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Floating Image */}
          <div className="absolute left-0 bottom-0 w-[55%] sm:w-[50%] h-[200px] sm:h-[260px] lg:h-[320px] overflow-hidden rounded-2xl shadow-xl border-4 sm:border-8 border-[#f8f8f8]">
            <img
              src="/images/p2.jpg"
              alt="Construction Planning"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-28 h-28 border-2 border-amber-500/30 rounded-2xl -z-10"></div>

          <div className="absolute bottom-10 left-10 w-20 h-20 bg-amber-500/10 rounded-full -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;