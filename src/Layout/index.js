import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home"; // import the Home screen
import CreateDeck from "./CreateDeck"; // import CreateDeck screen
import Deck from "./Deck"; // import Deck screen
import Study from "./Study"; // import Study screen

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
          <Route exact path="/decks/:deckId">
            <Deck />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
