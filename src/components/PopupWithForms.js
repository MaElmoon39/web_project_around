import Popup from "./Popup.js";

export default class PopupWithForms extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector(".popup__form");
    this.handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const inputValues = {};
    const inputForms = Array.from(this._formElement.elements);
    inputForms.forEach((element) => {
      if (element.name) {
        inputValues[element.name] = element.value;
      }
    });

    return inputValues;
  }

  close() {
    super.close();
    if (this._popupElement == document.querySelector(".popup_add-image")) {
      this._formElement.reset();
    }
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._formElement.querySelector(".form__edit-subm-btn").textContent =
        "Guardando...";
      console.log(
        this._formElement.querySelector(".form__edit-subm-btn").textContent
      );
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this.handleFormSubmit(this._getInputValues);
      this.close();
    });
  }
}
