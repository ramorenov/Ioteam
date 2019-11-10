import React from "react";
import Home from "./Screens/home/home";
import Navbar from "./Components/navbar";
import Form from "./Screens/login/Form";
import NotFound from "./Screens/not-found/notFound";
import DashBoard from "./Screens/dashboard/dashboard";
import Reports from "./Screens/reports/Reports";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const MyContext = React.createContext();

class App extends React.Component {
  state = {
    logged: false
  };

  componentDidMound() {
    this.verifyUserLogin();
  }

  componentWillUnmount() {
    this.setState({ logged: false });
  }

  toogleLogged = value => {
    this.setState({ logged: value });
  };

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
          //console.log(this.state.logged);
        })
        .catch(function(res) {
          return console.log(res);
        });
    }
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          logged: this.state.logged,
          toogleLogged: this.toogleLogged
        }}
      >
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/form">
              <Form />
            </Route>
            <Route exact path="/reports">
              <Reports />
            </Route>
            <Route exact path="/dashboard">
              <DashBoard />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </MyContext.Provider>
    );
  }
}

export default App;
