const desktopTitle = document.querySelector(".desktop-main-title");
const wineryTitle = document.querySelector(".winery-heading");
const wineryDescription = document.querySelector(".winery-description");
const wineryDetails = document.querySelector(".winery-details");
const hotelHeading = document.querySelector(".hotel-heading");
const hotelButton = document.querySelector(".see-rooms");
const restaurantHeading = document.querySelector(".restaurant-heading");
const restaurantDescription = document.querySelector(".restaurant-txt");
const changeLanguageButton = document.querySelector(".change-language");
let click = false;
const changeLanguage = function (textelement, newText, oldFont, newFont) {
  textelement.textContent = newText;
  textelement.classList.add(newFont);
  textelement.classList.remove(oldFont);
};

changeLanguageButton.addEventListener("click", () => {
  if (!click) {
    changeLanguage(
      desktopTitle,
      "Sazano Wine Cellar and Hotel",
      "le-studio",
      "helvetica"
    );
    click = true;
  } else {
    changeLanguage(
      desktopTitle,
      "საზანოს ღვინის მარანი და სასტუმრო",
      "helvetica",
      "le-studio"
    );
    click = false;
  }
});
