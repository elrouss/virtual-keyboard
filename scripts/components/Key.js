export default class Key {
  constructor(name, inscriptionEng = '', inscriptionRus = '') {
    this.name = name;
    this.inscriptionEng = inscriptionEng;
    this.inscriptionRus = inscriptionRus || inscriptionEng;
  }

  _createElement(tag, style, styleModifier) {
    this.element = document.createElement(tag);
    this.element.className = style;

    if (styleModifier) this.element.classList.add(styleModifier);

    return this.element;
  }

  create(row, styleModifier) {
    const inscriptionEngUpperCase = this.inscriptionEng.toUpperCase();

    const key = this._createElement('div', 'key', styleModifier);
    key.id = this.name;
    row.append(key);

    const eng = this._createElement('span', 'eng');
    const rus = this._createElement('span', 'rus');
    key.append(eng, rus);

    const caseDown = this._createElement('span', 'case-down');
    caseDown.textContent = this.inscriptionEng;

    const caseUp = this._createElement('span', 'case-up');
    caseUp.textContent = inscriptionEngUpperCase;
    caseUp.classList.add('hidden');

    const caps = this._createElement('span', 'caps');
    caps.textContent = inscriptionEngUpperCase;
    caps.classList.add('hidden');

    const shiftCaps = this._createElement('span', 'shift-caps');
    shiftCaps.textContent = this.inscriptionEng;
    shiftCaps.classList.add('hidden');

    eng.append(
      caseDown,
      caseUp,
      caps,
      shiftCaps,
    );
    // rus.append(caseDown, caseUp, caps, shiftCaps);
  }
}
