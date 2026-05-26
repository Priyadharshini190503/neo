import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import investorImg from "../../assets/investor.png";
import bottomBorder from "../../assets/HeroImage/bottom-border.png";
import bottomBorderMobile from "../../assets/About/bottom.png";
import { IoChevronDown } from "react-icons/io5";
import fairPracticePdf from "../../public/AFSPL- Fair Practice Code.pdf";
import interestRatePdf from "../../public/AFSPL- Interest Rate Policy.pdf";
import ombudsmanPdf from "../../public/AFSPL- Ombudsman Scheme.pdf";
import riskManagementPdf from "../../public/AFSPL- Risk Management 1.pdf";
import kycPdf from "../../public/kyc.pdf";
import grievancePdf from "../../public/grievance.pdf";


const tabs = ["Financial Reporting", "Policies", "Interest Rate", "Contact for Investors"];

const policies = [
  { label: "Risk Management Policy", href: riskManagementPdf },
  { label: "Ombudsman Scheme", href: ombudsmanPdf },
  { label: "KYC & AML Policy", href: kycPdf },
  { label: "Interest Rate Policy", href: interestRatePdf },
  { label: "Fair Practices Code", href: fairPracticePdf },
];

const getPdfViewUrl = (href) => `${href}#toolbar=0&navpanes=0`;

const contacts = [
  "Registered Office and Corporate Office",
  "Details of Company Secretary/Compliance Officer/Investor Grievance Officer",
  "Details of Nodal Officer / Customer Grievances Redressal",
  "Smart ODR Portal",
];

const MobileBottomBorder = () => (
  <img
    src={bottomBorderMobile}
    alt=""
    className="absolute bottom-0 left-0 h-auto w-full md:hidden"
  />
);

const DesktopBottomBorder = () => (
  <img
    src={bottomBorder}
    alt=""
    className="absolute bottom-0 left-0 hidden h-auto w-full md:block"
  />
);
const financialYears = [];

for (let year = 2026; year >= 800; year--) {
  financialYears.push(`${year}-${year + 1}`);
}

const PolicyGrid = () => (
  <div className="grid gap-x-16 gap-y-6 md:grid-cols-2 xl:grid-cols-3 bg-[#FFFFFF]">
    {policies.map((policy, index) => (
      <a
        href={getPdfViewUrl(policy.href)}
        key={`${policy.label}-${index}`}
        target="_blank"
        rel="noreferrer"
        className="group border-b border-dashed border-[#AC8A3A]/50 pb-10"
      >
        <p className="mb-4 font-montserrat text-[18px] text-[#8D8D8D] md:text-xl">
          May 2026
        </p>

        <div className="flex items-start justify-between gap-2">
          <h3 className="max-w-[520px] font-montserrat text-[20px] font-semibold leading-snug text-[#AC8A3A] underline decoration-[#AC8A3A] underline-offset-4 md:text-xl">
            {policy.label}
          </h3>
          <MdArrowOutward className="mt-1 shrink-0 text-xl text-[#AC8A3A] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </a>
    ))}
  </div>
);

