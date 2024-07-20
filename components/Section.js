export default class Section {
  constructor({ items, renderer }, containerCards) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerCards);
  }

  setItem(element) {
    this._container.append(element);
  }

  clear() {
    this._container.innerHTML = "";
  }

  renderItems() {
    this.clear();
    this._renderedItems.forEach((item) => {
      this._renderer;
    });
  }
}
