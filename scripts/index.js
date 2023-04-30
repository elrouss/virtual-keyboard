import Key from './components/Key.js';
import KeySymbol from './components/KeySymbol.js';

import { BASE_KEYS } from './utils/constants.js';

const { body } = document;
body.className = 'page';

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
const keyBackquote = new KeySymbol('Backquote');
keyBackquote.createSymbol(row1);
keyBackquote.createSymbolLayout('eng', '`', '~');
keyBackquote.createSymbolLayout('ru', 'ё', 'Ё');

const keyDigit1 = new KeySymbol('Digit1');
keyDigit1.createSymbol(row1);
keyDigit1.createSymbolLayout('eng', '1', '!');
keyDigit1.createSymbolLayout('ru', '1', '!');

const keyDigit2 = new KeySymbol('Digit2');
keyDigit2.createSymbol(row1);
keyDigit2.createSymbolLayout('eng', '2', '@');
keyDigit2.createSymbolLayout('ru', '2', '"');

const keyDigit3 = new KeySymbol('Digit3');
keyDigit3.createSymbol(row1);
keyDigit3.createSymbolLayout('eng', '3', '#');
keyDigit3.createSymbolLayout('ru', '3', '№');

const keyDigit4 = new KeySymbol('Digit4');
keyDigit4.createSymbol(row1);
keyDigit4.createSymbolLayout('eng', '4', '$');
keyDigit4.createSymbolLayout('ru', '4', ';');

const keyDigit5 = new KeySymbol('Digit5');
keyDigit5.createSymbol(row1);
keyDigit5.createSymbolLayout('eng', '5', '%');
keyDigit5.createSymbolLayout('ru', '5', '%');

const keyDigit6 = new KeySymbol('Digit6');
keyDigit6.createSymbol(row1);
keyDigit6.createSymbolLayout('eng', '6', '^');
keyDigit6.createSymbolLayout('ru', '6', ':');

const keyDigit7 = new KeySymbol('Digit7');
keyDigit7.createSymbol(row1);
keyDigit7.createSymbolLayout('eng', '7', '&');
keyDigit7.createSymbolLayout('ru', '7', '?');

const keyDigit8 = new KeySymbol('Digit8');
keyDigit8.createSymbol(row1);
keyDigit8.createSymbolLayout('eng', '8', '*');
keyDigit8.createSymbolLayout('ru', '8', '*');

const keyDigit9 = new KeySymbol('Digit9');
keyDigit9.createSymbol(row1);
keyDigit9.createSymbolLayout('eng', '9', '(');
keyDigit9.createSymbolLayout('ru', '9', '(');

const keyDigit0 = new KeySymbol('Digit0');
keyDigit0.createSymbol(row1);
keyDigit0.createSymbolLayout('eng', '0', ')');
keyDigit0.createSymbolLayout('ru', '0', ')');

const keyMinus = new KeySymbol('Minus');
keyMinus.createSymbol(row1);
keyMinus.createSymbolLayout('eng', '-', '_');
keyMinus.createSymbolLayout('ru', '-', '_');

const keyEqual = new KeySymbol('Equal');
keyEqual.createSymbol(row1);
keyEqual.createSymbolLayout('eng', '=', '+');
keyEqual.createSymbolLayout('ru', '=', '+');

const keyBackspace = new Key('Backspace', 'Backspace');
keyBackspace.create(row1, 'key_size_l');

// Second row
const keyTab = new Key('Tab', 'Tab');
keyTab.create(row2, 'key_size_s');

const keyQ = new KeySymbol('KeyQ');
keyQ.createSymbol(row2);
keyQ.createSymbolLayout('eng', 'q', 'Q');
keyQ.createSymbolLayout('ru', 'й', 'Й');

const keyW = new KeySymbol('KeyW');
keyW.createSymbol(row2);
keyW.createSymbolLayout('eng', 'w', 'w');
keyW.createSymbolLayout('ru', 'ц', 'Ц');

const keyE = new KeySymbol('KeyE');
keyE.createSymbol(row2);
keyE.createSymbolLayout('eng', 'e', 'E');
keyE.createSymbolLayout('ru', 'у', 'У');

