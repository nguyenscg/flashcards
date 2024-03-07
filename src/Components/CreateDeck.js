import React, { useState } from "react";
import DeckCreateNav from "./DeckCreateNav";
import DeckForm from "./DeckForm";
import { createDeck } from "../utils/api";
import { useHistory } from "react-router-dom";

export default function DeckCreate() {
  const initialFormData = {
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const history = useHistory();

  //handle changes made to inputs so they can correctly be submitted
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  //handle submission of form using createDeck() function from API, and clear formData upon submission
  const handleSubmit = (event) => {
    event.preventDefault();
    createDeck(formData);
    setFormData({ ...initialFormData });
  };
  return (
    <div className="deck-new">
      <DeckCreateNav />
      <DeckForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div>
        <button
          className="btn btn-secondary m-2"
          onClick={() => history.push("/")}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary m-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}