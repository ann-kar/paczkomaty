document.addEventListener('DOMContentLoaded', () => {

    const pickup = document.querySelector('.pickup');
    const startButton = (pickup as HTMLElement).querySelector('.button-start');
    const submitButton = (pickup as HTMLElement).querySelector('.button-submit');
    const form = (pickup as HTMLElement).querySelector('.form');
    const phoneInput = (pickup as HTMLElement).querySelector('#pickupPhone');
    const codeInput = (pickup as HTMLElement).querySelector('#pickupCode');
    const inputCnts: HTMLDivElement[] = Array.from((form as HTMLElement).querySelectorAll('.inputCnt'));
    const inputs: HTMLInputElement[] = Array.from((form as HTMLElement).querySelectorAll('.input'));
    const modal = (pickup as HTMLElement).querySelector('.modal');
    const modalOverlay = (pickup as HTMLElement).querySelector('.modal-overlay');
    const nextButton = (modal as HTMLElement).querySelector('.button-next');
    const exitButton = (modal as HTMLElement).querySelector('.button-exit');

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

    if (startButton) {
        startButton.addEventListener('click', (e) => {
            e.preventDefault();
            inputScreen();
        })
    }

    type Status = {
        pickupPhone: boolean,
        pickupCode: boolean
    }

    const inputStatus: Status = {
        pickupPhone: false,
        pickupCode: false
    }

    const validateLength = (val: string, len: number): boolean => (val.length === len);

    const validateChars = (val: string): boolean => {
        const regex = new RegExp(`[0-9]{${val.length}}`);
        return regex.test(val);
    }

    const validateInput = (input: HTMLInputElement) => {
        const val = (input.value).trim();
        switch (input.name) {
            case 'pickupPhone':
                return validateLength(val, 9) && (validateChars(val));
            case 'pickupCode':
                return validateLength(val, 4) && (validateChars(val));
            default:
                return false;
        }
    }

    const displayError = (el: HTMLElement): void => {
        if (el.nextElementSibling) {
            switch (el.id) {
                case 'pickupPhone':
                    (el.nextElementSibling as HTMLElement).innerText = 'Numer telefonu powinien składać się z 9 cyfr.';
                    break;
                case 'pickupCode':
                    (el.nextElementSibling as HTMLElement).innerText = 'Kod odbioru powinien składać się z 4 cyfr.';
                    break;
                case 'pickupSubmit':
                    (el.nextElementSibling as HTMLElement).innerText = 'Proszę wypełnić poprawnie wszystkie pola.';
            }
        }
    }

    const clearError = (el: HTMLElement): void => {
        el.nextElementSibling ? (el.nextElementSibling as HTMLElement).innerText = '' : null;
    }

    if (inputs) {
        for (const input of inputs) {
            input.addEventListener('keyup', () => {
                if (!validateInput(input)) {
                    displayError(input);
                } else {
                    clearError(input);
                }
            })
        }
    }

    if (inputs) {
        for (const input of inputs) {
            input.addEventListener('blur', () => {
                if (input.name === 'pickupPhone' || input.name === 'pickupCode') {
                    if (validateInput(input)) {
                        inputStatus[input.name] = true;
                    } else {
                        inputStatus[input.name] = false;
                    }
                    if (Object.values(inputStatus).every(el => el === true)) {
                        submitButton?.removeAttribute('disabled');
                    };
                }
            })
        }
    }

    if (submitButton) {
        submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (!(Object.values(inputStatus)).every(el => el === true)) {
                displayError(e.target as HTMLElement);
            } else {
                clearError(e.target as HTMLElement);
                submitButton.setAttribute('disabled','disabled');
                inputStatus.pickupCode = false;
                inputStatus.pickupPhone = false;
                successScreen();
            }
        })
    }

    if (nextButton) {
        nextButton.addEventListener('click', (e) => {
            e.preventDefault();
            inputScreen();
        })
    }

    if (exitButton) {
        exitButton.addEventListener('click', (e) => {
            e.preventDefault();
            startScreen();
        })
    }
})
