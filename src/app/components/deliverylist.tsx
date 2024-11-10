"use client";

import { useState } from "react";
import { DiVim } from "react-icons/di";

export default function DeliveryList() {
  const [deliveryList, setDeliveryList] = useState(0);

  return (
    <div className="pt-16 h-[100vh] bg-red-400 w-full relative">
      {deliveryList === 0 && <div className="p-5 h-full">0</div>}
      {deliveryList === 1 && <div>1</div>}
      {deliveryList === 2 && <div>2</div>}
      {deliveryList === 3 && <div>3</div>}

      <div className="absolute bottom-0 w-full">
        <div className="flex justify-between items-center">
          <button
            type="button"
            className="bg-slate-400 w-full"
            onClick={() => setDeliveryList(0)}
          >
            0
          </button>
          <button
            type="button"
            className="w-full"
            onClick={() => setDeliveryList(1)}
          >
            1
          </button>
          <button
            type="button"
            className="w-full"
            onClick={() => setDeliveryList(2)}
          >
            2
          </button>
          <button
            type="button"
            className="w-full"
            onClick={() => setDeliveryList(3)}
          >
            3
          </button>
        </div>
      </div>
    </div>
  );
}
