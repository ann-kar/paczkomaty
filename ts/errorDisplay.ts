
import { validateInput } from './inputEvents.js';

const toggleErrors = (input: HTMLInputElement): void => {
    validateInput(input) ? clearError(input) : displayError(input);
};

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

export { toggleErrors, displayError, clearError };