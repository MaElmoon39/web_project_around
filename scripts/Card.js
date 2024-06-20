class Card {
  constructor(cardName, cardLink, cardSelector) {}
}

function loadCards(name, link, alt) {
  const cardTemplate = document.querySelector(
    "#elements__card-template"
  ).content;

  const cardElement = cardTemplate
    .querySelector(".elements__picture")
    .cloneNode(true);

  const cardTitleElement = cardElement.querySelector(".elements__picture-name");

  const cardImgElement = cardElement.querySelector(".elements__picture-size");
  cardTitleElement.textContent = name;
  cardImgElement.src = link;
  cardImgElement.alt = alt || name;

  //Esta sección permite activar el botón "me gusta"
  const likeButton = cardElement.querySelector(".elements__like-btn");
  likeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("elements__like-btn-active");
  });

  //Esta sección permite eliminar la card
  const trashButton = cardElement.querySelector(".elements__picture-trash-btn");
  trashButton.addEventListener("click", () => {
    cardElement.remove();
  });

  //Esta sección permite visualizar la imagen más grande, una vez se da click en la card
  cardImgElement.addEventListener("click", () => {
    openImage.classList.add("popup_opened", "popup-container-bg");
    openImage.querySelector(".popup__big-img").src = link;
    openImage.querySelector(".popup__big-img").alt = "Imagen de: " + name;
    openImage.querySelector(".popup__big-img-name").textContent = name;

    const popupContainer = document.querySelector(".popup-container");
    popupContainer.classList.add("popup-container-bg");
    document.addEventListener("keydown", keyHandler);
  });

  return cardElement;
}

const formElement = document.querySelector(".form_profile");
const newImgForm = document.querySelector(".form_add-card");
const formImgName = document.querySelector(".form__edit-field_image_name");
const formImgLink = document.querySelector(".form__edit-field_image_link");

function addNewCard(evt) {
  evt.preventDefault();
  const cardNode = loadCards(formImgName.value, formImgLink.value);

  if (formImgName.value !== "" && formImgLink.value !== "") {
    cardsContainer.prepend(cardNode);
    closeAllPopups();
  }

  evt.target.reset();
}
