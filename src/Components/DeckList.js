import React from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { deleteDeck } from "../utils/api/index";

function DeckList({ decks }) {
    const history = useHistory();
    const { deckId, cardId } = useParams();

  const handleDelete = async () => {
    const confirmMessage = window.confirm("Delete this Deck? You will not be able to recover it.")

    if(confirmMessage) {
        deleteDeck(deckId)
        .then((history.push(`/`)))
        .then(window.location.reload()) //this reloads the page to show that the deck has been deleted.

        }
    }

  return (
    <div>
      {decks.map((deck, index) => (
        <div className="card w-100 my-3" key={index}>
          <div className="card-body">
            <div className="row">
              <div className="col-9">
                <h3 className="card-title">{deck.name}</h3>
              </div>
              <div className="col-3">
                <p>{deck.cards.length} cards</p>
              </div>
            </div>
            <p className="card-text">{deck.description}</p>
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-4">
                  <Link to={`/decks/${deck.id}`}>
                    <button className="btn btn-secondary mr-1"><i class="bi bi-eye"></i>View</button>
                  </Link>
                  <Link to={`/decks/${deck.id}/study`}>
                    <button className="btn btn-primary"><i class="bi bi-book"></i>Study</button>
                  </Link>
                </div>
                <div className="col-2">
                  <button value={deck.id} className="btn btn-danger" onClick={handleDelete}><i class="bi bi-trash"></i>Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

}

export default DeckList;