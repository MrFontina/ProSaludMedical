import { React, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
const Goup = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <button
        className="btn-up"
        onClick={scrollToTop}
        style={{ opacity: visible ? "1" : "0" }}
      >
        <AiOutlineArrowUp />
      </button>
    </>
  );
};

export default Goup;
