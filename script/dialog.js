// Open and Close Dialog

const twinModal = document.querySelector(".modal");
const openModalstTwin = document.querySelector(".twin-btn");
const closeModal = document.querySelector(".close-icon");

openModalstTwin.addEventListener("click", () => {
  twinModal.showModal();
  twinModal.scrollTop = 0;
});
closeModal.addEventListener("click", () => {
  twinModal.close();
});

// Carousel Animation
const buttons = document.querySelectorAll("[data-carousel-button]");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) {
      newIndex = slides.children.length - 1;
    }
    if (newIndex >= slides.children.length) {
      newIndex = 0;
    }
    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
