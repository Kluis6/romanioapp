import Image from "next/image";
import React from "react";
import { MdStarRate } from "react-icons/md";

export default function DriverProfile() {
  return (
    <div className="overflow-hidden pt-14 flex flex-col">
        <div className="w-full h-full">
        <Image
        src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="w-full"
        width={400}
        height={300}
        alt="Picture of the author"
      />
        </div>
 
      <div className=" px-4 ">
        <div className="bg-neutral-50 w-full h-[90vh] rounded p-4 -mt-10 shadow z-40 ">
          <section className="flex flex-row justify-between">
            <div>
              <small className="font-bold text-neutral-700">Bem Vindo</small>
              <h2 className="text-xl font-bold text-neutral-900">
                Nome do Motorista
              </h2>
            </div>
            <div className="flex items-end flex-row ">
              <p className="font-medium text-xl">4.5</p>
              <MdStarRate className="text-4xl text-yellow-500" />
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-bold text-neutral-900">
              ��ltimas Entregas
            </h2>
            <ul className="list-disc list-inside px-4">
              <li>Entrega 1 - Status: Entregue</li>
              <li>Entrega 2 - Status: Em andamento</li>
              <li>Entrega 3 - Status: Aguardando</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
