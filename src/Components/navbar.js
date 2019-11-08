import React, { Component } from "react";
import { Link } from "react-router-dom";
import withLogin from "./withLogin";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    };
  }

  render() {
    const { logged } = this.props;

    return (
      <nav className="topnav">
        <Link to="/">
          <button className="btn-borde">Home</button>
        </Link>

        <Link to="/Form">
          <button className="btn-borde">Account</button>
        </Link>

        <Link to="/DashBoard">
          {logged && <button className="btn-borde">DashBoard</button>}
        </Link>

        <Link to="/Reports">
          {logged && <button className="btn-borde">Reports</button>}
        </Link>
      </nav>
    );
  }
}

export default withLogin(Navbar);