const keyR = new KeySymbol('KeyR');
keyR.createSymbol(row2);
keyR.createSymbolLayout('eng', 'r', 'R');
keyR.createSymbolLayout('ru', 'к', 'К');

const keyT = new KeySymbol('KeyT');
keyT.createSymbol(row2);
keyT.createSymbolLayout('eng', 't', 'T');
keyT.createSymbolLayout('ru', 'е', 'Е');

const keyY = new KeySymbol('KeyY');
keyY.createSymbol(row2);
keyY.createSymbolLayout('eng', 'y', 'Y');
keyY.createSymbolLayout('ru', 'н', 'Н');

const keyU = new KeySymbol('KeyU');
keyU.createSymbol(row2);
keyU.createSymbolLayout('eng', 'u', 'U');
keyU.createSymbolLayout('ru', 'н', 'Н');

const keyI = new KeySymbol('KeyI');
keyI.createSymbol(row2);
keyI.createSymbolLayout('eng', 'i', 'I');
keyI.createSymbolLayout('ru', 'ш', 'Ш');

const keyO = new KeySymbol('KeyO');
keyO.createSymbol(row2);
keyO.createSymbolLayout('eng', 'o', 'O');
keyO.createSymbolLayout('ru', 'щ', 'Щ');

const keyP = new KeySymbol('KeyP');
keyP.createSymbol(row2);
keyP.createSymbolLayout('eng', 'p', 'P');
keyP.createSymbolLayout('ru', 'з', 'З');

const keyBracketLeft = new KeySymbol('BracketLeft');
keyBracketLeft.createSymbol(row2);
keyBracketLeft.createSymbolLayout('eng', '[', '[');
keyBracketLeft.createSymbolLayout('ru', 'х', 'Х');

const keyBracketRight = new KeySymbol('BracketRight');
keyBracketRight.createSymbol(row2);
keyBracketRight.createSymbolLayout('eng', ']', ']');
keyBracketRight.createSymbolLayout('ru', 'ъ', 'Ъ');

const keyBackslash = new KeySymbol('Backslash');
keyBackslash.createSymbol(row2);
keyBackslash.createSymbolLayout('eng', '\\', '|');
keyBackslash.createSymbolLayout('ru', '\\', '/');

const keyDelete = new Key('Delete', 'Del');
keyDelete.create(row2, 'key_size_xs');

// Third row
const keyCapsLock = new Key('CapsLock', 'CapsLock');
keyCapsLock.create(row3, 'key_size_l');

const keyA = new KeySymbol('KeyA');
keyA.createSymbol(row3);
keyA.createSymbolLayout('eng', 'a', 'A');
keyA.createSymbolLayout('ru', 'ф', 'Ф');

const keyS = new KeySymbol('KeyS');
keyS.createSymbol(row3);
keyS.createSymbolLayout('eng', 's', 'S');
keyS.createSymbolLayout('ru', 'ы', 'Ы');

const keyD = new KeySymbol('KeyD');
keyD.createSymbol(row3);
keyD.createSymbolLayout('eng', 'd', 'D');
keyD.createSymbolLayout('ru', 'в', 'В');

const keyF = new KeySymbol('KeyF');
keyF.createSymbol(row3);
keyF.createSymbolLayout('eng', 'f', 'F');
keyF.createSymbolLayout('ru', 'а', 'А');

const keyG = new KeySymbol('KeyG');
keyG.createSymbol(row3);
keyG.createSymbolLayout('eng', 'g', 'G');
keyG.createSymbolLayout('ru', 'п', 'П');

const keyH = new KeySymbol('KeyH');
keyH.createSymbol(row3);
keyH.createSymbolLayout('eng', 'h', 'H');
keyH.createSymbolLayout('ru', 'р', 'Р');

const keyJ = new KeySymbol('KeyJ');
keyJ.createSymbol(row3);
keyJ.createSymbolLayout('eng', 'j', 'J');
keyJ.createSymbolLayout('ru', 'о', 'О');

