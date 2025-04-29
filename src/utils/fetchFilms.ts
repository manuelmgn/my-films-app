import { API_KEY, TMDB_BASE_URL } from "../env";

// Retrieve films based on predefined criteria
export async function fetchFilms(sort: string, minVotes: number) {
  const response = await fetch(
    `${TMDB_BASE_URL}/discover/movie?include_adult=false&include_video=false&sort_by=${sort}&vote_count.gte=${minVotes}&api_key=${API_KEY}&page=1`,
  );
  const data = await response.json();
  return data;
}
