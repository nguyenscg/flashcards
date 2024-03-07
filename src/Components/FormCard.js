import React from "react";

export default function FormCard({ deck, handleChange, handleSubmit, formData, }) {

 //return a form with 2 textarea inputs for front and back
  //done button takes user to deck screen
  return (
  <form className="card-create-form">
    <div className="form-group">
        <label htmlFor="front">Front</label>
        <textarea
          name="front"
          id="front"
          onChange={handleChange}
          value={formData.front}
          placeholder="front side of card"
          className="form-control"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="back">Back</label>
        <textarea
          name="back"
          id="back"
          onChange={handleChange}
          value={formData.back}
          placeholder="back side of card"
          className="form-control"
          required
        />
      </div>
    </form>
  );
}