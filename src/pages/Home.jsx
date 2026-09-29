import axios from "axios";
import { useState, useEffect } from "react";

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

  return <pre>{JSON.stringify(games, null, 2)}</pre>;
};
