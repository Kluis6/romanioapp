"use client";

import { useEffect, useRef, useState } from "react";
import { MdClose, MdExpandLess, MdExpandMore } from "react-icons/md";

export default function ListDeliveryAll() {
  const [drop, setDrop] = useState<any>(null);
  const items: number[] = [1, 2, 3, 4, 5];
  const [expandedItems, setExpandedItems] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);

  const toggleAccordion = (index: any) => {
    setDrop(drop === index ? null : index);
  };

  return (
    <>
      <ul className="transition-all duration-300 divide-y">
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
              className="justify-between items-center flex p-4 w-full transition-all duration-300"
              onClick={() => toggleAccordion(index)}
            >
              <p className="font-medium text-neutral-50">Entrega {value}</p>
              {drop === index ? (
                <MdExpandLess className="text-xl shrink-0 text-neutral-50" />
              ) : (
                <MdExpandMore className="text-xl text-neutral-300 shrink-0" />
              )}
            </button>
            <section
              className={`bg-neutral-50 w-full duration-200 transition-all ${
                drop === index ? "h-full" : "h-0"
              }`}
            >
              <article
                className={` ${drop === index ? " px-4 py-2" : "hidden"}`}
              >
                <div className="flex flex-col space-y pb-2">
                  <p>
                    <strong>Destinatário:</strong> Nome do cliente
                  </p>
                  <p>
                    <strong>Endereço:</strong> rua do cliente
                  </p>
                  <p>
                    <strong>Volumes:</strong> 2
                  </p>
                </div>
                <div>
                  <button
                    type="button"
                    className="bg-neutral-900 w-full p-2.5 text-neutral-50 font-bold text-sm rounded"
                    onClick={() => setExpandedItems(!expandedItems)}
                  >
                    Iniciar
                  </button>
                </div>
              </article>
            </section>
          </li>
        ))}
      </ul>
      {/* modal-info-delivery */}
      <div
        className={`fixed bottom-0 right-0 w-full h-full bg-neutral-200  transition-all duration-200 z-50 ${
          expandedItems ? "" : "translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center border-b border-neutral-200 bg-neutral-50 p-4 ">
          <h3 className="font-bold text-base">
            Entrega <strong>32255</strong>
          </h3>
          <button
            type="button"
            onClick={() => setExpandedItems(!expandedItems)}
          >
            <MdClose className="text-xl text-neutral-800" />
          </button>
        </div>
        <section className="h-full w-full p-4">
          {step}
          <div className="flex items-center justify-between space-x-4">
            <button
              onClick={() => setStep(step >= 0 ? step - 1 : step)}
              disabled={step === 0 ? true : false}
              type="button"
              className={`p-2.5 bg-neutral-900 disabled:bg-neutral-600 block text-neutral-50 w-full transition-all`}
            >
              v
            </button>
            <div className="flex items-center justify-between space-x-4 transition-all duration-300 w-full">
              <div
                className={`size-3   ${
                  step === 0 ? "bg-neutral-800" : "bg-neutral-300"
                }  rounded-full outline-2 outline outline-neutral-800`}
              ></div>
              <div
                className={`size-3   ${
                  step === 1 ? "bg-neutral-800" : "bg-neutral-300"
                }  rounded-full outline outline-2 outline-neutral-800`}
              ></div>
              <div
                className={`size-3   ${
                  step === 2 ? "bg-neutral-800" : "bg-neutral-300"
                }  rounded-full outline outline-2 outline-neutral-800`}
              ></div>
              <div
                className={`size-3   ${
                  step === 3 ? "bg-neutral-800" : "bg-neutral-300"
                }  rounded-full outline outline-2 outline-neutral-800`}
              ></div>
            </div>
            <button
              onClick={() => setStep(step >= 0 && step <= 2 ? step + 1 : step)}
              type="button"
              className="p-2.5 bg-neutral-900 block text-neutral-50 w-full"
            >
              v
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
