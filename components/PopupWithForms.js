import Popup from "./Popup.js";

export default class PopupWithForms extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector(".popup__form");
    this.handleFormSubmit = handleFormSubmit;
  }


  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      console.log('Ejecuto el evento')
      evt.preventDefault();
      this.handleFormSubmit()
      this.close();
    })
  }
}
