// path: /decks/:deckId/edit

import React, { useState, useEffect } from "react"; // import react, useState, useEffect
import { readDeck, updateDeck } from "../utils/api/index"; // import readDeck function
import { Link, useParams, useHistory } from "react-router-dom"; // import Link element, useParams hook, useHistory hook;

function EditDeck() {
    const { deckId } = useParams();
    const history = useHistory();
    const initialState = {
        id: "",
        name: "",
        description: "",
    }
    const [deck, setDeck] = useState(initialState);
    
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
    }, [deckId]); // reruns effect when deckId changes

    // change handler
    const handleChange = ({ target }) => {
        setDeck({
            ...deck,
            [target.name]: target.value,
        });
    }

    // submit handler
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = updateDeck({...deck});
        history.push(`/decks/${deckId}`);
        return data;
    }

    const handleCancel = () => {
        history.push(`/decks/${deckId}`);
    }

    return (
    <div>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item"><Link to={`/decks/:deckId`}>{deck.name}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Edit Deck</li>
            </ol>
        </nav>
        <h2>Edit Deck</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label for="name">Name</label>
                <input 
                    id="name"
                    name="name" 
                    className="form-control"
                    type="text" 
                    value={deck.name}
                    onChange={handleChange} />
            </div>
            <div className="form-group">
                <label for="description">Description</label>
                <textarea 
                    id="description"
                    name="description" 
                    className="form-control" 
                    value={deck.description}
                    type="text"
                    onChange={handleChange}/>
            </div>
            <button type="button" className="btn btn-secondary mx-1" onClick={handleCancel}>Cancel</button>
            <button type="submit" className="btn btn-primary mx-1">Submit</button>
        </form>
    </div>
    );
}

export default EditDeck;