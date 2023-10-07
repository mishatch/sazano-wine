const languageChangeBtn = document.querySelector("#customToggleSwitch");
languageChangeBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});
document.addEventListener("DOMContentLoaded", function () {
  languageChangeBtn.checked = true;
});
