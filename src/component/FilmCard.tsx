import React from "react";
import { StarIcon } from "@heroicons/react/24/outline";

function FilmCard(film: any) {
  return (
    <div
      key={film.id}
      className="card bg-[var(--color-2)] rounded-xl border-1 border-[var(--color-3)] hover:scale-103 hover:shadow-lg hover:shadow-[var(--color-1)] transition-transform duration-300 cursor-pointer"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
        alt={film.title}
        className="rounded-t-xl"
      />
      <div className="py-1 px-2 my-1">
        <h2 className="font-medium">{film.title}</h2>
        <div className="grid grid-flow-row grid-cols-3 gap-2 grid-justify-between">
          <p className="col-span-2">
            {new Date(film.release_date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
          <span className="flex items-center space-x-1 gap-1">
            <StarIcon className="size-4 text-[var(--color-1)] shadow-white" />
            {film.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}
export default FilmCard;
