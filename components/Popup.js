export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeButton = this._popupElement.querySelector(
      ".popup__edit-close-btn"
    );
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  //Método para abrir los popups
  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  //Método para cerrar los popups
  close() {
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  //Método para cerrar el popup al detectar que se ha presionado la tecla escape
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  //Método para cerrar popup al dar click por fuera de la ventana modal: 1_definición
  closeHandler(evt) {
    return evt.target.classList.contains("popup-container");
  }

  //Esta parte selecciona los botones X para cerrar los popups
  setEventListeners() {
    this._closeButton.addEventListener("click", () => {
      this.close();
    });

    //Método para cerrar popup al dar click por fuera de la ventana modal: 2_llamado de validación
    this._popupElement.addEventListener("click", (evt) => {
      if (this.closeHandler(evt)) {
        this.close();
      }
    });
  }
}
