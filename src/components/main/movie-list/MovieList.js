import React from "react";
import MovieItem from "../movie-item/MovieItem";
// import PaginationBar from "./pagination/PaginationBar";
import { useParams } from "react-router-dom";
// Style
import "./MovieList.css";
import PaginationList from "./pagination-list/PaginationList";

// HOC yordamida useParams ni class componentga uzatamiz
function withRouter(Component) {
  return (props) => {
    const params = useParams();
    return <Component {...props} params={params} />;
  };
}

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    const page = new URLSearchParams(window.location.search).get("page");
    this.state = {
      movies: [],
      total_pages: 0,
      currentPage: +page,
      href: "",
    };
  }

  /// request by page
  pageRequest = () => {
    console.log("Page Request Start");
    const { params } = this.props.params;
    const query = new URLSearchParams(window.location.search);

    const language = query.get("language");
    const page = query.get("page");
    let type = query.get("type");
    if (params === "tv" && query.get("type") === "upcoming")
      type = "airing_today";

    let link;
    if (query.size === 0 || type === "cartoon") {
      link = `https://api.themoviedb.org/3/discover/${params}?api_key=45b5011c63b6dfe0727f4a5ad0d341c0&language=en-US&sort_by=popularity.desc${
        type === "cartoon" ? "&with_genres=16" : ""
      }&page=${page || 1}`;
    } else {
      link = `https://api.themoviedb.org/3/${params}/${type}?api_key=45b5011c63b6dfe0727f4a5ad0d341c0&language=${
        language || "en-US"
      }&page=${page || 1}`;
    }

    this.props.request(link).then((data) =>
      this.setState({
        currentPage: +page,
        movies: data.results,
        total_pages: data.total_pages,
        href: window.location.href,
      })
    );
    console.log(
      "Page Request End....",
      page,
      this.state.currentPage,
      this.state.href,
      link
    );
  };

  handlePageChange = (page) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("page", page);
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.replaceState(null, "", newUrl);
    this.pageRequest();
  };

  render() {
    if (window.location.href !== this.state.href) {
      this.pageRequest();
    }
    const { movies, total_pages, currentPage, href } = this.state;

    return (
      <div className="MoviesPages">
        <div className="container">
          <div className="moviePages__header">
            <h2 className="moviePages__header__title">
              {href.includes("upcoming") && "Upcoming"}
              {href.includes("top_rated") && "Favorite"}
              {href.includes("cartoon") && "Cartoon"}
              {href.includes("popular") && "Popular"}{" "}
              {href.includes("movie") && "Movie"}
              {href.includes("tv") && "Series"}
            </h2>
            <div className="moviePages__header__control"></div>
          </div>

          <div className="moviePages__list">
            <MovieItem movies={movies} />
          </div>
          <PaginationList
            currentPage={currentPage}
            totalPages={total_pages > 500 ? 500 : total_pages}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(MovieList);
