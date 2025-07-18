import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchPopular = async () => {
    setLoading(true);

    try {
      const popular = await getPopularMovies();
      setMovies(popular);
    } catch (err) {
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopular();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      await fetchPopular();
      return;
    }

    if (loading) return;

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <Link to={`/singlemovie/${movie.id}`} key={movie.id}>
              <MovieCard movie={movie} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
