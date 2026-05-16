import aboutHero from "../../assets/About/about-hero.jpg";

const AboutHeroSection = () => {
  return (
    <section className="bg-[#050814] pt-6 pb-8 h-screen" >
      {/* Title */} 
      <div className="max-w-7xl mx-auto px-10 mb-6">
        <h1 className="font-instrument text-white text-7xl">
          About Us
        </h1>
      </div>

      {/* Image */}
      <div className="max-w-7xl mx-auto px-6">
        <img
          src={aboutHero}
          alt="About Hero"
          className="w-full object-cover rounded-sm"
        />
      </div>
    </section>
  );
};

export default AboutHeroSection;
