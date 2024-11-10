"use client";

import { useState } from "react";
import { DiVim } from "react-icons/di";

export default function DeliveryList() {
  const [deliveryList, setDeliveryList] = useState(0);

  return (
    <div className="pt-16 min-h-[94vh]  h-[100vh]  w-full relative z-0">
      {deliveryList === 0 && (
        <div className="h-full">
          <ul>
            <li></li>
          </ul>
        </div>
      )}
      {deliveryList === 1 && <div>1</div>}
      {deliveryList === 2 && <div>2</div>}
      {deliveryList === 3 && <div>3</div>}

      <div className="absolute bottom-0 w-full ">
        <div className="flex justify-between items-center transition-all">
          <button
            type="button"
            className={`w-full p-2 font-medium ${
              deliveryList === 0
                ? "bg-neutral-900 text-neutral-50"
                : " bg-neutral-400 text-neutral-900"
            }`}
            onClick={() => setDeliveryList(0)}
          >
            Todas
          </button>
          <button
            type="button"
            className={`w-full p-2 font-medium ${
              deliveryList === 1
                ? "bg-neutral-900 text-neutral-50"
                : " bg-neutral-400 text-neutral-900"
            }`}
            onClick={() => setDeliveryList(1)}
          >
            Ativas
          </button>
          <button
            type="button"
            className={`w-full p-2 font-medium ${
              deliveryList === 2
                ? "bg-neutral-900 text-neutral-50"
                : " bg-neutral-400 text-neutral-900"
            }`}
            onClick={() => setDeliveryList(2)}
          >
            Pausadas
          </button>
          <button
            type="button"
            className={`w-full p-2 font-medium ${
              deliveryList === 3
                ? "bg-neutral-900 text-neutral-50"
                : " bg-neutral-400 text-neutral-900"
            }`}
            onClick={() => setDeliveryList(3)}
          >
            Entregue
          </button>
        </div>
      </div>
    </div>
  );
}
