import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/bgh.jpg"
        alt="AB Construction"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black/95 via-black/75 to-black/40" />

      {/* Decorative Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-400/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto min-h-screen px-6 sm:px-8 lg:px-12 flex flex-col">
        
        {/* Logo */}
        <div className="pt-8 md:pt-10">
          <h1 className="text-white text-xl sm:text-2xl font-bold tracking-[0.2em]">
            AB CONSTRUCTION
          </h1>
        </div>

        {/* Hero Content */}
        <div className="flex-1 flex flex-col justify-center lg:justify-center">
          
          {/* Tag */}
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <div className="w-10 h-[2px] bg-amber-400"></div>
            <span className="uppercase tracking-[0.25em] text-amber-400 text-[11px] sm:text-xs font-medium">
              Premium Home Builders
            </span>
          </div>

          {/* Heading */}
          <div className="text-center lg:text-left">
            <h2 className="font-bold leading-[0.9] text-white">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                Your Dream
              </span>

              <span className="block text-amber-300 italic font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-1">
                Home
              </span>

              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-1">
                Our Promise
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We build exceptional homes that combine quality craftsmanship,
              innovative design, and lasting value. From planning to handover,
              your vision becomes our commitment.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-amber-400 hover:bg-amber-300 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
                Get Free Consultation
              </button>

              <button className="border border-white/20 backdrop-blur-md bg-white/5 text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                View Projects
              </button>
            </div>
          </div>

          {/* Mobile & Tablet Stats */}
          <div className="grid grid-cols-3 gap-3 mt-10 lg:hidden">
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center">
              <h3 className="text-white text-xl font-bold">100+</h3>
              <p className="text-gray-400 text-xs mt-1">Projects</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center">
              <h3 className="text-white text-xl font-bold">10+</h3>
              <p className="text-gray-400 text-xs mt-1">Years</p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-4 text-center">
              <h3 className="text-white text-xl font-bold">50+</h3>
              <p className="text-gray-400 text-xs mt-1">Families</p>
            </div>
          </div>
        </div>

        {/* Desktop Floating Stats Card */}
        <div className="hidden lg:block absolute bottom-12 right-12">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
            <div className="grid grid-cols-3 gap-8 text-white">
              <div>
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="text-sm text-gray-300 mt-1">
                  Projects Completed
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-sm text-gray-300 mt-1">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">50+</h3>
                <p className="text-sm text-gray-300 mt-1">
                  Happy Families
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;