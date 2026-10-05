import { useState } from "react";
import axios from "axios";
import "./ReviewForm.css";

export const ReviewForm = (props) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3000/games/${props.gameId}/reviews`, {
        text,
        rating: Number(rating),
      })
      .then((res) => {
        console.log(res.data);
      });
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
