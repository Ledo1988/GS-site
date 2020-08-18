const inputFilterAll = document.querySelectorAll(".configurator__form .input-filter__input");
const filterTotal = document.querySelector('.filter-total');

function inputFilterAction(event) {
    event.preventDefault();

    //const { popupTrigger } = event.target.dataset;
    //const relevantPopup = document.querySelector(`[data-popup-modal="${popupTrigger}"]`);

    //let inputMin = relevantPopup.querySelector('.filter-range__input_min');
    //let inputMax = relevantPopup.querySelector('.filter-range__input_max');
    //let inputCheckboxes = relevantPopup.querySelectorAll('.input-filter__input');
    //let inputCheckboxIsChecked = inputCheckboxes.forEach(item => inputCheckboxIsChecked = item.checked);


   // minMaxCheckboxCheck(inputMin, inputMax, inputCheckboxIsChecked)

}


function totalFilterStart(item) {

    if (item) {
        filterTotal.classList.remove('filter-total_hidden')
    } else {
        filterTotal.classList.add('filter-total_hidden')
    }
}

function minMaxCheckboxCheck() {

    let checkResult;

    for (let i=0; i < filterForms.length; i++) {

        checkResult = minMaxCheck(filterForms[i]);
        if (checkResult === true) return checkResult;
    }

    return checkResult;

}

function minMaxCheck(item) {
    const inputMin = item.querySelector('.filter-range__input_min');
    const inputMax = item.querySelector('.filter-range__input_max');
    const inputCheckboxes = item.querySelectorAll('.input-filter__input');
    let inputCheckboxIsChecked;

    if (inputCheckboxes.length > 0) {

        let isChecked;

        for (let i=0; i < inputCheckboxes.length; i++) {

            isChecked = inputCheckboxes[i].checked;

            if (isChecked) {
                inputCheckboxIsChecked = true;
            }
        }

        return inputCheckboxIsChecked;
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
        return true;
    } else {
        return false;
    }
}


inputFilterAll.forEach(item => {
    item.addEventListener('click', (event) => { inputFilterAction(event) }) });

function filterTotalCheck() {

    if (filterTotal) {
        totalFilterStart(minMaxCheckboxCheck());
    } else {
        return false;
    }

}