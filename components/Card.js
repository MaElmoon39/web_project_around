const openImage = document.querySelector(".popup_open-image");
import Popup from "./Popup.js";

export default class Card {
  constructor(cardName, cardLink, cardAlt, cardContainer, handleCardClick) {
    this._cardName = cardName;
    this._cardAlt = cardAlt;
    this._cardLink = cardLink;
    this._cardContainer = cardContainer;
    this.handleCardClick = handleCardClick;
  }

  //Este método encuentra el template y procesa su contenido
  _getTemplate() {
    const cardTemplate = document
      .querySelector("#elements__card-template")
      .content.querySelector(".elements__picture")
      .cloneNode(true);

    return cardTemplate;
  }

  //Esta función adiciona la información de nombre y link al template
  generateCard() {
    this._cardElement = this._getTemplate();
    this._setEventListeners();

    this._cardTitleElement = this._cardElement.querySelector(
      ".elements__picture-name"
    );

    this._cardImgElement = this._cardElement.querySelector(
      ".elements__picture-size"
    );

    this._cardTitleElement.textContent = this._cardName;
    this._cardImgElement.src = this._cardLink;
    this._cardImgElement.alt = this._cardAlt || this._cardName;

    return this._cardElement;
  }

  //Esta función agrega todos los controladores de eventos (like/trash/openBigImg buttons)
  _setEventListeners() {
    this._likeButton = this._cardElement.querySelector(".elements__like-btn");
    this._trashButton = this._cardElement.querySelector(
      ".elements__picture-trash-btn"
    );

    this._cardImgElement = this._cardElement.querySelector(
      ".elements__picture-size"
    );

    this._likeButton.addEventListener("click", function (evt) {
      evt.target.classList.toggle("elements__like-btn-active");
    });

    this._trashButton.addEventListener("click", () => {
      this._cardElement.remove();
    });

    //Esta sección permite visualizar la imagen más grande, una vez se da click en una card
    this._cardImgElement.addEventListener("click", () => {
      openImage.classList.add("popup_opened", "popup-container-bg");
      openImage.querySelector(".popup__big-img").src = this._cardLink;
      openImage.querySelector(".popup__big-img").alt =
        "Imagen de: " + this._cardName;
      openImage.querySelector(".popup__big-img-name").textContent =
        this._cardName;
      openImage.handleCardClick(this._cardName, this._cardLink);

      const popupContainer = document.querySelector(".popup-container");
      popupContainer.classList.add("popup-container-bg");
      document.addEventListener("keydown", keyHandler);
    });
  }
}
