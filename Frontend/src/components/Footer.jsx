import React from "react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#050505] to-black text-white px-5 sm:px-8 md:px-16 lg:px-20 py-16 md:py-24 border-t border-white/10 overflow-hidden">
      
      {/* Footer Content */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-14 md:gap-20 items-start">
        
        {/* About */}
        <div>
          {/* Company Logo + Name */}
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-amber-500 flex items-center justify-center shadow-lg flex-shrink-0">
              <span className="text-black text-2xl font-black">AB</span>
            </div>

            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                AB CONSTRUCTION
              </h1>

              <p className="text-gray-500 uppercase tracking-[0.25em] text-xs sm:text-sm mt-1">
                Building Dreams Since 2015
              </p>
            </div>
          </div>

          <p className="text-gray-400 leading-7 sm:leading-9 text-sm sm:text-base max-w-lg">
            AB Construction specializes in residential homes, commercial
            buildings, interior works, architectural planning, and turnkey
            construction solutions. We are committed to delivering quality
            craftsmanship, innovative designs, and projects that stand the
            test of time.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 sm:gap-5 mt-10 md:mt-12">
            <a
              href="#"
              className="border border-white/10 rounded-full p-3 sm:p-4 backdrop-blur-sm bg-white/5 hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="border border-white/10 rounded-full p-3 sm:p-4 hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href="#"
              className="border border-white/10 rounded-full p-3 sm:p-4 hover:bg-white hover:text-black transition-all duration-300"
            >
              <FaYoutube size={18} />
            </a>
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

        {/* Contact */}
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-8">
            Let's Build Together
          </h3>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
            
            {/* Consultation */}
            <div className="mb-8">
              <p className="text-amber-500 text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
                Free Consultation
              </p>

              <h4 className="text-white text-lg sm:text-xl font-bold">
                Address
              </h4>

              <p className="text-gray-400 mt-2">
                123 Main Street, Raxxx, Jharkxxx, India - 834001
              </p>
            </div>

            {/* Phone */}
            <div className="mb-8">
              <p className="text-amber-500 text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
                Call Us
              </p>

              <h4 className="text-white text-xl sm:text-2xl font-bold">
                +91 XXXXXXXXXX
              </h4>
            </div>

            {/* Email */}
            <div>
              <p className="text-amber-500 text-xs uppercase tracking-[0.2em] mb-2 font-semibold">
                Email Us
              </p>

              <h4 className="text-white text-lg sm:text-xl font-bold break-all">
                info@abconstruction.com
              </h4>
            </div>
          </div>

          {/* CTA Button */}
          <button className="mt-6 w-full bg-amber-500 text-black font-bold py-4 rounded-2xl hover:bg-amber-400 transition-all duration-300">
            Get Free Consultation
          </button>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10 mt-16 md:mt-24 pt-8 md:pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-xs sm:text-sm text-center md:text-left">
        <p>© 2026 AB Construction. All rights reserved.</p>

        <p>
          Designed & Developed with ❤️ by Osiz Technologies Pvt. Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;