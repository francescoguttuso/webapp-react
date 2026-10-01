import "./ReviewCard.css";

export const ReviewCard = (props) => {
  return (
    <div className="review-card">
      <p className="review-text">{props.text}</p>

      <div className="review-rating">
        <span>Valutazione:</span> {props.rating}/10
      </div>
    </div>
  );
};
