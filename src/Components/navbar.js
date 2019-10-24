import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="topnav">
        <Link to="/">
          <button className="btn-borde">Home</button>
        </Link>

        <Link to="/Form">
          <button className="btn-borde">Register</button>
        </Link>

        <Link to="/DashBoard">
          <button className="btn-borde">DashBoard</button>
        </Link>

        <Link to="/Reports">
          <button className="btn-borde">Reports</button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
