export default class UserInfo {
  constructor({ nameNode, aboutNode }) {
    this._nameNode = nameNode;
    this._aboutNode = aboutNode;
  }

  //Método que devuelve un objeto con información sobre el usuario:
  getUserInfo() {
    return {
      name: this._nameNode.textContent,
      about: this._aboutNode.textContent,
    };
  }

  //Método para tomar los datos del nuevo usuario y agregarlos a la pág
  setUserInfo(inputName, inputAbout) {
    this._nameNode.textContent = inputName.value;
    this._aboutNode.textContent = inputAbout.value;
  }
}
