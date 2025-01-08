import "./styles/index.css";
import FormValidator from "./components/FormValidator.js";
import {
  addImgBtn,
  cardsContainer,
  inputName,
  inputAbout,
  formImgName,
  formImgLink,
  editProfileBtn,
  updateAvatarBtn,
} from "./components/constants.js";
import { formConfig } from "./components/constants.js";
import Card from "./components/Card.js";
import UserInfo from "./components/UserInfo.js";
import Api from "./components/Api.js";
import PopupWithForms from "./components/PopupWithForms.js";
import PopupWithImage from "./components/PopupWithImage.js";
import PopupWithConfirmation from "./components/PopupWithConfirmation.js";
import Section from "./components/Section.js";

const user = new UserInfo(
  ".profile__info-name",
  ".profile__info-about",
  ".profile__photo"
);

const api = new Api("https://around-api.es.tripleten-services.com/v1/", {
  authorization: "1b616ac7-5a64-43db-bbcc-24fb8a005c55",
  "Content-Type": "application/json",
});

let cardSection = null;
let currentUser = {};

//Cargar información del usuario desde el servidor
api.getUser().then((data) => {
  currentUser = data;
  user.setUserInfo(data.name, data.about, data.avatar);

  //Cargar tarjetas desde el servidor
  api.getInitialCards().then((data) => {
    cardSection = new Section(
      {
        items: data,
        renderer: (item) => {
          const cardNode = new Card(
            item,
            currentUser,
            () => {
              popupImage.open(item.name, item.link);
            },
            (cardId) => {
              return api.likeCards(cardId);
            },
            (cardId) => {
              return api.deleteLikeCards(cardId);
            },
            (cardId) => {
              popupConfirmation.open(() => {
                api.deleteCards(cardId);
              });
            }
          );

          const cardElement = cardNode.generateCard();
          cardSection.addItem(cardElement);
        },
      },
      cardsContainer
    );

    cardSection.renderItems();
  });
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
    const cardNode = new Card(
      data,
      currentUser,
      () => {
        popupImage.open(data.name, data.link);
      },
      (cardId) => {
        return api.likeCards(cardId);
      },
      (cardId) => {
        return api.deleteLikeCards(cardId);
      },
      (cardId, callback) => {
        popupConfirmation.open(() => {
          api.deleteCards(cardId).then(() => {
            callback();
            popupConfirmation.close();
          });
        });
      }
    );
    const cardElement = cardNode.generateCard();
    cardSection.prependItem(cardElement);

    if (formImgName.value !== "" && formImgLink.value !== "") {
      popupImage.close();
    }
  });
});

//Actualizar foto de perfil
const updateAvatar = new PopupWithForms(".popup__updt-avatar-img", () => {
  api.updateAvatar(formImgLink.value).then((data) => {
    currentUser.avatar = data.name;
    //user.setUserInfo(data.name, data.about, data.avatar);
    console.log(data);
  });
  popupProfile.close();
});

export const popupImage = new PopupWithImage(".popup_open-image");

const popupConfirmation = new PopupWithConfirmation(
  ".popup__content_confirmation"
);

editProfileBtn.addEventListener("click", () => {
  popupProfile.open();
});

addImgBtn.addEventListener("click", () => {
  popupCards.open();
});

updateAvatarBtn.addEventListener("click", () => {
  updateAvatar.open();
});

popupProfile.setEventListeners();
popupCards.setEventListeners();
popupImage.setEventListeners();
popupConfirmation.setEventListeners();
updateAvatar.setEventListeners();

const initialValidation = new FormValidator(formConfig);

const formProfileValidated = initialValidation.enableValidation(formConfig);
