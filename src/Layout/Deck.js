// The Deck screen displays all of the information about a deck.
// Features:
// 1) The path to this screen should include the deckId (i.e., /decks/:deckId)
// 2) You must use the readDeck() function from src/utils/api/index.js to load the existing deck.
// 3) There is a breadcrumb navigation bar with a link to home / followed by the name of the deck (e.g., Home/React Router).
// 4) The screen includes the deck name (e.g., "React Router") and deck description (e.g., "React Router is a collection of navigational components that compose declaratively in your application").
// 5) The screen includes Edit, Study, Add Cards, and Delete buttons. Each button takes the user to a different destination, as follows:
import React, { useState, useEffect } from "react"; // import react
import { useParams, Link } from "react-router-dom"; // import useParams hook;
import { readDeck } from "../utils/api/index"; // import readDeck function from api;

function Deck() {
    const params = useParams();
    const [deck, setDeck] = useState({});

    useEffect(() => {
        const fetchDeck = async () => {
            try {
                const decksData = await readDeck();
                setDeck(decksData);
            }
            catch(error) {
                console.log("Error fetching decks:", error);
            }
        };
        fetchDeck();
    }, []); // empty dependency array, run effect once

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">{deck.name}</li>
                </ol>
            </nav>
        </>
    )
}

export default Deck;