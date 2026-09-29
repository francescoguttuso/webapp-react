import { useParams } from "react-router-dom";

export const GameDetail = () => {
  const { id } = useParams();
  return (
    <div className="game-detail">
      GameDetail
      <p>{id}</p>
    </div>
  );
};
