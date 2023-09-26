//Sandwich navigation bar animation
const changeLanguageBtn = document.querySelector(".custom-toggle");
const navBtn = document.querySelector(".nav-btn");
const nav = document.querySelector(".nav");
const links = document.querySelector(".links");
let clicked = false;
changeLanguageBtn.style.zIndex = "30";

navBtn.addEventListener("click", () => {
  if (!clicked) {
    changeLanguageBtn.style.zIndex = "1";
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
    changeLanguageBtn.style.zIndex = "30";
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
function closeNav() {
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

//Open and close menu modal.
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
