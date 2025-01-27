import React from "react";

const Rating = ({ rating }) => {
  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          className={`mask mask-star ${
            star <= rating ? "bg-yellow-500" : "bg-gray-300"
          }`}
          aria-label={`${star} star`}
          aria-current={star === Math.round(rating) ? "true" : undefined}
        ></div>
      ))}
    </div>
  );
};

export default Rating;
