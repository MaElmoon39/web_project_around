let content = document.querySelector(".content");

const initialCards = [
  {
    name: "Chinatown",
    link: "../images/Chinatown_ManhattanUSA.jpg",
    alt: "Chinatown Manhattan USA",
  },

  {
    name: "Ghostbusters Headquarters",
    link: "../images/GhostbustersHeadquarters_NY_USA.jpg",
    alt: "Ghostbusters Headquarters USA",
  },

  {
    name: "Guatapé",
    link: "../images/Guatape_AntioquiaCOL.jpg",
    alt: "Guatape Antioquia Colombia",
  },

  {
    name: "Hong Kong",
    link: "../images/HongKong_Streetnight.jpg",
    alt: "Streetnight HongKong",
  },

  {
    name: "Mochila Wayú",
    link: "../images/MochilaWayu_CartagenaCOL.jpg",
    alt: "MochilaWayu Cartagena Colombia",
  },

  {
    name: "Suculentas",
    link: "../images/suculentas.jpg",
    alt: "Plantas de Suculentas Colombia",
  },
];

let cardsContainer = document.querySelector(".elements");
let addImgBtn = content.querySelector(".profile__add-img");

let editProfileBtn = content.querySelector(".profile__info-edit");
const closePopupBtns = document.querySelectorAll(".popup__edit-close-btn");

let formElement = document.querySelector(".form_profile");
let popupNewImg = document.querySelector(".popup_add-image");
let newImgForm = popupNewImg.querySelector(".form_add-card");
let formImgName = popupNewImg.querySelector(".form__edit-field_image_name");
let formImgLink = popupNewImg.querySelector(".form__edit-field_image_link");

const openImage = document.querySelector(".popup_open-image");

//Función para agregar las cards al cargar la página
function loadCards(name, link, alter) {
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
  cardImgElement.alt = alter;

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
    openImage.querySelector(".popup__big-img").alt = alter;
    openImage.querySelector(".popup__big-img-name").textContent = name;
    // closeAllPopups();
  });

  return cardElement;
}

initialCards.forEach((data) => {
  const cardNode = loadCards(data.name, data.link, data.alt);
  cardsContainer.append(cardNode);
});

//Sección de declaración de funciones
//Función para mostrar el popup de "editar perfil"
function editProfile() {
  const editNode = document.querySelector(".popup_profile");
  editNode.classList.add("popup_opened");

  const popupContainer = document.querySelector(".popup-container");
  popupContainer.classList.add("popup-container-bg");

  let nameNode = document.querySelector(".profile__info-name");
  let inputName = document.querySelector(".form__edit-field_profile_name");
  let aboutNode = document.querySelector(".profile__info-about");
  let inputAbout = document.querySelector(".form__edit-field_about");

  inputName.value = nameNode.textContent;
  inputAbout.value = aboutNode.textContent;
}

//Función para mostrar el popup de "nuevo lugar" y
//añadir nueva imagen al inicio del grupo
function addImage() {
  popupNewImg.classList.add("popup_opened");

  const popupContainer = document.querySelector(".popup-container");
  popupContainer.classList.add("popup-container-bg");
}

//Función para cerrar los popups
function closeAllPopups() {
  const closeProfileBtn = document.querySelector(".popup_profile");
  const popupContainer = document.querySelector(".popup-container");
  const popupImgContainer = document.querySelector(".popup_open-image");

  closeProfileBtn.classList.remove("popup_opened");
  popupNewImg.classList.remove("popup_opened");
  popupImgContainer.classList.remove("popup_opened");
  popupContainer.classList.remove("popup-container-bg");
}

//Función para añadir nueva card desde el popup
function addNewCard(evt) {
  evt.preventDefault();
  const cardNode = loadCards(formImgName.value, formImgLink.value);
  cardsContainer.prepend(cardNode);
  closeAllPopups();
}

//Función para editar el popup "editar perfil"
function handleProfileFormSubmit(event) {
  event.preventDefault();
  const nameNode = document.querySelector(".profile__info-name");
  const inputName = document.querySelector(".form__edit-field_profile_name");
  const aboutNode = document.querySelector(".profile__info-about");
  const inputAbout = document.querySelector(".form__edit-field_about");

  if (inputName !== "" || inputAbout !== "") {
    nameNode.textContent = inputName.value;
    aboutNode.textContent = inputAbout.value;
    closeAllPopups();
  }
}

//Sección de llamado de funciones
editProfileBtn.addEventListener("click", editProfile);
addImgBtn.addEventListener("click", addImage);

//Esta parte selecciona los botones X para cerrar los popups
Array.from(closePopupBtns).forEach((item) => {
  item.addEventListener("click", closeAllPopups);
});

//Esta sección es para que la información del popup de "editar perfil"
//se actualice en la pantalla principal
formElement.addEventListener("submit", handleProfileFormSubmit);

//Esta sección es para que la información del formulario de "nuevo lugar"
//se incluya en la pantalla principal
newImgForm.addEventListener("submit", addNewCard);
