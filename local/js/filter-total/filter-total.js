const inputFilterAll = document.querySelectorAll(".configurator__form .input-filter__input");
const filterTotal = document.querySelector('.filter-total');

const filterTotalOpenLink = document.querySelector('.filter-total__title');

const filterTotalRemoveLink = document.querySelectorAll('.filter-total__item-remove');

function inputFilterAction(event) {
    event.preventDefault();
}

function minMaxCheckboxCheck() {

    let checkResult;
    let checkResultPositive;

    for (let i=0; i < filterForms.length; i++) {

        checkResult = minMaxCheck(filterForms[i]);

        if (checkResult) {
            checkResultPositive = true;
        }
    }

    if (checkResultPositive) {
        filterTotal.classList.remove('filter-total_hidden')
    } else {
        filterTotal.classList.add('filter-total_hidden')
    }

}

function minMaxCheck(item) {
    const inputMin = item.querySelector('.filter-range__input_min');
    const inputMax = item.querySelector('.filter-range__input_max');
    const inputCheckboxes = item.querySelectorAll('.input-filter__input[type="checkbox"]');


    const inputItemFilter = item.closest('.filter');

    const { popupModal } = inputItemFilter.dataset;

    let inputOpener;

    inputOpener = document.querySelector(`[data-popup-trigger="${popupModal}"]`);

    let inputCheckboxIsChecked;


    if (inputCheckboxes.length > 0) {

        let isCheckedResult;
        let isCheckedPositive;

        for (let i=0; i < inputCheckboxes.length; i++) {

            isCheckedResult = inputCheckboxes[i].checked;

            if (isCheckedResult) {
                isCheckedPositive = true;
            }
        }

        if (isCheckedPositive) {
            inputCheckboxIsChecked = true
        } else {
            inputCheckboxIsChecked = false
        }

    }


    let inputMaxInitial;
    let inputMinInitial;
    let inputMaxNew;
    let inputMinNew;

    if (inputMin) {
        inputMinInitial = parseInt(inputMin.getAttribute("min"));
        inputMinNew = inputMin.value.replace(" ","");
        inputMinNew =  Math.round(inputMinNew);

    }

    if (inputMax) {
        inputMaxInitial = parseInt(inputMax.getAttribute("max"));
        inputMaxNew = inputMax.value.replace(" ","");
        inputMaxNew =  Math.round(inputMaxNew);
    }

    if ((inputMinNew && (inputMinNew !== inputMinInitial))
        || (inputMaxNew && (inputMaxNew !== inputMaxInitial))
        || inputCheckboxIsChecked) {
        inputOpener.checked = true;
        return true;
    } else {
        inputOpener.checked = false;
        return false;
    }
}

function filterTotalCheck() {

    if (filterTotal) {
        minMaxCheckboxCheck();
    } else {
        return false;
    }

}

function filterTotalShow(event) {

    let item = event.target;

    const filterTotalInitial = item.closest('.filter-total');
    const filterTotalMore = filterTotalInitial.querySelector('.filter-total__list');
    const filterTotalMoreText = filterTotalInitial.querySelector('.filter-total__open-link-text');

    if (filterTotalMore.classList.contains('filter-total__list_hidden')) {
        filterTotalMoreText.innerText = "Свернуть";
        item.classList.add('filter-total__title_open');
        filterTotalMore.classList.remove('filter-total__list_hidden');
    } else {
        filterTotalMoreText.innerText = "Развернуть";
        item.classList.remove('filter-total__title_open');
        filterTotalMore.classList.add('filter-total__list_hidden');
    }

}

function filterTotalRemove(event) {
    let item = event.target;

    const filterTotalRemoveItem = item.closest('.filter-total__item');
    const filterTotalRemoveSubItem = item.closest('.filter-total__subitem');

    filterTotalRemoveSubItem.remove();

    let filterTotalSubItemAll = filterTotalRemoveItem.querySelectorAll('.filter-total__subitem');
    console.log(filterTotalSubItemAll)
    if (filterTotalSubItemAll.length == 0) {
        filterTotalRemoveItem.remove();
    }

}


inputFilterAll.forEach(item => {
    item.addEventListener('click', (event) => { inputFilterAction(event) }) });


filterTotalOpenLink.addEventListener('click', (event) => { filterTotalShow(event) });

filterTotalRemoveLink.forEach(item => {
    item.addEventListener('click', (event) => { filterTotalRemove(event) }) });