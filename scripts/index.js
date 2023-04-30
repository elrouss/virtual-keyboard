import Key from './components/Key.js';
import KeySymbol from './components/KeySymbol.js';

import { BASE_KEYS } from './utils/constants.js';

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
const operationSystem = createTextElement('p', 'paragraph', 'The keyboard was created with the Macintosh operating system');
const combinationKeys = createTextElement('p', 'paragraph', 'Combination for switching keyboard language: Ctrl + Space');

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
// First row
const keyBackquote = new KeySymbol('Backquote', keys, language);
keyBackquote.createSymbol(row1);
keyBackquote.createSymbolLayout('en', '`', '~');
keyBackquote.createSymbolLayout('ru', 'ё', 'Ё');

const keyDigit1 = new KeySymbol('Digit1', keys, language);
keyDigit1.createSymbol(row1);
keyDigit1.createSymbolLayout('en', '1', '!');
keyDigit1.createSymbolLayout('ru', '1', '!');

const keyDigit2 = new KeySymbol('Digit2', keys, language);
keyDigit2.createSymbol(row1);
keyDigit2.createSymbolLayout('en', '2', '@');
keyDigit2.createSymbolLayout('ru', '2', '"');

const keyDigit3 = new KeySymbol('Digit3', keys, language);
keyDigit3.createSymbol(row1);
keyDigit3.createSymbolLayout('en', '3', '#');
keyDigit3.createSymbolLayout('ru', '3', '№');

const keyDigit4 = new KeySymbol('Digit4', keys, language);
keyDigit4.createSymbol(row1);
keyDigit4.createSymbolLayout('en', '4', '$');
keyDigit4.createSymbolLayout('ru', '4', ';');

const keyDigit5 = new KeySymbol('Digit5', keys, language);
keyDigit5.createSymbol(row1);
keyDigit5.createSymbolLayout('en', '5', '%');
keyDigit5.createSymbolLayout('ru', '5', '%');

const keyDigit6 = new KeySymbol('Digit6', keys, language);
keyDigit6.createSymbol(row1);
keyDigit6.createSymbolLayout('en', '6', '^');
keyDigit6.createSymbolLayout('ru', '6', ':');

const keyDigit7 = new KeySymbol('Digit7', keys, language);
keyDigit7.createSymbol(row1);
keyDigit7.createSymbolLayout('en', '7', '&');
keyDigit7.createSymbolLayout('ru', '7', '?');

const keyDigit8 = new KeySymbol('Digit8', keys, language);
keyDigit8.createSymbol(row1);
keyDigit8.createSymbolLayout('en', '8', '*');
keyDigit8.createSymbolLayout('ru', '8', '*');

const keyDigit9 = new KeySymbol('Digit9', keys, language);
keyDigit9.createSymbol(row1);
keyDigit9.createSymbolLayout('en', '9', '(');
keyDigit9.createSymbolLayout('ru', '9', '(');

const keyDigit0 = new KeySymbol('Digit0', keys, language);
keyDigit0.createSymbol(row1);
keyDigit0.createSymbolLayout('en', '0', ')');
keyDigit0.createSymbolLayout('ru', '0', ')');

const keyMinus = new KeySymbol('Minus', keys, language);
keyMinus.createSymbol(row1);
keyMinus.createSymbolLayout('en', '-', '_');
keyMinus.createSymbolLayout('ru', '-', '_');

const keyEqual = new KeySymbol('Equal', keys, language);
keyEqual.createSymbol(row1);
keyEqual.createSymbolLayout('en', '=', '+');
keyEqual.createSymbolLayout('ru', '=', '+');

const keyBackspace = new Key('Backspace', 'Backspace');
keyBackspace.create(row1, 'key_size_l');

// Second row
const keyTab = new Key('Tab', 'Tab');
keyTab.create(row2, 'key_size_s');

const keyQ = new KeySymbol('KeyQ', keys, language);
keyQ.createSymbol(row2);
keyQ.createSymbolLayout('en', 'q', 'Q');
keyQ.createSymbolLayout('ru', 'й', 'Й');

const keyW = new KeySymbol('KeyW', keys, language);
keyW.createSymbol(row2);
keyW.createSymbolLayout('en', 'w', 'w');
keyW.createSymbolLayout('ru', 'ц', 'Ц');

const keyE = new KeySymbol('KeyE', keys, language);
keyE.createSymbol(row2);
keyE.createSymbolLayout('en', 'e', 'E');
keyE.createSymbolLayout('ru', 'у', 'У');

const keyR = new KeySymbol('KeyR', keys, language);
keyR.createSymbol(row2);
keyR.createSymbolLayout('en', 'r', 'R');
keyR.createSymbolLayout('ru', 'к', 'К');

const keyT = new KeySymbol('KeyT', keys, language);
keyT.createSymbol(row2);
keyT.createSymbolLayout('en', 't', 'T');
keyT.createSymbolLayout('ru', 'е', 'Е');

