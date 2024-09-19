import React from "react";
import { Link } from "react-router-dom";
import "./MovieItem.css";

class MovieItem extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <>
        {movies &&
          movies.length > 0 &&
          movies.map((movie) => (
            <Link
              className="movies__item"
              key={movie.id}
              ref={this.movieCardRef}
              to={`/movie/${movie.title || movie.name}?id=${movie.id}`}
            >
              <div className="movies__item__imageBox">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt=""
                />
              </div>
              <div className="movies__item__body">
                <h3 className="movies__item__title">
                  {movie.title || movie.name}
                </h3>
              </div>
            </Link>
          ))}
      </>
    );
  }
}

export default MovieItem;
