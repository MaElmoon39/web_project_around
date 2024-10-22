import "./styles/index.css";
import FormValidator from "./scripts/FormValidator.js";
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
} from "./scripts/constants.js";
import { initialCards, formConfig } from "./scripts/constants.js";
import Card from "./scripts/Card.js";
import UserInfo from "./scripts/UserInfo.js";
import PopupWithForms from "./scripts/PopupWithForms.js";
import PopupWithImage from "./scripts/PopupWithImage.js";

initialCards.forEach((data) => {
  const cardNode = new Card(data.name, data.link, data.alt, () => {
    popupImage.open(data.name, data.link);
  });
  const cardElement = cardNode.generateCard();
  cardsContainer.append(cardElement);
});

const popupProfile = new PopupWithForms(".popup_profile", () => {
  if (inputName.value.length > 2 && inputAbout.value.length > 2) {
    defaultName.textContent = inputName.value;
    defaultAbout.textContent = inputAbout.value;
    popupProfile.close();
  }
});

const popupCards = new PopupWithForms(".popup_add-image", () => {
  const cardNode = new Card(
    formImgName.value,
    formImgLink.value,
    formImgName.value,
    (name, link) => {
      console.log(formImgName.value);
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
