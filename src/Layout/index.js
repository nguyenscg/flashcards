import React, { useEffect, useState } from "react";
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
import { listDecks } from ".././utils/api/index";
function Layout() {

  const [decks, setDecks] = useState([]);

  //load decks
  useEffect(() => {
      setDecks([]);
      const abortController = new AbortController();
      async function loadDecks() {
          try {
              const loadedDecks = await listDecks();
              setDecks(loadedDecks);
          } catch (error) {
              if (error.name !== "AbortError") {
                  throw error;
              }
          }
      }
      loadDecks();
      return () => abortController.abort();
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
        <Route exact path="/">
                        <Home decks={decks} />
                    </Route>
          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <Deck />
          </Route>
          <Route exact path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route exact path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;