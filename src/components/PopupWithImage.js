import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = this._popupElement.querySelector(".popup__big-img");
    this._titleElement = this._popupElement.querySelector(
      ".popup__big-img-name"
    );
  }

  open(name, link) {
    super.open();
    this._titleElement.textContent = name;
    this._imageElement.src = link;
    this._imageElement.alt = name;
  }
}
