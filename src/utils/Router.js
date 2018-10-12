import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Login from "../views/Login";
import Doctor from "../views/Doctor";
import Admin from "../views/Admin";
import Patient from "../views/Patient";
import Register from "../views/Register";

const Router = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/doctor" component={Doctor} />
      <Route exact path="/admin" component={Admin} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/patient" component={Patient} />
      <Route exact path="/register" component={Register} />
    </React.Fragment>
  </BrowserRouter>
);

export default Router;
