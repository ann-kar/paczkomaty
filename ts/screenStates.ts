import {startButton, submitButton, phoneInput, codeInput, inputCnts, modal, modalOverlay} from './elements.js';

const displayElement = (el: HTMLElement, show: boolean): void => {
    show ? el.style.display = 'block' : el.style.display = 'none';
}

const startScreen = () => {
    displayElement((startButton as HTMLElement), true);
    displayElement((submitButton as HTMLElement), false);
    displayElement((modal as HTMLElement), false);
    displayElement((modalOverlay as HTMLElement), false);
    for (const cnt of inputCnts) {
        (cnt as HTMLElement).style.visibility = 'hidden';
    }
}

const inputScreen = () => {
    displayElement((startButton as HTMLElement), false);
    displayElement((submitButton as HTMLElement), true);
    displayElement((modal as HTMLElement), false);
    displayElement((modalOverlay as HTMLElement), false);
    for (const cnt of inputCnts) {
        (cnt as HTMLElement).style.visibility = 'visible';
    }
    (codeInput as HTMLInputElement).value = '';
    (codeInput as HTMLInputElement).setAttribute('value', '');
    (phoneInput as HTMLInputElement).value = '';
    (phoneInput as HTMLInputElement).setAttribute('value', '');
}

const successScreen = () => {
    displayElement((modal as HTMLElement), true);
    displayElement((modalOverlay as HTMLElement), true);
}

export {startScreen, inputScreen, successScreen};