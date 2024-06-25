import {
  keyHandler,
  //editProfile,
  closeHandler,
  closeAllPopups,
} from "./utils.js";

export default class Popup {
  constructor(popupSelector) {
    this._editNode = document.querySelector(popupSelector);
  }

  //Abrir popup
  open() {
    this._editNode.classList.add("popup_opened");
    document.addEventListener("keydown", keyHandler);
    const popupContainer = document.querySelector(".popup-container");
    popupContainer.classList.add("popup-container-bg");
  }

  //Cerrar popup mediante botón X
  close() {
    this._editNode.classList.remove("popup_opened");
    const popupContainer = document.querySelector(".popup-container");
    popupContainer.classList.remove("popup-container-bg");
  }

  //Cerrar popup mediante tecla Esc
  _handleEscClose() {
    document.addEventListener("keydown", keyHandler);
  }

  //Detector de eventos para botones X y tecla Esc
  setEventListeners() {
    //Esta parte selecciona los botones X para cerrar los popups
    const closePopupBtns = document.querySelectorAll(".popup__edit-close-btn");
    Array.from(closePopupBtns).forEach((item) => {
      item.addEventListener("click", () => {
        closeAllPopups();
      });
    });

    //Función para cerrar popup al dar click por fuera de la ventana modal
    closeHandler();
  }
}
