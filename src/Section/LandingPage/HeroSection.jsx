import React from "react";
import heroBg from "../../assets/HeroImage/hero-bg.png";
// import SectionZoom from "../../components/SectionZoom";

const HeroSection = () => {
  return (
    <section id="hero" className="w-full bg-[#000614] md:h-screen flex items-center h-[560px] ">
      {/* ===== HERO FRAME ===== */}
      <div className="relative flex h-full md:h-screen pl-0 md:pl-0 w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10"></div>

        {/* LEFT IMAGE AREA */}
        <div className="relative w-full xl:pl-15 lg:pl-10 h-full pb-5 lg:pb-15">
          {/* Bottom fade / cutoff */}
<div className="absolute bottom-0 left-0 w-full h-10 md:h-20 lg:h-30 bg-gradient-to-t from-[#000614] via-[#070C18] to-transparent"></div>

          <img
            src={heroBg}
            alt="Hero"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10"></div>

          {/* TEXT */}
          <div className="absolute inset-0 flex items-end pb-20 md:pb-20 xl:pb-28 max-w-7xl">
            <div className="px-8 md:px-14 md:pl-30 text-white ">

              <h1
                className="
                  
                  font-instrument
                  font-normal
                  text-[42px] sm:text-[44px] md:text-[64px] lg:text-[80px]
                  leading-[1.1] lg:leading-[1.05]
                  tracking-[-0.01em]
                  mb-3 md:mb-8 
                  text-white
                "
              >
                Bespoke Financing <br />
                for Long-Term Growth
              </h1>

              <p
                className="
                  max-w-5xl
                  font-montserrat
                  font-normal
                  text-[16px] sm:text-[22px] md:text-[20px] lg:text-[25px]
                  leading-[1.3]
                  tracking-normal
                  text-white
                "
              >
                Designed for individuals, families, and institutions <br className="md:block hidden" />
                where capital, complexity, and responsibility converge. 
              </p>

            </div>
          </div>
        </div>

        {/* RIGHT BORDER STRIP — DESKTOP ONLY */}
        <div className="hidden md:flex w-[4%] h-full flex-col">
          {/* Top Black */}
          <div className="h-1/2 bg-gradient-to-b from-[#050308] via-[#231A3D] to-[#231A3D]"></div>

          {/* Bottom Purple */}
          <div className="h-1/2 bg-[#000614]"></div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
