let content = document.querySelector(".content");
let editProfileBtn = content.querySelector(".profile__info-edit");
let addImgBtn = content.querySelector(".profile__add-img");
let closeBtn = document.querySelectorAll(".popup__edit-close-btn");
let formElement = document.querySelector(".form_profile");

//Sección de declaración de funciones
//Función para mostrar el popup de "editar perfil"
function editProfile() {
  document.querySelector(".popup_profile").classList.add("popup_opened");
}

//Función para mostrar el popup de "nuevo lugar"
function addImage() {
  const addNode = document.querySelector(".popup_add-image");
  addNode.classList.add("popup_opened");
}

//Función para cerrar los popups
function closeAllPopups() {
  const closeProfileBtn = document.querySelector(".popup_profile");
  const closeImgBtn = document.querySelector(".popup_add-image");

  closeProfileBtn.classList.remove("popup_opened");
  closeImgBtn.classList.remove("popup_opened");
}

//Función para editar el popup "editar perfil"
function handleProfileFormSubmit(event) {
  event.preventDefault();
  const nameNode = document.querySelector(".profile__info-name");
  const inputName = document.querySelector(".form__edit-field_profile_name");
  const aboutNode = document.querySelector(".profile__info-about");
  const inputAbout = document.querySelector(".form__edit-field_about");

  if (inputName !== "" && inputAbout !== "") {
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
