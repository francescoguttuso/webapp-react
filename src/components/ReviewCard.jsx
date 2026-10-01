import "./ReviewCard.css";

export const ReviewCard = (props) => {
  return (
    <div className="review-card">
      <p className="review-text">{props.text}</p>

      <div className="review-rating">
        <div className="review-stars">
          <span className="stars-full">{"★".repeat(props.rating)}</span>

          <span className="stars-empty">{"☆".repeat(10 - props.rating)}</span>
        </div>

        <span className="rating-number">{props.rating}/10</span>
      </div>
    </div>
  );
};
