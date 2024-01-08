import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Layout() {
  return (
    <>
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/"></Route>
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