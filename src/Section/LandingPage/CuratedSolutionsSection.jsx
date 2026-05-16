import bgImg from "../../assets/HeroImage/chess-bg.png";
import bottomBorder from "../../assets/HeroImage/bottom-border.png";
import { MdArrowOutward } from "react-icons/md";
import cardBg from "../../assets/HeroImage/mandala.gif";
import { useEffect, useState } from "react";
import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import bgImgMobile from "../../assets/About/chess-bg-mobile.png";
import bottomBorder1 from "../../assets/About/bottom.png"

const cardData = [
  { title: "Disciplined credit\nevaluation" },
  { title: "Bespoke structuring\naligned to client objectives" },
  { title: "Ongoing monitoring\nand governance" },
];

const CuratedSolutionsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // AUTO SLIDE (UNCHANGED)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === cardData.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="curated"
        className="relative w-full overflow-hidden
        bg-gradient-to-b from-white via-[#fff9ef] to-[#F0E8D7]"
      >
        <div className="px-8 py-8">
          {/* IMAGE AREA */}
          {/* IMAGE AREA */}
<div className="relative w-full h-full md:h-[620px]">

  {/* DESKTOP IMAGE */}
  <img
    src={bgImg}
    alt="Financing Strategy"
    className="absolute inset-0 w-full h-full object-cover hidden md:block"
  />

  {/* MOBILE IMAGE (height auto) */}
  <img
    src={bgImgMobile}
    alt="Financing Strategy Mobile"
    className="relative w-full object-cover md:hidden"
  />

  {/* OVERLAY – only where image exists */}
  <div className="absolute inset-0 xl:block hidden bg-black/55"></div>

  {/* CONTENT */}
  <div
    className="absolute inset-0 z-10 max-w-7xl mx-auto px-6 md:px-10
    flex flex-col justify-end pb-16 md:pb-30"
  >
    <h2 className="font-instrument text-4xl lg:text-7xl text-white mb-4">
      Thoughtfully Curated Financing Solutions 
    </h2>

    <p className="text-white max-w-3xl leading-6 font-montserrat
      md:text-[20px] text-[16px]">
      Arvesta provides a focused range of lending and financial solutions. Our role is not transactional. We focus on clarity, suitability, and long-term client alignment. 
    </p>
  </div>
</div>


          {/* CARD SECTION */}
          <div className="relative -mt-10 z-20">
            <div className="max-w-7xl mx-auto px-10">

              {/* 🔹 MOBILE CAROUSEL */}
              <div className="block md:hidden relative">

  {/* LEFT ARROW — OUTSIDE */}
  <button
    onClick={() =>
      setCurrentIndex(
        currentIndex === 0 ? cardData.length - 1 : currentIndex - 1
      )
    }
    className="absolute -left-10 top-1/2 -translate-y-1/2 z-30
    bg-[#AC8A38] border border-[#d6b36a]
    rounded-full p-2 shadow-md"
  >
    <LuArrowLeft className="text-white text-lg" />
  </button>

  {/* CARD WRAPPER (keeps clipping) */}
  <div className="overflow-hidden">
    <div
      key={currentIndex}
      className="max-w-md mx-auto relative bg-white rounded-2xl
      border border-[#d6b36a] shadow-lg h-[260px]
      flex items-center justify-center text-center
      animate-slide"
    >
      <img
        src={cardBg}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-76 opacity-20"
        alt=""
      />
      <h4 className="font-instrument text-2xl text-[#1c1b3a]
      relative z-10 px-6 whitespace-pre-line">
        {cardData[currentIndex].title}
      </h4>
    </div>
  </div>

  {/* RIGHT ARROW — OUTSIDE */}
  <button
    onClick={() =>
      setCurrentIndex((currentIndex + 1) % cardData.length)
    }
    className="absolute -right-10 top-1/2 -translate-y-1/2 z-30
    bg-[#AC8A38] border border-[#d6b36a]
    rounded-full p-2 shadow-md"
  >
    <LuArrowRight className="text-white text-lg" />
  </button>

</div>


              {/* ✅ DESKTOP GRID (UNCHANGED) */}
              <div className="hidden md:grid grid-cols-3 gap-8">
                {cardData.map((card, index) => (
                  <div
                    key={index}
                    className="relative bg-white rounded-2xl
                    border border-[#d6b36a] shadow-lg h-[260px]
                    flex items-center justify-center text-center overflow-hidden"
                  >
                    <img
                      src={cardBg}
                      className="absolute -top-40 left-1/2 -translate-x-1/2 w-76 opacity-20"
                      alt=""
                    />
                    <h4 className="font-instrument text-2xl lg:text-3xl
                    text-[#1c1b3a] relative z-10 px-6 whitespace-pre-line">
                      {card.title}
                    </h4>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="w-full px-4 mt-16 md:max-w-7xl md:mx-auto md:px-10 md:pb-24 relative z-20">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=NeoNBFC@neo-group.in&su=Business%20Enquiry&body=Hello%20Team,%0A%0AI%20would%20like%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="font-instrument w-full bg-[#AC8A3A] text-white
              py-5 rounded-lg flex items-center justify-between
              px-6 md:px-8 text-2xl md:text-[40px] font-medium
              shadow-md hover:bg-[#AC8A3A] transition">
                Reach Out To Us
                <MdArrowOutward className="text-3xl" />
              </button>
            </a>
          </div>

          {/* Mobile Image */}
<img
  src={bottomBorder1} // import your mobile version
  alt="Decorative Border Mobile"
  className="absolute bottom-0 left-0 w-full md:hidden h-auto"
/>

{/* Desktop Image */}
<img
  src={bottomBorder} // import your desktop version
  alt="Decorative Border Desktop"
  className="absolute bottom-0 left-0 w-full hidden md:block h-auto"
/>

        </div>
      </section>
    </>
  );
};

export default CuratedSolutionsSection;
