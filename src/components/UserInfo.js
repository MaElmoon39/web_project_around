export default class UserInfo {
  constructor(nameNode, aboutNode, avatarNode) {
    this._nameNode = document.querySelector(nameNode);
    this._aboutNode = document.querySelector(aboutNode);
    this._avatarNode = document.querySelector(avatarNode);
  }

  //Método que devuelve un objeto con información sobre el usuario:
  getUserInfo() {
    return {
      name: this._nameNode.textContent,
      about: this._aboutNode.textContent,
    };
  }

  //Método para tomar los datos del nuevo usuario y agregarlos a la pág
  setUserInfo(inputName, inputAbout, userAvatar) {
    this._nameNode.textContent = inputName;
    this._aboutNode.textContent = inputAbout;
    this._avatarNode.src = userAvatar;
  }
}
