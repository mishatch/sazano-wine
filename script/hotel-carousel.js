document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".carousel-card");
  const prevButton = document.querySelector(".carousel-prev");
  const nextButton = document.querySelector(".carousel-next");

  let index = 0;

  function updateIndex(newIndex) {
    if (newIndex < 0) {
      index = cards.length - 1;
    } else if (newIndex >= cards.length) {
      index = 0;
    } else {
      index = newIndex;
    }
  }

  function updateTrack() {
    const offset = -index * cards[0].offsetWidth;
    track.style.transform = `translateX(${offset}px)`;
  }

  function prevSlide() {
    updateIndex(index - 1);
    updateTrack();
  }

  function nextSlide() {
    updateIndex(index + 1);
    updateTrack();
  }

  prevButton.addEventListener("click", prevSlide);
  nextButton.addEventListener("click", nextSlide);

  function updateVisibility() {
    if (window.innerWidth < 768) {
      cards.forEach((card) => (card.style.display = "flex"));
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      cards.forEach(
        (card, i) => (card.style.display = i < 2 ? "flex" : "none")
      );
    } else {
      cards.forEach((card) => (card.style.display = "flex"));
    }
  }

  window.addEventListener("resize", updateVisibility);
  updateVisibility();
});
