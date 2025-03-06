import React, { useEffect } from "react";
import FilmCard from "./FilmCard";

function FilmList(props: any) {
  //TODO: move this
  const api_key: string | undefined = "8f781d70654b5a6f2fa69770d1d115a3";

  const [films, setFilms] = React.useState([]);

  async function fetchFilms() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&sort_by=${props.sortBy}&vote_count.gte=${props.minVotes}&api_key=${api_key}&page=1`,
      );
      const data = await response.json();
      setFilms(data.results.slice(0, props.limit));
      console.log(data.results.slice(0, props.limit));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchFilms();
  }, []);
  return (
    <div>
      <h1 className="my-10 p-3 bg-[var(--color-3)] rounded-xl">{props.name}</h1>
      <div className="grid grid-cols-4 gap-10">
        {films.map((film: any) => FilmCard(film))}
      </div>
    </div>
  );
}

export default FilmList;
