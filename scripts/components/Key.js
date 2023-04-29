export default class Key {
  constructor(name, char = '') {
    this.name = name;
    this.char = char;
  }

  _createElement(tag, style, styleModifier) {
    this.element = document.createElement(tag);
    this.element.className = style;

    if (styleModifier) this.element.classList.add(styleModifier);

    return this.element;
  }

  create(row, styleModifier) {
    const key = this._createElement('div', 'key', styleModifier);

    key.id = this.name;
    key.textContent = this.char;

    row.append(key);
  }
}
