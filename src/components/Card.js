export default class Card {
  constructor(data, handleCardClick) {
    this._cardName = data.name;
    this._cardAlt = data.alt;
    this._cardLink = data.link;
    this.handleCardClick = handleCardClick;
    this._id = data._id;
    this._likes = data.likes;
    this._owner = data.owner;
    this._createdAt = data.createdAt;
    this._user = data.user;
  }

  //Este método encuentra el template y procesa su contenido
  _getTemplate() {
    const cardTemplate = document
      .querySelector("#elements__card-template")
      .content.querySelector(".elements__picture")
      .cloneNode(true);

    if (!!this._likes && this.hasOwnerLike()) {
      cardTemplate
        .querySelector(".elements__like-btn")
        .classList.add("elements__like-click");
    }

    if (!!this._owner && !this.userIsOwner()) {
      cardTemplate.querySelector(".elements__picture-trash-btn").style.display =
        "none";
    }

    if (this._likes) {
      cardTemplate.querySelector(".elements__likes-counter").textContent =
        this._likes.length;
    }
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

  userIsOwner() {
    return this._owner._id;
    // return this._owner._id === this._user._id;
  }

  hasOwnerLike() {
    return this._likes.some((item) => {
      return item._id === this._owner._id;
    });
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
      evt.target.classList.toggle("elements__like-click");

      console.log(this._owner, this._likes);
      // this._cardTemplate.querySelector(".elements__likes-counter").textContent =
      //   this._likes.length;
    });

    this._trashButton.addEventListener("click", () => {
      this._cardElement.remove();
    });

    //Esta sección permite visualizar la imagen más grande, una vez se da click en una card
    this._cardImgElement.addEventListener("click", () => {
      this.handleCardClick(this._cardName, this._cardLink);
    });
  }
}
