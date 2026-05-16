import React from "react";
import logo from "../assets/logo.png";
import { MdArrowOutward } from "react-icons/md";
import grievancePdf from "../public/grievance.pdf";

import { FiPhone, FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="w-full text-gray-300 snap-start">

      {/* ===== TOP FOOTER ===== */}
      <div className="bg-gradient-to-b from-[#231A3D] to-black">
        <div className="max-w-7xl mx-auto px-12 py-14 grid grid-cols-1 md:grid-cols-4 gap-5">

          {/* ===== LEFT BRAND ===== */}
          <div className="md:col-span-3">
            <img src={logo} alt="Arvesta" className="w-54 mb-2" />

           <p className="text-lg text-[#FFF2D5]/80 font-montserrat font-light tracking-[0.12em] mb-6">
  Financial Services Pvt Ltd
</p>


            <div className="text-sm text-[#8D8D8D] space-y-3">

              <div className="flex flex-wrap items-center gap-x-2 gap-y-2 font-montserrat">
                <div className="flex items-center gap-2">
                  <FiPhone className="text-[#8D8D8D]" />
                  <span>+91-266423640</span>
                </div>

                <span className="text-[#d6b36a]">|</span>

                <div className="flex items-center gap-2">
                  <FiMail className="text-[#8D8D8D]" />
                  <span> support@arvesta.in</span>
                </div>

                <span className="text-[#d6b36a]">|</span>

                <span>License No: N-13.02545</span>

                <span className="text-[#d6b36a]">|</span>

                <a
  href={`${grievancePdf}#toolbar=0`}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-1"
>
  Investor Contact
  <MdArrowOutward className="text-[17px]" />
</a>
              </div>

              <div className="flex items-start gap-2 font-montserrat">
                <HiOutlineLocationMarker className="text-[#8D8D8D] mt-0.5 text-2xl sm:text-base" />
                <span>
                  B-903, Marathon Futurex, Lower Parel, Mumbai, Maharashtra - 400013
                </span>
              </div>

            </div>
          </div>

          {/* ===== WHO WE ARE + PRODUCTS ===== */}
          {/* <div >
            <p className="text-[#9a9a9a] text-[28px] mb-2 font-instrument mt-10 md:mt-0">Who We Are</p>
            <p className="text-white mb-8 font-montserrat ">About Us</p> */}

            {/* <p className="text-[#9a9a9a] text-lg mb-4 font-instrument">Products</p> */}
            {/* <p className="text-white mb-2 font-montserrat">Lorem Ipsum</p>
            <p className="text-white font-montserrat">Lorem Ipsum</p> */}
          {/* </div> */}

          {/* ===== INVESTOR CONTACT ===== */}
          <div>
            {/* <p className="text-[#9a9a9a] text-lg mb-4 font-instrument">Investor Contact</p> */}
            {/* <p className="text-white mb-2 font-montserrat">Lorem Ipsum</p>
            <p className="text-white mb-2 font-montserrat">Lorem Ipsum</p>
            <p className="text-white mb-2 font-montserrat" >Lorem Ipsum</p>
            <p className="text-white mb-2 font-montserrat">Lorem Ipsum</p>
            <p className="text-white font-montserrat">Lorem Ipsum</p> */}
          </div>

          {/* ===== POLICIES + SOCIAL ===== */}
          <div>
            {/* <p className="text-[#9a9a9a] text-lg mb-4 font-instrument">Policies</p> */}
            {/* <p className="text-white mb-2 font-montserrat">Lorem Ipsum</p>
            <p className="text-white mb-2 font-montserrat">Lorem Ipsum</p>
            <p className="text-white mb-6 font-montserrat">Lorem Ipsum</p> */}

            {/* <p className="text-lg tracking-widest text-[#9a9a9a] mb-3 font-montserrat">
              CONNECT
            </p>

            <div className="flex gap-4 text-[#8D8D8D] text-2xl">
              <FaLinkedin />
              <FaInstagram />
              <FaYoutube />
            </div> */}
          </div>

        </div>
      </div>

      {/* ===== BOTTOM BLACK BAR ===== */}
      <div className="bg-black py-4">
        <div className="max-w-7xl mx-auto px-12 text-[12px] font-montserrat text-[#8D8D8D]">
          © Arvesta Financial Services Private Limited. All Rights Reserved.
        </div>
      </div>

    </footer>
  );
};

export default Footer;
