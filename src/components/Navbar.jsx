import React, { useState } from "react";
import logo from "../assets/logo.png";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full shadow-md overflow-hidden snap-start" >

      {/* ===== MAIN BAR ===== */}
      <div className="w-full h-[90px] md:h-[140px] flex">

        {/* LEFT LOGO */}
        <div className="w-1/2 bg-[#000614] flex items-center px-6 md:px-12">
          <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto" />
        </div>

        {/* RIGHT MENU */}
        <div className="w-1/2 bg-gradient-to-b from-[#201838] via-[#161027] to-[#050308]
 flex items-center justify-end px-6 md:px-14">

          {/* DESKTOP MENU */}
          {/* <ul className="hidden md:flex gap-10 text-sm uppercase tracking-wider text-[#8D8D8D] font-montserrat">
            <li className="cursor-pointer hover:text-[#d4b46a] transition">
              INVESTOR CONTACTS
            </li>
            <li className="cursor-pointer hover:text-[#d4b46a] transition">
              POLICIES
            </li>
          </ul> */}

          {/* MOBILE MENU BUTTON */}
          {/* <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button> */}

        </div>
      </div>

      {/* {open && (
        <div className="md:hidden bg-gradient-to-b from-[#231A3D] to-black px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm uppercase tracking-wider text-[#8D8D8D] font-montserrat">
            <li className="hover:text-[#d4b46a]">Investor Contacts</li>
            <li className="hover:text-[#d4b46a]">Policies</li>
          </ul>
        </div>
      )} */}

    </nav>
  );
};

export default Navbar;
