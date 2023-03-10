const reveal = () => {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    var windowHeight = window.innerHeight;
    var elementVisible = 150;
    for (var i = 0; i < reveals.length; i++) {
      var elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  function reveal2() {
    var reveals2 = document.querySelectorAll(".reveal2");
    var windowHeight = window.innerHeight;
    var elementVisible = 150;
    for (var i = 0; i < reveals2.length; i++) {
      var elementTop = reveals2[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveals2[i].classList.add("active");
      } else {
        reveals2[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);
  window.addEventListener("scroll", reveal2);
};

export { reveal };
