import React, { useState } from "react";
import FilmCard from "./FilmCard";
import FilmModal from "./FilmModal";

function FilmList({ films }: { films: any }) {
  const [selectedFilm, setSelectedFilm] = useState(null);

  const handleSelectedFilm = (film: any) => {
    setSelectedFilm(film);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-10">
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
