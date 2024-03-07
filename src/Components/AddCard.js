// ADD CARD screen allows the user to add a new card to an existing deck
// path should be: /decks/:deckId/cards/new
// if the user clicks save, new card is created and associated with relevant deck. then the form is cleared and the process for adding a card is restarted
// if user clicks done, the user is taken to the deck screen
import React, { useState, useEffect } from "react"; // import React, useState hook, and useEffect hook
import { readDeck, createCard } from "../utils/api/index"; // import readDeck function
import { Link, useParams, useHistory } from "react-router-dom"; // import Link element, useParams hook, useHistory hook
import FormCard from "./FormCard"; // import FormCard component

function AddCard() {
    const { deckId } = useParams();
    const [deck, setDeck] = useState({});
    const history = useHistory();

    // clear state
    const initialState = {
        front: "",
        back: "",
    };

    const [formData, setFormData] = useState(initialState)
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

    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target. value,
        });
    }

    const handleSave = () => {
        createCard(deckId, formData);
        setFormData(initialState); // clear form data
    }

    const handleDone = () => {
        history.push(`/decks/${deckId}`);
    }

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to={`/decks/${deckId}`}>{deck.name}</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Add Card</li>
                </ol>
            </nav>
            <h2>{deck.name}: Add Card</h2>
            <FormCard
                 deck={deck}
                 formData={formData}
                 handleChange={handleChange}
                 handleSubmit={handleSave}
                 isEditing={false}
            />
                  <div>
        <button
          className="btn btn-secondary m-2"
          onClick={() => history.push(`/decks/${deckId}`)}
        >
          Done
        </button>
        <button
          type="submit"
          className="btn btn-primary m-2"
          onClick={handleSave}
        >
          Save
        </button>
      </div></div>
    );
}

export default AddCard;