"use client";

import { useEffect, useRef, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

export default function ListDeliveryAll() {
  const [drop, setDrop] = useState<any>(null);
  const items: number[] = [1, 2, 3, 4, 5];
  const toggleAccordion = (index: any) => {
    setDrop(drop === index ? null : index);
  };

  return (
    <>
      <ul className="transition-all divide-y">
        {items.map((value, index ) =>(<li key={index} className={"bg-blue-500 relative"} onClick={()=>toggleAccordion(index) }>
          <section className="justify-between items-center flex p-4">
            <p className="font-medium">Entrega</p>{" "}
            {drop === index ? (
              <MdExpandLess className="text-xl shrink-0 text-neutral-50" />
            ) : (
              <MdExpandMore className="text-xl text-neutral-300 shrink-0" />
            )}
          </section>
          <section
            className={`bg-neutral-50 w-full transition-all ${
              drop === index ? "h-48" : "h-0"
            }`}
          >
            <article className={` ${drop === index ? " p-4" : "hidden"}`}>sdsdsd</article>
          </section>
        </li>))}
        <li className={"bg-blue-500 relative"} onClick={() => setDrop(!drop)}>
          <section className="justify-between items-center flex p-4">
            <p className="font-medium">Entrega</p>{" "}
            {drop ? (
              <MdExpandLess className="text-xl shrink-0 text-neutral-50" />
            ) : (
              <MdExpandMore className="text-xl text-neutral-300 shrink-0" />
            )}
          </section>
          <section
            className={`bg-neutral-50 w-full transition-all ${
              drop ? "h-48" : "h-0"
            }`}
          >
            <article className={` ${drop ? " p-4" : "hidden"}`}>sdsdsd</article>
          </section>
        </li>
        <li className={"bg-blue-500 relative"} onClick={() => setDrop(!drop)}>
          <section className="justify-between items-center flex p-4">
            <p className="font-medium">Entrega</p>
          </section>
          <section
            className={`bg-neutral-50 w-full transition-all ${
              drop ? "h-48" : "h-0"
            }`}
          >
            <article className={` ${drop ? "" : "hidden"}`}>sdsdsd</article>
          </section>
        </li>
      </ul>
    </>
  );
}
