import img1 from "../../assets/HeroImage/about-image2.png";
import mandala from "../../assets/HeroImage/mandala.gif";
const Arvestadesign = () => {
  return (
    <section className="w-full bg-[linear-gradient(to_bottom,#000000_0%,#231A3D_50%,#000000_100%)] py-16 md:py-18 overflow-hidden">
      
      {/* Reduced gap & shifted grid left */}
      <div className="max-w-7xl mx-auto xl:max-w-full grid grid-cols-1 md:grid-cols-2 items-center px-6 md:px-8 xl:px-0 lg:gap-5 xl:gap-0 md:gap-3 ">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">
  <img
    src={img1}
    alt="Growth"
    className="w-full max-w-md lg:max-w-lg h-auto object-cover mb-10 md:mb-0"
  />
</div>


        {/* RIGHT CONTENT */}
        <div className="relative text-left">

          {/* Mandala */}
          <img
            src={mandala}
            alt=""
            className="absolute -right-50 md:-right-48 lg:-right-60 top-1/2 md:-translate-y-1/2 translate-y-5 w-[420px] opacity-20 pointer-events-none"
          />

          {/* Increased text width */}
          <div className="max-w-2xl">
            <h2 className="font-instrument leading-tight text-4xl lg:text-[42px] xl:text-[64px] text-[#AC8A3A] mb-5 relative z-10">
              Arvesta – Designed for Your Long-Term Growth
            </h2>

            <p className="font-montserrat text-[#FFECBC] text-[12px] md:text-[12px] lg:text-[16px] xl:text-[18px] leading-relaxed relative z-10">
              Derived from the word Arvesta, symbolising growth, trust, and
              principled governance, our identity reflects what we stand for:
              a place where credit is nurtured responsibly, decisions are
              data-driven, and long-term outcomes matter more than short-term
              cycles.
            </p>
            <p className=" mt-6 font-montserrat text-[#FFECBC] text-[12px] md:text-[12px] lg:text-[16px]  xl:text-[18px] leading-relaxed relative z-10">
              We facilitate immediate liquidity for clients by leveraging their existing financial portfolios. Arvesta provides credit solutions against a diverse range of financial instruments, allowing clients to meet short-term capital needs or strategic investment requirements without liquidating their long-term holdings.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};


export default Arvestadesign;
