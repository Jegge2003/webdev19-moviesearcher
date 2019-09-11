import React, { Component } from "react";
import axios from "axios";
import keys from "../config/keys";

const key = keys.moviedb_API_KEY;
const baseUrlWithKey = `https://api.themoviedb.org/3/movie/`;

class MoviePage extends Component {
  state = {
    movie: null
  };

  fetchMovie = movieID => {
    axios
      .get(`${baseUrlWithKey}//${movieID}?api_key=${key}`)
      .then(data => this.setState({ movie: data.data }));
  };

  componentDidMount() {
    const { movieID } = this.props.match.params;

    this.fetchMovie(movieID);
  }

  renderMovie = () => {
    return (
      <div>
        <h1>Movie Title: {this.state.movie.title}</h1>
      </div>
    );
  };

  render() {
    if (this.state.movie === !undefined) {
      return this.renderMovie();
    } else {
      return <h1>Movie Page</h1>;
    }
  }
}

export default MoviePage;
