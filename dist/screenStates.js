import { startButton, submitButton, phoneInput, codeInput, inputCnts, modal, modalOverlay } from './elements.js';
const displayElement = (el, show) => {
    show ? el.style.display = 'block' : el.style.display = 'none';
};
const startScreen = () => {
    displayElement(startButton, true);
    displayElement(submitButton, false);
    displayElement(modal, false);
    displayElement(modalOverlay, false);
    for (const cnt of inputCnts) {
        cnt.style.visibility = 'hidden';
    }
};
const inputScreen = () => {
    displayElement(startButton, false);
    displayElement(submitButton, true);
    displayElement(modal, false);
    displayElement(modalOverlay, false);
    for (const cnt of inputCnts) {
        cnt.style.visibility = 'visible';
    }
    codeInput.value = '';
    codeInput.setAttribute('value', '');
    phoneInput.value = '';
    phoneInput.setAttribute('value', '');
};
const successScreen = () => {
    displayElement(modal, true);
    displayElement(modalOverlay, true);
};
export { startScreen, inputScreen, successScreen };
//# sourceMappingURL=screenStates.js.map