// path: /decks/:deckId/cards/:cardId/edit
// must use readDeck()
// readCard() function too
// breadcrumb nav bar with link to home/ name of deck which is edited card is a member, and finally edit card: cardId
// displays the same from Add Card screen, except it is prefilled with information for existing card. It can be edited and updated
// if user clicks on either save or cancel, the user is taken to the deck screen

import React from "react";
import { readDeck, readCard } from "../utils/api/index"; // import readDeck function and readCard function
import { useParams } from "react-router-dom"; // import useParams hook

function EditCard() {
    const { deckId } = useParams();
    const { cardId } = useParams();
    const [deck, setDeck] = useState({});
    const [card, setCard] = useState({});

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
    }, [deckId]);

    useEffect(() => {
        const fetchCard = async () => {
            try {
                const cardData = await readCard(cardId);
                setCard(cardData);
            }
            catch(error) {
                console.log("Error loading cards: ", error);
            }
        }
        fetchCard();
    }, [readId]);


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
            <form>
                <div className="form-group">
                    <label for="front">Front</label>
                    <textarea id="front" className="form-control" placeholder="Front side of card"></textarea>
                </div>
                <div className="form-group">
                    <label for="back">Back</label>
                    <textarea id="back" className="form-control" placeholder="Back side of card"></textarea>
                </div>
                <button type="button" className="btn btn-secondary mx-1" onClick={handleCancel}>Cancel</button>
                <button type="button" className="btn btn-primary mx-1">Submit</button>
            </form>
        </div>
    );
}

export default EditCard;