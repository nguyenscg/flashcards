import React from "react";

export default function DeckForm({ formData, handleChange, handleSubmit }) {
  //return a form with text input for name, and textarea input for description
  return (
    <form name="deck-create" onSubmit={handleSubmit} className="mt-3">
      <h3>Create Deck</h3>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          type="text"
          id="name"
          onChange={handleChange}
          value={formData.name}
          placeholder="Name"
          required
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          onChange={handleChange}
          value={formData.description}
          placeholder="Brief description of the deck"
          className="form-control"
          required
        />
      </div>
    </form>
  );
}