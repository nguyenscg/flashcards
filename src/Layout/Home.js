import React, { useState, useEffect } from "react"; // import React
import { listDecks } from "../utils/api/index"; // import listDecks API to be able to useEffect and fetch the api
import { useHistory } from "react-router-dom";
// Has the following features:
// 1) A Create Deck button is shown, and clicking it brings the user to the Create Deck screen.
// 2) Existing decks are each shown with the deck name, the number of cards, and a Study, View, and Delete button.
// 3) Clicking the Study button brings the user to the Study screen.
// 4) Clicking the View button brings the user to the Deck screen.
// 5) Clicking the Delete button shows a warning message before deleting the deck.
// Delete Deck Prompt: When the user clicks the Delete button, a warning message is shown and the user can click OK or Cancel
// If the user clicks OK, the deck is deleted and the deleted deck is no longer visible on the Home Screen.
// You can use window.confirm() to create the modal dialog shown 'Delete this deck? You will not be able to recover it.'

// Two datasets: Decks and Cards

// The Home Screen is the first page the user sees. It is displayed at '/';
function Home() {
    const [decks, setDecks] = useState([]);

    // useEffect hook to 'GET' a list of decks from api when the component renders. Display 'listDecks'
    useEffect(() => {
        const fetchDecks = async () => {
            try {
                const decksData = await listDecks();
                setDecks(decksData);
            } catch(error) {
                console.log("Error fetching decks:", error)
            }
        };
        fetchDecks();
    }, []); // empty dependency array, run effect once when component renders
    
    let history = useHistory();
    const handleCreateDeck = () => {
        history.push("/decks/new");
    }
    return (
        <>
            <button type="button" className="btn btn-secondary mb-2" onClick={handleCreateDeck}>+ Create Deck</button>
            
            {decks.map((deck) => (
                <div className="card border-light mb-3" style={{ maxWidth: '18rem' }} key={deck.id}>
                    <div className="card-body">
                        <h5 className="card-title">{deck.name}</h5>
                    </div>
                    <div className="card-subtitle mb-2 text-muted">{`${deck.cards.length} cards`}</div>
                    <div className="card-text">{deck.description}</div>
                    <button type="button" className="btn btn-secondary">View</button>
                    <button type="button" className="btn btn-primary">Study</button>
                    <button type="button" className="btn btn-danger">Delete</button>
                </div>
            ))}
        </>
    );
}

export default Home;