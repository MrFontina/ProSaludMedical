import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import reviews from "./reviews";
import { FaQuoteRight } from "react-icons/fa";

const responsive = {
  0: { items: 1 },
  768: { items: 2 },
};

const items = [];
for (let i = 0; i < reviews.length; i++) {
  let item = (
    <article className="review">
      <div className="img-container">
        <img
          src={reviews[i].image}
          alt={reviews[i].name}
          className="person-img"
        />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <div className="review-text">
        <h4 className="author">{reviews[i].name}</h4>
        <p className="job">{reviews[i].job}</p>
        <p className="info">{reviews[i].text}</p>
      </div>
    </article>
  );
  items.push(item);
}

const Slider = () => (
  <AliceCarousel
    mouseTracking
    items={items}
    responsive={responsive}
    controlsStrategy="alternate"
    animationType="fadeout"
    animationDuration={800}
    touchTracking
    infinite
    disableDotsControls
  />
);
export default Slider;
