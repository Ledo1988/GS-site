var sliderCompareMain = new Swiper('.slider-compare_main', {
    slidesPerView: 4,
    spaceBetween: 20,

    navigation: {
        nextEl: '.slider-compare__button_next',
        prevEl: '.slider-compare__button_prev',
    },
});

var sliderCompareProcessor = new Swiper('.slider-compare_processor', {
    slidesPerView: 4,
    spaceBetween: 20,
});

var sliderCompareMotherboard = new Swiper('.slider-compare_motherboard', {
    slidesPerView: 4,
    spaceBetween: 20,
});

var sliderCompareRam = new Swiper('.slider-compare_ram', {
    slidesPerView: 4,
    spaceBetween: 20,
});

var sliderCompareHard = new Swiper('.slider-compare_hard', {
    slidesPerView: 4,
    spaceBetween: 20,
});

var sliderCompareRaid = new Swiper('.slider-compare_raid', {
    slidesPerView: 4,
    spaceBetween: 20,
});

var sliderCompareGraphic = new Swiper('.slider-compare_graphic', {
    slidesPerView: 4,
    spaceBetween: 20,
});

var sliderCompareMemory = new Swiper('.slider-compare_memory', {
    slidesPerView: 4,
    spaceBetween: 20,
});

var sliderCompareConnectors = new Swiper('.slider-compare_connectors', {
    slidesPerView: 4,
    spaceBetween: 20,
});

sliderCompareMain.controller.control = sliderCompareProcessor;
sliderCompareProcessor.controller.control = sliderCompareMotherboard;
sliderCompareMotherboard.controller.control = sliderCompareRam;
sliderCompareRam.controller.control = sliderCompareHard;
sliderCompareHard.controller.control = sliderCompareRaid;
sliderCompareRaid.controller.control = sliderCompareGraphic;
sliderCompareGraphic.controller.control = sliderCompareMemory;
sliderCompareMemory.controller.control = sliderCompareConnectors;

//Slider styles END

//Open/close for features START

const featuresOpen = document.querySelector('.compare__features-open');

featuresOpen.addEventListener('click', (event) => featuresToggle(event));

function featuresToggle(event) {
    const link = event.target.closest('.compare__features-open');
    const features = document.querySelector('.compare__sliders');

    link.classList.toggle('compare__features-open_close');
    features.classList.toggle('compare__sliders_close');
}

//Open/close for features END

//Remove from compare START
const compareClose = document.querySelectorAll('.compare__close-link');
const compareSliderMain = document.querySelector('.slider-compare_main');
const compareSlidersAll = document.querySelectorAll('.slider-compare');

compareClose.forEach(item => item.addEventListener('click', (event) => compareRemove(event)))

function compareRemove(event) {
    const currentSlide = event.target.closest('.swiper-slide');
    const compareSlidsMain = compareSliderMain.querySelectorAll('.swiper-slide')
    const compareSlidsMainArr = Array.from(compareSlidsMain);
    let compareSlidersAllArr = Array.from(compareSlidersAll);
    currentSlide.classList.add('current');

    const currentIndex = compareSlidsMainArr.findIndex(item => item.classList.contains('current'));

    compareSlidersAllArr.forEach(item => {removeItem(item)});

    function removeItem  (item) {
        let array = item.querySelectorAll('.swiper-slide');
        array = Array.from(array);
        console.log(array)
        array[currentIndex].remove();
        array.splice(currentIndex, 1);
        console.log(array)
    }

}



