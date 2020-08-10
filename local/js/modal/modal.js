const bodyPage = document.querySelector('.page');
const modalTriggers = document.querySelectorAll(".modal__open-link");
const modalCloseTrigger = document.querySelectorAll(".modal__close-link");

let modalActiveClass = "modal_open";
let modalContentClass = "modal__content";
let modalCloseClass = "modal__close-link";
let bodyOverflowClass = "overflow-hidden";
let popupModal;

function modalTriggerCheck(trigger) {
    const { popupTrigger } = trigger.dataset;

    popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`);
    popupModal.classList.toggle(modalActiveClass);
    bodyPage.classList.toggle(bodyOverflowClass);

    return popupModal;
}

function bodyPageCheck(event) {

    if (bodyPage.classList.contains(bodyOverflowClass) &&
        (event.target.closest('.' + modalCloseClass) || !event.target.closest('.' + modalContentClass))) {

        popupModal.classList.remove(modalActiveClass);
        bodyPage.classList.remove(bodyOverflowClass);
    }
}

modalTriggers.forEach(trigger => {
    trigger.addEventListener('mouseover', () => { modalTriggerCheck(trigger) }) });

modalCloseTrigger.forEach(trigger => {
   trigger.addEventListener('click', (event) => { bodyPageCheck(event) }) });

bodyPage.addEventListener('click', (event) => { bodyPageCheck(event) });
