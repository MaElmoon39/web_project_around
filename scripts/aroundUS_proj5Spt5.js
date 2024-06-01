let content = document.querySelector(".content");
let editProfileContainer = content.querySelector(
  ".popupWindows__editProfilePlace_btn_editProfile"
);
let editProfileBtn = content.querySelector(".profile__info-editNamePencil");
let addPlaceContainer = content.querySelector(
  ".popupWindows__editProfilePlace_btn_addPlace"
);
let addImgBtn = content.querySelector(".profile__addProfile-sign");

function editProfile() {
  editProfileContainer.innerHTML = `(
    <div>
      <h3 class="popupWindows__editProfilePlace-title">Editar perfil</h3>
      <span class="popupWindows__editProfilePlace-closeBtn">
        <img
          src="images/CloseIcon.svg"
          alt="Close popup icon"
          class="popupWindows__editProfilePlace-closeBtnImg"
        />
      </span>

      <div class="popupWindows__formContainer">
        <form class="form popupWindows__formContainer" action="">
          <input
            class="form__editProfilePlace-field"
            type="text"
            id="nameProfile"
            name="nameProfile"
            placeholder="Nombre"
          />

          <input
            class="form__editProfilePlace-field"
            type="text"
            id="aboutMe"
            name="aboutMe"
            placeholder="Acerca de mí"
          />

          <button class="form__editProfilePlace-subBtn" type="submit">
            Crear
          </button>
        </form>
      </div>
    </div>
  );`;
}

function addImage() {
  addPlaceContainer.innerHTML = `(
    <div>
      <h3 class="popupWindows__editProfilePlace-title">Nuevo lugar</h3>
      <span class="popupWindows__editProfilePlace-closeBtn">
        <img
          src="images/CloseIcon.svg"
          alt="Close popup icon"
          class="popupWindows__editProfilePlace-closeBtnImg"
        />
      </span>

      <div class="popupWindows__formContainer">
        <form class="form popupWindows__formContainer" action="">
          <input
            class="form__editProfilePlace-field"
            type="text"
            id="Title"
            name="Title"
            placeholder="Título"
          />

          <input
            class="form__editProfilePlace-field"
            type="text"
            id="imgLink"
            name="imgLink"
            placeholder="Enlace a la imagen"
          />

          <button class="form__editProfilePlace-subBtn" type="submit">
            Crear
          </button>
        </form>
    </div>
  </div>);`;
}

editProfileBtn.addEventListener("click", editProfile);
addImgBtn.addEventListener("click", addImage);
