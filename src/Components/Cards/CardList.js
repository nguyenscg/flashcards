import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { deleteCard, updateDeck } from "../../utils/api/index";

function CardList({ deck }) {
  const { deckId } = useParams();
  const history = useHistory();

  //delete a card
  const handleCardDelete = async ({ target }) => {
    const confirmMessage = "Delete this card?\n\nYou will not be able to recover it."
    const confirm = window.confirm(confirmMessage);
    if (confirm) {
      await deleteCard(target.value)
      await updateDeck(deckId)
      window.location.reload()
    }
  }

  return (
    <div className="container">
      <h2>Cards</h2>
      <div className="card-list">
        {deck.cards.map((card) => (
          <div className="card" key={card.id}>
            <div className="card-body">
              <div className="container">
                <div className="row justify-content-start my-2">
                  <div className="col-6">
                    {card.front}
                  </div>
                  <div className="col-6">
                    {card.back}
                  </div>
                </div>
                <div className="row">
                  <div className="col-9">

                  </div>
                  <div className="col-3 pt-2 pb-1">
                    <Link to={`/decks/${deckId}/cards/${card.id}/edit`}><button className="btn btn-secondary mr-1"><i class="bi bi-pencil"></i>Edit</button></Link>
                    <button onClick={async () => { if (window.confirm("Are you sure you want to delete this card? You will not be able to recover it.")) { 
                      await deleteCard(card.id);
                      history.go(0);}}}
                      name="deleteCard"
                      value={card.id}className="btn btn-danger ml-2"><i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
};

export default CardList;