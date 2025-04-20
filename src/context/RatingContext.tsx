import { createContext, useReducer, ReactNode, useEffect } from "react";
import { FilmReview, Rating } from "../types/shared";
import React from "react";

/**
 * Initial state for the film ratings context.
 *
 * @type {Record<number, FilmReview>}
 */
const initialState: Record<number, FilmReview> = JSON.parse(
  localStorage.getItem("filmRatings") || "{}",
);

/**
 * Reducer function to handle film ratings state updates.
 *
 * @param state - The current state of film ratings, where the key is the film ID and the value is the film review.
 * @param rating - The rating action containing the type of action and the rating data.
 * @returns The new state of film ratings after applying the action.
 *
 * The function handles two types of actions:
 * - "ADD_RATING": Adds a new rating to the state.
 * - "UPDATE_RATING": Updates an existing rating in the state.
 *
 * The updated state is also saved to localStorage under the key "filmRatings".
 */
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

/**
 * Context for managing film ratings and reviews.
 */
const FilmContext = createContext<{
  state: Record<number, FilmReview>;
  dispatch: React.Dispatch<Rating>;
} | null>(null);

const FilmRatingProvider = ({ children }: { children: ReactNode }) => {
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

const useRatingContext = () => {
  const context = React.useContext(FilmContext);
  if (!context) {
    throw new Error("useRatingContext error");
  }
  return context;
};

export { FilmRatingProvider, useRatingContext };
