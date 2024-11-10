"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdHelpBuoy } from "react-icons/io";
import {
  MdChat,
  MdClose,
  MdHome,
  MdLocalShipping,
  MdLocationPin,
  MdMenu,
  MdMonetizationOn,
  MdMoney,
  MdSettings,
} from "react-icons/md";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <div className="p-4 bg-neutral-900 flex justify-between items-center absolute w-full">
        <h1 className="font-semibold text-base text-neutral-50 md:text-xl">
          Romaneio App
        </h1>{" "}
        <nav className="hidden md:flex gap-2">
          <ul className="flex gap-4">
            <li className="text-neutral-50 hover:text-neutral-100 active:bg-neutral-200 font-medium">
              <Link href={"/inicial"}>Inicial</Link>
            </li>
            <li className="text-neutral-50 hover:text-neutral-100 active:bg-neutral-200 font-medium">
              <Link href={"/entregas"}>Entregas</Link>
            </li>
            <li className="text-neutral-50 hover:text-neutral-100 active:bg-neutral-200 font-medium">
              <Link href={"/roteiro"}>Roteiro</Link>
            </li>
            <li className="text-neutral-50 hover:text-neutral-100 active:bg-neutral-200 font-medium">
              <Link href={"/financeiro"}>Financeiro</Link>
            </li>
            <li className="text-neutral-50 hover:text-neutral-100 active:bg-neutral-200 font-medium">
              <Link href={"/chat"}>Chat</Link>
            </li>
            <li className="text-neutral-50 hover:text-neutral-100 active:bg-neutral-200 font-medium">
              <Link href={"/ocorrencias"}>Ocorrencias</Link>
            </li>
            <li className="text-neutral-50 hover:text-neutral-100 active:bg-neutral-200 font-medium">
              <Link href={"/configuracao"}>Configurações</Link>
            </li>
          </ul>
        </nav>
        <button
          type="button"
          className="md:hidden transition-all"
          onClick={toggleMenu}
        >
          {menuOpen ? (
            <MdClose className="text-neutral-50 text-xl " />
          ) : (
            <MdMenu className="text-neutral-50 text-xl " />
          )}
        </button>
      </div>

      {/* menu mobile */}
      <div>
        <div
          className={`bg-neutral-50 transition-all border-r p-4 border-neutral-300 absolute left-0 h-[93vh] ease-in duration-200 z-30 w-full top-[3.5rem]  ${
            menuOpen ? "" : "-translate-x-full "
          }`}
        >
          <nav className=" flex flex-col justify-between h-full ">
            <ul className="flex flex-col divide-y">
              <li
                className="text-neutral-800 flex  relative items-center  hover:bg-neutral-200  p-2 rounded hover:text-neutral-700 active:text-neutral-900 active:bg-neutral-300 font-bold text-base"
                onClick={toggleMenu}
              >
                <MdHome className="text-2xl absolute " />
                <Link className="ms-8 pt-1" href={"/inicial"}>
                  Inicial
                </Link>
              </li>
              <li
                className="text-neutral-800 flex  relative items-center  hover:bg-neutral-200  p-2 rounded hover:text-neutral-700 active:text-neutral-900 active:bg-neutral-300 font-bold text-base"
                onClick={toggleMenu}
              >
                <MdLocalShipping className="text-2xl absolute " />
                <Link className="ms-8 pt-1" href={"/entregas"}>
                  Entregas
                </Link>
              </li>
              <li
                className="text-neutral-800 flex  relative items-center  hover:bg-neutral-200  p-2 rounded hover:text-neutral-700 active:text-neutral-900 active:bg-neutral-300 font-bold text-base"
                onClick={toggleMenu}
              >
                <MdLocationPin className="text-2xl absolute " />
                <Link className="ms-8 pt-1" href={"/roteiro"}>
                  Roteiro
                </Link>
              </li>
              <li
                className="text-neutral-800 flex  relative items-center  hover:bg-neutral-200  p-2 rounded hover:text-neutral-700 active:text-neutral-900 active:bg-neutral-300 font-bold text-base"
                onClick={toggleMenu}
              >
                <MdMonetizationOn className="text-2xl absolute " />
                <Link className="ms-8 pt-1" href={"/financeiro"}>
                  Financeiro
                </Link>
              </li>
              <li
                className="text-neutral-800 flex  relative items-center  hover:bg-neutral-200  p-2 rounded hover:text-neutral-700 active:text-neutral-900 active:bg-neutral-300 font-bold text-base"
                onClick={toggleMenu}
              >
                <MdChat className="text-2xl absolute " />
                <Link className="ms-8 pt-1" href={"/chat"}>
                  Chat
                </Link>
              </li>
              <li
                className="text-neutral-800 flex  relative items-center  hover:bg-neutral-200  p-2 rounded hover:text-neutral-700 active:text-neutral-900 active:bg-neutral-300 font-bold text-base"
                onClick={toggleMenu}
              >
                <IoMdHelpBuoy className="text-2xl absolute " />
                <Link className="ms-8 pt-1" href={"/ocorrencias"}>
                  Ocorrencias
                </Link>
              </li>
              <li
                className="text-neutral-800 flex  relative items-center  hover:bg-neutral-200  p-2 rounded hover:text-neutral-700 active:text-neutral-900 active:bg-neutral-300 font-bold text-base"
                onClick={toggleMenu}
              >
                <MdSettings className="text-2xl absolute " />
                <Link className="ms-8 pt-1" href={"/configuracao"}>
                  Configurações
                </Link>
              </li>
            </ul>
           
            <Link className="bg-red-600 p-2 rounded text-base font-bold text-neutral-50 text-center" href={"/"}>Sair</Link>
          </nav>
        </div>
      </div>
    </>
  );
}
