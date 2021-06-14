/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 */

import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Login } from "../modules/Auth";
import { Users } from "../modules/Users";
import { Register } from "../modules/Users";

export function Routes() {
  return (
    <Router>
        {/* <Switch>
          <Route exact={true} path="/" component={Login} />
          <Route path="/user" component={Users} />
        </Switch> */}

<nav className="navbar navbar-expand-lg navbar-light fixed-top">
  <div className="container">
    <Link className="navbar-brand" to={"/"}>sample.io</Link>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to={"/login"}>Login</Link>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to={"/register"}>Register</Link> */}
        </li>
      </ul>
    </div>
  </div>
</nav>

<div className="auth-wrapper">
    <Switch>
      <Route exact path='/' component={Login} />
      <Route exact path='/login' component={Login} />
      <Route path="/home" component={Users} />
      <Route path="/register" component={Register} />
    </Switch>
</div>
    </Router>
  );
}

