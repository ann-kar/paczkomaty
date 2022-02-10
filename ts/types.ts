import {inputStatus} from './inputEvents.js';

type InputStatus = {
    pickupPhone: boolean,
    pickupCode: boolean
}

type InputNames = keyof typeof inputStatus;

export {InputStatus, InputNames}