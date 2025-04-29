import { useEffect, useState } from "react";

import FilmCard from "./FilmCard";
import FilmModal from "./FilmModal";
import { Film } from "../types/shared";

/**
 * A component that renders a list of films and allows the user to select a film to view more details.
 *
 * @param {Object} props - The component props.
 * @param {Film[]} props.films - An array of film objects to be displayed.
 * @returns {JSX.Element} The rendered component.
 *
 * @example
 * const films = [
 *   { id: 1, title: 'Film 1', description: 'Description 1' },
 *   { id: 2, title: 'Film 2', description: 'Description 2' },
 * ];
 * <FilmList films={films} />
 */
function FilmList({ films }: { films: Film[] }) {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);

  const handleSelectedFilm = (film: Film) => {
    setSelectedFilm(film);
  };

  // Handle the back button in the browser
  // When the modal is open, it prevents the default behavior of the back button
  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    const handlePopState = (e: PopStateEvent) => {
      if (selectedFilm) {
        e.preventDefault();
        setSelectedFilm(null);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [selectedFilm]);

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

      {/* Show the modal when a film is selected */}
      {selectedFilm && (
        <FilmModal film={selectedFilm} onClose={() => setSelectedFilm(null)} />
      )}
    </>
  );
}

export default FilmList;
