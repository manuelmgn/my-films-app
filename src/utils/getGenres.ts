//TODO: move this
//1a: miña, 2a: pin
const api_key: string | undefined = "192c9ace8eb6c4907b9553169418eff4";
//const api_key: string | undefined = "8f781d70654b5a6f2fa69770d1d115a3";

export async function fetchGenres() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}`,
    );
    const data = await response.json();
    return data.genres;
  } catch (error) {
    console.log(`Error trying to catch genres: ${error}`);
    return [];
  }
}
