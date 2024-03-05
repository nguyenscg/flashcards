// The Home screen has a Create Deck button that brings the user to the Create Deck screen.
// path should be: /decks/new
// 1) breadcrumb navigtion bar with a link to home '/' followed by the text Create Deck ex: Home/Create Deck
// 2) A form is shown with appropriate fields for creating a new deck
// --- name field is an <input> field of type text
// --- description field is a <textarea> field that can be multiple lines of text
// IF user clicks submit, the user is taken to the DECK screen
// IF user clicks cancel, the user is taken to the HOME screen
import React, { useState } from "react"; // import react & useState hook

const [name, setName] = useState("");
const [description, setDescription] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
    setName("");
    setDescription("");
}

const handleNameChange = (event) => setName(event.target.value);
const handleDescriptionChange = (event) => setDescription(event.target.value);

function CreateDeck() {
    return (
        <>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page">Create Deck</li>
            </ol>
        </nav>
        <form>
            <label htmlFor="name">
                Name
                <input
                    id="name"
                    type="text"
                    placeholder="Deck Name"
                    name="name"
                    onChange={handleNameChange}
                    value={name}
                />
            </label>
            <label htmlFor="description">
                Description
                <textarea
                    id="description"
                    placeholder="Brief description of the deck"
                    name="description"
                    onChange={handleDescriptionChange}
                    value={description}
                />
            </label>
        </form>
        </>
    )
}

export default CreateDeck;