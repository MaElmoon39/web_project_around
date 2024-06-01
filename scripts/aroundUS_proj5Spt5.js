let content = document.querySelector(".content");
let editProfileContainer = content.querySelector(
  ".popupWindows__editProfilePlace_btn_editProfile"
);
let editProfileBtn = content.querySelector(".profile__info-editNamePencil");

let addPlaceContainer = content.querySelector(
  ".popupWindows__editProfilePlace_btn_addPlace"
);
let addImgBtn = content.querySelector(".profile__addProfile-sign");

function editProfile() {}

function addImage() {}

editProfileBtn.addEventListener("click", editProfile);
addImgBtn.addEventListener("click", addImage);
