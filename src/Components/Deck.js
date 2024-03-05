// The Deck screen displays all of the information about a deck.
// PATH: /decks/:deckId
// 2) You must use the readDeck() function from src/utils/api/index.js to load the existing deck.
// 3) There is a breadcrumb navigation bar with a link to home / followed by the name of the deck (e.g., Home/React Router).
// 4) The screen includes the deck name (e.g., "React Router") and deck description (e.g., "React Router is a collection of navigational components that compose declaratively in your application").
// 5) The screen includes Edit, Study, Add Cards, and Delete buttons. Each button takes the user to a different destination, as follows:
import React, { useState, useEffect } from "react"; // import react
import { useParams, Link } from "react-router-dom"; // import useParams hook;
import { readDeck } from "../utils/api/index"; // import readDeck function from api;

function Deck() {
    const { deckId } = useParams(); // useParams hook function to get deckId from URL
    const [deck, setDeck] = useState({});
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchDeck = async () => {
            try {
                const decksData = await readDeck(deckId);
                setDeck(decksData);
                setCards(decksData.cards);
            }
            catch(error) {
                console.log("Error fetching decks:", error);
            }
        };
        fetchDeck();
    }, [deckId]); // empty dependency array, rerun the effect if the deck ID changes

    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">{deck.name}</li>
                </ol>
            </nav>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">{deck.name}</h2>
                    <p>{deck.description}</p>
                    <div className="btn-toolbar">
                        <div className="btn-group mr-2" role="group" aria-label="First group">
                            <button type="button" className="btn btn-secondary">Edit</button>
                            <button type="button" className="btn btn-primary">Study</button>
                            <button type="button" className="btn btn-primary">Add Cards</button>
                        </div>
                        <div className="btn-group" role="group" aria-label="Third group">
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <h2>Cards</h2>
{cards.map((card) => (
    <div className="card" key={card.id}>
        <div className="card-body">
            <div className="card-title">
                <div className="front">{card.front}</div>
                <div className="back">{card.back}</div>
            </div>
        </div>
    </div>
))}
        </div>
    )
}

export default Deck;