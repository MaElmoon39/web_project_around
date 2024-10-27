import "./styles/index.css";
import FormValidator from "./components/FormValidator.js";
import {
  addImgBtn,
  cardsContainer,
  defaultName,
  defaultAbout,
  inputName,
  inputAbout,
  formImgName,
  formImgLink,
  editProfileBtn,
} from "./components/constants.js";
import { initialCards, formConfig } from "./components/constants.js";
import Card from "./components/Card.js";
import UserInfo from "./components/UserInfo.js";
import Api from "./components/Api.js";
import PopupWithForms from "./components/PopupWithForms.js";
import PopupWithImage from "./components/PopupWithImage.js";

const user = new UserInfo(
  ".profile__info-name",
  ".profile__info-about",
  ".profile__photo"
);

const api = new Api("https://around.nomoreparties.co/v1/web-es-cohort-16", {
  authorization: "e7242c01-2ba7-44a6-aed0-e3cd48d1a447",
  "Content-Type": "application/json",
});

api.getUser().then((data) => {
  console.log(data);
  user.setUserInfo(data.name, data.about, data.avatar);
});

initialCards.forEach((data) => {
  const cardNode = new Card(data.name, data.link, data.alt, () => {
    popupImage.open(data.name, data.link);
  });
  const cardElement = cardNode.generateCard();
  cardsContainer.append(cardElement);
});

//Actualizar el popup "editar perfil"
const popupProfile = new PopupWithForms(".popup_profile", () => {
  if (inputName.value.length > 2 && inputAbout.value.length > 2) {
    defaultName.textContent = inputName.value;
    defaultAbout.textContent = inputAbout.value;
    popupProfile.close();
  }
});

//Añadir nueva card desde el popup
const popupCards = new PopupWithForms(".popup_add-image", () => {
  const cardNode = new Card(
    formImgName.value,
    formImgLink.value,
    formImgName.value,
    (name, link) => {
      popupImage.open(name, link);
    }
  );
  const cardElement = cardNode.generateCard();

  if (formImgName.value !== "" && formImgLink.value !== "") {
    cardsContainer.prepend(cardElement);
    popupImage.close();
  }
});

export const popupImage = new PopupWithImage(".popup_open-image");

popupProfile.setEventListeners();
popupCards.setEventListeners();
popupImage.setEventListeners();

editProfileBtn.addEventListener("click", () => {
  popupProfile.open();
});

addImgBtn.addEventListener("click", () => {
  popupCards.open();
});

const initialValidation = new FormValidator(formConfig);

const formProfileValidated = initialValidation.enableValidation(formConfig);
