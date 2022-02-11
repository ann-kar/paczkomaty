import { validateLength, validateChars } from './validationHelpers.js';
import { inputStatus } from './inputStatus.js';
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
const checkAllInputs = () => {
    return (Object.values(inputStatus)).every(el => el === true);
};
export { validateInput, checkAllInputs };
//# sourceMappingURL=inputValidation.js.map