import axios from "axios";
import { useState, useEffect } from "react";
import { GameCard } from "../components/GameCard.jsx";
import "./Games.css";

export const Games = () => {
  const [games, setGames] = useState([]);
  const apiGames = "http://localhost:3000/games";
  useEffect(() => {
    axios
      .get(apiGames)
      .then((res) => {
        setGames(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="home">
      <div className="games-grid">
        {games.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            title={game.title}
            genre={game.genre}
            console={game.console}
            image={game.image}
            releaseYear={game.release_year}
          />
        ))}
      </div>
    </div>
  );
};
