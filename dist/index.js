import { startButton, submitButton, nextButton, exitButton } from './elements.js';
import { startScreen, inputScreen, successScreen } from './screenStates.js';
import { displayError, clearError } from './errorDisplay.js';
import { inputStatus } from './inputStatus.js';
import { checkAllInputs } from './inputEvents.js';
document.addEventListener('DOMContentLoaded', () => {
    startButton.addEventListener('click', (e) => {
        e.preventDefault();
        inputScreen();
    });
    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (checkAllInputs()) {
            clearError(e.target);
            submitButton === null || submitButton === void 0 ? void 0 : submitButton.setAttribute('disabled', 'disabled');
            inputStatus.pickupCode = false;
            inputStatus.pickupPhone = false;
            successScreen();
        }
        else {
            displayError(e.target);
        }
    });
    nextButton.addEventListener('click', (e) => {
        e.preventDefault();
        inputScreen();
    });
    exitButton.addEventListener('click', (e) => {
        e.preventDefault();
        startScreen();
    });
});
//# sourceMappingURL=index.js.map