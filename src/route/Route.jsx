import React from "react";
import {
  BrowserRouter as Router,

  Route,

} from "react-router-dom";
import User from "../component/User";
import Home from "../component/Home";
import About from "../component/About";

export default function RouterCom() {
  return (
    <Router>
  {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
  
          <Route path="/about">
            <About />
          </Route>


          <Route path="/user">
            <User />
          </Route>


          <Route path="/" exact>
            <Home />
          </Route>
    

    </Router>
  );
}
