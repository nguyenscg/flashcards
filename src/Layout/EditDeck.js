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
}

export default EditDeck;