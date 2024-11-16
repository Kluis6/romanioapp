"use client";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function ListChat() {
  const [chat, setChat] = useState<boolean>();
  return (
    <>
      <div
        className={`h-full w-full transition-all duration-200 ease-in-out ${
          chat ? "-translate-x-full" : ""
        }`}
      >
        <div className=" flex items-center justify-between bg-slate-50 shadow p-4">
          <h3>ss</h3>{" "}
          <button type="button">
            <BsThreeDotsVertical className="text-base text-neutral-900" />
          </button>
        </div>
        <ul className="divide-y  divide-neutral-300">
          <li className="bg-slate-100 px-4 py-2" onClick={() => setChat(!chat)}>
            <div className="flex items-center gap-4 justify-between">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="User 1"
                className="size-10 rounded-full object-fill"
              />
              <div className="block">
                <h4 className="font-bold text-sm">User 1</h4>
                <p className="text-sm line-clamp-1 text-neutral-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span>
                  <p className="text-sm font-sans font-medium text-neutral-700">
                    22:33
                  </p>
                </span>
                <div className="bg-green-500  rounded-full  text-clip text-center w-5">
                  <p className="text-sm font-bold text-neutral-50">1</p>
                </div>
              </div>
            </div>
          </li>
          <li className="bg-slate-100 px-4 py-2">
            <div className="flex items-center gap-4 justify-between">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="User 1"
                className="size-10 rounded-full object-fill"
              />
              <div className="inline-block">
                <h4 className="font-bold text-sm">User 1</h4>
                <p className="text-sm line-clamp-1 text-neutral-800">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className="flex flex-col items-end gap-2">
                <span>
                  <p className="text-sm font-sans font-medium text-neutral-700">
                    12:33
                  </p>
                </span>
                <div className="bg-green-500  rounded-full  text-clip text-center w-5">
                  <p className="text-sm font-bold text-neutral-50">1</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* modal chat  */}

      <div
        onClick={() => setChat(!chat)}
        className={`bg-neutral-300 fixed right-0 top-3 w-full h-full transition-all duration-200 ease-in ${
          chat ? "" : " translate-x-full"
        }`}
      >
        {chat && (
          <div className="w-full h-full">
            <div className="bg-neutral-50 p-2">ddd</div>
          </div>
        )}
      </div>
    </>
  );
}
