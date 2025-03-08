export type Film = {
  id: number;
  genre_ids: number[];
  poster_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
};

export type Genre = {
  id: number;
  name: string;
};
