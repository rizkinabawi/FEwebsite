/* eslint-disable @typescript-eslint/no-unused-vars */

import { NavLinks } from "./navLink"

export const NavItems=()=>{
    return(
        <div>
            <div className="  gap-[25px] text-[16px] hidden md:flex">
              <NavLinks link="#hero" text="profile" />
              <NavLinks link="#projects" text="projects" />
              <NavLinks link="#stack" text="stack" />
              <NavLinks link="#services" text="services" />
              <NavLinks link="#contact" text="contact" />
            </div>
        </div>
    )
}

