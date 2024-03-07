import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory, useRouteMatch } from "react-router-dom";
import { readDeck, deleteDeck } from "../utils/api/index";
import BreadCrumb from "./BreadCrumb";
import CardList from "./Cards/CardList";

function Deck() {
    const { deckId } = useParams();
    const history = useHistory();
    const { url } = useRouteMatch()
    const [deck, setDeck] = useState({});

    //load deck & cards
    useEffect(() => {
        async function loadDeck() {
            if (deckId) {
                const loadedDeck = await readDeck(deckId);
                setDeck(() => loadedDeck);
            }
        }
        loadDeck();
    }, [deckId]);

    //delete the deck
    const handleDeckDelete = async () => {
        const confirmMessage = "Delete this deck?\n\nYou will not be able to recover it.";
        const confirm = window.confirm(confirmMessage);

        if (confirm) {
            await deleteDeck(deckId);
            history.push("/");
        }
    };

    //if there is a deck with the given ID after the state is now set, it will display.  Buttons route with links. Decided to useRouteMatch on this one to get some practice.
    if (deck.id) {
        return (
            <div>
                <BreadCrumb link={`/decks/${deckId}`} linkName={deck.name} pageName={deck.name} />
                <h3>{deck.name}</h3>
                <p>{deck.description}</p>
                <div className="row justify-content-between">
                    <div className="col-8">
                        <Link to={`${url}/edit`}>
                            <button className="btn btn-secondary mr-1">
                                <i class="bi bi-pencil"></i>Edit
                            </button>
                        </Link>
                        <Link to={`${url}/study`}>
                            <button className="btn btn-primary mr-1">
                                <i class="bi bi-eye"></i>Study
                            </button>
                        </Link>
                        <Link to={`${url}/cards/new`}>
                            <button className="btn btn-primary">
                                <i class="bi bi-file-earmark-plus"></i>Add Card
                            </button>
                        </Link>
                    </div>
                    <div className="col-2">
                        <button className="btn btn-danger bi bi-trash" onClick={handleDeckDelete}>Delete</button>
                    </div>
                </div>

                <CardList deck={deck} />
            </div>

        )
    }
    return "No deck found! Please create a new deck."
}

export default Deck;