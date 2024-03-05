import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home"; // import the Home screen
import { Route, Link, Switch } from "react-router-dom"

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
