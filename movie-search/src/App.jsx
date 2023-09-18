import ResponsiveGrid from "./components/ResponsiveGrid";

import { useForm } from "./hooks/useForm";
import { useMovies } from "./hooks/useMovies";

const App = () => {
  const [formValues, handleInputChange] = useForm({ searchParam: "" });
  const { searchParam } = formValues;
  const { movies, getMovies } = useMovies(searchParam);

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(searchParam);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "30px",
      }}
    >
      <h1>Buscador de peliculas</h1>
      <header>
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "10px" }}>
          <input
            type="search"
            value={searchParam}
            placeholder="Avngers, Spiderman, Invictus ...."
            onChange={handleInputChange}
            name="searchParam"
          />
          <button>Buscar</button>
        </form>
      </header>

      <main style={{ width: "100%" }}>
        <p>Results here</p>
        {movies.length > 0 && (
          <ResponsiveGrid>
            {movies.map(({ id, title, year, poster }) => {
              return (
                <li key={id}>
                  <h1>{title}</h1>
                  <p>{year}</p>
                  <img src={poster} alt={`Imagen de el audiovisual ${title}`} />
                </li>
              );
            })}
          </ResponsiveGrid>
        )}
      </main>
    </div>
  );
};

export default App;
