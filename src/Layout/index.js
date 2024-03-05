import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom"; // import Route and Switch
import Home from "../Components/Home"; // import the Home screen
import CreateDeck from "../Components/CreateDeck"; // import CreateDeck screen
import Deck from "../Components/Deck"; // import Deck screen
import Study from "../Components/Study"; // import Study screen
import EditDeck from "../Components/EditDeck"; // import EditDeck screen
import AddCard from "../Components/AddCard"; // import AddCard screen
import EditCard from "../Components/EditCard"; // import EditCard screen

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
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
