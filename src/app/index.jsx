import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./../scss/main.scss";

import Login from "./pages/login.jsx";
import Logout from "./pages/logout.jsx";
import FarmsView from "./pages/Farms.jsx";
// import Users from "./pages/Users.jsx";

render(
  <Router>
    <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />
    <Route exact path="/farms" component={FarmsView} />
      
      {/* <Route exact path="/users" component={Users} /> */}
    </Switch>
  </Router>,
  document.getElementById("app")
);
