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
const combinationKeys = createTextElement('p', 'paragraph', 'Combination to switch keyboard language: Ctrl + Alt(Opt)');

// Inserting elements
body.prepend(section);
section.append(wrapper);
wrapper.append(heading, keyboard, operationSystem, combinationKeys);
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
// const layoutEnKeysShiftCaps = layoutEn.map((layout) => layout.querySelector('.shift-caps'));

const layoutRu = Array.from(keys.querySelectorAll('.ru'));
const layoutRuKeysCaseDown = layoutRu.map((layout) => layout.querySelector('.case-down'));
const layoutRuKeysCaseUp = layoutRu.map((layout) => layout.querySelector('.case-up'));
const layoutRuKeysCaps = layoutRu.map((layout) => layout.querySelector('.caps'));
// const layoutRuKeysShiftCaps = layoutRu.map((layout) => layout.querySelector('.shift-caps'));

// Typing with keyboard
// TODO: Caps + Shift = BUG!!! (shift-caps)
const typeText = ({ code, key, target }) => {
  const activeKey = keys.querySelector(`#${code}`);
  activeKey.classList.add(BASE_KEYS.includes(code) || ARROWS_KEYS.includes(code) ? 'key-base' : 'active-heart');
  // TODO: при клике на инпут идет пользовательская раскладка, а не моя ;(
  let valueTyped;

  if (ARROWS_KEYS.includes(code)) {
    valueTyped = activeKey.textContent;
  } else if (!BASE_KEYS.includes(code)) {
    valueTyped = activeKey
      .querySelector('span.en:not(.hidden), span.ru:not(.hidden)')
      .querySelector('span:not(.hidden)')
      .textContent;
  }

  if (target.classList.contains('screen')) return;

  let { value } = screenKeyboard;

  if (valueTyped) value += valueTyped;
  if (key === 'Backspace') value = value.slice(0, value.length - 1);
  if (key === 'Enter') value += '\n';
  if (key === 'Tab') value += '    ';
  if (code === 'Space') value += ' ';

  screenKeyboard.value = value;
};

let keysPressed = [];

const handleLayoutOn = ({ key }) => {
  keysPressed.push(key);

  if (keysPressed.includes('Control') && keysPressed.includes('Alt')) {
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
  keysPressed = [];
};

// TODO: функции ниже объединить?
const handleShiftOn = ({ key, target: { id } }) => {
  if (key === 'Shift' || id.startsWith('Shift')) {
    layoutEnKeysCaseDown.map((caseDown) => caseDown.classList.add('hidden'));
    layoutRuKeysCaseDown.map((caseDown) => caseDown.classList.add('hidden'));

    layoutEnKeysCaseUp.map((caseUp) => caseUp.classList.remove('hidden'));
    layoutRuKeysCaseUp.map((caseUp) => caseUp.classList.remove('hidden'));
  }
};

const handleShiftOff = ({ key, target }) => {
  if (key === 'Shift' || target) {
    layoutEnKeysCaseDown.map((caseDown) => caseDown.classList.remove('hidden'));
    layoutRuKeysCaseDown.map((caseDown) => caseDown.classList.remove('hidden'));

    layoutEnKeysCaseUp.map((caseUp) => caseUp.classList.add('hidden'));
    layoutRuKeysCaseUp.map((caseUp) => caseUp.classList.add('hidden'));
  }
};

const handleCapsLockOn = ({ key, target: { id } }) => {
  if (key === 'CapsLock' || id === 'CapsLock') {
    layoutEnKeysCaps.map((caps) => caps.classList.remove('hidden'));
    layoutRuKeysCaps.map((caps) => caps.classList.remove('hidden'));

    layoutEnKeysCaseDown.map((caps) => caps.classList.add('hidden'));
    layoutRuKeysCaseDown.map((caps) => caps.classList.add('hidden'));
  }
};
// TODO: для клика caps должен сохраняться постоянным
const handleCapsLockOff = ({ key, target }) => {
  if (key === 'CapsLock' || target) {
    layoutEnKeysCaseDown.map((caps) => caps.classList.remove('hidden'));
    layoutRuKeysCaseDown.map((caps) => caps.classList.remove('hidden'));

    layoutEnKeysCaps.map((caps) => caps.classList.add('hidden'));
    layoutRuKeysCaps.map((caps) => caps.classList.add('hidden'));
  }
};

let targetClicked;
let targetBaseClicked;
// console.log(screenKeyboard)

const handleKeyClickOn = ({ target }) => {
  const closest = target.closest('.key');
  const { id } = target;

  // const cursorInputStart = screenKeyboard.selectionStart;
  // const cursorInputEnd = screenKeyboard.selectionEnd;
  let text;
  // console.log(cursorInputStart, cursorInputEnd)

  if (ARROWS_KEYS.includes(id)) {
    text = closest.textContent;
  } else if (
    !BASE_KEYS.includes(id)
    && target.className !== 'keys'
    && target.className !== 'keys__row'
  ) {
    text = closest
      .querySelector('span.en:not(.hidden), span.ru:not(.hidden)')
      .querySelector('span:not(.hidden)')
      .textContent;
  }

  let { value } = screenKeyboard;

  if (text) {
    closest.classList.add(ARROWS_KEYS.includes(id) ? 'key-base' : 'active-heart');
    targetClicked = closest;
    value += text;
  }

  if (BASE_KEYS.includes(id)) {
    closest.classList.add('key-base');
    targetBaseClicked = closest;
  }

  if (id === 'Backspace') value = value.slice(0, value.length - 1);
  // if (id === 'Delete') console.log('test');
  if (id === 'Enter') value += '\n';
  if (id === 'Tab') value += '    ';
  if (id === 'Space') value += ' ';

  screenKeyboard.value = value;
};

const handleKeyClickOff = () => {
  if (targetBaseClicked) {
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
    .remove(BASE_KEYS.includes(code) || ARROWS_KEYS.includes(code) ? 'key-base' : 'active-heart');
};

// Event Handlers
document.addEventListener('keydown', (evt) => {
  typeText(evt);
  handleLayoutOn(evt);
  handleCapsLockOn(evt);
  handleShiftOn(evt);
});

document.addEventListener('keyup', (evt) => {
  handleLayoutOff();
  handleCapsLockOff(evt);
  handleShiftOff(evt);
  removeActiveKeyAnimation(evt);
});

keys.addEventListener('mousedown', (evt) => {
  handleKeyClickOn(evt);
  handleCapsLockOn(evt);
  handleShiftOn(evt);
});

document.addEventListener('mouseup', (evt) => {
  handleKeyClickOff();
  handleCapsLockOff(evt);
  handleShiftOff(evt);
});
