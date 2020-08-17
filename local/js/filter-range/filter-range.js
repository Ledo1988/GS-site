const filterTriggers = document.querySelectorAll(".filter-range");

function filterTriggerCheck(filter) {

    let noUISliderMin;
    let noUISliderMax;
    let noUISliderStart;
    let noUISliderEnd;

    const currentFilter = filter;
    let filterInputNumberMin = currentFilter.querySelector(".filter-range__input_min");
    let filterInputNumberMax = currentFilter.querySelector(".filter-range__input_max");


    if (filter.dataset.filter === "filter-range_rate") {
        noUISliderMin = 0;
        noUISliderMax = 150000;
        noUISliderStart = 1000;
        noUISliderEnd = 90000;
    } else if (filter.dataset.filter === "filter-range_option") {
        noUISliderMin = 0;
        noUISliderMax = 45000;
        noUISliderStart = 5000;
        noUISliderEnd = 20000;
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
            filterInputNumberMax.value = value;
        } else {
            filterInputNumberMin.value = Math.round(value);
        }
    });

    filterInputNumberMin.addEventListener('change', function () {
        currentFilter.noUiSlider.set([this.value, null]);
    });

    filterInputNumberMax.addEventListener('change', function () {
        currentFilter.noUiSlider.set([null, this.value]);
    });
}


filterTriggers.forEach(filter => { filterTriggerCheck(filter) });



