import React from "react";
import { FilmIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="my-5 bg-[var(--color-2)] text-[var(--color-1)] p-4 flex items-center justify-between rounded-lg  z-10">
      <div className="w-1/2 flex-auto flex items-center space-x-2 my-2 rounded cursor-pointer">
        <FilmIcon className="size-6 text-[var(--color-1)] shadow-white" />
        <h1 className="text-2xl font-bold">Filmapp</h1>
      </div>
      <div className="w-1/2 text-end">
        <a href="" className="">
          My films
        </a>
      </div>
    </header>
  );
}

export default Header;
