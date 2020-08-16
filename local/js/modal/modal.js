const bodyPage = document.querySelector('.page');
const overlayBlock = document.querySelector('.modal-overlay');
const modalTriggers = document.querySelectorAll(".modal__open-link");
const modalCloseTrigger = document.querySelectorAll(".modal__close-link");

let modalActiveClass = "modal_hidden";
let modalContentClass = "modal__content";
let modalCloseClass = "modal__close-link";
let bodyOverflowClass = "modal-is-opened";
let modalOverflowClass = "modal-overlay_visible";
let popupModal;

function modalTriggerCheck(trigger) {

    const { popupTrigger } = trigger.dataset;

    popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`);
    popupModal.classList.toggle(modalActiveClass);
    bodyPage.classList.toggle(bodyOverflowClass);
    overlayBlock.classList.toggle(modalOverflowClass);

    return popupModal;
}

function bodyPageCheck(event) {

    if (event.target.closest('.modal__open-link')) {
        return false;
    } else if (bodyPage.classList.contains(bodyOverflowClass) &&
        (event.target.closest('.' + modalCloseClass) || !event.target.closest('.' + modalContentClass))) {

        popupModal.classList.toggle(modalActiveClass);
        bodyPage.classList.toggle(bodyOverflowClass);
        overlayBlock.classList.toggle(modalOverflowClass);
        menuFullCloseAction();
    }
}

modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => { modalTriggerCheck(trigger) }) });

modalCloseTrigger.forEach(trigger => {
   trigger.addEventListener('click', (event) => { bodyPageCheck(event) }) });

bodyPage.addEventListener('click', (event) => { bodyPageCheck(event) });
