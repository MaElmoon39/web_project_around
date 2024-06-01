let content = document.querySelector(".content");
let editProfileBtn = content.querySelector(".profile__info-edit");
let addImgBtn = content.querySelector(".profile__add-sign");

//Sección de declaración de funciones
//Función para mostrar el popup de "editar perfil"
function editProfile() {
  document.querySelector(".popup_profile").classList.add("popup__show");
}

//Función para mostrar el popup de "nuevo lugar"
function addImage() {
  document.querySelector(".popup_add-image").classList.add("popup__show");
}

//Función para cerrar los popups
function closeAllPopups() {
  document.querySelector(".popup_profile").classList.remove("popup__show");

  document.querySelector(".popup_add-image").classList.remove("popup__show");
}

//Función para editar el popup "editar perfil"
function submitProfile(event) {
  event.preventDefault();
  const nameNode = document.querySelector(".profile__info-name");
  const inputName = document.querySelector(".form__edit-field_f1_name");
  const aboutNode = document.querySelector(".profile__info-about");
  const inputAbout = document.querySelector(".form__edit-field_f2_about");

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
document.querySelectorAll(".popup__edit-close-btn").forEach((button) => {
  button.addEventListener("click", closeAllPopups);
});

//Esta sección es para que la información del popup de "editar perfil"
//se actualice en la pantalla principal
document
  .querySelector(".form_profile")
  .addEventListener("submit", submitProfile);
