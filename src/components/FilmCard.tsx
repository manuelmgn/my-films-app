import { StarIcon } from "@heroicons/react/24/outline";

import { formatDate, formatVote } from "../utils/formatters";
import { Film } from "../types/shared";

/**
 * Component that displays a film card with its poster, title, release date and global vote average.
 * The card is clickable and shows a modal when clicked.
 *
 * @param {Object} props - The properties object.
 * @param {Film} props.film - The film object containing details to display.
 * @param {Function} props.onSelectFilm - The callback function to call when the film card is clicked.
 * @returns {JSX.Element} The rendered film card component.
 */
function FilmCard({
  film,
  onSelectFilm,
}: {
  film: Film;
  onSelectFilm: (film: Film) => void;
}) {
  return (
    <div
      key={film.id}
      className="bg-black text-[var(--color-4)] rounded-lg  hover:scale-103 shadow-xs hover:shadow-xl shadow-[var(--color-1)] transition-transform duration-200 cursor-pointer"
      onClick={() => onSelectFilm(film)}
    >
      <img
        src={
          film.poster_path
            ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
            : "src/assets/cover.png"
        }
        alt={film.title}
        className="rounded-t-lg"
      />
      <div className="py-1 px-2 my-1">
        <h2 className="font-semibold">{film.title}</h2>
        <div className="grid grid-flow-row grid-cols-3 gap-2 grid-justify-between">
          <p className="col-span-2">
            {film.release_date
              ? formatDate(film.release_date, false)
              : "Unknown date"}
          </p>
          {/* Shows nothing instead of '0'*/}
          {film.vote_average !== 0 && (
            <span className="flex items-center space-x-1 gap-1">
              <StarIcon className="size-4 text-[var(--color-1)] shadow-white" />
              {formatVote(film.vote_average, false)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
export default FilmCard;
