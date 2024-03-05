// Path sould be /decks/:deckId/study
// must use readDeck function
// Breadcrumb nav / links to home / follow by name of the deck being studied, and the text Study
// deck Title
// Cards are shown one at a time, front-side first
// A button at the bottom of each card "flips" it to the other side.
// After flipping the card, the screen shows a Next button
// After final card in the deck has been shown, a message (restart prompt) is shown offering the user the opportunity to restart the deck
// if the user does not restart the deck, they should return to the home screen
// Studying a deck with two or fewer cards should display "Not enough cards" message and a button to add cards to the deck
import React, { useState, useEffect } from "react";
import { readDeck } from "../utils/api/index"; // import readDeck function
import { Link } from "react-router-dom"; // import Link element

function Study({ deckId }) {
    const [deck, setDeck] = useState({});
    useEffect(() => {
        const fetchDeck = async () => {
            try {
                const data = await readDeck(deckId);
                setDeck(data);
            }
            catch(error) {
                console.log("Error fetching deck: ", error);
            }
        }
        fetchDeck();
    }, [deckId]); // rerun the effect if deckId changes; 

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/decks/${deckId}">{deck.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Study</li>
                 </ol>
            </nav>
            <h1>Study: {deck.name}</h1>
        </div>
    )
}

export default Study;