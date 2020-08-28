const detailedItems = document.querySelector('.catalog-detailed__items');
const detailedCheckboxes = detailedItems.querySelectorAll('.checkbox__input');
const detailedRadios = detailedItems.querySelectorAll('.radio-dot__input');

detailedCheckboxes.forEach(item => item.addEventListener('change', () => detailedCheckboxHandle(item)))
detailedRadios.forEach(item => item.addEventListener('change', () => detailedRadioHandle(item)))

function detailedCheckboxHandle(checkbox) {
    const parentOptions = checkbox.closest('.catalog-detailed__options');
    const siblingRadio = parentOptions.querySelector('.radio-dot__input');

    let siblingCheckboxes = parentOptions.querySelectorAll('.checkbox__input');
    siblingCheckboxes = Array.from(siblingCheckboxes);
    siblingCheckboxes = siblingCheckboxes.filter(item => item.checked);

    if (siblingRadio.checked && checkbox.checked || siblingCheckboxes.length > 0) {
        siblingRadio.checked = false;
    }
}

function detailedRadioHandle(radio) {
    const parentOptions = radio.closest('.catalog-detailed__options');
    let siblingCheckbox = parentOptions.querySelectorAll('.checkbox__input');
    siblingCheckbox = Array.from(siblingCheckbox);

    if (radio.checked) {
        siblingCheckbox.forEach(item => item.checked = false)
    }
}
