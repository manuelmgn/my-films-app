import React, { useEffect } from "react";

interface SearchProps {
  myRatings: boolean;
}
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import FilmList from "./FilmList";
import { useRatingContext } from "../context/RatingContext";

function Search({ myRatings }: SearchProps) {
  //TODO: move this
  //1a: miña, 2a: pin
  const api_key: string | undefined = "192c9ace8eb6c4907b9553169418eff4";
  //const api_key: string | undefined = "8f781d70654b5a6f2fa69770d1d115a3";

  const [films, setFilms] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [title, setTitle] = React.useState("");
  const { state } = useRatingContext();

  const searchFilms = React.useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&include_video=false&api_key=${api_key}&page=1&query=${input}`,
      );
      const data = await response.json();
      setFilms(data.results.slice(0, 36));
    } catch (error) {
      console.log(error);
    }
  }, [api_key, input]);

  const fetchFilms = React.useCallback(
    async (
      sort: string,
      limit: number,
      minVotes: number,
      onlyMyRatings: boolean = false,
    ) => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&sort_by=${sort}&vote_count.gte=${minVotes}&api_key=${api_key}&page=1`,
      );
      const data = await response.json();
      if (!onlyMyRatings) {
        try {
          setFilms(data.results.slice(0, limit));
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          const ratedFilmsIds = Object.keys(state).map((id) => ({
            id: Number(id),
          }));

          setFilms(
            data.results.filter((film: { id: number }) =>
              ratedFilmsIds.some((ratedFilm) => ratedFilm.id === film.id),
            ),
          );
        } catch (error) {
          console.log(error);
        }
      }
    },
    [api_key, state],
  );

  useEffect(() => {
    if (myRatings) {
      setTitle("My Ratings");
      fetchFilms("popularity.desc", 1600, 0, true);
    } else {
      if (input == "") {
        setTitle("Popular");
        fetchFilms("popularity.desc", 16, 100);
      } else {
        setTitle("Search Results");
        searchFilms();
      }
    }
  }, [input, state, searchFilms, fetchFilms, myRatings]);

  return (
    <>
      {!myRatings && (
        <form className="y-2 py-1 px-3 w-[50%] justify-self-center flex items-center space-x-0 m rounded-2xl bg-[var(--color-2)]">
          <MagnifyingGlassIcon className="size-5 text-[var(--color-1)] shadow-white" />
          <input
            type="text"
            className="px-3 py-2 rounded w-full outline-none"
            placeholder="Search films..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      )}
      <h1 className="my-10 ml-1 font-bold text-lg text-[var(--color-1)] border-b-2 border-[var(--color-4)]">
        {title}
      </h1>
      <FilmList films={films} />
    </>
  );
}

export default Search;