const FinancialYearDropdown = () => {
  const [selectedYear, setSelectedYear] = useState(financialYears[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block w-full max-w-[220px]">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="
          flex h-12 w-full items-center justify-between
          border border-black
          bg-white
          pl-4 pr-3
          font-montserrat
          text-[16px] text-[#231A3D]
          outline-none

          md:h-12
          md:pl-5
          md:pr-5
          md:text-[18px]

          lg:text-[20px]
        "
      >
        {selectedYear}
        <IoChevronDown className="text-[18px] text-[#231A3D] md:text-[24px]" />
      </button>

      {isOpen && (
        <div className="z-50 max-h-[210px] w-full overflow-y-auto border border-t-0 border-black bg-white pb-3 md:absolute md:left-0 md:top-full md:max-h-[260px] md:pb-0">
          {financialYears.map((year) => (
            <button
              key={year}
              type="button"
              onClick={() => {
                setSelectedYear(year);
                setIsOpen(false);
              }}
              className={`block h-9 w-full px-4 text-left font-montserrat text-[16px] text-[#231A3D] hover:bg-[#F3EFE5] md:px-5 md:text-[18px] lg:text-[20px] ${
                selectedYear === year ? "bg-[#2567D8] text-white hover:bg-[#2567D8]" : ""
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const interestRateCardClass =
  "rounded-[20px] border border-transparent px-8 md:px-24";

const gradientBorderStyle = {
  background:
    "linear-gradient(#FFFFFF, #FFFFFF) padding-box, linear-gradient(90deg, #AC8A3A 0%, #D9C381 18%, #F4EBCD 50%, #D9C381 82%, #AC8A3A 100%) border-box",
};

const InterestRate = () => (
  <div className="mx-auto max-w-[1620px] bg-[#FFFFFF] p-8">
    <div className="flex flex-col">
      
      {/* Box 1: Top Card */}
      <div 
        className={`relative z-30 py-8 ${interestRateCardClass}`}
        style={{
          ...gradientBorderStyle,
          boxShadow: '0 12px 24px -10px rgba(0,0,0,0.08), -10px 10px 20px -10px rgba(0,0,0,0.04), 10px 10px 20px -10px rgba(0,0,0,0.04)'
        }}
      >
        <h3 className="font-instrument text-[24px] leading-tight text-[#2B2D2F] md:text-[28px] lg:text-[34px] xl:text-[42px]">
          Interest Charged:{" "}
          <span className="text-[#AC8A3A] font-light">15% PLR effective April 1, 2026.</span>
        </h3>
        <p className="mt-4 max-w-[1500px] font-montserrat text-[17px] leading-relaxed text-[#1c1b3a] md:text-[15px] opacity-90">
          The interest rates we offer to customers are linked to the Arvesta
          Financial Services Prime Lending Rate, which reflects our cost of
          raising funds from the capital markets. For the specific interest rates
          charged by the Company, please refer to the Interest Rate Policy
          available on the Company&apos;s website{" "}
          <span className="text-[#AC8A3A] inline-flex items-center gap-1 cursor-pointer hover:underline">
            (https://www.arvesta.in/). <span className="text-[12px]">↗</span>
          </span>
        </p>
      </div>

      {/* Box 2: Middle Card */}
      <div 
        className={`relative z-20 -mt-[16px] pb-8 pt-12 ${interestRateCardClass}`}
        style={{
          ...gradientBorderStyle,
          boxShadow: '0 14px 28px -10px rgba(0,0,0,0.09), -12px 12px 24px -12px rgba(0,0,0,0.05), 12px 12px 24px -12px rgba(0,0,0,0.05)'
        }}
      >
        <h3 className="font-instrument text-[24px] leading-tight text-[#2B2D2F] md:text-[28px] lg:text-[34px] xl:text-[42px]">
          Penal charges:
        </h3>
        <p className="mt-3 max-w-[1500px] font-montserrat text-[17px] leading-relaxed text-[#1c1b3a] md:text-[15px] opacity-90">
          Any penalty charged shall be classified as &apos;penal charges.&apos;
          There will be no capitalization of penal/default charges. These charges
          are applied over and above the rate of interest and shall not impact the
          standard procedures for the compounding of interest in the loan account.
          Both the quantum and the reason for penal charges will be clearly
          disclosed in the financing documents, loan agreement, and Key Fact
          Statement (KFS), if applicable. Whenever a reminder regarding non-compliance 
          with the material terms and conditions of the loan is issued to Borrowers, the 
          applicable penal charges and the underlying reason shall be communicated.
        </p>
      </div>

      {/* Box 3: Bottom Card */}
      <div 
        className={`relative z-10 -mt-[16px] pb-8 pt-12 ${interestRateCardClass}`}
        style={{
          ...gradientBorderStyle,
          boxShadow: '0 18px 36px -10px rgba(0,0,0,0.12), -15px 15px 28px -12px rgba(0,0,0,0.06), 15px 15px 28px -12px rgba(0,0,0,0.06)'
        }}
      >
        <h3 className="font-instrument text-[24px] leading-tight text-[#2B2D2F] md:text-[28px] lg:text-[34px] xl:text-[42px]">
          Penal Default Charges:
        </h3>
        <p className="mt-3 max-w-[1500px] font-montserrat text-[17px] leading-relaxed text-[#1c1b3a] md:text-[15px] opacity-90">
          Rs. 1000+ gst (as appliacable) Penal Charges shall apply to the client.
          Interest on Unpaid Interest will be applicable in accordance with the
          Sanction Terms. Arvesta Financial Services Limited reserves the right to
          exercise the option to Recall the loan upon a breach of the material
          T&amp;C of the Sanction Terms.
        </p>
      </div>

    </div>
  </div>
);
const ContactGrid = () => (
  <div className="grid gap-x-24 gap-y-12 md:grid-cols-2 bg-[#FFFFFF]">
    {contacts.map((contact) => (
      <a
        key={contact}
        href={getPdfViewUrl(grievancePdf)}
        target="_blank"
        rel="noreferrer"
        className="group border-b border-dotted border-[#000000] pb-10 md:pb-24"
      >
        <h3 className="font-instrument text-[24px] leading-tight text-[#2B2D2F] md:text-[30px] lg:text-[34px] xl:text-[42px]">
          {contact}
        </h3>
      </a>
    ))}
  </div>
);

const FinancialReporting = () => (
  <div className="relative md:min-h-[420px] overflow-hidden pb-16 bg-[#FFFFFF]">
    <div className="flex flex-col gap-8 px-8 py-16 md:flex-row md:items-center md:gap-24 md:px-14 lg:px-16 xl:px-28">
      <label className="font-instrument text-[24px] md:text-[28px] text-[#1c1b3a] lg:text-[34px]">
        Financial Year
      </label>
      

      <FinancialYearDropdown />
    </div>

    <a
      href="#"
      className="mx-8 md:mt-16 flex max-w-[760px] items-start gap-8 font-montserrat text-[20px] font-semibold leading-tight text-[#AC8A3A] underline decoration-[#AC8A3A] underline-offset-4 md:px-8 lg:px-10 xl:px-20 md:text[18px] lg:text-[24px]"
    >
      Quarter and Financial Year ended Financial results - March 31, 2026
      <MdArrowOutward className="shrink-0 md:text-2xl lg:text-3xl" />
    </a>

    <DesktopBottomBorder />
    <MobileBottomBorder />
  </div>
);

const InvestorSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderContent = () => {
    if (activeTab === "Policies") {
      return (
        <div className="relative overflow-hidden bg-[#FFFFFF] px-8 pb-24 pt-16 md:px-16 md:pb-28 md:pt-16 lg:px-20">
          <PolicyGrid />
          <DesktopBottomBorder />
          <MobileBottomBorder />
        </div>
      );
    }

    if (activeTab === "Interest Rate") {
      return (
        <div className="relative overflow-hidden bg-[#FFFFFF] px-6 pb-24 pt-14 md:px-16 md:pb-28 md:pt-14 lg:px-20">
          <InterestRate />
          <DesktopBottomBorder />
          <MobileBottomBorder />
        </div>
      );
    }

    if (activeTab === "Contact for Investors") {
      return (
        <div className="relative overflow-hidden bg-[#FFFFFF] px-8 pb-24 pt-16 md:px-16 md:pb-28 md:pt-16 lg:px-20">
          <ContactGrid />
          <DesktopBottomBorder />
          <MobileBottomBorder />
        </div>
      );
    }

    return <FinancialReporting />;
  };

  return (
    <section id="investor" className="w-full overflow-hidden bg-white">
      <div className="grid w-full grid-cols-1 overflow-hidden border-b border-white/20 bg-black md:grid-cols-2">
        <div className="flex min-h-[430px] flex-col justify-center bg-[linear-gradient(to_bottom,_#000000_0%,_#231A3D_50%,_#000000_100%)] px-8 py-16 text-white md:px-6 lg:px-10 xl:px-20">
          <h2 className="font-instrument leading-none text-4xl lg:text-[42px] xl:text-[64px]">
            Investor Relations
          </h2>

          <div className="mt-6 h-1 w-28 bg-[#AC8A3A]" />

          <div className="mt-10 max-w-3xl xl:space-y-16 md:space-y-10 space-y-6 font-montserrat leading-relaxed text-white text-[12px] lg:text-[16px] xl:text-[20px]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              pulvinar, nulla sed tempus dictum, elit metus efficitur ipsum,
              non luctus lorem mauris nec lectus.
            </p>

            <p>
              Phasellus pretium risus et ipsum rhoncus cursus. Proin tristique
              tellus congue euismod viverra.
            </p>
          </div>
        </div>

        <div className="min-h-[320px] md:min-h-[430px]">
          <img
            src={investorImg}
            alt="Investor meeting notes"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="border-b border-[#D5D5D5]">
  <div className="overflow-x-auto">
    <div className="flex flex-col gap-4 px-4 pt-6 md:min-w-max md:flex-row md:gap-12 md:px-6 lg:items-start lg:justify-between lg:px-10 xl:px-20 bg-[#FFFFFF]">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => setActiveTab(tab)}
          className="w-fit whitespace-nowrap text-left font-instrument text-[24px] leading-tight text-black transition md:text-[28px] lg:text-[34px] xl:text-[42px]"
        >
          {tab}
          {activeTab === tab && (
            <span className="mt-2 block h-[2px] w-full bg-[#AC8A3A]" />
          )}
        </button>
      ))}
    </div>
  </div>
</div>

      {renderContent()}
    </section>
  );
};

export default InvestorSection;
