//Esta sección muestra el mensaje de error:
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

//Esta sección oculta el mensaje de error:
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

//Esta sección determina si un elemento de entrada es válido y
//llama a las funciones de show / hide error según se requiera:
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

//Validación de elementos tipo input:
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("button_inactive");
  } else {
    buttonElement.classList.remove("button_inactive");
  }
};

//Esta sección checa el formulario y el campo de entrada (input):
const setEventListeners = (formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(".form__edit-field")
  );

  const buttonElement = formElement.querySelectorAll(".form__edit-subm-btn");
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(formElement, buttonElement);
    });
  });
};

//Esta sección se encarga de solicitar la validación:
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    const divFormContainer = Array.from(
      formElement.querySelectorAll(".popup__formContainer")
    );
    divFormContainer.forEach((divContainer) => {
      setEventListeners(divContainer);
    });
  });
};

enableValidation();
