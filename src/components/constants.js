import chinaImage from "../images/Chinatown_ManhattanUSA.jpg";
import ghostImage from "../images/GhostbustersHeadquarters_NY_USA.jpg";
import guatapeImage from "../images/Guatape_AntioquiaCOL.jpg";
import honkongImage from "../images/HongKong_Streetnight.jpg";
import wayuuImage from "../images/MochilaWayu_CartagenaCOL.jpg";
import suculentasImage from "../images/suculentas.jpg";

export const initialCards = [
  {
    name: "Chinatown",
    link: chinaImage,
    alt: "Chinatown Manhattan USA",
  },

  {
    name: "Ghostbusters Headquarters",
    link: ghostImage,
    alt: "Ghostbusters Headquarters USA",
  },

  {
    name: "Guatapé",
    link: guatapeImage,
    alt: "Guatape Antioquia Colombia",
  },

  {
    name: "Hong Kong",
    link: honkongImage,
    alt: "Streetnight HongKong",
  },

  {
    name: "Mochila Wayú",
    link: wayuuImage,
    alt: "MochilaWayu Cartagena Colombia",
  },

  {
    name: "Suculentas",
    link: suculentasImage,
    alt: "Plantas de Suculentas Colombia",
  },
];

export const cardsContainer = document.querySelector(".elements");
export const addImgBtn = document.querySelector(".profile__add-img");
export const defaultName = document.querySelector(".profile__info-name");
export const defaultAbout = document.querySelector(".profile__info-about");
export const avatar = document.querySelector(".profile__photo");
export const editProfileBtn = document.querySelector(".profile__info-edit");
export const inputName = document.querySelector(
  ".form__edit-field_profile_name"
);
export const inputAbout = document.querySelector(".form__edit-field_about");
export const formImgName = document.querySelector(
  ".form__edit-field_image_name"
);
export const formImgLink = document.querySelector(
  ".form__edit-field_image_link"
);
export const deleteBtn = document.querySelector(".elements__picture-trash-btn");

export const formConfig = {
  formSelector: ".form",
  inputSelector: ".form__edit-field",
  submitButtonSelector: ".form__edit-subm-btn",
  inactiveButtonClass: "form__edit-subm-btn_disabled",
  inputErrorClass: "form__input-error_active",
  errorClass: "form__input-error_active",
};
