import { useState, useEffect, useCallback, useRef } from "react";
import Movie from "../services/movies";

export function useMovies(searchParam) {
  const [movies, setMovies] = useState([]);
  const isFirstRender = useRef(true);

  const getMovies = useCallback(async (searchParam) => {
    if (searchParam.length === 0) return [];

    const result = await Movie.getMovies(searchParam);
    setMovies(result);
  }, []);

  useEffect(() => {
    
    // Omit the efect in the first render; 
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }


    // Create Debounce
    let idTimer;
    idTimer = setTimeout(() => {
      getMovies(searchParam);
    }, 1500);

        // TODO: Clear prev debounce
    return () => {

      if (idTimer) {
        clearTimeout(idTimer);
      }
    };
  }, [searchParam, getMovies]);

  return { movies, getMovies };
}
