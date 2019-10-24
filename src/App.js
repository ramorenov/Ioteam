import React from "react";
import Home from "./Screens/home/home";
import Navbar from "./Components/navbar";
import Form from "./Screens/registerIO/Form";
import NotFound from "./Screens/not-found/notFound";
import DashBoard from "./Screens/dashboard/dashboard";
import Reports from "./Screens/reports/Reports";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Form">
          <Form />
        </Route>
        <Route exact path="/Reports">
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
  );
}

export default App;
