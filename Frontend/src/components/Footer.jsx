import React from "react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#050505] to-black text-white px-5 sm:px-8 md:px-16 lg:px-20 py-16 md:py-24 border-t border-white/10 overflow-hidden">
      
      {/* Top Heading */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 pb-14 md:pb-20 border-b border-white/10">
        
        <div className="w-full">
          <p className="uppercase tracking-[0.25em] sm:tracking-[0.4em] text-[10px] sm:text-sm text-gray-500 mb-4">
            Luxury Marble & Sanitary
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl">
            Crafting Elegant
            <span className="italic font-serif text-gray-300"> Spaces </span>
            With Premium Marble.
          </h2>
        </div>

        <button className="border border-white/20 px-6 sm:px-8 py-3 sm:py-4 uppercase tracking-[0.15em] sm:tracking-[0.25em] text-xs sm:text-sm hover:bg-white hover:text-black transition-all duration-500 rounded-full whitespace-nowrap">
          Explore Collection
        </button>
      </div>

      {/* Footer Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-14 md:gap-20 pt-14 md:pt-20 items-start">
        
        {/* About */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8 leading-tight">
            GANESHA CERAMICS LLP
          </h1>

          <p className="text-gray-400 leading-7 sm:leading-9 text-sm sm:text-base max-w-lg">
            Bringing timeless marble elegance and premium sanitary solutions
            for modern homes, luxury hotels, and commercial spaces.
            Crafted with quality, precision, and sophisticated design.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 sm:gap-5 mt-10 md:mt-12">
            
            <div className="border border-white/10 rounded-full p-3 sm:p-4 backdrop-blur-sm bg-white/5 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
              <FaInstagram size={18} />
            </div>

            <div className="border border-white/10 rounded-full p-3 sm:p-4 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
              <FaLinkedinIn size={18} />
            </div>

            <div className="border border-white/10 rounded-full p-3 sm:p-4 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
              <FaYoutube size={18} />
            </div>
          </div>

          {/* Policies */}
          <div className="mt-10 md:mt-12 space-y-3 sm:space-y-4 text-xs sm:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-500">
            <p className="cursor-pointer hover:text-white transition-colors">
              Terms & Conditions
            </p>

            <p className="cursor-pointer hover:text-white transition-colors">
              Privacy Policy
            </p>
          </div>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-6 md:mb-8">
            Our Showroom
          </h3>

          <div className="space-y-4 sm:space-y-5 text-gray-400 leading-7 sm:leading-8 text-sm sm:text-lg">
            <p>
              CCV7+G6H Ganesha Ceramic LLP <br />
              Chuttu, Jharkhand 835217
            </p>

            <p>+91 8866933777</p>

            <p className="break-all">
              ganeshashowroom1@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 mt-16 md:mt-24 pt-8 md:pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-xs sm:text-sm text-center md:text-left">
        
        <p>© 2026 MarbleX. All rights reserved.</p>

        <div className="flex flex-wrap justify-center gap-5 sm:gap-8 uppercase tracking-[0.1em] sm:tracking-[0.15em]">
          <p className="cursor-pointer hover:text-white transition-colors">
            Instagram
          </p>

          <p className="cursor-pointer hover:text-white transition-colors">
            LinkedIn
          </p>

          <p className="cursor-pointer hover:text-white transition-colors">
            YouTube
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;