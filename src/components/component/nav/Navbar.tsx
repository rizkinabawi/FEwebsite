import { useState } from "react";
import { NavItems } from "./NavItem";
import { HiMenu } from "react-icons/hi";
import { NavLinks } from "./navLink";
import { FaUserTie } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import { BsFillBagCheckFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { DiAptana } from "react-icons/di";
export const Navbar = () => {
  const [hide, setHide] = useState(false);
  return (
    <div className="fixed z-50 w-[100vw]  bg-white flex  md:justify-center">
      <div className="lg:w-[1480px] sm:w-[100vw] w-[100vh] h-[50px] py-[30px]  lg:pt-[50px] font-semibold text-grey-costum flex  items-center md:gap-[26px]   sm:px-[150px] md:px-[50px]  lg:px-[158px] px-4  md:justify-center relative z-50">
        <div className="flex gap-[25px] items-center ">
          <p className="text-blue-costum text-[24px]  font-bold">
            FEwebsite
          </p>
          <NavItems />
        </div>

        <div className="text-grey-costum  ml-auto ">
          <a className="text-blue-costum font-bold ml-auto z-50 text-2xl ">
            {!hide && (
              <HiMenu
                onClick={() => {
                  setHide(!hide);
                }}
              />
            )}
            {hide && (
              <IoClose
                className="font-bold"
                onClick={() => {
                  setHide(!hide);
                }}
              />
            )}
          </a>
          {hide && (
            <ul className="absolute translate-x-[-90px] p-5 bg-white shadow-md flex-col flex gap-1 md:gap-[20px]">
              <li className="flex  items-center gap-2">
                <FaUserTie />
                <NavLinks link="#hero" text="profile" />
              </li>
              <li className="flex  items-center gap-2">
                <BiTask />
                <NavLinks link="#projects" text="projects" />
              </li>
              <li className="flex  items-center gap-2">
                <DiAptana /> <NavLinks link="#stack" text="stack" />
              </li>
              <li className="flex  items-center gap-2">
                <BsFillBagCheckFill />
                <NavLinks link="#services" text="services" />
              </li>
              <li className="flex  items-center gap-2">
                <IoMdContact />
                <NavLinks link="#contact" text="contact" />
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
