export const addImgBtn = document.querySelector(".profile__add-img");
const editProfileBtn = document.querySelector(".profile__info-edit");
const closePopupBtns = document.querySelectorAll(".popup__edit-close-btn");
const popupNewImg = document.querySelector(".popup_add-image");

//Función para mostrar el popup de "editar perfil"
export function editProfile(evt) {
  const editNode = document.querySelector(".popup_profile");
  editNode.classList.add("popup_opened");
  document.addEventListener("keydown", keyHandler);

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
export function addImage() {
  popupNewImg.classList.add("popup_opened");
  document.addEventListener("keydown", keyHandler);

  const popupContainer = document.querySelector(".popup-container");
  popupContainer.classList.add("popup-container-bg");
}

//Función para cerrar los popups
export function closeAllPopups() {
  const closeProfileBtn = document.querySelector(".popup_profile");
  const popupContainer = document.querySelector(".popup-container");
  const popupImgContainer = document.querySelector(".popup_open-image");

  closeProfileBtn.classList.remove("popup_opened");
  popupNewImg.classList.remove("popup_opened");
  popupImgContainer.classList.remove("popup_opened");
  popupContainer.classList.remove("popup-container-bg");
  document.removeEventListener("keydown", keyHandler);
}

//Función para cerrar el popup al detectar que se ha presionado la tecla escape
export function keyHandler(params) {
  if (params.key === "Escape") {
    closeAllPopups();
  }
}

//Función para cerrar popup al dar click por fuera de la ventana modal
export function closeHandler(evt) {
  const popup = evt.target;
  if (popup.classList.contains("popup-container")) {
    closeAllPopups();
  }
}

editProfileBtn.addEventListener("click", editProfile);
addImgBtn.addEventListener("click", addImage);

//Esta parte selecciona los botones X para cerrar los popups
Array.from(closePopupBtns).forEach((item) => {
  item.addEventListener("click", () => {
    closeAllPopups();
  });
});
