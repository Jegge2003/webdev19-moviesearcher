import React, { Component } from "react";
import Header from "../components/header";
import MovieCardList from "../components/moviecardlist";

class HomePage extends Component {
  render() {
    if (this.props.movies.length > 0) {
      return (
        <div>
          <Header fetchData={this.props.fetchData} />
          <div className="container">
            <MovieCardList movies={this.props.movies} />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Header fetchData={this.props.fetchData} />
        </div>
      );
    }
  }
}

export default HomePage;
