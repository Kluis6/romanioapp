"use client";
import Image from "next/image";
import { useState } from "react";
import {
  MdClose,
  MdStarRate,
  MdThumbDown,
  MdThumbDownOffAlt,
  MdThumbUp,
  MdThumbUpOffAlt,
} from "react-icons/md";

export default function DriverProfile() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpanded = () => setIsExpanded((prev) => !prev);
  const [isFavorite, setIsFavorite] = useState(0);
  return (
    <>
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
            <section className="flex flex-row justify-between border-b border-neutral-300 pb-4">
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

            <section className="mt-4">
              <h2 className="text-base font-bold text-neutral-900">
                Notificação
              </h2>
              <ul className="mt-1">
                <li>
                  <p>
                    Você tem <strong>3</strong> novos pedidos para entrega
                  </p>
                </li>
                <li>
                  <p>
                    Você tem <strong>2</strong> novas mensagens
                  </p>
                </li>
              </ul>
            </section>

            <section className="mt-4">
              <h2 className="text-base font-bold text-neutral-900">
                Atividades recentes
              </h2>
              <ul className="mt-1">
                <li>
                  <span className="font-medium">Entrega 1</span>- Status:{" "}
                  <strong>Entregue</strong>
                </li>
                <li>
                  <span className="font-medium">Entrega 2</span>- Status:{" "}
                  <strong>Entregue</strong>
                </li>{" "}
                <li>
                  <span className="font-medium">Entrega 3</span>- Status:{" "}
                  <strong>Entregue</strong>
                </li>
              </ul>
            </section>

            <section className="mt-4">
              <h2 className="text-base font-bold text-neutral-900">
                Dicas inportantes
              </h2>
              <ul className="mt-1">
                <li>
                  <button
                    className="font-sans font-medium w-full text-left"
                    onClick={toggleExpanded}
                  >
                    Cuidados com o veículos
                  </button>
                </li>
                <li>
                  <p className="font-sans font-medium">Organize seu tempo </p>
                </li>{" "}
                <li>
                  <p className="font-sans font-medium">
                    Seja atencioso e educado
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      {/* modal info */}
      <div
        className={`fixed bottom-0 right-0 w-full h-full bg-neutral-200  transition-all duration-200  shadow-lg z-50 ${
          isExpanded ? "" : "translate-y-full "
        }`}
      >
        <div className="flex justify-between items-center border-b border-neutral-200 bg-neutral-50 p-4 ">
          <h3 className="font-bold text-base">Cuidados com o veículos</h3>{" "}
          <button type="button" onClick={toggleExpanded}>
            <MdClose className="text-xl text-neutral-800" />
          </button>
        </div>

        <article className="p-4">
          <p className="font-sans font-medium text-sm text-neutral-900">
            Faça a manutenção regular para evitar problemas inesperados que
            possam atrapalhar seu trabalho. Mantenha o veículo limpo e
            abastecido, e fique atento ao desgaste de pneus e freios,
            especialmente se você roda longas distâncias diariamente.
          </p>
        </article>
        <section className="mt-4 space-y-1">
          <h3 className="font-bold text-sm text-center text-neutral-800">
            Gostou dessa dica?
          </h3>
          <div className="flex justify-center gap-2 items-center">
            <button className=" text-center py-2 transition-all duration-150" onClick={()=>(setIsFavorite(1))}>
              {isFavorite === 1 ? (
                <MdThumbUp className="text-2xl text-neutral-700" />
              ) : (
                <MdThumbUpOffAlt className="text-2xl text-neutral-600" />
              )}
            </button>
            <button className="text-xl text-center py-2" onClick={()=>(setIsFavorite(2))}>
            {isFavorite === 2 ? (
                <MdThumbDown className="text-2xl text-neutral-700" />
              ) : (
                <MdThumbDownOffAlt className="text-2xl text-neutral-600" />
              )}
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
