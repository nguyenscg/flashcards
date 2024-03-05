import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home"; // import the Home screen
import CreateDeck from "./CreateDeck"; // import CreateDeck screen
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
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
