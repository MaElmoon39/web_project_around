import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(handleConfirm) {
    super.open();
    this._handleConfirm = handleConfirm;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupElement
      .querySelector(".form__edit-subm-btn")
      .addEventListener("click", () => {
        this._handleConfirm();
      });
  }
}
