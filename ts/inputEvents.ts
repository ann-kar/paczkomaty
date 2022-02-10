
import { submitButton, inputs } from './elements.js';
import { validateLength, validateChars } from './validations.js';
import { toggleErrors } from './errorDisplay.js';
import { inputStatus } from './inputStatus.js';

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

const checkAllInputs = () => {
    return (Object.values(inputStatus)).every(el => el === true);
}

const enableSubmitButton = () => {
    checkAllInputs() ? submitButton?.removeAttribute('disabled') : null;
};

const updateInputStatus = (input: HTMLInputElement) => {
    if (input.name === 'pickupPhone' || input.name === 'pickupCode') { // TODO: TypeScript keyof typeof
        if (validateInput(input)) {
            inputStatus[input.name] = true;
            enableSubmitButton();
        } else {
            inputStatus[input.name] = false;
        }
    }
}

for (const input of (inputs as HTMLInputElement[])) {
    input.addEventListener('input', () => {
        toggleErrors(input);
        updateInputStatus(input)
    });
}

export { inputStatus, validateInput, checkAllInputs }
