import { createContext, useContext, useEffect, useState } from "react";
import { fetchGenres } from "../utils/getGenres";

const GenresContext = createContext([]);

import { ReactNode } from "react";

interface GenresProviderProps {
  children: ReactNode;
}

export const GenresProvider = ({ children }: GenresProviderProps) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenres = async () => {
      const genresData = await fetchGenres();
      setGenres(genresData);
    };
    getGenres();
  }, []);

  return (
    <GenresContext.Provider value={genres}>{children}</GenresContext.Provider>
  );
};

export const useGenres = () => useContext(GenresContext);
