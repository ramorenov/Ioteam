import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    };
  }

  componentDidMount() {
    this.verifyUserLogin();
  }

  verifyUserLogin = () => {
    // verify if exists token
    const token = localStorage.getItem("token");
    if (!token) {
      this.setState({ logged: false });
    } else {
      fetch("https://ioteamcyf2019.herokuapp.com/api/v1/user/verify-token", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          authorization: token
        }
      })
        .then(res => {
          return res.json();
        })
        .then(res => {
          this.setState({ logged: res.valid });
          console.log(this.state.logged);
        })
        .catch(function(res) {
          return console.log(res);
        });
    }
  };

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
