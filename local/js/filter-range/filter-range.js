const filterTriggers = document.querySelectorAll(".filter-range");
const filterInputAll = document.querySelectorAll(".filter-range__input");

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

    noUiSlider.create(currentFilter, {
        start: [noUISliderStart, noUISliderEnd],
        connect: true,
        range: {
            'min': noUISliderMin,
            'max': noUISliderMax
        }
    });

    currentFilter.noUiSlider.on('update', function (values, handle) {

        let value = values[handle];

        if (handle) {
            filterInputNumberMax.value = Math.round(value);

        } else {
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
        currentFilter.noUiSlider.set([this.value, null]);
    });

    filterInputNumberMax.addEventListener('change', function () {
        currentFilter.noUiSlider.set([null, this.value]);
    });



    if (filterReset != null) {
        filterReset.addEventListener('click', function () {
            currentFilter.noUiSlider.reset()
        });
    }

}

function filterInputAllWidth(item) {
    item.value = item.value.replace(/ /g,"");
    item.value = item.value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    item.style.width = ((item.value.length + 2) * 8) + 'px';
}


filterTriggers.forEach(filter => { filterTriggerCheck(filter) });

filterInputAll.forEach(item => { filterInputAllWidth(item) });

filterInputAll.forEach(item => {
    item.addEventListener('input', () => { filterInputAllWidth(item) }) });




