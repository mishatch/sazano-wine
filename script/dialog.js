//Nav Bar animation
const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector(".nav");
const links = document.querySelector(".links");
let clicked = false;

navBtn.addEventListener("click", () => {
  console.log("Button was clicked!");
  if (!clicked) {
    nav.style.backgroundColor = "#4c0027";
    links.style.display = "flex";
    navBtn.style.width = "auto";
    navBtn.style.height = "30px";
    navBtn.style.paddingTop = "0";
    navBtn.style.marginTop = "0";
    navBtn.style.backgroundColor = "transparent";
    links.classList.remove("hidden");
    clicked = true;
  } else {
    nav.style.backgroundColor = "transparent";
    links.classList.add("hidden");
    links.style.display = "none";
    navBtn.style.width = "70px";
    navBtn.style.height = "70px";
    navBtn.style.paddingTop = "33px";
    navBtn.style.marginTop = "-35px";
    navBtn.style.backgroundColor = "#4c0027";
    clicked = false;
  }
});

// Open and Close Dialog
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
    // navBtn.disabled = true;
    if (clicked) {
      nav.style.backgroundColor = "transparent";
      links.classList.add("hidden");
      links.style.display = "none";
      navBtn.style.width = "70px";
      navBtn.style.height = "70px";
      navBtn.style.paddingTop = "33px";
      navBtn.style.marginTop = "-35px";
      navBtn.style.backgroundColor = "#4c0027";
      clicked = false;
    }
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
    // navBtn.disabled = false;
  });
});

function openModal(modal) {
  if (modal == null) {
    return;
  } else {
    modal.classList.add("active");
    overlay.classList.add("active");
  }
}
function closeModal(modal) {
  if (modal == null) {
    return;
  } else {
    modal.classList.remove("active");
    overlay.classList.remove("active");
  }
}

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
