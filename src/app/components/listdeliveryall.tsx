"use client";

import { useEffect, useRef, useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

export default function ListDeliveryAll() {
  const [drop, setDrop] = useState<any>(null);
  const items: number[] = [1, 2, 3, 4, 5];
  const [state, setState] = useState<number>(1);
  const toggleAccordion = (index: any) => {
    setDrop(drop === index ? null : index);
  };

  return (
    <>
      <ul className="transition-all divide-y">
        {items.map((value, index) => (
          <li
            key={index}
            className={`${
              value === 1
                ? "bg-sky-600"
                : value === 2
                ? "bg-blue-600"
                : value === 3
                ? "bg-red-600"
                : "bg-green-600"
            } relative`}
          >
            <button
              className="justify-between items-center flex p-4 w-full"
              onClick={() => toggleAccordion(index)}
            >
              <p className="font-medium text-neutral-50">Entrega</p>
              {drop === index ? (
                <MdExpandLess className="text-xl shrink-0 text-neutral-50" />
              ) : (
                <MdExpandMore className="text-xl text-neutral-300 shrink-0" />
              )}
            </button>
            <section
              className={`bg-neutral-50 w-full transition-all ${
                drop === index ? "h-48" : "h-0"
              }`}
            >
              <article className={` ${drop === index ? " p-4" : "hidden"}`}>
                sdsdsd {value}
              </article>
            </section>
          </li>
        ))}
      </ul>
    </>
  );
}
