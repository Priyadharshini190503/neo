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
import grievanceRedressalPdf from "../../public/AFSPL- Greivance Redressal Policy.pdf";
import fitAndProperCriteriaPdf from "../../public/Fit and Proper Criteria Policy.pdf";
import kycPdf from "../../public/kyc.pdf";
import grievancePdf from "../../public/grievance.pdf";


const tabs = ["Financial Reporting", "Policies", "Interest Rate", "Contact for Investors"];

const policies = [
  { label: "Risk Management Policy", href: riskManagementPdf },
  { label: "Ombudsman Scheme", href: ombudsmanPdf },
  { label: "KYC & AML Policy", href: kycPdf },
  { label: "Interest Rate Policy", href: interestRatePdf },
  { label: "Fair Practices Code", href: fairPracticePdf },
  { label: "Grievance Redressal Policy", href: grievanceRedressalPdf },
  { label: "Fit and Proper Criteria Policy", href: fitAndProperCriteriaPdf },
];

const getPdfViewUrl = (href) => `${href}#toolbar=0&navpanes=0`;
const grievancePdfUrl =
  "https://neo-zeta-five.vercel.app/assets/grievance-DOreQAvt.pdf#toolbar=0&navpanes=0";

const contacts = [
  {
    title: "Registered Office and Corporate Office",
    details: (
      <>
        <p className="font-semibold">Arvesta Financial Services Private Limited</p>
        <p>(prev. Neo Investment and Finserv Services Private Limited)</p>
        <p>
          <span className="font-semibold">Ph:</span> +91-22-66423600 |{" "}
          <span className="font-semibold">Email:</span> NeoNBFC@neo-group.in |
        </p>
        <p>
          <span className="font-semibold">CIN:</span> U64990MH2024PTC417309 |{" "}
          <span className="font-semibold">www.arvesta.in</span>
        </p>
        <p>
          <span className="font-semibold">Address:</span> 903 - B, Marathon Futurex,
          NM Joshi Marg, Lower Parel, Mumbai, Maharashtra - 400013
        </p>
      </>
    ),
  },
  {
    title: "Customer Service Desk",
    details: (
      <>
        <p>
          <span className="font-semibold">Email:</span> support@arvesta.in
        </p>
        <p>
          <span className="font-semibold">Contact Number:</span> 022-66423640
        </p>
        <p>
          <span className="font-semibold">Operational Hours:</span> 9:30 AM to
          5:30 PM, Monday to Friday, excluding public holidays.
        </p>
      </>
    ),
    href: grievancePdf,
  },
  {
    title: "Grievance Redressal Officer (GRO)",
    details: (
      <>
        <p>
          <span className="font-semibold">Email:</span> grievance@arvesta.in
        </p>
        <p>
          <span className="font-semibold">Contact Number:</span> 022-66423640
        </p>
        <p>
          <span className="font-semibold">Office Address:</span> B 903 Marathon
          Futurex, N M Joshi Marg, Lower Parel, Mumbai, Maharashtra, 400013
        </p>
      </>
    ),
    href: grievancePdf,
  },
  {
    title: "Principal Nodal Officer (PNO)",
    details: (
      <>
        <p>
          <span className="font-semibold">Email:</span> nodalofficer@arvesta.in
        </p>
        <p>
          <span className="font-semibold">Contact Number:</span> 022-66423640
        </p>
        <p>
          <span className="font-semibold">Office Address:</span> B 903 Marathon
          Futurex, N M Joshi Marg, Lower Parel, Mumbai, Maharashtra, 400013
        </p>
      </>
    ),
    href: grievancePdf,
  },
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
        className="group border-b border-dashed border-[#AC8A3A]/50 pb-4 md:pb-6 lg:pb-10"
      >
        <p className="mb-4 font-montserrat text-[12px] text-[#8D8D8D] md:text-[14px]">
          May 2026
        </p>

        <div className="flex items-start">
  <h3 className="max-w-[520px] font-montserrat text-[16px] font-semibold leading-snug text-[#AC8A3A] underline decoration-[#AC8A3A] underline-offset-4 md:text-[18px]">
    {policy.label}
  </h3>

  <MdArrowOutward className="mt-1 shrink-0 text-xl text-[#AC8A3A] " />
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
        <div className="z-50 max-h-[210px] w-full overflow-y-auto border border-t-0 border-black bg-white pb-3 md:max-h-[260px] md:pb-0">
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
  "rounded-[20px] border border-transparent px-8 lg:px-12 xl:px-24";

const gradientBorderStyle = {
  background:
    "linear-gradient(#FFFFFF, #FFFFFF) padding-box, linear-gradient(90deg, #AC8A3A 0%, #D9C381 18%, #F4EBCD 50%, #D9C381 82%, #AC8A3A 100%) border-box",
};

const InterestRate = () => (
  <div className="mx-auto max-w-[1620px] bg-[#FFFFFF] lg:py-10">
    <div className="flex flex-col gap-8">
      
      {/* Box 1: Top Card */}
      <div 
        className={`relative z-30 py-8 ${interestRateCardClass}`}
        style={{
          ...gradientBorderStyle,
          boxShadow: '0 12px 24px -10px rgba(0,0,0,0.08), -10px 10px 20px -10px rgba(0,0,0,0.04), 10px 10px 20px -10px rgba(0,0,0,0.04)'
        }}
      >
        <h3 className="font-instrument leading-tight text-[20px] md:text-[26px] lg:text-[28px] xl:text-[30px]">
          Interest Charged:{" "}
          <span className="text-[#AC8A3A] font-light">15% PLR effective April 1, 2026.</span>
        </h3>
        <p className="mt-4 max-w-[1500px] text-[#1c1b3a] text-[12px] md:text-[12px] lg:text-[16px]  xl:text-[18px] leading-relaxed font-montserrat opacity-90">
          The interest rates we offer to customers are linked to the Arvesta
          Financial Services Prime Lending Rate, which reflects our cost of
          raising funds from the capital markets. For the specific interest rates
          charged by the Company, please refer to the Interest Rate Policy
          available on the Company&apos;s website{" "}
          <a
  href="https://www.arvesta.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-[#AC8A3A] inline-flex items-center gap-1 hover:underline"
>
  (https://www.arvesta.in/).
  <span className="text-[12px] md:text-[12px] lg:text-[16px] xl:text-[18px]">
    ↗
  </span>
</a>
        </p>
      </div>

      {/* Box 2: Middle Card */}
      <div 
        className={`relative z-20 pb-8 pt-8 ${interestRateCardClass}`}
        style={{
          ...gradientBorderStyle,
          boxShadow: '0 14px 28px -10px rgba(0,0,0,0.09), -12px 12px 24px -12px rgba(0,0,0,0.05), 12px 12px 24px -12px rgba(0,0,0,0.05)'
        }}
      >
        <h3 className="font-instrument text-[#2B2D2F] leading-tight text-[20px] md:text-[26px] lg:text-[28px] xl:text-[30px]">
          Penal charges:
        </h3>
        <p className="mt-3 max-w-[1500px] text-[12px] md:text-[12px] lg:text-[16px]  xl:text-[18px] leading-relaxed font-montserrat text-[#1c1b3a] opacity-90">
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
        className={`relative z-10 pb-8 pt-8 ${interestRateCardClass}`}
        style={{
          ...gradientBorderStyle,
          boxShadow: '0 18px 36px -10px rgba(0,0,0,0.12), -15px 15px 28px -12px rgba(0,0,0,0.06), 15px 15px 28px -12px rgba(0,0,0,0.06)'
        }}
      >
        <h3 className="font-instrument text-[#2B2D2F] leading-tight text-[20px] md:text-[26px] lg:text-[28px] xl:text-[30px]">
          Penal Default Charges:
        </h3>
        <p className="mt-3 max-w-[1500px] text-[12px] md:text-[12px] lg:text-[16px]  xl:text-[18px] leading-relaxed font-montserrat text-[#1c1b3a] opacity-90">
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
  <div className="bg-[#FFFFFF]">
    <div className="grid gap-x-10 md:grid-cols-2">
      {contacts.map((contact) => (
        <div
          key={contact.title}
          className="border-b border-[#7D7D7D] pb-6 pt-6 xl:pb-10 xl:pt-10 md:min-h-[205px]"
        >
          <h3 className="font-instrument leading-tight text-[#111111] font-instrument leading-tight text-[#111111] text-[20px] md:text-[26px] lg:text-[28px] xl:text-[30px]">
            {contact.title}
          </h3>

          <div className="mt-5 max-w-[620px] font-montserrat text-[#141414] text-[12px] md:text-[12px] lg:text-[16px]  xl:text-[18px] leading-relaxed">
            {contact.details}
          </div>

          {contact.href && (
            <a
              href={grievancePdfUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-1 font-montserrat font-semibold text-[#AC8A3A] underline underline-offset-2 text-[12px] md:text-[12px] lg:text-[16px]  xl:text-[18px] leading-relaxed"
            >
              View More
              <MdArrowOutward className="text-[12px] md:text-[12px] lg:text-[16px]  xl:text-[18px] leading-relaxed" />
            </a>
          )}
        </div>
      ))}
    </div>

    <div className="max-w-[620px] border-b border-[#7D7D7D] pb-10 pt-7">
      <h3 className="font-instrument leading-tight text-[#111111] font-instrument leading-tight text-[#111111] text-[20px] md:text-[26px] lg:text-[28px] xl:text-[30px]">
        Smart ODR Portal
      </h3>

      <div className="mt-5 font-montserrat text-[#141414] text-[12px] md:text-[12px] lg:text-[16px]  xl:text-[18px] leading-relaxed">
        <p>
          If you&apos;re dissatisfied with the resolution provided through SCORES,
          you can get online dispute resolution within 90 days through the SMART
          ODR Portal
        </p>

        <p className="mt-6">
          Link to access -{" "}
          <a
            href="https://smartodr.in/login"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            https://smartodr.in/login
          </a>
        </p>
      </div>
    </div>
  </div>
);

const FinancialReporting = () => (
  <div className="relative xl:min-h-[320px]  overflow-hidden pb-16 bg-[#FFFFFF] md:px-6 px-4 lg:px-10 xl:px-20">
    <div className="flex flex-col gap-8 py-16 md:flex-row md:items-start md:gap-24 ">
      <label className="font-montserrat md:text-[18px] lg:text-[20px] text-[16px] text-[#1c1b3a]">
        Financial Year
      </label>
      

      <FinancialYearDropdown />
    </div>

    <a
  href="#"
  className="font-montserrat inline text-[#AC8A3A] font-semibold  md:text-[18px] text-[16px] "
>
  <span className="underline  underline-offset-4">
    Quarter and Financial Year ended Financial results - March 31, 2026
  </span>
  <MdArrowOutward className="inline ml-1" />
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
        <div className="relative overflow-hidden bg-[#FFFFFF] md:px-10 px-6 lg:px-16 xl:px-26 pb-18 pt-10 md:pt-16 md:pb-16 lg:pb-16 md:pt-16 ">
          <PolicyGrid />
          <DesktopBottomBorder />
          <MobileBottomBorder />
        </div>
      );
    }

    if (activeTab === "Interest Rate") {
      return (
        <div className="relative overflow-hidden bg-[#FFFFFF] px-6 pb-10 pt-10 md:px-12 md:pb-10 md:pt-10 lg:pt-6 lg:pb-6 lg:px-16 xl:px-26">
          <InterestRate />
          <DesktopBottomBorder />
          <MobileBottomBorder />
        </div>
      );
    }

    if (activeTab === "Contact for Investors") {
      return (
        <div className="relative overflow-hidden bg-[#FFFFFF] px-8 pb-10 pt-3 md:px-12 md:pb-16 md:pt-6 lg:px-16 xl:px-26">
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
        <div className="flex md:min-h-[430px] flex-col justify-center bg-[linear-gradient(to_bottom,_#000000_0%,_#231A3D_50%,_#000000_100%)] px-8 py-16 text-white md:px-6 lg:px-10 xl:px-20">
          <h2 className="font-instrument leading-tight text-4xl lg:text-[42px] xl:text-[64px]">
            Investor Relations
          </h2>

          <div className="mt-2 h-1 w-28 bg-[#AC8A3A]" />

          <div className="mt-5 max-w-3xl text-[12px] md:text-[12px] lg:text-[16px]  xl:text-[18px] leading-relaxed font-montserrat text-white">
            <p>
              Arvesta Financial Services Limited is an NBFC registered with the Reserve Bank of India.
            </p>

            <p className="mt-6">
              Explore our financial results, policies, and other investor-related information below.
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

      <div className="bg-gradient-to-b from-[#FFFFFE] via-[#FFFBF1] to-[#FFF7E3]">
  <div className="overflow-x-auto  hide-scrollbar">
    
    <div className="flex w-full min-w-max items-stretch gap-3 px-4 md:gap-8 md:px-6 lg:justify-between lg:gap-12 lg:px-10 xl:px-20">
      
      {tabs.map((tab) => {
        const isActive = activeTab === tab;

        return (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`relative flex h-[70px] md:h-[76px] lg:h-[80px] xl:h-[92px] items-end whitespace-nowrap px-4 pb-3 text-left font-instrument text-[22px] leading-none transition md:px-5 md:text-[30px] lg:px-6 lg:text-[32px] xl:text-[36px] ${
              isActive
                ? "bg-gradient-to-b from-[#FFFFFD] via-[#F3ECF6] to-[#ECE6EC] text-[#2B2832]"
                : "text-[#8E897F] hover:text-[#2B2832]"
            }`}
          >
            {tab}

            {isActive && (
              <span className="absolute bottom-0 left-0 block h-[4px] w-full bg-[#4A435F]" />
            )}
          </button>
        );
      })}
      
    </div>

  </div>
</div>

      {renderContent()}
    </section>
  );
};

export default InvestorSection;
