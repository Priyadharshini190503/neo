import { useState, useEffect } from "react";
import FinanceCard from "./FinanceCard";
import { LuArrowRight, LuArrowLeft } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import SectionZoom from "../../components/SectionZoom";
 
const cards = [
  
  // {
  //   title: "Wealth-Backed Financing",
  //   text:
  //     "Solutions structured against financial assets, with appropriate safeguards and ongoing monitoring.",
  // },
  {
    title: "ESOP Financing",
    text:
     "ESOP financing supports employees in  accessing ownership opportunities by  enabling funding for stock option exercise,  while preserving liquidity and aligning with  long-term wealth objectives.",
  },
  {
    title: "Lending Against Financial Assets",
    text:
      "Unlock the value of your investments with our Loan Against Securities. Access financing against shares, mutual funds, and bonds, designed with clarity, discipline, and appropriate safeguards.",
  },
];
 
// duplicate cards for seamless scroll
const duplicatedCards = [...cards, ...cards];
 
const CARD_WIDTH = 360 + 24; // card + gap
 
const FinancingSection = () => {
  const [index, setIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
 
  const next = () => {
    setIndex((prev) => prev + 1);
  };
 
  const prev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };
 
  // auto scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
 
    return () => clearInterval(interval);
  }, []);
 
  // silent reset to avoid jump
  useEffect(() => {
    if (index === cards.length) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(0);
      }, 500); // match transition duration
    } else {
      setEnableTransition(true);
    }
  }, [index]);
 
  return (
    <section
      id="finance"
      className="relative w-full bg-white py-5 md:py-24 overflow-hidden snap-start"
    >
      {/* glow */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#FFF7E3] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#FFF8E6] to-transparent" />
 
      <div className="w-full pl-10 lg:pl-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="font-instrument text-4xl md:text-[64px] leading-tight text-[#1c1b3a] mb-6">
            Financing Designed <br /> with Perspective
          </h2>
 
          <p className="text-gray-600 md:text-[20px] max-w-md mb-6 font-montserrat text-[16px]">
            Financing needs rarely arise in isolation. At Arvesta, we always
            design lending solutions with an understanding of the broader
            financial context and aligned with client goals.
          </p>
 
          <span className="flex items-center gap-1 md:text-[18px] text-[16px] text-[#AC8A3A] font-semibold font-montserrat underline mb-8 cursor-pointer">
            Discover Our Solutions <MdArrowOutward />
          </span>
 
          {/* arrows */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-[#AC8A3A] text-white"
            >
              <LuArrowLeft />
            </button>
 
            <button
              onClick={next}
              className="w-12 h-12 rounded-full flex items-center justify-center bg-[#AC8A3A] text-white"
            >
              <LuArrowRight />
            </button>
          </div>
        </div>
 
        {/* RIGHT SLIDER */}
        <div className="relative overflow-hidden h-[540px] w-full lg:w-[744px]">
          <div
            className={`flex gap-16 md:gap-6 ${
              enableTransition
                ? "transition-transform duration-500 ease-in-out"
                : ""
            }`}
            style={{
              transform: `translateX(-${index * CARD_WIDTH}px)`,
            }}
          >
            {duplicatedCards.map((card, i) => (
              <FinanceCard
                key={i}
                title={card.title}
                text={card.text}
                isActive={i === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
 
export default FinancingSection;