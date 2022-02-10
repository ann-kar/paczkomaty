import { startButton, submitButton, nextButton, exitButton } from './elements.js';
import { startScreen, inputScreen, successScreen } from './screenStates.js';
import { displayError, clearError } from './errorDisplay.js';
import { inputStatus } from './inputStatus.js';
import { checkAllInputs } from './inputEvents.js';

document.addEventListener('DOMContentLoaded', () => {

    (startButton as HTMLButtonElement).addEventListener('click', (e) => {
        e.preventDefault();
        inputScreen();
    });

    (submitButton as HTMLButtonElement).addEventListener('click', (e) => {
        e.preventDefault();
        if (checkAllInputs()) {
            clearError(e.target as HTMLElement);
            submitButton?.setAttribute('disabled', 'disabled');
            inputStatus.pickupCode = false;
            inputStatus.pickupPhone = false;
            successScreen();
        } else {
            displayError(e.target as HTMLElement);
        }
    });

    (nextButton as HTMLButtonElement).addEventListener('click', (e) => {
        e.preventDefault();
        inputScreen();
    });

    (exitButton as HTMLButtonElement).addEventListener('click', (e) => {
        e.preventDefault();
        startScreen();
    })
})