const keyY = new KeySymbol('KeyY', keys, language);
keyY.createSymbol(row2);
keyY.createSymbolLayout('en', 'y', 'Y');
keyY.createSymbolLayout('ru', 'н', 'Н');

const keyU = new KeySymbol('KeyU', keys, language);
keyU.createSymbol(row2);
keyU.createSymbolLayout('en', 'u', 'U');
keyU.createSymbolLayout('ru', 'г', 'Г');

const keyI = new KeySymbol('KeyI', keys, language);
keyI.createSymbol(row2);
keyI.createSymbolLayout('en', 'i', 'I');
keyI.createSymbolLayout('ru', 'ш', 'Ш');

const keyO = new KeySymbol('KeyO', keys, language);
keyO.createSymbol(row2);
keyO.createSymbolLayout('en', 'o', 'O');
keyO.createSymbolLayout('ru', 'щ', 'Щ');

const keyP = new KeySymbol('KeyP', keys, language);
keyP.createSymbol(row2);
keyP.createSymbolLayout('en', 'p', 'P');
keyP.createSymbolLayout('ru', 'з', 'З');

const keyBracketLeft = new KeySymbol('BracketLeft', keys, language);
keyBracketLeft.createSymbol(row2);
keyBracketLeft.createSymbolLayout('en', '[', '{');
keyBracketLeft.createSymbolLayout('ru', 'х', 'Х');

const keyBracketRight = new KeySymbol('BracketRight', keys, language);
keyBracketRight.createSymbol(row2);
keyBracketRight.createSymbolLayout('en', ']', '}');
keyBracketRight.createSymbolLayout('ru', 'ъ', 'Ъ');

const keyBackslash = new KeySymbol('Backslash', keys, language);
keyBackslash.createSymbol(row2);
keyBackslash.createSymbolLayout('en', '\\', '|');
keyBackslash.createSymbolLayout('ru', '\\', '/');

const keyDelete = new Key('Delete', 'Del', keys, language);
keyDelete.create(row2, 'key_size_xs');

// Third row
const keyCapsLock = new Key('CapsLock', 'CapsLock', keys, language);
keyCapsLock.create(row3, 'key_size_l');

const keyA = new KeySymbol('KeyA', keys, language);
keyA.createSymbol(row3);
keyA.createSymbolLayout('en', 'a', 'A');
keyA.createSymbolLayout('ru', 'ф', 'Ф');

const keyS = new KeySymbol('KeyS', keys, language);
keyS.createSymbol(row3);
keyS.createSymbolLayout('en', 's', 'S');
keyS.createSymbolLayout('ru', 'ы', 'Ы');

const keyD = new KeySymbol('KeyD', keys, language);
keyD.createSymbol(row3);
keyD.createSymbolLayout('en', 'd', 'D');
keyD.createSymbolLayout('ru', 'в', 'В');

const keyF = new KeySymbol('KeyF', keys, language);
keyF.createSymbol(row3);
keyF.createSymbolLayout('en', 'f', 'F');
keyF.createSymbolLayout('ru', 'а', 'А');

const keyG = new KeySymbol('KeyG', keys, language);
keyG.createSymbol(row3);
keyG.createSymbolLayout('en', 'g', 'G');
keyG.createSymbolLayout('ru', 'п', 'П');

const keyH = new KeySymbol('KeyH', keys, language);
keyH.createSymbol(row3);
keyH.createSymbolLayout('en', 'h', 'H');
keyH.createSymbolLayout('ru', 'р', 'Р');

const keyJ = new KeySymbol('KeyJ', keys, language);
keyJ.createSymbol(row3);
keyJ.createSymbolLayout('en', 'j', 'J');
keyJ.createSymbolLayout('ru', 'о', 'О');

const keyK = new KeySymbol('KeyK', keys, language);
keyK.createSymbol(row3);
keyK.createSymbolLayout('en', 'k', 'K');
keyK.createSymbolLayout('ru', 'л', 'Л');

const keyL = new KeySymbol('KeyL', keys, language);
keyL.createSymbol(row3);
keyL.createSymbolLayout('en', 'l', 'L');
keyL.createSymbolLayout('ru', 'д', 'Д');

const keySemicolon = new KeySymbol('Semicolon', keys, language);
keySemicolon.createSymbol(row3);
keySemicolon.createSymbolLayout('en', ';', ':');
keySemicolon.createSymbolLayout('ru', 'ж', 'Ж');

const keyQuote = new KeySymbol('Quote', keys, language);
keyQuote.createSymbol(row3);
keyQuote.createSymbolLayout('en', '\'', '"');
keyQuote.createSymbolLayout('ru', 'э', 'Э');

const keyEnter = new Key('Enter', 'Enter');
keyEnter.create(row3, 'key_size_m');

// Fourth row
const keyShiftLeft = new Key('ShiftLeft', 'Shift');
keyShiftLeft.create(row4, 'key_size_l');

