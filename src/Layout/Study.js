// Path should be /decks/:deckId/study
import React, { useState, useEffect } from "react";
import { readDeck } from "../utils/api/index"; // import readDeck function to load the deck that is being studied
import { Link, useParams} from "react-router-dom"; // import Link element and useParams hook

function Study() {
    const [deck, setDeck] = useState({});
    const { deckId } = useParams(); // call the useParams hook to get the deckId from URL
    const [cards, setCards] = useState([]); // initalize cards to be an empty array. update the state with setCards
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

    // flip button handler
    const handleFlip = () => {
        // a button of the bottom of each card "flips" it to the other side
        // after flipping card, screen shows a Next button to continue to the next card
        setfrontCard(!frontCard);
        <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
    }

    // next button handler
    const handleNext = () => {
        if (cardCount < deck.cards.length) {
            setCardCount(cardCount + 1);
            setfrontCard(true);
        }
    }

    // restart prompt
    // After final card in the deck has been shown, a message (restart prompt) is shown offering the user the opportunity to restart the deck
    // if the user does not restart the deck, they should return to the home screen
    // if (window.confirm("Restart cards? Click 'cancel' to return to the home page."));

    // Not enough cards
    // Studying a Deck with two or fewer cards should display a "Not enough cards" message and a button to add cards to the deck
    // Clicking 'Add Cards' button should take the user to the Add Card screen

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
            {cards.map((card, index) => {
                <div className="card" key={card.id}>
                    <div className="card-body">
                        <h5 className="card-title">{index + 1} of {cards.length}</h5>
                        <p className="card-text">{card.front}</p>
                        <button type="button" className="btn btn-secondary" onClick={() => handleFlip(card.id)}>Flip</button>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Study;