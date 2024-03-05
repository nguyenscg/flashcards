// Path should be /decks/:deckId/study
import React, { useState, useEffect } from "react";
import { readDeck } from "../utils/api/index"; // import readDeck function to load the deck that is being studied
import { Link, useParams, useHistory } from "react-router-dom"; // import Link element and useParams hook

function Study() {
    const [deck, setDeck] = useState({});
    const { deckId } = useParams(); // call the useParams hook to get the deckId from URL
    const [cards, setCards] = useState([]); // initalize cards to be an empty array. update the state with setCards
    const [cardCount, setCardCount] = useState(0); // initalize cardCount to be 1 and update the state with setCardCount
    const [frontCard, setFrontCard] = useState(true); // set the frontCard state to be true and update the state with setFrontCard
    const history = useHistory();

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

    // next button handler: two parameters 'index', 'total'
    const handleNextCard = (index, total) => { // index - current position in card deck, total is total number
        if (index >= total) { // if index is less than total number of cards, means more cards to show
          setCardCount(cardCount + 1); // increment card count to show next card
          setFrontCard(true); // show front card
        } else { // if current index is not less than total, means we've reached the end of the deck
          if (window.confirm("Restart cards? \n Click 'cancel' to return to the home page.")) {
            // restart prompt
            setCardCount(1); // if confirmed, restart card count to be 1
            setFrontCard(true); // show front of card
          } else { // if user does not want to restart, redirected to home page
            history.push("/");
          }
        }
      }
      
      // flip button handler
      const flipCard = () => {
        if (frontCard) { // if the card is on it's front side
            setFrontCard(false); // set the state to be false so it flips to the backside
        } else {
            setFrontCard(true);
        }
    }

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
                        <button type="button" className="btn btn-secondary" onClick={() => flipCard(card.id)}>Flip</button>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Study;