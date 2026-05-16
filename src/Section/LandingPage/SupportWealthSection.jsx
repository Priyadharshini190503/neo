import mandala from "../../assets/HeroImage/mandala.gif";
import SectionZoom from "../../components/SectionZoom";

const rightData = [
  "Preserving long-term investments while addressing liquidity needs",
  "Supporting opportunities, transitions, or rebalancing decisions",
  "Introducing flexibility within complex wealth structures",
  "Aligning financing with long-term or multi-generational objectives",
];

const SupportWealthSection = () => {
  return (
    <section id="growth" className="w-full grid grid-cols-1 lg:grid-cols-2 snap-start">

      {/* LEFT DARK PANEL */}
      <div className="relative bg-gradient-to-b from-[#231A3D] to-black text-white px-14 py-24 overflow-hidden flex flex-col justify-center">

        <img
          src={mandala}
          className="absolute -top-24 -right-24 w-65 opacity-20 pointer-events-none"
          alt=""
        />

        <img
          src={mandala}
          className="absolute -bottom-24 -left-24 w-65 opacity-20 pointer-events-none rotate-180"
          alt=""
        />

        <h2 className="font-playfair md:text-[66px] text-[32px] leading-tight mb-6 max-w-xl font-instrument">
          We are Here to Support
          Your Long-Term Wealth
          Decisions
        </h2>

        <p className="text-[#AC8A3A] max-w-xl leading-5 font-montserrat md:text-[20px] text-base">
          At Arvesta, we engage with clients in situations where financing
          plays a supportive, well-defined role.
        </p>
      </div>

      {/* RIGHT LIGHT LIST PANEL — 4 SHADES */}
      <div className="flex flex-col">
        {rightData.map((text, i) => {
          const bgClasses = [
            "bg-[#FFECBC]",
            "bg-[#FFECBC]/60",
            "bg-[#FFECBC]/30",
            "bg-[#FFECBC]/15",
          ];

          return (
            <div
              key={i}
              className={`px-12 md:py-13 py-8 text-[#1c1b3a] text-[18px] md:text-[22px] font-montserrat border-b border-[#f0e1b9] ${bgClasses[i]}`}
            >
              {text}
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default SupportWealthSection;
