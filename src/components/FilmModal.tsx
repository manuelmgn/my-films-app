import { StarIcon, CalendarIcon, TagIcon } from "@heroicons/react/24/outline";
import { formatDate, formatVote } from "../utils/formatters";
import { Film, Genre } from "../types/shared";
import { useGenres } from "../context/GenresContext";

function FilmModal({ film, onClose }: { film: Film; onClose: () => void }) {
  const genres = useGenres();

  const getGenreNames = (genreIds: number[]) => {
    return genreIds
      .map((id) => {
        const genre = genres.find((g: Genre) => g.id === id);
        return genre ? (genre as Genre).name : "Unknown";
      })
      .join(", ");
  };

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
            className="rounded-tl-xl rounded-bl-xl h-full w-full object-cover"
          />
        </div>
        <div className="h-1/2 grid grid-flow-row grid-cols-1 gap-3 py-3 px-5">
          <div className="flex justify-between space-x-1 gap-1">
            <h2 className="font-bold text-2xl text-[var(--color-1)]">
              {film.title}
            </h2>
            <span className="cursor-pointer" onClick={onClose}>
              ×
            </span>
          </div>
          <p>{film.overview}</p>
          <dl className="grid grid-cols-5 gap-2 items-center ">
            <dt className="col-span-2 flex items-center space-x-1 gap-2 text-[var(--color-2)] text-sm">
              {" "}
              <CalendarIcon className="size-4 text-[var(--color-1)] shadow-white" />
              Release date:
            </dt>
            <dd className="col-span-3">
              {film.release_date
                ? formatDate(film.release_date, true)
                : "Unknown date"}
            </dd>
            <dt className="col-span-2 flex items-center space-x-1 gap-2 text-[var(--color-2)] text-sm">
              <StarIcon className="size-4 text-[var(--color-1)] shadow-white" />
              Global rating:
            </dt>
            <dd className="col-span-3">
              {film.vote_average
                ? formatVote(film.vote_average, false, 2)
                : "Unknown"}
            </dd>
            <dt className="col-span-2 flex items-center space-x-1 gap-2 text-[var(--color-2)] text-sm">
              {" "}
              <TagIcon className="size-4 text-[var(--color-1)] shadow-white" />
              Genres:
            </dt>
            <dd className="col-span-3">{getGenreNames(film.genre_ids)}</dd>
          </dl>
          <form className="grid grid-cols-1 gap-2 mt-2">
            <h3 className="font-bold text-[var(--color-1)]">Review it!</h3>

            <textarea
              id="comment"
              name="comment"
              rows={2}
              className="p-2 rounded-md bg-gray-800 text-white"
              placeholder="Write your comment here..."
            ></textarea>

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
