import { useState } from "react";
import FilmCard from "./FilmCard";
import FilmModal from "./FilmModal";
import { Film } from "../types/shared";

function FilmList({ films }: { films: Film[] }) {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  const handleSelectedFilm = (film: Film) => {
    setSelectedFilm(film);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {films.map((film) => (
          <FilmCard
            key={film.id}
            film={film}
            onSelectFilm={handleSelectedFilm}
          />
        ))}
      </div>

      {selectedFilm && (
        <FilmModal film={selectedFilm} onClose={() => setSelectedFilm(null)} />
      )}

      {console.log(selectedFilm)}
    </>
  );
}

export default FilmList;
