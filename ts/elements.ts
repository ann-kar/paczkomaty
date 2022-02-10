

const pickup = document.querySelector('.pickup');
const startButton = (pickup as HTMLElement).querySelector('.button-start');
const submitButton = (pickup as HTMLElement).querySelector('.button-submit');
const form = (pickup as HTMLElement).querySelector('.form');
const phoneInput = (pickup as HTMLElement).querySelector('#pickupPhone');
const codeInput = (pickup as HTMLElement).querySelector('#pickupCode');
const inputCnts: HTMLDivElement[] = Array.from((form as HTMLElement).querySelectorAll('.inputCnt'));
const inputs: HTMLInputElement[] = Array.from((form as HTMLElement).querySelectorAll('.input'));
const modal = (pickup as HTMLElement).querySelector('.modal');
const modalOverlay = (pickup as HTMLElement).querySelector('.modal-overlay');
const nextButton = (modal as HTMLElement).querySelector('.button-next');
const exitButton = (modal as HTMLElement).querySelector('.button-exit');

export {startButton, submitButton, phoneInput, codeInput, inputCnts, inputs, modal, modalOverlay, nextButton, exitButton}