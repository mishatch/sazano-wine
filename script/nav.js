//Sandwich navigation bar animation

const button = document.querySelector(".nav-btn");
const nav = document.querySelector(".nav");
const links = document.querySelector(".links");
let clicked = false;

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("nav div a");

button.addEventListener("click", () => {
  console.log("Button was clicked!");
  if (!clicked) {
    nav.style.backgroundColor = "#4c0027";
    links.style.display = "flex";
    button.style.width = "auto";
    button.style.height = "30px";
    button.style.paddingTop = "0";
    button.style.marginTop = "0";
    button.style.backgroundColor = "transparent";
    links.classList.remove("hidden");
    clicked = true;
  } else {
    nav.style.backgroundColor = "transparent";
    links.classList.add("hidden");
    links.style.display = "none";
    button.style.width = "70px";
    button.style.height = "70px";
    button.style.paddingTop = "33px";
    button.style.marginTop = "-35px";
    button.style.backgroundColor = "#4c0027";
    clicked = false;
  }
});

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("nav div a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
