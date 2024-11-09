"use client";

import { useState } from "react";
import { MdMenu } from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <div className="p-4 bg-neutral-900 flex justify-between items-center fixed w-full">
        <h1 className="font-semibold text-base text-neutral-50 md:text-2xl">Romaneio App</h1>{" "}
        <nav className="hidden md:flex gap-2"></nav>
        <button type="button">
          <MdMenu className="text-neutral-50 text-xl" onClick={toggleMenu} />
        </button>
      </div>

      {/* menu mobile */}
      <div>
        <div
          className={`bg-neutral-50 transition-all absolute left-0 h-dvh ease-in duration-200 z-30 w-5/6 top-[3.5rem]  ${
            menuOpen ? "" : "-translate-x-full "
          }`}
        >
          <h1> sdsdsdsd</h1>
        </div>
      </div>
    </>
  );
}
