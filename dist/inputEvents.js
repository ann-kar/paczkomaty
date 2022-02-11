import { submitButton, inputs } from './elements.js';
import { validateInput, checkAllInputs } from './inputValidation.js';
import { toggleErrors } from './errorDisplay.js';
import { inputStatus } from './inputStatus.js';
const updateInputStatus = (input) => {
    if (Object.keys(inputStatus).some(key => key === input.name)) {
        if (validateInput(input)) {
            inputStatus[input.name] = true;
            checkAllInputs() ? submitButton === null || submitButton === void 0 ? void 0 : submitButton.removeAttribute('disabled') : null;
        }
        else {
            inputStatus[input.name] = false;
        }
    }
};
for (const input of inputs) {
    input.addEventListener('input', () => {
        toggleErrors(input);
        updateInputStatus(input);
    });
}
export { inputStatus, validateInput, checkAllInputs };
//# sourceMappingURL=inputEvents.js.map