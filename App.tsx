import "./App.css";
import MovieCard from "./components/MovieCard";

type Movie = {
  id: number;
  title: string;
  year: number;
  rating: number;
  poster: string;
};

function App() {
  const movies: Movie[] = [
    {
      id: 1,
      title: "Inception",
      year: 2010,
      rating: 8.8,
      poster: "https://picsum.photos/300/450?random=1",
    },
    {
      id: 2,
      title: "Interstellar",
      year: 2014,
      rating: 8.6,
      poster: "https://picsum.photos/300/450?random=2",
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: 2008,
      rating: 9.0,
      poster: "https://picsum.photos/300/450?random=3",
    },
  ];

  return (
    <div className="app-container">
      <h1 className="app-title">Movie Collection</h1>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
            rating={movie.rating}
            poster={movie.poster}
          />
        ))}
      </div>
    </div>
  );
}

export default App;