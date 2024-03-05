// The Home screen has a Create Deck button that brings the user to the Create Deck screen.
// path should be: /decks/new
// 1) breadcrumb navigtion bar with a link to home '/' followed by the text Create Deck ex: Home/Create Deck
// 2) A form is shown with appropriate fields for creating a new deck
// --- name field is an <input> field of type text
// --- description field is a <textarea> field that can be multiple lines of text
// IF user clicks submit, the user is taken to the DECK screen
// IF user clicks cancel, the user is taken to the HOME screen
import React, { useState } from "react"; // import react & useState hook
import { Link } from "react-router-dom"; // import Link element to navigate to another page

function CreateDeck() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault(); // prevent default behavior of form submissions
        setName(""); // this clears name input after form submits
        setDescription(""); // this clears description textarea after form submits
    }
    
    const handleNameChange = (event) => setName(event.target.value);
    const handleDescriptionChange = (event) => setDescription(event.target.value);
    
    return (
        <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Create Deck</li>
            </ol>
        </nav>
        <h1>Create Deck</h1>
        <form onSubmit={handleSubmit}>
            <div class="form-group">
                <label for="name">Name</label>
                <input id="name" type="text" placeholder="Deck Name" name="name" onChange={handleNameChange} value={name} class="form-control" />
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea id="description" placeholder="Brief description of the deck" name="description" onChange={handleDescriptionChange} value={description} class="form-control" />
            </div>
            <button type="button" className="btn btn-secondary"><Link to="/">Cancel</Link></button>
            <button type="submit" className="btn btn-primary"><Link to="/decks/:deckId">Submit</Link></button>
        </form>
        </>
    )
}

export default CreateDeck;