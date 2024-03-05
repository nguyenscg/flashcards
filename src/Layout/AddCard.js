// ADD CARD screen allows the user to add a new card to an existing deck
// path should be: /decks/:deckId/cards/new
// breadcrumb nav with home / deck name / add card
// screen displays: deck name: Add Card deck title
// form is shown with the "front" and "back" fields for a new card. both fields use a <textarea> tag that can accommodate multiple lines of text
// if the user clicks save, new card is created and associated with relevant deck. then the form is cleared and the process for adding a card is restarted
// if user clicks done, the user is taken to the deck screen
import React, { useState, useEffect } from "react"; // import React, useState hook, and useEffect hook
import { readDeck } from "../utils/api/index"; // import readDeck function
import { Link, useParams, useHistory } from "react-router-dom"; // import Link element, useParams hook, useHistory hook


function AddCard() {
    const { deckId } = useParams();
    const [deck, setDeck] = useState({});
    
    useEffect(() => {
        const fetchDeck = async () => {
            try {
                const deckData = await readDeck(deckId);
                setDeck(deckData);
            }
            catch(error) {
                console.log("Error loading deck: ", error);
            }
        }
        fetchDeck();
    }, []);

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li class="breadcrumb-item"><a href="#">{deck.name}</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Add Card</li>
                </ol>
            </nav>
            <h2>{deck.name}: Add Card</h2>
            Front 
            Back
        </div>
    );
}

export default AddCard;