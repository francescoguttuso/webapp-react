import { Link } from "react-router-dom";
import "./GameCard.css";

export const GameCard = (props) => {
  return (
    <div className="game-card">
      <img
        src={`http://localhost:3000/images/${props.image}`}
        alt={props.title}
      />
      <h3>{props.title}</h3>
      <div className="game-info">
        <p>
          <span>Genere:</span> {props.genre}
        </p>

        <p>
          <span>Console:</span> {props.console}
        </p>

        <p>
          <span>Anno:</span> {props.releaseYear}
        </p>
      </div>
      <Link to={`/details/${props.id}`}>Dettagli</Link>
    </div>
  );
};
