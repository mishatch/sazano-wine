document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0);

  document.body.style.overflow = "hidden";

  const preloader = document.getElementById("preloader");

  setTimeout(function () {
    preloader.classList.add("fade-out");
    setTimeout(function () {
      preloader.remove();
      document.body.style.overflow = "auto";
    }, 1000);
  }, 3500);
});
