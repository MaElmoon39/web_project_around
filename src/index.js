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
import PopupWithForms from "./components/PopupWithForms.js";
import PopupWithImage from "./components/PopupWithImage.js";

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

//Sección de llamado de funciones

//Esta sección es para que la información del popup de "editar perfil"
//se actualice en la pantalla principal
// formElement.addEventListener("submit", () => {
//   const updatedProfile = new UserInfo({ defaultName, defaultAbout });
//   updatedProfile.setUserInfo(inputName, inputAbout);
// });

//Esta sección es para que la información del formulario de "nuevo lugar"
//se incluya en la pantalla principal
//newImgForm.addEventListener("submit", addNewCard);

// document.querySelector(".popup-container").addEventListener("click", () => {
//   document.closeHandler();
// });

const initialValidation = new FormValidator(formConfig);

const formProfileValidated = initialValidation.enableValidation(formConfig);
