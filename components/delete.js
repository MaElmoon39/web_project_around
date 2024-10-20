import { formImgName, formImgLink, popupImage } from "../pages";
import Card from "./Card";
import { cardsContainer } from "./constants";

//Función para añadir nueva card desde el popup
function addNewCard(evt) {
  evt.preventDefault();
  const cardNode = new Card(formImgName.value, formImgLink.value, () => {
    popupImage.open(formImgName.value, formImgLink.value);
  });
  const cardElement = cardNode.generateCard();

  if (formImgName.value !== "" || formImgLink.value !== "") {
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
