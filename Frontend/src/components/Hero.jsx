import React from "react";

const Hero = () => {
  return (
    <section
      id="main"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/images/s1.jpeg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 -z-10"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navbar */}
        <nav className="flex justify-between items-center px-5 sm:px-8 md:px-12 lg:px-16 py-5 md:py-7">
          
          {/* Logo */}
          <div className="logo">
            <h1 className="text-white font-bold text-lg sm:text-2xl md:text-3xl tracking-tight sm:tracking-tighter cursor-pointer leading-tight">
              GANESHA CERAMICS
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:block">
            <ul className="flex gap-8 xl:gap-10 items-center text-white font-medium text-base xl:text-lg">
              <li className="cursor-pointer hover:text-gray-300 transition-colors">
                Home
              </li>

              <li className="cursor-pointer hover:text-gray-300 transition-colors">
                Marbles
              </li>

              <li className="cursor-pointer hover:text-gray-300 transition-colors">
                Sanitary
              </li>

              <li className="cursor-pointer hover:text-gray-300 transition-colors">
                About Us
              </li>

              <li className="cursor-pointer hover:text-gray-300 transition-colors">
                Contact
              </li>
            </ul>
          </div>

          {/* Shop Icon */}
          <div className="shop flex items-center cursor-pointer hover:scale-110 transition-transform">
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22.3596 8.27L22.0696 5.5C21.6496 2.48 20.2796 1.25 17.3497 1.25H6.58965C3.64965 1.25 2.28965 2.48 1.85965 5.53L1.58965 8.28C1.48965 9.35 1.77965 10.39 2.40965 11.2C3.16965 12.19 4.33965 12.75 5.63965 12.75C6.89965 12.75 8.10965 12.12 8.86965 11.11C9.54965 12.12 10.7097 12.75 11.9997 12.75C13.2896 12.75 14.4197 12.15 15.1096 11.15C15.8797 12.14 17.0696 12.75 18.3096 12.75C19.6396 12.75 20.8396 12.16 21.5896 11.12C22.1896 10.32 22.4597 9.31 22.3596 8.27Z"
                fill="white"
              />

              <path
                d="M11.3491 16.6602C10.0791 16.7902 9.11914 17.8702 9.11914 19.1502V21.8902C9.11914 22.1602 9.33914 22.3802 9.60914 22.3802H14.3791C14.6491 22.3802 14.8691 22.1602 14.8691 21.8902V19.5002C14.8791 17.4102 13.6491 16.4202 11.3491 16.6602Z"
                fill="white"
              />
            </svg>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex-1 flex items-center justify-center px-5 sm:px-8 md:px-12">
          <div className="max-w-6xl mx-auto text-center">
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[90px] font-bold text-white leading-tight">
              Premium{" "}
              <span className="italic font-serif">Marble</span> &
              <br />
              Modern Sanitary Solutions
            </h2>

            <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mt-5 md:mt-7 leading-relaxed opacity-90">
              Elevate your interiors with luxurious marble collections and
              premium sanitaryware crafted for modern homes, hotels, and
              commercial spaces.
            </p>

            <button className="mt-8 md:mt-10 px-7 sm:px-10 py-3 sm:py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all uppercase tracking-[0.2em] text-[10px] sm:text-xs">
              Explore Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;