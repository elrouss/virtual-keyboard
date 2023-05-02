import { BASE_KEYS, ARROWS_KEYS } from './utils/constants.js';
import KEYS_SYMBOL_VALUES from './utils/KEYS_SYMBOL_VALUES.js';

import Key from './components/Key.js';
import KeySymbol from './components/KeySymbol.js';

const { body } = document;
body.className = 'page';

let language = localStorage.getItem('lang');

if (!language) localStorage.setItem('lang', 'en');
language = localStorage.getItem('lang');

// Section with a keyboard
const createBlockElement = (tag, style) => {
  const element = document.createElement(tag);

  element.className = style;

  return element;
};

const createTextElement = (tag, style, text) => {
  const element = document.createElement(tag);

  element.className = style;
  element.textContent = text;

  return element;
};

// Creating elements
const section = createBlockElement('section', 'section');
const wrapper = createBlockElement('div', 'wrapper');
const keyboard = createBlockElement('div', 'keyboard');
const screenKeyboard = createBlockElement('textarea', 'screen');
const keys = createBlockElement('ul', 'keys');

const heading = createTextElement('h1', 'heading', 'RSS Virtual Keyboard');
const operationSystem = createTextElement('p', 'paragraph', 'The keyboard was created for Windows operating system');
const combinationKeys = createTextElement('p', 'paragraph', 'Combination to switch keyboard language: Ctrl + Alt (Opt)');
const wish = createTextElement('p', 'paragraph', 'Enjoy! 💅🏻');
const audioBackground = new Audio('./assets/audio/barbie-girl.mp3');
audioBackground.className = 'audio';
audioBackground.controls = true;

// Inserting elements
body.prepend(section);
section.append(wrapper);
wrapper.append(heading, keyboard, operationSystem, combinationKeys, wish, audioBackground);
keyboard.append(screenKeyboard, keys);

const createKeysRow = () => {
  for (let i = 0; i < 5; i += 1) {
    const row = createBlockElement('li', 'keys__row');
    row.id = `row-${i + 1}`;

    keys.append(row);
  }
};
createKeysRow();

const rows = keys.querySelectorAll('.keys__row');
const [row1, row2, row3, row4, row5] = rows;

// Creating keys
const allKeysSymbolClassExamples = {};

const createKeysSymbolRow = (obj, row) => {
  Object.values(obj).forEach((key) => {
    const { name } = key;
    const { variant1: variantEn1, variant2: variantEn2 } = key.lang.en;
    const { variant1: variantRu1, variant2: variantRu2 } = key.lang.ru;

    allKeysSymbolClassExamples[name] = new KeySymbol(name, keys, language);
    allKeysSymbolClassExamples[name].createSymbol(row);
    allKeysSymbolClassExamples[name].createSymbolLayout('en', variantEn1, variantEn2);
    allKeysSymbolClassExamples[name].createSymbolLayout('ru', variantRu1, variantRu2);
  });
};

// Rows
// First
createKeysSymbolRow(KEYS_SYMBOL_VALUES.row1, row1);

const keyBackspace = new Key('Backspace', 'Backspace');
keyBackspace.create(row1, 'key_size_l');

// Second
// NB! The order of creating keys is important.
// Do not create examples of class Key in function,
// where keys with symbols in the row needed (here and below)
const keyTab = new Key('Tab', 'Tab');
keyTab.create(row2, 'key_size_s');

createKeysSymbolRow(KEYS_SYMBOL_VALUES.row2, row2);

const keyDelete = new Key('Delete', 'Del', keys, language);
keyDelete.create(row2, 'key_size_xs');

// Third
const keyCapsLock = new Key('CapsLock', 'CapsLock', keys, language);
keyCapsLock.create(row3, 'key_size_l');

createKeysSymbolRow(KEYS_SYMBOL_VALUES.row3, row3);

const keyEnter = new Key('Enter', 'Enter');
keyEnter.create(row3, 'key_size_m');

// Fourth
const keyShiftLeft = new Key('ShiftLeft', 'Shift');
keyShiftLeft.create(row4, 'key_size_l');

createKeysSymbolRow(KEYS_SYMBOL_VALUES.row4, row4);

const keyArrowUp = new Key('ArrowUp', '▲');
keyArrowUp.create(row4, 'key_color_accent');

