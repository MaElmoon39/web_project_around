import { formProfileValidated } from "./FormValidator.js";
import { closeAllPopups, closeHandler, keyHandler } from "./utils.js";

const cardsContainer = document.querySelector(".elements");

const formElement = document.querySelector(".form_profile");
const newImgForm = document.querySelector(".form_add-card");
const formImgName = document.querySelector(".form__edit-field_image_name");
const formImgLink = document.querySelector(".form__edit-field_image_link");

const openImage = document.querySelector(".popup_open-image");

const initialCards = [
  {
    name: "Chinatown",
    link: "images/Chinatown_ManhattanUSA.jpg",
    alt: "Chinatown Manhattan USA",
  },

  {
    name: "Ghostbusters Headquarters",
    link: "images/GhostbustersHeadquarters_NY_USA.jpg",
    alt: "Ghostbusters Headquarters USA",
  },

  {
    name: "Guatapé",
    link: "images/Guatape_AntioquiaCOL.jpg",
    alt: "Guatape Antioquia Colombia",
  },

  {
    name: "Hong Kong",
    link: "images/HongKong_Streetnight.jpg",
    alt: "Streetnight HongKong",
  },

  {
    name: "Mochila Wayú",
    link: "images/MochilaWayu_CartagenaCOL.jpg",
    alt: "MochilaWayu Cartagena Colombia",
  },

  {
    name: "Suculentas",
    link: "images/suculentas.jpg",
    alt: "Plantas de Suculentas Colombia",
  },
];

//Sección de declaración de funciones
//Función para agregar las cards al cargar la página
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

initialCards.forEach((data) => {
  const cardNode = loadCards(data.name, data.link, data.alt);
  cardsContainer.append(cardNode);
});

//Función para añadir nueva card desde el popup
function addNewCard(evt) {
  evt.preventDefault();
  const cardNode = loadCards(formImgName.value, formImgLink.value);

  if (formImgName.value !== "" && formImgLink.value !== "") {
    cardsContainer.prepend(cardNode);
    closeAllPopups();
  }

  evt.target.reset();
}

//Función para editar el popup "editar perfil"
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameNode = document.querySelector(".profile__info-name");
  const inputName = document.querySelector(".form__edit-field_profile_name");
  const aboutNode = document.querySelector(".profile__info-about");
  const inputAbout = document.querySelector(".form__edit-field_about");

  if (inputName !== "" || inputAbout !== "") {
    nameNode.textContent = inputName.value;
    aboutNode.textContent = inputAbout.value;
    closeAllPopups();
  }
  evt.target.reset();
}

//Esta sección es para que la información del popup de "editar perfil"
//se actualice en la pantalla principal
formElement.addEventListener("submit", handleProfileFormSubmit);

//Esta sección es para que la información del formulario de "nuevo lugar"
//se incluya en la pantalla principal
newImgForm.addEventListener("submit", addNewCard);

document
  .querySelector(".popup-container")
  .addEventListener("click", closeHandler);
