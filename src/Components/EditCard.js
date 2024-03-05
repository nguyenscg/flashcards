// path: /decks/:deckId/cards/:cardId/edit
// must use readDeck()
// readCard() function too
// breadcrumb nav bar with link to home/ name of deck which is edited card is a member, and finally edit card: cardId
// displays the same from Add Card screen, except it is prefilled with information for existing card. It can be edited and updated
// if user clicks on either save or cancel, the user is taken to the deck screen

import React, { useState, useEffect } from "react";
import { readDeck, readCard, updateCard } from "../utils/api/index"; // import readDeck function and readCard function
import { Link, useParams, useHistory } from "react-router-dom"; // import useParams hook

function EditCard() {
    const { deckId } = useParams();
    const { cardId } = useParams();
    const [deck, setDeck] = useState({});
    const [card, setCard] = useState({});
    const history = useHistory();

    useEffect(() => {
        const fetchDeck = async () => {
          const abortController = new AbortController();
            try {
                const deckData = await readDeck(deckId, abortController.signal);
                setDeck(deckData);
            }
            catch(error) {
                console.log("Error loading deck: ", error);
            }
            return () => {
                abortController.abort();
            }
        }
        fetchDeck();
    }, [deckId]);

    useEffect(() => {
        const fetchCard = async () => {
          const abortController = new AbortController();
            try {
                const cardData = await readCard(cardId, abortController.signal);
                setCard(cardData);
            }
            catch(error) {
                console.log("Error loading cards: ", error);
            }
            return () => {
                abortController.abort();
            }
        }
        fetchCard();
    }, [cardId]);
  
  const handleCancel = () => {
    history.push("/decks/:deckId");
  }
  
  async function handleSubmit(event) {
    event.preventDefault();
    const abortController = new AbortController();
    const response = await updateCard({ ...card }, abortController.signal);
    history.push(`/decks/${deckId}`);
  }


    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to={`/decks/:deckId`}>Deck {deck.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Edit Card Num</li>
                </ol>
            </nav>
            <h2>Edit Card</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="front">Front</label>
                    <textarea id="front" className="form-control" value={card.front}/>
                </div>
                <div className="form-group">
                    <label htmlFor="back">Back</label>
                    <textarea id="back" className="form-control" value={card.back}/>
                </div>
                <button type="button" className="btn btn-secondary mx-1" onClick={handleCancel}>Cancel</button>
                <button type="button" className="btn btn-primary mx-1">Submit</button>
            </form>
        </div>
    );
}

export default EditCard;