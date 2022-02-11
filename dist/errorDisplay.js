import { validateInput } from './inputEvents.js';
const toggleErrors = (input) => {
    validateInput(input) ? clearError(input) : displayError(input);
};
const displayError = (el) => {
    if (el.nextElementSibling && Array.from(el.nextElementSibling.classList).includes("form-message")) {
        switch (el.id) {
            case 'pickupPhone':
                el.nextElementSibling.innerText = 'Numer telefonu powinien składać się z 9 cyfr.';
                break;
            case 'pickupCode':
                el.nextElementSibling.innerText = 'Kod odbioru powinien składać się z 4 cyfr.';
                break;
            case 'pickupSubmit':
                el.nextElementSibling.innerText = 'Proszę wypełnić poprawnie wszystkie pola.';
            default:
                break;
        }
    }
};
const clearError = (el) => {
    el.nextElementSibling ? el.nextElementSibling.innerText = '' : null;
};
export { toggleErrors, displayError, clearError };
//# sourceMappingURL=errorDisplay.js.map