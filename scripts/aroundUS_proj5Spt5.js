let content = document.querySelector(".content");
let editProfileBtn = content.querySelector(".profile__info-edit");
let addImgBtn = content.querySelector(".profile__add-img");
let closeBtn = document.querySelectorAll(".popup__edit-close-btn");
let formElement = document.querySelector(".form_profile");

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

//Función para mostrar el popup de "nuevo lugar"
function addImage() {
  const addNode = document.querySelector(".popup_add-image");
  addNode.classList.add("popup_opened");

  const popupContainer = document.querySelector(".popup-container");
  popupContainer.classList.add("popup-container-bg");
}

//Función para cerrar los popups
function closeAllPopups() {
  const closeProfileBtn = document.querySelector(".popup_profile");
  const closeImgBtn = document.querySelector(".popup_add-image");
  const popupContainer = document.querySelector(".popup-container");

  closeProfileBtn.classList.remove("popup_opened");
  closeImgBtn.classList.remove("popup_opened");
  popupContainer.classList.remove("popup-container-bg");
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
closeBtn.forEach((button) => {
  button.addEventListener("click", closeAllPopups);
});

//Esta sección es para que la información del popup de "editar perfil"
//se actualice en la pantalla principal
formElement.addEventListener("submit", handleProfileFormSubmit);
