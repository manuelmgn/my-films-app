import React from "react";
import { StarIcon, CalendarIcon, TagIcon } from "@heroicons/react/24/outline";

function FilmModal({ film, onClose }: { film: any; onClose: () => void }) {
  console.log(film);

  return (
    <div
      className="fixed flex justify-center items-center z-20 inset-0 bg-[var(--color-2)]/85 transition-opacity duration-300"
      onClick={onClose}
    >
      <div className="w-180 bg-black rounded-xl shadow-2xl shadow-gray-600 text-white grid grid-cols-2">
        <div className="relative w-full h-full justify-self-end">
          <img
            src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
            alt={film.title}
            className="rounded-tl-xl rounded-bl-xl"
          />
        </div>
        <div className="h-1/2 grid grid-flow-row grid-cols-1 gap-2 py-3 px-5">
          <div className="flex justify-between space-x-1 gap-1">
            <h2 className="font-bold text-2xl text-[var(--color-1)]">
              {film.title}
            </h2>
            <span className="cursor-pointer" onClick={onClose}>
              &times;
            </span>
          </div>
          <p>{film.overview}</p>
          <dl className="grid grid-cols-2 gap-2">
            <dt className="flex items-center space-x-1 gap-2">
              {" "}
              <CalendarIcon className="size-4 text-[var(--color-1)] shadow-white" />
              Release date:
            </dt>
            <dd>
              {new Date(film.release_date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </dd>
            <dt className="flex items-center space-x-1 gap-2">
              <StarIcon className="size-4 text-[var(--color-1)] shadow-white" />
              Global rating:
            </dt>
            <dd>{film.vote_average}</dd>
            {/* <dt className="flex items-center space-x-1 gap-1">              <TagIcon className="size-4 text-[var(--color-1)] shadow-white" />
Genres:</dt>
            <dd></dd> */}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default FilmModal;
