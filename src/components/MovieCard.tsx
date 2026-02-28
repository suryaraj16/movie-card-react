import "./MovieCard.css";

type MovieCardProps = {
  title: string;
  year: number;
  rating: number;
  poster: string;
};

const MovieCard = ({ title, year, rating, poster }: MovieCardProps) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} className="movie-poster" />
      <div className="movie-content">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">Year: {year}</p>
        <p className="movie-rating">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
