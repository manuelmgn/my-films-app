import { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { fetchGenres } from "../utils/getGenres";

const GenresContext = createContext([]);

interface GenresProviderProps {
  children: ReactNode;
}

/**
 * Provides the genres context to its children components.
 *
 * This provider fetches the genres data when it mounts and makes it available
 * to any components that consume the GenresContext.
 *
 * @param {GenresProviderProps} props - The props for the GenresProvider component.
 * @param {React.ReactNode} props.children - The child components that will have access to the genres context.
 *
 * @returns {JSX.Element} The GenresContext provider with the fetched genres data.
 */
const GenresProvider = ({ children }: GenresProviderProps) => {
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

const useGenres = () => useContext(GenresContext);

export { GenresProvider, useGenres };
