import mandala from "../../assets/HeroImage/mandala.gif";

const FinanceCard = ({ title, text, isActive }) => {
  return (
    <div
      className={`relative h-[380px] min-w-[280px] overflow-hidden rounded-2xl px-7 py-9 shadow-xl md:h-[460px] md:min-w-[360px] md:px-10 md:py-12
      flex flex-col justify-center transition-all duration-500
      ${
        isActive
          ? "bg-gradient-to-b from-[#231A3D] to-black text-white scale-100 opacity-100"
          : "bg-white border border-[#d6b36a] text-[#1c1b3a] opacity-30 "
      }`}
    >
      <img
        src={mandala}
        alt="Mandala"
        className="pointer-events-none absolute -right-10 -top-10 w-44 opacity-15 md:-right-12 md:-top-12 md:w-56"
      />

      <h3 className="relative z-10 mb-5 font-instrument md:mb-6 leading-tight text-4xl lg:text-[42px] xl:text-[46px]">
        {title === "ESOP Financing" ? (
    <>
      ESOP <br /> Financing
    </>
  ) : (
    title
  )}
      </h3>

      <p className="relative z-10 max-w-sm font-montserrat text-[12px] leading-relaxed md:text-[12px] lg:text-[16px] xl:text-[18px]">
        {text}
      </p>
    </div>
  );
};

export default FinanceCard;
