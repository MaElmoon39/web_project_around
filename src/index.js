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
import Section from "./components/Section.js";

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
  user.setUserInfo(data.name, data.about, data.avatar);
});

/*
api.getInitialCards().then((data) => {
  const cardNode = new Card(data.name, data.link, data.alt, (name, link) => {
    popupImage.open(name, link);
  });
  const cardElement = cardNode.generateCard();
  cardsContainer.append(cardElement);
});

const cardSection = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const cardNode = new Card(item, () => {
        popupImage.open(item.name, item.link);
      });

      const cardElement = cardNode.generateCard();
      //cardsContainer.append(cardElement);
      cardsContainer.addItem(cardElement);
    },
  },
  cardsContainer
);

console.log(cardSection);*/

initialCards.forEach((data) => {
  const cardNode = new Card(data, () => {
    popupImage.open(data.name, data.link);
  });
  const cardElement = cardNode.generateCard();
  cardsContainer.append(cardElement);
});

//Actualizar el popup "editar perfil"
const popupProfile = new PopupWithForms(".popup_profile", () => {
  if (inputName.value.length > 2 && inputAbout.value.length > 2) {
    api.editUser(inputName.value, inputAbout.value).then((data) => {
      user.setUserInfo(data.name, data.about, data.avatar);
    });
    popupProfile.close();
  }
});

//Añadir nueva card desde el popup
const popupCards = new PopupWithForms(".popup_add-image", () => {
  api.createCard(formImgName.value, formImgLink.value).then((data) => {
    console.log(data);
    const cardNode = new Card(data.name, data.link, data.name, () => {
      popupImage.open(data.name, data.link);
    });
    const cardElement = cardNode.generateCard();

    if (formImgName.value !== "" && formImgLink.value !== "") {
      cardsContainer.prepend(cardElement);
      popupImage.close();
    }
  });
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

//cardSection.renderItems();
