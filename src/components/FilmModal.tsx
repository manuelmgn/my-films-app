import { StarIcon, CalendarIcon, TagIcon } from "@heroicons/react/24/outline";
import { formatDate, formatVote } from "../utils/formatters";
import { Film, Genre } from "../types/shared";
import { useGenres } from "../context/GenresContext";
import StarRating from "./StarRating";

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
      className="fixed flex justify-center items-center z-20 inset-0 bg-[var(--color-4)]/85 transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="mx-2 h-150 xs:h-100 sm:h-auto xs:mx-5 sm:mx-7 w-180 bg-black rounded-xl shadow-2xl shadow-gray-600 text-white grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full align-end justify-self-end row-span-2">
          <img
            src={
              film.poster_path
                ? `https://image.tmdb.org/t/p/w400${film.poster_path}`
                : "src/assets/cover.png"
            }
            alt={film.title}
            className="hidden sm:block rounded-tl-xl rounded-bl-xl w-full h-full object-cover"
          />
          <div className="block sm:hidden">
            <span
              className="cursor-pointer absolute right-5 top-3 z-5"
              onClick={onClose}
            >
              ×
            </span>
            <img
              src={
                film.poster_path
                  ? `https://image.tmdb.org/t/p/w400${film.backdrop_path}`
                  : "src/assets/cover.png"
              }
              alt={film.title}
              className="opacity-30  rounded-tl-xl rounded-tr-xl w-full h-40 object-cover z-0 blur-[1px]"
            />
          </div>
        </div>
        <div className="h-1/2 grid grid-flow-row grid-cols-1 gap-3 py-3 px-5 z-1">
          <div className="flex justify-between space-x-1 gap-1">
            <h2 className="font-bold text-2xl text-[var(--color-1)]">
              {film.title}
            </h2>
            <span className="cursor-pointer hidden sm:block" onClick={onClose}>
              ×
            </span>
          </div>
          <p>{film.overview}</p>
          <dl className="grid grid-cols-5 gap-1 items-center ">
            <dt className="col-span-2 flex items-center space-x-1 gap-1 sm:gap-2 text-[var(--color-3)] text-sm">
              {" "}
              <CalendarIcon className="size-4 text-[var(--color-1)] shadow-white" />
              Release date:
            </dt>
            <dd className="col-span-3">
              {film.release_date
                ? formatDate(film.release_date, true)
                : "Unknown date"}
            </dd>
            <dt className="col-span-2 flex items-center space-x-1 gap-1 sm:gap-2 text-[var(--color-3)] text-sm">
              <StarIcon className="size-4 text-[var(--color-1)] shadow-white" />
              Global rating:
            </dt>
            <dd className="col-span-3">
              {film.vote_average
                ? formatVote(film.vote_average, false, 2)
                : "Unknown"}
            </dd>
            <dt className="col-span-2 flex items-center space-x-1 gap-1 sm:gap-2 text-[var(--color-3)] text-sm">
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

            <div className="flex items-center">
              <StarRating className="p-2 text-white" />
            </div>
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
