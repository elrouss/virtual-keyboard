import Key from './components/Key.js';

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
const keyBackquote = new Key('backquote', '`');
keyBackquote.create(row1);

const keyDigit1 = new Key('digit-1', '1');
keyDigit1.create(row1);

const keyDigit2 = new Key('digit-2', '2');
keyDigit2.create(row1);

const keyDigit3 = new Key('digit-3', '3');
keyDigit3.create(row1);

const keyDigit4 = new Key('digit-4', '4');
keyDigit4.create(row1);

const keyDigit5 = new Key('digit-5', '5');
keyDigit5.create(row1);

const keyDigit6 = new Key('digit-6', '6');
keyDigit6.create(row1);

const keyDigit7 = new Key('digit-7', '7');
keyDigit7.create(row1);

const keyDigit8 = new Key('digit-8', '8');
keyDigit8.create(row1);

const keyDigit9 = new Key('digit-9', '9');
keyDigit9.create(row1);

const keyDigit0 = new Key('digit-0', '0');
keyDigit0.create(row1);

const keyMinus = new Key('minus', '-');
keyMinus.create(row1);

const keyEqual = new Key('equal', '=');
keyEqual.create(row1);

const keyBackspace = new Key('backspace', 'Backspace');
keyBackspace.create(row1, 'key_size_l');

// Second row
const keyTab = new Key('tab', 'Tab');
keyTab.create(row2, 'key_size_s');

const keyQ = new Key('key-q', 'q');
keyQ.create(row2);

const keyW = new Key('key-w', 'w');
keyW.create(row2);

const keyE = new Key('key-e', 'e');
keyE.create(row2);

const keyR = new Key('key-r', 'r');
keyR.create(row2);

const keyT = new Key('key-t', 't');
keyT.create(row2);

const keyY = new Key('key-y', 'y');
keyY.create(row2);

const keyU = new Key('key-u', 'u');
keyU.create(row2);

const keyI = new Key('key-i', 'u');
keyI.create(row2);

const keyO = new Key('key-o', 'o');
keyO.create(row2);

const keyP = new Key('key-p', 'p');
keyP.create(row2);

const keyBracketLeft = new Key('bracket-left', '[');
keyBracketLeft.create(row2);

const keyBracketRight = new Key('bracket-right', ']');
keyBracketRight.create(row2);

const keyBackslash = new Key('backslash', '\\');
keyBackslash.create(row2);

const keyDelete = new Key('delete', 'Del');
keyDelete.create(row2, 'key_size_xs');

// Third row
const keyCapsLock = new Key('caps-lock', 'CapsLock');
keyCapsLock.create(row3, 'key_size_l');

const keyA = new Key('key-a', 'a');
keyA.create(row3);

const keyS = new Key('key-s', 's');
keyS.create(row3);

const keyD = new Key('key-d', 'd');
keyD.create(row3);

const keyF = new Key('key-f', 'f');
keyF.create(row3);

const keyG = new Key('key-g', 'g');
keyG.create(row3);

const keyH = new Key('key-h', 'h');
keyH.create(row3);

const keyJ = new Key('key-j', 'j');
keyJ.create(row3);

const keyK = new Key('key-k', 'k');
keyK.create(row3);

const keyL = new Key('key-l', 'l');
keyL.create(row3);

const keySemicolon = new Key('semicolon', ';');
keySemicolon.create(row3);

const keyQuote = new Key('quote', '\'');
keyQuote.create(row3);

const keyEnter = new Key('enter', 'Enter');
keyEnter.create(row3, 'key_size_m');

// Fourth row
const keyShiftLeft = new Key('shift-left', 'Shift');
keyShiftLeft.create(row4, 'key_size_l');

const keyZ = new Key('key-z', 'z');
keyZ.create(row4);

const keyX = new Key('key-x', 'x');
keyX.create(row4);

const keyC = new Key('key-c', 'c');
keyC.create(row4);

const keyV = new Key('key-v', 'v');
keyV.create(row4);

const keyB = new Key('key-b', 'b');
keyB.create(row4);

const keyN = new Key('key-n', 'n');
keyN.create(row4);

const keyM = new Key('key-m', 'm');
keyM.create(row4);

const keyComma = new Key('comma', ',');
keyComma.create(row4);

const keyDot = new Key('key-dot', '.');
keyDot.create(row4);

const keySlash = new Key('slash', '/');
keySlash.create(row4);

const keyArrowUp = new Key('arrow-up', '▲');
keyArrowUp.create(row4, 'key_color_accent');

const keyShiftRight = new Key('shift-right', 'Shift');
keyShiftRight.create(row4, 'key_size_m');

// Fifth row
const keyControlLeft = new Key('control-left', 'Ctrl');
keyControlLeft.create(row5, 'key_color_accent');

const keyMetaLeft = new Key('meta-left', 'Win');
keyMetaLeft.create(row5, 'key_color_accent');

const keyAltLeft = new Key('alt-left', 'Alt');
keyAltLeft.create(row5, 'key_color_accent');

const keySpace = new Key('space');
keySpace.create(row5, 'key_size_xl');

const keyAltRight = new Key('alt-right', 'Alt');
keyAltRight.create(row5, 'key_color_accent');

const keyArrowLeft = new Key('arrow-left', '◄');
keyArrowLeft.create(row5, 'key_color_accent');

const keyArrowDown = new Key('arrow-down', '▼');
keyArrowDown.create(row5, 'key_color_accent');

const keyArrowRight = new Key('arrow-right', '►');
keyArrowRight.create(row5, 'key_color_accent');

const keyControlRight = new Key('control-right', 'Ctrl');
keyControlRight.create(row5, 'key_color_accent');
