import React, { useEffect } from "react";

import FilmList from "./FilmList";
import { useRatingContext } from "../context/RatingContext";
import { fetchFilms } from "../utils/fetchFilms";

/**
 * The `ShowFilms` component allows users to search for films and display a list of films based on the search query or predefined criteria.
 *
 * @returns {JSX.Element} The rendered ShowFilms component.
 *
 */
function ShowMyRatings() {
  const [films, setFilms] = React.useState([]);
  const [title] = React.useState("My Ratings");
  const { state } = useRatingContext();

  useEffect(() => {
    const fetchRatedFilms = async () => {
      try {
        const data = await fetchFilms("popularity.desc", 0);
        const ratedFilmsIds = Object.keys(state).map((id) => Number(id));

        setFilms(
          data.results.filter((film: { id: number }) =>
            ratedFilmsIds.includes(film.id),
          ),
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchRatedFilms();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 className="my-10 ml-1 font-bold text-lg text-[var(--color-1)] border-b-2 border-[var(--color-4)]">
        {title}
      </h1>
      {films.length > 0 ? (
        <FilmList films={films} />
      ) : (
        <p className="text-[var(--color-4)] text-l">No films rated yet.</p>
      )}
    </>
  );
}

export default ShowMyRatings;
