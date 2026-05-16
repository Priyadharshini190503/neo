import aboutImg from "../../assets/HeroImage/about-image1.png";
import mandala from "../../assets/HeroImage/mandala.gif";
import SectionZoom from "../../components/SectionZoom";

const AboutSection = () => {
  return (
    <section id="about" className="w-full bg-white py-10 md:py-24 relative overflow-hidden">

      {/* Mandala Right Background */}
      <img
        src={mandala}
        alt="Mandala"
        className="absolute -right-52 top-1/2 translate-y-34 md:-translate-y-1/2 w-[420px] opacity-20 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-[1fr_auto_2fr] gap-6 items-center relative z-10">

        {/* LEFT — IMAGE (1/3) */}
        <div className="w-full h-full">
          <img
            src={aboutImg}
            alt="About"
            className="w-full h-full object-cover "
          />
        </div>

        {/* CENTER LINE */}
        <div className="hidden lg:block w-px bg-gray-300"></div>

        {/* RIGHT — TEXT (2/3) */}
        <div className="md:px-8">
          <p className="font-montserrat text-[#000614] leading-relaxed text-base md:text-[20px]">
            Arvesta is a Non-Banking Financial Company (NBFC) established under
            the umbrella of the Neo Wealth & Asset Management Group, one of
            India’s most respected financial institutions. While we are backed
            by the Group’s legacy of trust and excellence, Arvesta operates as
            an independent entity with a distinct mission – to empower clients
            through responsible and customized financing solutions.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
