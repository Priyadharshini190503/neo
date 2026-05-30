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
 
const MOBILE_CARD_STEP = 280 + 24; // card + gap
const DESKTOP_CARD_STEP = 360 + 24; // card + gap
 
const FinancingSection = () => {
  const [index, setIndex] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const [cardStep, setCardStep] = useState(() =>
    typeof window !== "undefined" && window.innerWidth >= 768
      ? DESKTOP_CARD_STEP
      : MOBILE_CARD_STEP
  );
 
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

  useEffect(() => {
    const updateCardStep = () => {
      setCardStep(window.innerWidth >= 768 ? DESKTOP_CARD_STEP : MOBILE_CARD_STEP);
    };

    window.addEventListener("resize", updateCardStep);

    return () => window.removeEventListener("resize", updateCardStep);
  }, []);
 
  return (
    <section
      id="finance"
      className="relative w-full bg-white md:py-16 lg:py-24 overflow-hidden snap-start"
    >
      {/* glow */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#FFF7E3] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#FFF8E6] to-transparent" />
 
      <div className="relative z-10 grid w-full grid-cols-1 items-center md:gap-12 px-4 md:px-10 lg:grid-cols-2 lg:pl-20 lg:pr-0">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="font-instrument leading-tight text-4xl lg:text-[42px] xl:text-[64px] text-[#1c1b3a] mb-5 md:mt-0 mt-10">
  Financing Designed
  <br className="hidden lg:block" />
  {" "}with Perspective
</h2>
 
          <p className="text-gray-600  text-[12px] md:text-[12px] lg:text-[16px]  xl:text-[18px] leading-relaxed max-w-md mb-6 font-montserrat">
            Financing needs rarely arise in isolation. At Arvesta, we always
            design lending solutions with an understanding of the broader
            financial context and aligned with client goals.
          </p>
 
          <span className="flex items-center gap-1 md:text-[18px] text-[16px] text-[#AC8A3A] font-semibold font-montserrat underline mb-8 cursor-pointer">
            Discover Our Solutions <MdArrowOutward />
          </span>
 
          {/* arrows */}
          <div className="hidden gap-4 md:flex">
  {/* LEFT BUTTON */}
  <button
    type="button"
    onClick={prev}
    className={`
      w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300
      ${
        index === 0
          ? "bg-[#B88D2E4D] text-white"
          : "bg-[#AC8A38] text-white"
      }
    `}
  >
    <LuArrowLeft className="text-[24px]" />
  </button>

  {/* RIGHT BUTTON */}
  <button
    type="button"
    onClick={next}
    className="
     w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center
      bg-[#E9DFC1] text-white
      hover:bg-[#B89233]
      transition-all duration-300
    "
  >
    <LuArrowRight className="text-[24px]" />
  </button>
</div>
        </div>
 
        {/* RIGHT SLIDER */}
        <div className="relative mx-auto w-full max-w-[340px] md:max-w-none lg:w-[744px] md:mb-0 mb-20">
          <div className="pointer-events-none absolute inset-y-0 -left-4 -right-4 z-20 flex items-center justify-between md:hidden">
            <button
              type="button"
              onClick={prev}
              className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#AC8A38] text-white transition-all duration-300"
            >
              <LuArrowLeft className="text-lg md:text-[24px]" />
            </button>

            <button
              type="button"
              onClick={next}
              className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#AC8A38] text-white transition-all duration-300 hover:bg-[#B89233]"
            >
              <LuArrowRight className="text-lg md:text-[24px]" />
            </button>
          </div>

          <div className="mx-auto w-[280px] overflow-hidden md:w-full">
          <div
            className={`flex gap-6 ${
              enableTransition
                ? "transition-transform duration-500 ease-in-out"
                : ""
            }`}
            style={{
              transform: `translateX(-${index * cardStep}px)`,
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
      </div>
    </section>
  );
};
 
export default FinancingSection;
