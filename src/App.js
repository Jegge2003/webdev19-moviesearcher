import React, { Component } from "react";
import axios from "axios";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import { BrowserRouter, Route } from "react-router-dom";

const key = "506aedfa93887c247a6a21a27f261488";
const baseUrlWithKey = `https://api.themoviedb.org/3/search/movie?api_key=${key}`;

class App extends Component {
  state = {
    movies: []
  };

  fetchData = searchTerm => {
    axios
      .get(`${baseUrlWithKey}&query=${searchTerm}`)
      .then(data => this.setState({ movies: data.data.results }));
  };

  render() {
    return (
      <BrowserRouter>
        <Route
          path="/"
          exact
          render={() => (
            <HomePage movies={this.state.movies} fetchData={this.fetchData} />
          )}
        />
        <Route path="/:movieID" component={MoviePage} />
      </BrowserRouter>
    );
  }
}

export default App;
