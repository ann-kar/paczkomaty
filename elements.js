const pickup = document.querySelector('.pickup');
const startButton = pickup.querySelector('.button-start');
const submitButton = pickup.querySelector('.button-submit');
const form = pickup.querySelector('.form');
const phoneInput = pickup.querySelector('#pickupPhone');
const codeInput = pickup.querySelector('#pickupCode');
const inputCnts = Array.from(form.querySelectorAll('.inputCnt'));
const inputs = Array.from(form.querySelectorAll('.input'));
const modal = pickup.querySelector('.modal');
const modalOverlay = pickup.querySelector('.modal-overlay');
const nextButton = modal.querySelector('.button-next');
const exitButton = modal.querySelector('.button-exit');
export { startButton, submitButton, phoneInput, codeInput, inputCnts, inputs, modal, modalOverlay, nextButton, exitButton };
//# sourceMappingURL=elements.js.map