const keyShiftRight = new Key('ShiftRight', 'Shift');
keyShiftRight.create(row4, 'key_size_m');

// Fifth
const keyControlLeft = new Key('ControlLeft', 'Ctrl');
keyControlLeft.create(row5, 'key_color_accent');

const keyMetaLeft = new Key('MetaLeft', 'Win');
keyMetaLeft.create(row5, 'key_color_accent');

const keyAltLeft = new Key('AltLeft', 'Alt');
keyAltLeft.create(row5, 'key_color_accent');

const keySpace = new Key('Space');
keySpace.create(row5, 'key_size_xl');

const keyAltRight = new Key('AltRight', 'Alt');
keyAltRight.create(row5, 'key_color_accent');

const keyArrowLeft = new Key('ArrowLeft', '◄');
keyArrowLeft.create(row5, 'key_color_accent');

const keyArrowDown = new Key('ArrowDown', '▼');
keyArrowDown.create(row5, 'key_color_accent');

const keyArrowRight = new Key('ArrowRight', '►');
keyArrowRight.create(row5, 'key_color_accent');

const keyControlRight = new Key('ControlRight', 'Ctrl');
keyControlRight.create(row5, 'key_color_accent');

// Finding collections of keys
const layoutEn = Array.from(keys.querySelectorAll('.en'));
const layoutEnKeysCaseDown = layoutEn.map((layout) => layout.querySelector('.case-down'));
const layoutEnKeysCaseUp = layoutEn.map((layout) => layout.querySelector('.case-up'));
const layoutEnKeysCaps = layoutEn.map((layout) => layout.querySelector('.caps'));
const layoutEnKeysShiftCaps = layoutEn.map((layout) => layout.querySelector('.shift-caps'));

const layoutRu = Array.from(keys.querySelectorAll('.ru'));
const layoutRuKeysCaseDown = layoutRu.map((layout) => layout.querySelector('.case-down'));
const layoutRuKeysCaseUp = layoutRu.map((layout) => layout.querySelector('.case-up'));
const layoutRuKeysCaps = layoutRu.map((layout) => layout.querySelector('.caps'));
const layoutRuKeysShiftCaps = layoutRu.map((layout) => layout.querySelector('.shift-caps'));

// Typing with keyboard
const typeText = (evt) => {
  evt.preventDefault();

  let text;

  const { code } = evt;
  const activeKey = keys.querySelector(`#${code}`);
  activeKey
    .classList
    .add(BASE_KEYS.includes(code) || ARROWS_KEYS.includes(code)
      ? 'key-base'
      : 'active-heart');

  if (!BASE_KEYS.includes(code) && !ARROWS_KEYS.includes(code)) {
    text = document
      .querySelector(`#${code}`)
      .querySelector('span.en:not(.hidden), span.ru:not(.hidden)')
      .querySelector('span:not(.hidden)')
      .textContent;
  }

  const copy = screenKeyboard.value;
  let cursorPosition = screenKeyboard.selectionStart;
  let copyLeft = copy.slice(0, cursorPosition);
  let copyRight = copy.slice(cursorPosition);

  if (code === 'Enter') text = '\n';
  if (code === 'Tab') text = '\t';
  if (code === 'Space') text = ' ';

  if (code === 'Backspace') {
    copyLeft = copy.slice(0, cursorPosition - 1);
    cursorPosition -= 1;
  }

  if (code === 'Delete') {
    copyRight = copy.slice(cursorPosition + 1);
  }

  screenKeyboard.value = `${copyLeft}${text || ''}${copyRight}`;

  if (text) cursorPosition += 1;

  if (code === 'ArrowUp') {
    const counter = copy.slice(0, cursorPosition).match(/(\n).*$(?!\1)/g) || [1];
    cursorPosition -= counter[0].length;
  }

  if (code === 'ArrowDown') {
    const counter = copy.slice(cursorPosition).match(/^.*(\n).*(?!\1)/) || [[1]];
    cursorPosition += counter[0].length;
  }

  if (code === 'ArrowRight') cursorPosition += 1;
  if (code === 'ArrowLeft') cursorPosition -= 1;

  screenKeyboard.setSelectionRange(cursorPosition, cursorPosition);
};

let keysPressedLang = [];

