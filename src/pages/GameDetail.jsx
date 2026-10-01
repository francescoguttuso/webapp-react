import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReviewCard } from "../components/ReviewCard";
import axios from "axios";
import "./GameDetail.css";

export const GameDetail = () => {
  const apiGames = "http://localhost:3000/games";
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    axios.get(`${apiGames}/${id}`).then((res) => {
      setGame(res.data);
    });
  }, [id]);

  return (
    <div className="game-detail">
      {game === null ? (
        "Caricamento..."
      ) : (
        <div className="game-detail-card">
          <img
            src={`http://localhost:3000/images/${game.image}`}
            alt={game.title}
          />

          <div className="game-detail-info">
            <h1>{game.title}</h1>
            <p>{game.genre}</p>
            <p>{game.console}</p>
            <p>{game.release_year}</p>
            <p>{game.description}</p>

            <div className="reviews-section">
              <h2>Recensioni della community</h2>

              <div className="reviews-list">
                {game.reviews.map((review) => (
                  <ReviewCard
                    key={review.id}
                    text={review.text}
                    rating={review.rating}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
