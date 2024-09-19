import "./MovieInfo.css";
import React, { Component } from "react";
import { useLocation } from "react-router-dom";

export default class MovieInfo extends Component {
  state = {
    movieData: {},
  };

  componentDidMount() {
    const query = new URLSearchParams(window.location.search);
    const id = query.get("id");
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=45b5011c63b6dfe0727f4a5ad0d341c0&language=en-US`
    )
      .then((req) => req.json())
      .then((data) => this.setState({ movieData: data }));
  }

  render() {
    const { movieData } = this.state;
    console.log(movieData.origin_country);
    const backdropStyle = {
      background: `linear-gradient( to right, rgba(0, 0, 0, 1) calc((50vw - 170px) - 340px), rgba(0, 0, 0, 0.75) 40%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 0.75) 100%),
      url("https://image.tmdb.org/t/p/w1280${movieData.backdrop_path}")`,
    };
    return (
      <div className="MovieInfo">
        <div className="backdrop__banner" style={backdropStyle}>
          <div className="container">
            <div className="poster__box">
              <img
                src={`https://image.tmdb.org/t/p/w300${movieData.poster_path}`}
                alt=""
              />
            </div>
            <div className="movie__main__info">
              <h2 className="movie__title">
                {movieData.title}{" "}
                <span>
                  (
                  {movieData.release_date && movieData.release_date.slice(0, 4)}
                  )
                </span>
              </h2>
              <p className="movie__original__title">
                <span>Original title:</span> {movieData.original_title}
              </p>
              <p className="release__data">
                <span>
                  <i className="fa-solid fa-calendar-days"></i>
                  {movieData.release_date &&
                    movieData.release_date.split("-").reverse().join("/")}{" "}
                  ({movieData.origin_country && movieData.origin_country})
                </span>
                ~
                <span>
                  <i className="fa-regular fa-clock"></i>
                  {movieData.runtime &&
                    `${Math.floor(movieData.runtime / 60)}h ${
                      movieData.runtime % 60
                    }min`}
                </span>
              </p>
              <div className="vote__average__box">
                <i className="fa-solid fa-star"></i>
                {movieData.vote_average && movieData.vote_average.toFixed(1)} /
                10
              </div>
              <div className="genres">
                {movieData.genres &&
                  movieData.genres.map((item) => (
                    <span key={item.name}>{item.name} </span>
                  ))}
              </div>

              <div className="short__description__box">
                <h3>Description:</h3>
                <i>{movieData.tagline}</i>
                <p>{movieData.overview}</p>
              </div>
              <div className="vote__count__box">
                <span className="like">
                  <i className="fa-solid fa-thumbs-up"></i>
                </span>
                <span>
                  +
                  {movieData.vote_count && movieData.vote_count > 1000
                    ? `${(movieData.vote_count / 1000).toFixed(1)}k`
                    : movieData.vote_count}
                </span>
                <span className="user">
                  <i className="fa-solid fa-user"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
