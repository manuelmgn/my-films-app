import { createContext, useReducer, ReactNode, useEffect } from "react";
import { FilmReview, Rating } from "../types/shared";
import React from "react";

const initialState: Record<number, FilmReview> = JSON.parse(
  localStorage.getItem("filmRatings") || "{}",
);

const filmReducer = (state: Record<number, FilmReview>, rating: Rating) => {
  switch (rating.type) {
    case "ADD_RATING":
    case "UPDATE_RATING": {
      const newState = {
        ...state,
        [rating.id]: rating.data,
      };
      localStorage.setItem("filmRatings", JSON.stringify(newState));
      return newState;
    }

    default:
      return state;
  }
};

const FilmContext = createContext<{
  state: Record<number, FilmReview>;
  dispatch: React.Dispatch<Rating>;
} | null>(null);

export const FilmRatingProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(filmReducer, initialState);

  useEffect(() => {
    localStorage.setItem("filmRatings", JSON.stringify(state));
  }, [state]);

  return (
    <FilmContext.Provider value={{ state, dispatch }}>
      {children}
    </FilmContext.Provider>
  );
};

export const useRatingContext = () => {
  const context = React.useContext(FilmContext);
  if (!context) {
    throw new Error(
      "useRatingContext debe usarse dentro de un FilmRatingProvider",
    );
  }
  return context;
};
