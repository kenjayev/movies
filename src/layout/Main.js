import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieList from "../components/main/movie-list/MovieList";

class Main extends React.Component {
  request = (requestLink) => {
    return fetch(requestLink)
      .then((response) => response.json())
      .then((data) => data);
  };
  render() {
    return (
      <main style={{ marginTop: "80px" }}>
        <Routes>
          <Route
            path="/list/:params"
            element={<MovieList request={this.request} />}
          />
        </Routes>
      </main>
    );
  }
}

export default Main;