const handleLayoutOn = ({ key }) => {
  keysPressedLang.push(key);

  if (keysPressedLang.includes('Control') && keysPressedLang.includes('Alt')) {
    language = localStorage.getItem('lang');

    layoutEn.forEach((spanEn) => {
      if (language !== 'en') {
        spanEn.classList.remove('hidden');
        layoutRu.map((spanRu) => spanRu.classList.add('hidden'));

        localStorage.setItem('lang', 'en');
      } else {
        spanEn.classList.add('hidden');
        layoutRu.map((spanRu) => spanRu.classList.remove('hidden'));

        localStorage.setItem('lang', 'ru');
      }
    });
  }
};

const handleLayoutOff = () => {
  keysPressedLang = [];
};

let targetClicked;
let targetBaseClicked;

const handleKeyClickOn = ({ target }) => {
  const closest = target.closest('.key');
  const { id } = target;

  let text;

  if (
    !BASE_KEYS.includes(id)
    && !ARROWS_KEYS.includes(id)
    && target.className !== 'keys'
    && target.className !== 'keys__row'
  ) {
    text = closest
      .querySelector('span.en:not(.hidden), span.ru:not(.hidden)')
      .querySelector('span:not(.hidden)')
      .textContent;
  }

  if (BASE_KEYS.includes(id) || ARROWS_KEYS.includes(id)) {
    closest.classList.add('key-base');
    targetBaseClicked = closest;
  }

  if (text) {
    closest
      .classList
      .add(ARROWS_KEYS.includes(id) ? 'key-base' : 'active-heart');

    targetClicked = closest;
  }

  const copy = screenKeyboard.value;
  let cursorPosition = screenKeyboard.selectionStart;
  let copyLeft = copy.slice(0, cursorPosition);
  let copyRight = copy.slice(cursorPosition);

  if (id === 'Enter') text = '\n';
  if (id === 'Tab') text = '\t';
  if (id === 'Space') text = ' ';

  if (id === 'Backspace') {
    copyLeft = copy.slice(0, cursorPosition - 1);
    cursorPosition -= 1;
  }

  if (id === 'Delete') {
    copyRight = copy.slice(cursorPosition + 1);
  }

  screenKeyboard.value = `${copyLeft}${text || ''}${copyRight}`;

  if (text) cursorPosition += 1;

  if (id === 'ArrowUp') {
    const counter = copy.slice(0, cursorPosition).match(/(\n).*$(?!\1)/g) || [1];
    cursorPosition -= counter[0].length;
  }

  if (id === 'ArrowDown') {
    const counter = copy.slice(cursorPosition).match(/^.*(\n).*(?!\1)/) || [[1]];
    cursorPosition += counter[0].length;
  }

  if (id === 'ArrowRight') cursorPosition += 1;
  if (id === 'ArrowLeft') cursorPosition -= 1;

  screenKeyboard.setSelectionRange(cursorPosition, cursorPosition);
  screenKeyboard.focus();
};

const handleKeyClickOff = () => {
  if (targetBaseClicked && targetBaseClicked.id !== 'CapsLock') {
    targetBaseClicked.classList.remove('key-base');
    targetBaseClicked = undefined;
  }

  if (targetClicked && (targetClicked.classList.contains('active-heart') || targetClicked.classList.contains('key-base'))) {
    targetClicked.classList.remove(ARROWS_KEYS.includes(targetClicked.id) ? 'key-base' : 'active-heart');
    targetClicked = undefined;
  }
};

const removeActiveKeyAnimation = ({ code }) => {
  keys
    .querySelector(`#${code}`)
    .classList
    .remove((BASE_KEYS.includes(code) || ARROWS_KEYS.includes(code)) && code !== 'CapsLock' ? 'key-base' : 'active-heart');
};

const keysCombinationsShiftAndCapsLock = {
  CapsLock: 0,
  Shift: 0,
};

