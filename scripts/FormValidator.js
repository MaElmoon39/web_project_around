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
const checkInputValidity = (formElement, inputElement, formConfirm) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      formConfirm
    );
  } else {
    hideInputError(formElement, inputElement, formConfirm);
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
});
