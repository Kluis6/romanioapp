"use client";
import Link from "next/link";
import { useState } from "react";
import { BsEye } from "react-icons/bs";
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";

export default function Logincard() {
  const [view, setView] = useState<boolean>(true);
  const toggleView = () => setView((prev) => !prev);
  return (
    <div className="text-center font-bold bg-neutral-50 p-4 shadow relative rounded w-[90vw] md:w-[30vw] space-y-4">
      <h1 className="text-xl text-neutral-900">Romaneio App</h1>
      <section className="flex flex-col gap-4">
        <div className="relative flex items-center">
          <MdEmail className="text-neutral-500 text-xl absolute left-4" />
          <input
            className=" appearance-none ps-12 w-full  border outline-0 outline border-neutral-200 focus:bg-neutral-50 text-neutral-800 bg-neutral-100 text-sm rounded focus:ring-1 focus:ring-blue-500 p-2.5"
            type="email"
            name=""
            id=""
            placeholder="Digite seu email"
          />
        </div>
        <div className="relative flex items-center">
          <MdLock className="text-neutral-500 text-xl absolute left-4" />
          <input
            className=" appearance-none  w-full ps-12 border outline-0 outline border-neutral-200 focus:bg-neutral-50 text-neutral-800 bg-neutral-100 text-sm rounded focus:ring-1 focus:ring-blue-500 p-2.5"
            type={view ? "password" : "text"}
            name=""
            id=""
            placeholder="Digite sua senha"
          />
          <button
            className="absolute right-4 "
            type="button"
            onClick={toggleView}
          >
            {view ? (
              <MdVisibility className="text-neutral-500 text-xl" />
            ) : (
              <MdVisibilityOff className="text-neutral-500 text-xl" />
            )}
          </button>
        </div>

        <Link className="w-full bg-neutral-900 p-2.5 rounded text-base hover:bg-neutral-800 active:bg-neutral-950" href={"/inicial"}>Entrar</Link>
        
        <button className="p-2.5 w-full text-neutral-700 text-sm"> Esqueceu sua senha?</button>
      </section>
    </div>
  );
}
