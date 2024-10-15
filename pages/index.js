import FormValidator from "../components/FormValidator.js";
import {
  addImgBtn,
  cardsContainer,
  defaultName,
  defaultAbout,
  inputName,
  inputAbout,
  editProfileBtn,
} from "../components/constants.js";
import { initialCards, formConfig } from "../components/constants.js";
import Card from "../components/Card.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForms from "../components/PopupWithForms.js";
import PopupWithImage from "../components/PopupWithImage.js";


const newImgForm = document.querySelector(".form_add-card");

const formImgName = document.querySelector(".form__edit-field_image_name");
const formImgLink = document.querySelector(".form__edit-field_image_link");

const popupProfile = new PopupWithForms(".popup_profile", () => {});
const popupCards = new PopupWithForms(".popup_add-image", () => {

});
const popupImage = new PopupWithImage(".popup_open-image");

popupProfile.setEventListeners();
popupCards.setEventListeners();
popupImage.setEventListeners();

editProfileBtn.addEventListener("click", () => {
  popupProfile.open();
});

addImgBtn.addEventListener("click", () => {
  popupCards.open();
});

initialCards.forEach((data) => {
  const cardNode = new Card(data.name, data.link, data.alt, () => {
    popupImage.open(data.name, data.link);
  });
  const cardElement = cardNode.generateCard();
  cardsContainer.append(cardElement);
});

//Función para añadir nueva card desde el popup
function addNewCard(evt) {
  evt.preventDefault();
  const cardNode = new Card(formImgName.value, formImgLink.value, () => {
    popupImage.open(formImgName.value, formImgLink.value);
  });
  const cardElement = cardNode.generateCard();

  if (formImgName.value !== "" && formImgLink.value !== "") {
    cardsContainer.prepend(cardElement);
    popupImage.close();
  }

  evt.target.reset();
}

//Función para editar el popup "editar perfil"
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  const nameNode = document.querySelector(".profile__info-name");
  const aboutNode = document.querySelector(".profile__info-about");
  const inputName = document.querySelector(".form__edit-field_profile_name");
  const inputAbout = document.querySelector(".form__edit-field_about");

  if (inputName.value.length > 2 && inputAbout.value.length > 2) {
    nameNode.textContent = inputName.value;
    aboutNode.textContent = inputAbout.value;
    closeAllPopups();
  }
  evt.target.reset();
}

//Sección de llamado de funciones

//Esta sección es para que la información del popup de "editar perfil"
//se actualice en la pantalla principal
// formElement.addEventListener("submit", () => {
//   const updatedProfile = new UserInfo({ defaultName, defaultAbout });
//   updatedProfile.setUserInfo(inputName, inputAbout);
// });

//Esta sección es para que la información del formulario de "nuevo lugar"
//se incluya en la pantalla principal
newImgForm.addEventListener("submit", addNewCard);

// document.querySelector(".popup-container").addEventListener("click", () => {
//   document.closeHandler();
// });

const initialValidation = new FormValidator(formConfig);

const formProfileValidated = initialValidation.enableValidation(formConfig);
