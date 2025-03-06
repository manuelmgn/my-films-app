import React from "react";
import { StarIcon, CalendarIcon, TagIcon } from "@heroicons/react/24/outline";
import { formatDate, formatVote } from "../utils/formatters";

function FilmModal({ film, onClose }: { film: any; onClose: () => void }) {
  return (
    <div
      className="fixed flex justify-center items-center z-20 inset-0 bg-[var(--color-2)]/85 transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="w-180 bg-black rounded-xl shadow-2xl shadow-gray-600 text-white grid grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full justify-self-end">
          <img
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w400/${film.poster_path}`
                : "src/assets/cover.png"
            }
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
          <dl className="grid grid-cols-2 gap-2 items-center">
            <dt className="flex items-center space-x-1 gap-2">
              {" "}
              <CalendarIcon className="size-4 text-[var(--color-1)] shadow-white" />
              Release date:
            </dt>
            <dd>
              {film.release_date
                ? formatDate(film.release_date, true)
                : "Unknown date"}
            </dd>
            <dt className="flex items-center space-x-1 gap-2">
              <StarIcon className="size-4 text-[var(--color-1)] shadow-white" />
              Global rating:
            </dt>
            <dd>
              {film.vote_average
                ? formatVote(film.vote_average, false, 2)
                : "Unknown vote"}
            </dd>
            {/* <dt className="flex items-center space-x-1 gap-1">              <TagIcon className="size-4 text-[var(--color-1)] shadow-white" />
Genres:</dt>
            <dd></dd> */}
          </dl>
          <form className="grid grid-cols-1 gap-2">
            <label htmlFor="comment" className="text-sm font-medium">
              Leave a comment:
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={3}
              className="p-2 rounded-md bg-gray-800 text-white"
              placeholder="Write your comment here..."
            ></textarea>
            <label htmlFor="rating" className="text-sm font-medium">
              Your rating:
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              min="0"
              max="10"
              className="p-2 rounded-md bg-gray-800 text-white"
              placeholder="Rate from 0 to 10"
            />
            <button
              type="submit"
              className="mt-2 p-2 bg-[var(--color-1)] rounded-md text-white font-bold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FilmModal;
