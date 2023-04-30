import Key from './Key.js';

export default class KeySymbol extends Key {
  constructor(name, keys, lang) {
    super(name);
    this.keys = keys;
    this.lang = lang;
  }

  createSymbol(row) {
    const key = this.createElement('div', 'key');

    key.id = this.name;
    row.append(key);
  }

  createSymbolLayout(layout, char, altChar) {
    const parent = this.keys.querySelector(`#${this.name}`);

    const element = this.createElement('span', layout);
    if (this.lang !== element.className) {
      element.classList.add('hidden');
    }

    const caseDown = this.createElement('span', 'case-down');
    caseDown.textContent = char;

    const caseUp = this.createElement('span', 'case-up');
    caseUp.textContent = altChar;
    caseUp.classList.add('hidden');

    const caps = this.createElement('span', 'caps');
    caps.textContent = char.toUpperCase();
    caps.classList.add('hidden');

    const shiftCaps = this.createElement('span', 'shift-caps');
    shiftCaps.textContent = altChar.toLowerCase();
    shiftCaps.classList.add('hidden');

    element.append(caseDown, caseUp, caps, shiftCaps);
    parent.append(element);
  }
}
