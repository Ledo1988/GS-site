const detailedItemOpen = document.querySelectorAll('.catalog-detailed__item-open');

detailedItemOpen.forEach(trigger => {
    trigger.addEventListener('click', (event) => { detailedItemToggle(event) }) });

function detailedItemToggle(event) {
    event.target.closest('.catalog-detailed__item').classList.toggle('catalog-detailed__item_close');
}