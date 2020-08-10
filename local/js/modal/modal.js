const modalTriggers = document.querySelectorAll(".modal__open-link");
const modalCloseTrigger = document.querySelectorAll(".modal__close-link");
const bodyPage = document.querySelector('.page');
let modalContent = document.querySelector(".modal__content");
let modalActiveClass = "modal_open";
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

    if (bodyPage.classList.contains(bodyOverflowClass) && event.currentTarget !== modalContent) {

        console.log(bodyPage.classList);
        console.log(event.currentTarget);
        console.log(popupModal);
        popupModal.classList.remove(modalActiveClass);
        bodyPage.classList.remove(bodyOverflowClass);
    }
}

modalTriggers.forEach(trigger => {
    trigger.addEventListener('mouseover', () => { modalTriggerCheck(trigger) }) });

modalCloseTrigger.forEach(trigger => {
   trigger.addEventListener('mouseover', () => { modalTriggerCheck(trigger) }) });

bodyPage.addEventListener('click', (event) => { bodyPageCheck(event) });