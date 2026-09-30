import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";

export const GameCard = (props) => {
  return (
    <div className="game-card">
      <img
        src={`http://localhost:3000/images/${props.image}`}
        alt={props.title}
      />
      <h3>{props.title}</h3>
      <p>Genere: {props.genre}</p>
      <p>Console: {props.console}</p>
      <p>Anno: {props.releaseYear}</p>
    </div>
  );
};

export const Home = () => {
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
    <div>
      {games.map((game) => (
        <GameCard
          key={game.id}
          title={game.title}
          genre={game.genre}
          console={game.console}
          image={game.image}
          releaseYear={game.release_year}
        />
      ))}
    </div>
  );
};
