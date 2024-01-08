import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Layout() {
  return (
    <>
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default Layout;