const handleKeysCombinationsShiftAndCapsLock = ({ key, code, target }) => {
  const { id } = target;

  if (key === 'Shift' || id.startsWith('Shift')) {
    keysCombinationsShiftAndCapsLock.Shift += 1;
  }

  if (key === 'CapsLock' || id === 'CapsLock') {
    if (!keysCombinationsShiftAndCapsLock.CapsLock) {
      keysCombinationsShiftAndCapsLock.CapsLock += 1;

      if (id) {
        target.classList.add('key-base');
      } else {
        keys
          .querySelector(`#${code}`)
          .classList
          .add('key-base');
      }
    } else {
      keysCombinationsShiftAndCapsLock.CapsLock -= 1;

      if (id) {
        target.classList.remove('key-base');
      } else {
        keys
          .querySelector(`#${code}`)
          .classList
          .remove('key-base');
      }
    }
  }

  if (keysCombinationsShiftAndCapsLock.Shift && keysCombinationsShiftAndCapsLock.CapsLock) {
    layoutEnKeysCaseDown.map((caseDown) => caseDown.classList.add('hidden'));
    layoutRuKeysCaseDown.map((caseDown) => caseDown.classList.add('hidden'));

    layoutEnKeysCaseUp.map((caseUp) => caseUp.classList.add('hidden'));
    layoutRuKeysCaseUp.map((caseUp) => caseUp.classList.add('hidden'));

    layoutEnKeysCaps.map((caps) => caps.classList.add('hidden'));
    layoutRuKeysCaps.map((caps) => caps.classList.add('hidden'));

    layoutEnKeysShiftCaps.map((btn) => btn.classList.remove('hidden'));
    layoutRuKeysShiftCaps.map((btn) => btn.classList.remove('hidden'));
  }

  if (keysCombinationsShiftAndCapsLock.Shift && !keysCombinationsShiftAndCapsLock.CapsLock) {
    layoutEnKeysCaseDown.map((caseDown) => caseDown.classList.add('hidden'));
    layoutRuKeysCaseDown.map((caseDown) => caseDown.classList.add('hidden'));

    layoutEnKeysCaps.map((caps) => caps.classList.add('hidden'));
    layoutRuKeysCaps.map((caps) => caps.classList.add('hidden'));

    layoutEnKeysShiftCaps.map((btn) => btn.classList.add('hidden'));
    layoutRuKeysShiftCaps.map((btn) => btn.classList.add('hidden'));

    layoutEnKeysCaseUp.map((caseUp) => caseUp.classList.remove('hidden'));
    layoutRuKeysCaseUp.map((caseUp) => caseUp.classList.remove('hidden'));
  }

  if (!keysCombinationsShiftAndCapsLock.Shift && keysCombinationsShiftAndCapsLock.CapsLock) {
    layoutEnKeysCaseDown.map((caseDown) => caseDown.classList.add('hidden'));
    layoutRuKeysCaseDown.map((caseDown) => caseDown.classList.add('hidden'));

    layoutEnKeysShiftCaps.map((btn) => btn.classList.add('hidden'));
    layoutRuKeysShiftCaps.map((btn) => btn.classList.add('hidden'));

    layoutEnKeysCaseUp.map((caseUp) => caseUp.classList.add('hidden'));
    layoutRuKeysCaseUp.map((caseUp) => caseUp.classList.add('hidden'));

    layoutEnKeysCaps.map((caps) => caps.classList.remove('hidden'));
    layoutRuKeysCaps.map((caps) => caps.classList.remove('hidden'));
  }

  if (!keysCombinationsShiftAndCapsLock.Shift && !keysCombinationsShiftAndCapsLock.CapsLock) {
    layoutEnKeysShiftCaps.map((btn) => btn.classList.add('hidden'));
    layoutRuKeysShiftCaps.map((btn) => btn.classList.add('hidden'));

    layoutEnKeysCaseUp.map((caseUp) => caseUp.classList.add('hidden'));
    layoutRuKeysCaseUp.map((caseUp) => caseUp.classList.add('hidden'));

    layoutEnKeysCaps.map((caps) => caps.classList.add('hidden'));
    layoutRuKeysCaps.map((caps) => caps.classList.add('hidden'));

    layoutEnKeysCaseDown.map((caseDown) => caseDown.classList.remove('hidden'));
    layoutRuKeysCaseDown.map((caseDown) => caseDown.classList.remove('hidden'));
  }
};

