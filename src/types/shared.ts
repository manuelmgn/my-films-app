// -----------------------------------------------------------------------------
// Film
// -----------------------------------------------------------------------------

export type Film = {
  id: number;
  genre_ids: number[];
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
};

// -----------------------------------------------------------------------------
// Modal
// -----------------------------------------------------------------------------

export type Genre = {
  id: number;
  name: string;
};

export type FilmModalProps = {
  id: number;
  onClose: () => void;
};

// -----------------------------------------------------------------------------
// Rating Types
// -----------------------------------------------------------------------------

export type FilmReview = {
  comment: string;
  rating: number;
};

export type Rating =
  | { type: "ADD_RATING"; id: number; data: FilmReview }
  | { type: "UPDATE_RATING"; id: number; data: FilmReview };
