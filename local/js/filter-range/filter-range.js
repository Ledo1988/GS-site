const filterTriggers = document.querySelectorAll(".filter-range");
const filterInputAll = document.querySelectorAll(".filter-range__input");

const filterForms = document.querySelectorAll(".filter-form");


function filterTriggerCheck(filter) {

    let noUISliderMin;
    let noUISliderMax;
    let noUISliderStart;
    let noUISliderEnd;

    const currentFilter = filter;
    let filterInputNumberMin = currentFilter.querySelector(".filter-range__input_min");
    let filterInputNumberMax = currentFilter.querySelector(".filter-range__input_max");

    let filterReset = currentFilter.querySelector(".filter__btn-reset");

    if (filter.dataset.filter === "filter-range_rate") {
        noUISliderMin = 0;
        noUISliderMax = 150000;
        noUISliderStart = 0;
        noUISliderEnd = 150000;
    } else if (filter.dataset.filter === "filter-range_option") {
        noUISliderMin = 0;
        noUISliderMax = 45000;
        noUISliderStart = 0;
        noUISliderEnd = 45000;
    }

    if (currentFilter.noUiSlider !== undefined) {
        return true;
    } else {
        noUiSlider.create(currentFilter, {
            start: [noUISliderStart, noUISliderEnd],
            connect: true,
            range: {
                'min': noUISliderMin,
                'max': noUISliderMax
            }
        });
    }

    currentFilter.noUiSlider.on('update', function (values, handle) {

        let value = values[handle];

        if (handle) {
            filterInputNumberMax.value.replace(" ","");
            filterInputNumberMax.value = Math.round(value);

        } else {
            filterInputNumberMin.value.replace(" ","");
            filterInputNumberMin.value = Math.round(value);
        }


        if (filterInputNumberMin.value.replace(" ","") == noUISliderMin && filterInputNumberMax.value.replace(" ","") == noUISliderMax) {
            currentFilter.classList.remove('filter-range_changed');
        } else {
            currentFilter.classList.add('filter-range_changed');
        }


        filterInputAllWidth(filterInputNumberMax);
        filterInputAllWidth(filterInputNumberMin);
    });


    filterInputNumberMin.addEventListener('change', function () {
        currentFilter.noUiSlider.set([this.value.replace(" ",""), null]);
    });

    filterInputNumberMax.addEventListener('change', function () {
        currentFilter.noUiSlider.set([null, this.value.replace(" ","")]);
    });



    if (filterReset != null) {
        filterReset.addEventListener('click', function () {
            currentFilter.noUiSlider.reset()
        });
    }

}

function filterInputAllWidth(item) {
    item.value = item.value.toString();
    item.value = item.value.replace(/ /g,"");
    item.value = item.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    item.style.width = ((item.value.length + 2) * 8) + 'px';
}

function enterFilterSubmitPrevent (event) {


    if (event.keyCode === 13) {

        event.preventDefault();
    }
}


filterTriggers.forEach(filter => { filterTriggerCheck(filter) });

filterInputAll.forEach(item => { filterInputAllWidth(item) });

filterInputAll.forEach(item => {
    item.addEventListener('input', () => { filterInputAllWidth(item) }) });

filterTriggers.forEach(item => {
    item.addEventListener('keypress', (event) => { enterFilterSubmitPrevent(event) }) });


