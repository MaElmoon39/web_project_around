const formConfig = {
  formSelector: ".form",
  inputSelector: ".form__edit-field",
  submitButtonSelector: ".form__edit-subm-btn",
  inactiveButtonClass: "form__edit-subm-btn_disabled",
  inputErrorClass: "form__input-error_active",
  errorClass: "form__input-error_active",
};

//Configuración clase FormValidator:
class FormValidator {
  constructor(formConfig, formElement) {
    this._formConfig = formConfig;
    this._formElement = formElement;
  }

  //Esta sección muestra el mensaje de error:
  _showInputError(formElement, inputElement, errorMessage, formConfig) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(formConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(formConfig.errorClass);
  }

  //Esta sección oculta el mensaje de error:
  _hideInputError(formElement, inputElement, formConfig) {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove("form__input-error");
    errorElement.classList.remove("form__input-error_active");
    errorElement.textContent = "";
  }

  //Esta sección determina si un elemento de entrada es válido y
  //llama a las funciones de show / hide error según se requiera:
  _checkInputValidity(formElement, inputElement, formConfig) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        formConfig
      );
    } else {
      this._hideInputError(formElement, inputElement, formConfig);
    }
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement, formConfig) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(formConfig.inactiveButtonClass);
    } else {
      buttonElement.classList.remove(formConfig.inactiveButtonClass);
    }
  }

  //Esta sección checa el formulario y el campo de entrada (input):
  _setEventListeners(formElement, formConfig) {
    const inputList = Array.from(
      formElement.querySelectorAll(formConfig.inputSelector)
    );

    const buttonElement = formElement.querySelector(
      formConfig.submitButtonSelector
    );
    this._toggleButtonState(inputList, buttonElement, formConfig);

    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement, formConfig);
        this._toggleButtonState(inputList, buttonElement, formConfig);
      });
    });
  }

  enableValidation(formConfig) {
    const formList = Array.from(
      document.querySelectorAll(formConfig.formSelector)
    );

    formList.forEach((formElement) => {
      this._setEventListeners(formElement, formConfig);
    });
  }
}

const initialValidation = new FormValidator(formConfig);

export const formProfileValidated =
  initialValidation.enableValidation(formConfig);

/*formConfig.forEach((item) => {
  const initialValidation = new FormValidator(formConfig);
  const formProfileValidated = initialValidation.enableValidation(formConfig);
});

--------------CÓDIGO OK HASTA EL 18jun2024: comparar con este--------------
//Esta sección muestra el mensaje de error:
const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  formConfig
) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formConfig.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formConfig.errorClass);
};

//Esta sección oculta el mensaje de error:
const hideInputError = (formElement, inputElement, formConfig) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input-error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

//Esta sección determina si un elemento de entrada es válido y
//llama a las funciones de show / hide error según se requiera:
const checkInputValidity = (formElement, inputElement, formConfig) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      formConfig
    );
  } else {
    hideInputError(formElement, inputElement, formConfig);
  }
};

//Validación de elementos tipo input:
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, formConfig) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(formConfig.inactiveButtonClass);
  } else {
    buttonElement.classList.remove(formConfig.inactiveButtonClass);
  }
};

//Esta sección checa el formulario y el campo de entrada (input):
const setEventListeners = (formElement, formConfig) => {
  const inputList = Array.from(
    formElement.querySelectorAll(formConfig.inputSelector)
  );

  const buttonElement = formElement.querySelector(
    formConfig.submitButtonSelector
  );
  toggleButtonState(inputList, buttonElement, formConfig);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, formConfig);
      toggleButtonState(inputList, buttonElement, formConfig);
    });
  });
};

//Esta sección se encarga de solicitar la validación:
export const enableValidation = (formConfig) => {
  const formList = Array.from(
    document.querySelectorAll(formConfig.formSelector)
  );
  formList.forEach((formElement) => {
    setEventListeners(formElement, formConfig);
  });
};

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__edit-field",
  submitButtonSelector: ".form__edit-subm-btn",
  inactiveButtonClass: "form__edit-subm-btn_disabled",
  inputErrorClass: "form__input-error_active",
  errorClass: "form__input-error_active",
});*/
