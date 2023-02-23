import React from "react";
import ReviewItem from "./ReviewItem";

function ReviewList() {
  return (
    <div className="rev-div">
      <section className="container">
        <div className="title">
          <h2>Conoce la opinion de nuestros afiliados</h2>
          <div className="underline"></div>
        </div>
        <ReviewItem />
      </section>
    </div>
  );
}

export default ReviewList;