const keyK = new KeySymbol('KeyK');
keyK.createSymbol(row3);
keyK.createSymbolLayout('eng', 'k', 'K');
keyK.createSymbolLayout('ru', 'л', 'Л');

const keyL = new KeySymbol('KeyL');
keyL.createSymbol(row3);
keyL.createSymbolLayout('eng', 'l', 'L');
keyL.createSymbolLayout('ru', 'д', 'Д');

const keySemicolon = new KeySymbol('Semicolon');
keySemicolon.createSymbol(row3);
keySemicolon.createSymbolLayout('eng', ';', ':');
keySemicolon.createSymbolLayout('ru', 'ж', 'Ж');

const keyQuote = new KeySymbol('Quote');
keyQuote.createSymbol(row3);
keyQuote.createSymbolLayout('eng', '\'', '"');
keyQuote.createSymbolLayout('ru', 'э', 'Э');

const keyEnter = new Key('Enter', 'Enter');
keyEnter.create(row3, 'key_size_m');

// Fourth row
const keyShiftLeft = new Key('ShiftLeft', 'Shift');
keyShiftLeft.create(row4, 'key_size_l');

const keyZ = new KeySymbol('KeyZ');
keyZ.createSymbol(row4);
keyZ.createSymbolLayout('eng', 'z', 'Z');
keyZ.createSymbolLayout('ru', 'я', 'Я');

const keyX = new KeySymbol('KeyX');
keyX.createSymbol(row4);
keyX.createSymbolLayout('eng', 'x', 'X');
keyX.createSymbolLayout('ru', 'ч', 'Ч');

const keyC = new KeySymbol('KeyC');
keyC.createSymbol(row4);
keyC.createSymbolLayout('eng', 'c', 'C');
keyC.createSymbolLayout('ru', 'с', 'С');

const keyV = new KeySymbol('KeyV');
keyV.createSymbol(row4);
keyV.createSymbolLayout('eng', 'v', 'V');
keyV.createSymbolLayout('ru', 'м', 'М');

const keyB = new KeySymbol('KeyB');
keyB.createSymbol(row4);
keyB.createSymbolLayout('eng', 'b', 'B');
keyB.createSymbolLayout('ru', 'и', 'И');

const keyN = new KeySymbol('KeyN');
keyN.createSymbol(row4);
keyN.createSymbolLayout('eng', 'n', 'N');
keyN.createSymbolLayout('ru', 'т', 'Т');

const keyM = new KeySymbol('KeyM');
keyM.createSymbol(row4);
keyM.createSymbolLayout('eng', 'm', 'M');
keyM.createSymbolLayout('ru', 'ь', 'Ь');

const keyComma = new KeySymbol('Comma');
keyComma.createSymbol(row4);
keyComma.createSymbolLayout('eng', ',', '<');
keyComma.createSymbolLayout('ru', 'б', 'Б');

const keyDot = new KeySymbol('Period');
keyDot.createSymbol(row4);
keyDot.createSymbolLayout('eng', '.', '>');
keyDot.createSymbolLayout('ru', 'ю', 'Ю');

const keySlash = new KeySymbol('Slash');
keySlash.createSymbol(row4);
keySlash.createSymbolLayout('eng', '/', '?');
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

// Adding text in input
const typeText = ({ code, key, target }) => {
  if (target.classList.contains('screen')) return;
  console.log(code)

  const activeKey = document.querySelector(`#${code}`);
  activeKey.classList.add(BASE_KEYS.includes(code) ? 'key-base' : 'active-heart');

  let { value } = screenKeyboard;

  if (key.length === 1) value += key;
  if (key === 'Backspace') value = value.slice(0, value.length - 1);
  if (key === 'Enter') value += '\n';
  if (key === 'Tab') value += '    ';

  screenKeyboard.value = value;
};

const removeActiveKeyAnimation = ({ code }) => {
  document.querySelector(`#${code}`).classList.remove(BASE_KEYS.includes(code) ? 'key-base' : 'active-heart');
};

// Event Handlers
document.addEventListener('keydown', (evt) => typeText(evt));
document.addEventListener('keyup', (evt) => removeActiveKeyAnimation(evt));
