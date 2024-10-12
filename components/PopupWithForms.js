import Popup from "./Popup.js";

export default class PopupWithForms extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popupElement.querySelector(".popup__big-img");
  }

  open(name, link) {
    super.open();
    this._imageElement.textContent = name;
    this._imageElement.src = link;
  }
}
