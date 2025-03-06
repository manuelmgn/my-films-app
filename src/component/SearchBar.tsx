import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchBar() {
  return (
    <>
      <form className="y-2 py-1 px-3 w-[50%] justify-self-center flex items-center space-x-0 m rounded-2xl bg-[var(--color-3)]">
        <MagnifyingGlassIcon className="size-5 text-[var(--color-1)] shadow-white" />
        <input
          type="text"
          className="px-3 py-2 rounded w-full outline-none"
          placeholder="Search films..."
        />
      </form>
    </>
  );
}

export default SearchBar;
