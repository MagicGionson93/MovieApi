import { useParams } from "react-router-dom";
import { singleMovie } from "../services/api";
import { useEffect, useState } from "react";
import "../css/SingleMovie.css";

function SingleMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const data = await singleMovie(id);
        setMovie(data);
      } catch (err) {
        console.log(err);
      }
    };
    loadMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>; // 👈 protegge dal crash

  return (
    <>
      <div className="single-movie">
        <img
          className="poster"
          src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="info">
          <h2 className="title">Title: {movie.title}</h2>
          <p>Release Date: {movie.release_date}</p>
            <p>Genre: &nbsp;
              {movie.genres.map(genre => genre.name).join(", ")}
            </p>
          <div className="description">
            <h2>Decription: </h2>
            <p>{movie.overview}</p>            
            {/* <p>
              Genere:{" "}
              {movie.genres.map((genre) => (
                <span key={genre.id}> {genre.name} </span>
              ))}
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleMovie;
