import card1 from "../../assets/About/card1.png";
import card2 from "../../assets/About/card3.png";
import card3 from "../../assets/About/card2.png";

const cards = [
  {
    id: 1,
    img: card1,
    title: "Unbiased Advice",
    desc: `Client outcomes are our highest priority. Our recommendations are
    based solely on the suitability and relevance of solutions to our clients’
    unique requirements.`,
    highlight: false,
  },
  {
    id: 2,
    img: card2,
    title: "Transparency",
    desc: `We strive to demystify the complex and opaque world of financial
    services, providing clarity and transparency of transactions, operating
    mechanisms, and costs.`,
    highlight: false,
  },
  {
    id: 3,
    img: card3,
    title: "Cost-Efficiency",
    desc: `We are focused on enhancing client portfolio performance by
    maximizing returns and minimizing fees.`,
    highlight: true,
  },
];

const AboutIntroSection = () => {
  return (
    <section className="bg-white py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="font-instrument text-7xl text-[#1c1b3a] mb-6">
          A Focused Institution for <br />
          Long-Term Wealth Decisions
        </h2>

        {/* Description */}
        <p className="max-w-6xl mx-auto text-gray-600 text-2xl mb-14">
          Arvesta is a Non-Banking Financial Company (NBFC) established under the
          umbrella of the Neo Wealth & Asset Management Group, one of India’s most
          respected financial institutions. While we are backed by the Group’s
          legacy of trust and excellence, Arvesta operates as an independent
          entity with a distinct mission – to empower clients through
          responsible and customized financing solutions.
        </p>

        {/* Cards */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
  {cards.map((card) => (
    <div
      key={card.id}
      className={`rounded-2xl overflow-hidden border transition
        ${
          card.highlight
            ? "bg-[#FFF2D5] border-[#2727461A]"
            : "bg-[#F8F4EC] border-[#e6c98a]"
        }`}
    >
      {/* Image */}
      <div className="relative">
  <img
    src={card.img}
    alt={card.title}
    className="w-full h-56 object-cover"
  />

  {/* Bottom color overlay */}
  <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F8F4EC] to-transparent" />
</div>

      {/* Content */}
      <div className="px-6 py-8">
        <h3 className="font-instrument text-4xl mb-3 text-[#1c1b3a]">
          {card.title}
        </h3>

        <p className="text-md text-left text-black font-montserrat leading-relaxed">
          {card.desc}
        </p>
      </div>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default AboutIntroSection;
