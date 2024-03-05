// path: /decks/:deckId/edit
// breadcrumb nav
// breadcrumb nav / home / deck name / Edit Deck
// displays same form as Create Deck screen, except it is prefilled with infor for the existing deck
// user can edit and update the form
// if the user clicks cancel, the user is taken to the Deck screen

import React, { useState, useEffect } from "react"; // import react, useState, useEffect
import { readDeck } from "../utils/api/index"; // import readDeck function
import { Link, useParams, useHistory } from "react-router-dom"; // import Link element, useParams hook, useHistory hook;

function EditDeck() {
    const { deckId } = useParams();

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
        <form>
            <div className="form-group">
                <label for="name">Name</label>
                <textarea id="name" className="form-control" placeholder="Prefilled Deck"></textarea>
            </div>
            <div className="form-group">
                <label for="description">Description</label>
                <textarea id="description" className="form-control" placeholder="Prefilled Description"></textarea>
            </div>
            <button type="button" className="btn btn-secondary mx-1" onClick={handleCancel}>Cancel</button>
            <button type="button" className="btn btn-primary mx-1">Submit</button>
        </form>
    </div>
    );
}

export default EditDeck;