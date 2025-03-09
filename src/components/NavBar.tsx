import { Link } from "react-router-dom";

import { FilmIcon } from "@heroicons/react/24/outline";

function NavBar() {
  return (
    <nav className="my-5 bg-[var(--color-4)] text-[var(--color-1)] p-4 flex items-center justify-between rounded-lg  z-10">
      <div className="w-1/2 flex-auto flex items-center space-x-2 my-2 rounded ">
        <FilmIcon className="size-6 text-[var(--color-1)] shadow-white" />
        <h1 className="text-2xl font-bold hover:underline">
          <Link
            to="/"
            className="cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            Filmapp
          </Link>
        </h1>
      </div>
      <div className="w-1/2 text-end hover:underline">
        <Link to="/mylist" className="cursor-pointer">
          My list
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
