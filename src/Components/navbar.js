import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggued: false
    };
  }

  componentDidMount() {
    this.verifyUserLogin()
  };

  verifyUserLogin = () => {
    // verify if exists token
    const token = localStorage.getItem("token")
    if (!token) {
      this.state({ loggued: false })
      console.log("token desde localstorage: ", token)
    } else {
      console.log(token);
      fetch('https://ioteamcyf2019.herokuapp.com/api/v1/user/verify-token', {
        method: 'GET',
        headers: { 'Content-type': 'application/json', 'Authorization': token },
      })
        .then(function (res) {
          // this.setState({ loggued: isValid === 0 ? false : true })
          return console.log("validacion de token desde back", res.json())

        }).catch(function (res) {
          return console.log(res.json())
        })
    }
  }

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
