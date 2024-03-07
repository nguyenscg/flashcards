import React, { useState, useEffect } from "react";
import { readCard, createCard, updateCard } from "../utils/api"; // import readCard, createCard, and updateCard functions
import { useHistory, useParams } from "react-router-dom";

function FormCard({ card, handleChange, handleSubmit, handleCancel, isEditing }) {
    const { deckId, cardId } = useParams();
    const history = useHistory();
    const [edit, setEdit] = useState(null);

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="front">Front</label>
                <textarea 
                    id="front"
                    name="front" 
                    className="form-control" 
                    value={card.front}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="back">Back</label>
                <textarea 
                    id="back"
                    name="back" 
                    className="form-control" 
                    value={card.back}
                    onChange={handleChange}
                />
            </div>
            <button type="button" className="btn btn-secondary mx-1" onClick={handleCancel}>Cancel</button>
            <button type="submit" className="btn btn-primary mx-1">{isEditing ? "Update" : "Save"}</button>
        </form>
    );
}

export default FormCard;