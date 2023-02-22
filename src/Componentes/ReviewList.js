import React from "react";
import ReviewItem from "./ReviewItem";

function ReviewList() {
  return (
    <div className="rev-div">
      <section className="container">
        <div className="title">
          <h2>Tu opinión es la más importante!</h2>
          <div className="underline"></div>
        </div>
        <ReviewItem />
      </section>
    </div>
  );
}

export default ReviewList;
