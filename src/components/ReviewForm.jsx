import { useState } from "react";
import "./ReviewForm.css";

export const ReviewForm = (props) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(text);
    console.log(rating);
    console.log(props.gameId);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Scrivi la tua recensione..."
      />

      <input
        type="number"
        min="1"
        max="10"
        value={rating}
        onChange={(e) => {
          setRating(e.target.value);
        }}
      />

      <button type="submit">Invia</button>
    </form>
  );
};