const keyZ = new KeySymbol('KeyZ', keys, language);
keyZ.createSymbol(row4);
keyZ.createSymbolLayout('en', 'z', 'Z');
keyZ.createSymbolLayout('ru', 'я', 'Я');

const keyX = new KeySymbol('KeyX', keys, language);
keyX.createSymbol(row4);
keyX.createSymbolLayout('en', 'x', 'X');
keyX.createSymbolLayout('ru', 'ч', 'Ч');

const keyC = new KeySymbol('KeyC', keys, language);
keyC.createSymbol(row4);
keyC.createSymbolLayout('en', 'c', 'C');
keyC.createSymbolLayout('ru', 'с', 'С');

const keyV = new KeySymbol('KeyV', keys, language);
keyV.createSymbol(row4);
keyV.createSymbolLayout('en', 'v', 'V');
keyV.createSymbolLayout('ru', 'м', 'М');

const keyB = new KeySymbol('KeyB', keys, language);
keyB.createSymbol(row4);
keyB.createSymbolLayout('en', 'b', 'B');
keyB.createSymbolLayout('ru', 'и', 'И');

const keyN = new KeySymbol('KeyN', keys, language);
keyN.createSymbol(row4);
keyN.createSymbolLayout('en', 'n', 'N');
keyN.createSymbolLayout('ru', 'т', 'Т');

const keyM = new KeySymbol('KeyM', keys, language);
keyM.createSymbol(row4);
keyM.createSymbolLayout('en', 'm', 'M');
keyM.createSymbolLayout('ru', 'ь', 'Ь');

const keyComma = new KeySymbol('Comma', keys, language);
keyComma.createSymbol(row4);
keyComma.createSymbolLayout('en', ',', '<');
keyComma.createSymbolLayout('ru', 'б', 'Б');

const keyDot = new KeySymbol('Period', keys, language);
keyDot.createSymbol(row4);
keyDot.createSymbolLayout('en', '.', '>');
keyDot.createSymbolLayout('ru', 'ю', 'Ю');

const keySlash = new KeySymbol('Slash', keys, language);
keySlash.createSymbol(row4);
keySlash.createSymbolLayout('en', '/', '?');
keySlash.createSymbolLayout('ru', '.', ',');

const keyArrowUp = new Key('ArrowUp', '▲');
keyArrowUp.create(row4, 'key_color_accent');

const keyShiftRight = new Key('ShiftRight', 'Shift');
keyShiftRight.create(row4, 'key_size_m');

// Fifth row
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
const typeText = ({ code, key, target }) => {
  const activeKey = keys.querySelector(`#${code}`);
  activeKey.classList.add(BASE_KEYS.includes(code) ? 'key-base' : 'active-heart');
  // TODO: при клике на инпут идет пользовательская раскладка, а не моя ;(
  let valueTyped;
  if (!BASE_KEYS.includes(code)) {
    valueTyped = activeKey
      .querySelector('span.en:not(.hidden), span.ru:not(.hidden)')
      .querySelector('span:not(.hidden)')
      .textContent;
  }

  if (target.classList.contains('screen')) return;

  let { value } = screenKeyboard;

  if (key.length === 1 && valueTyped) value += valueTyped;
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

const handleShiftOn = ({ key }) => {
  if (key === 'Shift') {
    layoutEnKeysCaseDown.map((caseDown) => caseDown.classList.add('hidden'));
    layoutRuKeysCaseDown.map((caseDown) => caseDown.classList.add('hidden'));

    layoutEnKeysCaseUp.map((caseUp) => caseUp.classList.remove('hidden'));
    layoutRuKeysCaseUp.map((caseUp) => caseUp.classList.remove('hidden'));
  }
};

const handleShiftOff = ({ key }) => {
  if (key === 'Shift') {
    layoutEnKeysCaseDown.map((caseDown) => caseDown.classList.remove('hidden'));
    layoutRuKeysCaseDown.map((caseDown) => caseDown.classList.remove('hidden'));

    layoutEnKeysCaseUp.map((caseUp) => caseUp.classList.add('hidden'));
    layoutRuKeysCaseUp.map((caseUp) => caseUp.classList.add('hidden'));
  }
};

// const handleCapsLock = (evt) => {
//   console.log(evt)
// }

const removeActiveKeyAnimation = ({ code }) => {
  keys
    .querySelector(`#${code}`)
    .classList
    .remove(BASE_KEYS.includes(code) ? 'key-base' : 'active-heart');
};

// Event Handlers
document.addEventListener('keydown', (evt) => {
  typeText(evt);
  handleLayoutOn(evt);
  handleShiftOn(evt);
});

document.addEventListener('keyup', (evt) => {
  // handleCapsLock(evt);
  handleLayoutOff();
  handleShiftOff(evt);
  removeActiveKeyAnimation(evt);
});
