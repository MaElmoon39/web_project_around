export const initialCards = [
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

export const addImgBtn = document.querySelector(".profile__add-img");
export const cardsContainer = document.querySelector(".elements");
export const defaultName = document.querySelector(".profile__info-name");
export const defaultAbout = document.querySelector(".profile__info-about");
export const inputName = document.querySelector(
  ".form__edit-field_profile_name"
);
export const inputAbout = document.querySelector(".form__edit-field_about");
export const editProfileBtn = document.querySelector(".profile__info-edit");

export const formConfig = {
  formSelector: ".form",
  inputSelector: ".form__edit-field",
  submitButtonSelector: ".form__edit-subm-btn",
  inactiveButtonClass: "form__edit-subm-btn_disabled",
  inputErrorClass: "form__input-error_active",
  errorClass: "form__input-error_active",
};
