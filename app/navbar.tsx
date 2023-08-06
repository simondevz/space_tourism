"use client";

import logo from "./assets/shared/logo.svg";
import menuIcon from "./assets/shared/icon-hamburger.svg";
import Image from "next/image";

import { useState } from "react";
import Menu from "./menu";

export default function Navbar() {
  const [display, setdisplay] = useState(false);
  const click = () => setdisplay((display) => !display);

  return (
    <>
      <nav className="flex absolute w-screen content-center justify-between pl-8 pr-12 pt-6">
        <Image
          className="object-cover w-10 h-10"
          src={logo}
          alt="Company Logo"
        />
        <Image
          onClick={click}
          className="w-6 h-5 self-center sm:max-lg:hidden"
          src={menuIcon}
          alt="Menu Icon"
        />
      </nav>
      <Menu display={display} onClick={click} />
    </>
  );
}
