import React from "react";

import Slider from "./Slider";

function ReviewList() {
  return (
    <div className="rev-div">
      <section className="container">
        <div className="title">
          <h2>Conoce la opinión de nuestros afiliados</h2>
          <div className="underline"></div>
        </div>
        <Slider />
      </section>
    </div>
  );
}

export default ReviewList;
