import { submitButton, inputs } from './elements.js';
import { validateInput, checkAllInputs } from './inputValidation.js';
import { toggleErrors } from './errorDisplay.js';
import { inputStatus } from './inputStatus.js';
import { InputNames } from './types';

const updateInputStatus = (input: HTMLInputElement) => {
    if (Object.keys(inputStatus).some(key => key === input.name)) {
        if (validateInput(input)) {
            inputStatus[(input.name as InputNames)] = true;
            checkAllInputs() ? submitButton?.removeAttribute('disabled') : null;
        } else {
            inputStatus[(input.name as InputNames)] = false;
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
