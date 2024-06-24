import { keyHandler, editProfile, closeHandler } from "./utils.js";

export default class Popup {
  constructor(popupSelector) {
    this._editNode = document.querySelector(popupSelector);
  }

  //Abrir popup
  open() {
    this._editNode.classList.add("popup_opened");
    const popupContainer = document.querySelector(".popup-container");
    popupContainer.classList.add("popup-container-bg");
    editProfile();
  }

  //Cerrar popup mediante botón X
  close() {}

  //Cerrar popup mediante tecla Esc
  _handleEscClose() {
    document.addEventListener("keydown", keyHandler);
  }

  //Detector de eventos para botón X y tecla Esc
  setEventListeners() {
    closeHandler();
  }
}
