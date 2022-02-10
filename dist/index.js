"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const pickup = document.querySelector('.pickup');
    const startButton = pickup.querySelector('.button-start');
    const submitButton = pickup.querySelector('.button-submit');
    const form = pickup.querySelector('.form');
    const phoneInput = pickup.querySelector('#pickupPhone');
    const codeInput = pickup.querySelector('#pickupCode');
    const inputCnts = Array.from(form.querySelectorAll('.inputCnt'));
    const inputs = Array.from(form.querySelectorAll('.input'));
    const modal = pickup.querySelector('.modal');
    const modalOverlay = pickup.querySelector('.modal-overlay');
    const nextButton = modal.querySelector('.button-next');
    const exitButton = modal.querySelector('.button-exit');
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
    if (startButton) {
        startButton.addEventListener('click', (e) => {
            e.preventDefault();
            inputScreen();
        });
    }
    const inputStatus = {
        pickupPhone: false,
        pickupCode: false
    };
    const validateLength = (val, len) => (val.length === len);
    const validateChars = (val) => {
        const regex = new RegExp(`[0-9]{${val.length}}`);
        return regex.test(val);
    };
    const validateInput = (input) => {
        const val = (input.value).trim();
        switch (input.name) {
            case 'pickupPhone':
                return validateLength(val, 9) && (validateChars(val));
            case 'pickupCode':
                return validateLength(val, 4) && (validateChars(val));
            default:
                return false;
        }
    };
    const displayError = (el) => {
        if (el.nextElementSibling) {
            switch (el.id) {
                case 'pickupPhone':
                    el.nextElementSibling.innerText = 'Numer telefonu powinien składać się z 9 cyfr.';
                    break;
                case 'pickupCode':
                    el.nextElementSibling.innerText = 'Kod odbioru powinien składać się z 4 cyfr.';
                    break;
                case 'pickupSubmit':
                    el.nextElementSibling.innerText = 'Proszę wypełnić poprawnie wszystkie pola.';
            }
        }
    };
    const clearError = (el) => {
        el.nextElementSibling ? el.nextElementSibling.innerText = '' : null;
    };
    if (inputs) {
        for (const input of inputs) {
            input.addEventListener('keyup', () => {
                if (!validateInput(input)) {
                    displayError(input);
                }
                else {
                    clearError(input);
                }
            });
        }
    }
    if (inputs) {
        for (const input of inputs) {
            input.addEventListener('blur', () => {
                if (input.name === 'pickupPhone' || input.name === 'pickupCode') {
                    if (validateInput(input)) {
                        inputStatus[input.name] = true;
                    }
                    else {
                        inputStatus[input.name] = false;
                    }
                    if (Object.values(inputStatus).every(el => el === true)) {
                        submitButton === null || submitButton === void 0 ? void 0 : submitButton.removeAttribute('disabled');
                    }
                    ;
                }
            });
        }
    }
    if (submitButton) {
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (!(Object.values(inputStatus)).every(el => el === true)) {
                displayError(e.target);
            }
            else {
                clearError(e.target);
                submitButton.setAttribute('disabled', 'disabled');
                inputStatus.pickupCode = false;
                inputStatus.pickupPhone = false;
                successScreen();
            }
        });
    }
    if (nextButton) {
        nextButton.addEventListener('click', (e) => {
            e.preventDefault();
            inputScreen();
        });
    }
    if (exitButton) {
        exitButton.addEventListener('click', (e) => {
            e.preventDefault();
            startScreen();
        });
    }
});
//# sourceMappingURL=index.js.map