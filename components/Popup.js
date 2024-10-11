import { keyHandler, closeHandler } from "./utils.js";

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  _handleEscClose() {
    document.addEventListener("keydown", keyHandler);
  }

  open() {}

  close() {
    this._popupSelector.addEventListener("click", closeHandler);
  }

  setEventListeners() {}
}
