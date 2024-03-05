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
import { Link, useParams} from "react-router-dom"; // import Link element and useParams hook

function Study() {
    const [deck, setDeck] = useState({});
    const { deckId } = useParams(); // call the useParams hook to get the deckId from URL
    const [cardCount, setCardCount] = useState(1); // initalize cardCount to be 1 and update the state with setCardCount
    const [frontCard, setfrontCard] = useState(true); // set the frontCard state to be true and update the state with setFrontCard

    // useEffect hook to get the readDeck function data to read an ID
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
                    <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Study</li>
                 </ol>
            </nav>
            <h1>Study: {deck.name}</h1>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{cardCount} of card.length</h5>
                    <p className="card-text">{deck.description}</p>
                    <button type="button" className="btn btn-secondary">Flip</button>
                </div>
            </div>
        </div>
    )
}

export default Study;