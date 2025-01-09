export default class Card {
  constructor(
    data,
    currentUser,
    handleCardClick,
    handleAddLike,
    handleRemoveLike,
    handleRemove
  ) {
    this._cardName = data.name;
    this._cardAlt = data.alt;
    this._cardLink = data.link;
    this._id = data._id;
    this._isLiked = data.isLiked;
    this._owner = data.owner;
    this._createdAt = data.createdAt;
    this._user = currentUser;
    this.handleCardClick = handleCardClick;
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
    this._handleRemove = handleRemove;
  }

  //Este método encuentra el template y procesa su contenido
  _getTemplate() {
    const cardTemplate = document
      .querySelector("#elements__card-template")
      .content.querySelector(".elements__picture")
      .cloneNode(true);

    if (this.hasOwnerLike()) {
      cardTemplate
        .querySelector(".elements__like-btn")
        .classList.add("elements__like-click");
    }

    if (!!this._owner && !this.userIsOwner()) {
      cardTemplate.querySelector(".elements__picture-trash-btn").style.display =
        "none";
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
    return this._owner === this._user._id;
  }

  hasOwnerLike() {
    return this._isLiked;
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

    this._likeButton.addEventListener("click", (evt) => {
      if (this.hasOwnerLike()) {
        this._handleRemoveLike(this._id).then(() => {
          evt.target.classList.toggle("elements__like-click");
        });
      } else {
        this._handleAddLike(this._id).then(() => {
          evt.target.classList.toggle("elements__like-click");
        });
      }
    });

    this._trashButton.addEventListener("click", () => {
      this._handleRemove(this._id, () => {
        this._cardElement.remove();
      });
    });

    //Esta sección permite visualizar la imagen más grande, una vez se da click en una card
    this._cardImgElement.addEventListener("click", () => {
      this.handleCardClick(this._cardName, this._cardLink);
    });
  }
}