const handleKeysCombinationsShiftAndCapsLockOff = ({ key, target }) => {
  const { id } = target;

  if (key === 'Shift' || id.startsWith('Shift')) {
    keysCombinationsShiftAndCapsLock.Shift -= 1;
  }

  if (keysCombinationsShiftAndCapsLock.Shift && keysCombinationsShiftAndCapsLock.CapsLock) {
    layoutEnKeysCaseDown.map((caseDown) => caseDown.classList.add('hidden'));
    layoutRuKeysCaseDown.map((caseDown) => caseDown.classList.add('hidden'));

    layoutEnKeysCaseUp.map((caseUp) => caseUp.classList.add('hidden'));
    layoutRuKeysCaseUp.map((caseUp) => caseUp.classList.add('hidden'));

    layoutEnKeysCaps.map((caps) => caps.classList.add('hidden'));
    layoutRuKeysCaps.map((caps) => caps.classList.add('hidden'));

    layoutEnKeysShiftCaps.map((btn) => btn.classList.remove('hidden'));
    layoutRuKeysShiftCaps.map((btn) => btn.classList.remove('hidden'));
  }

  if (keysCombinationsShiftAndCapsLock.Shift && !keysCombinationsShiftAndCapsLock.CapsLock) {
    layoutEnKeysCaseDown.map((caseDown) => caseDown.classList.add('hidden'));
    layoutRuKeysCaseDown.map((caseDown) => caseDown.classList.add('hidden'));

    layoutEnKeysCaps.map((caps) => caps.classList.add('hidden'));
    layoutRuKeysCaps.map((caps) => caps.classList.add('hidden'));

    layoutEnKeysShiftCaps.map((btn) => btn.classList.add('hidden'));
    layoutRuKeysShiftCaps.map((btn) => btn.classList.add('hidden'));

    layoutEnKeysCaseUp.map((caseUp) => caseUp.classList.remove('hidden'));
    layoutRuKeysCaseUp.map((caseUp) => caseUp.classList.remove('hidden'));
  }

  if (!keysCombinationsShiftAndCapsLock.Shift && keysCombinationsShiftAndCapsLock.CapsLock) {
    layoutEnKeysCaseDown.map((caseDown) => caseDown.classList.add('hidden'));
    layoutRuKeysCaseDown.map((caseDown) => caseDown.classList.add('hidden'));

    layoutEnKeysShiftCaps.map((btn) => btn.classList.add('hidden'));
    layoutRuKeysShiftCaps.map((btn) => btn.classList.add('hidden'));

    layoutEnKeysCaseUp.map((caseUp) => caseUp.classList.add('hidden'));
    layoutRuKeysCaseUp.map((caseUp) => caseUp.classList.add('hidden'));

    layoutEnKeysCaps.map((caps) => caps.classList.remove('hidden'));
    layoutRuKeysCaps.map((caps) => caps.classList.remove('hidden'));
  }

  if (!keysCombinationsShiftAndCapsLock.Shift && !keysCombinationsShiftAndCapsLock.CapsLock) {
    layoutEnKeysShiftCaps.map((btn) => btn.classList.add('hidden'));
    layoutRuKeysShiftCaps.map((btn) => btn.classList.add('hidden'));

    layoutEnKeysCaseUp.map((caseUp) => caseUp.classList.add('hidden'));
    layoutRuKeysCaseUp.map((caseUp) => caseUp.classList.add('hidden'));

    layoutEnKeysCaps.map((caps) => caps.classList.add('hidden'));
    layoutRuKeysCaps.map((caps) => caps.classList.add('hidden'));

    layoutEnKeysCaseDown.map((caseDown) => caseDown.classList.remove('hidden'));
    layoutRuKeysCaseDown.map((caseDown) => caseDown.classList.remove('hidden'));
  }
};

// Event Handlers
window.addEventListener('DOMContentLoaded', () => {
  screenKeyboard.focus();
});

document.addEventListener('keydown', (evt) => {
  typeText(evt);
  handleLayoutOn(evt);
  handleKeysCombinationsShiftAndCapsLock(evt);
});

document.addEventListener('keyup', (evt) => {
  handleLayoutOff();
  handleKeysCombinationsShiftAndCapsLockOff(evt);
  removeActiveKeyAnimation(evt);
});

keys.addEventListener('mousedown', (evt) => {
  handleKeyClickOn(evt);
  handleKeysCombinationsShiftAndCapsLock(evt);
});

document.addEventListener('mouseup', (evt) => {
  handleKeyClickOff();
  handleKeysCombinationsShiftAndCapsLockOff(evt);
});

screenKeyboard.addEventListener('blur', () => screenKeyboard.focus());
