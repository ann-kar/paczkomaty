type InputStatus = {
    pickupPhone: boolean,
    pickupCode: boolean
}

type InputNames = keyof InputStatus;

export {InputStatus, InputNames}