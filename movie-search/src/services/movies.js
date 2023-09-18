const API_KEY_OMDB = "ff55c2c8";
const URL_OMDB = `http://www.omdbapi.com/?apikey=${API_KEY_OMDB}&r=json`;

const getMovies = async (searchParam = "") => {
  try {
    const res = await fetch(`${URL_OMDB}&s=${searchParam}`);
    const data = await res.json();
    const { Search: results } = data;

    return results.map(({ Poster, Title, Year }) => {
      return { id: 1, title: Title, year: Year, poster: Poster };
    });
  } catch (error) {
    throw new Error("Error searching movies");
  }
};

const Movie = Object.freeze({ getMovies });
export default Movie;
