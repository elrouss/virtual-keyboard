export default class Key {
  constructor(name, char = '') {
    this.name = name;
    this.char = char;
  }

  // NB! This is a private method (can not put dangling due to the rules of the task)
  createElement(tag, style, styleModifier) {
    this.element = document.createElement(tag);
    this.element.className = style;

    if (styleModifier) this.element.classList.add(styleModifier);

    return this.element;
  }

  create(row, styleModifier) {
    const key = this.createElement('div', 'key', styleModifier);

    key.id = this.name;
    key.textContent = this.char;

    row.append(key);
  }
}
