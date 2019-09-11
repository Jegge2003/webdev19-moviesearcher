import React, { Component } from "react";
import "../css/header.css";
import "../img/mic.jpg";
import Search from "./search";

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <Search fetchData={this.props.fetchData} />
      </div>
    );
  }
}

export default Header;
