import React, { Component } from "react";
import { Link } from "react-router-dom";
import withLogin from "./withLogin";

class Navbar extends Component {
  render() {
    const { logged, toogleLogged } = this.props;

    return (
      <nav className="topnav">
        <Link to="/">
          <button className="btn-borde">Home</button>
        </Link>

        <Link to="/form">
          <button className="btn-borde">Account</button>
        </Link>

        <Link to="/dashboard">
          {logged && <button className="btn-borde">DashBoard</button>}
        </Link>

        <Link to="/reports">
          {logged && <button className="btn-borde">Reports</button>}
        </Link>

        <Link to="/">
          {logged && (
            <button onClick={() => toogleLogged(false)} className="btn-borde">
              LogOut
            </button>
          )}
        </Link>
      </nav>
    );
  }
}

export default withLogin(Navbar);
