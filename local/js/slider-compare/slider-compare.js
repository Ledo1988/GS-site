let swiperController;

var sliderCompareMain = new Swiper('.slider-compare_main', {
    slidesPerView: 5,
    spaceBetween: 20,

    navigation: {
        nextEl: '.slider-compare__button_next',
        prevEl: '.slider-compare__button_prev',
    },

    // on: {
    //     slideChange: function () {
    //         swiperController = this;
    //         if (swiperController === this) {
    //             if (this.activeIndex > this.previousIndex) {
    //                 sliderCompareProcessor.slideNext();
    //                 sliderCompareMotherboard.slideNext()
    //             } else {
    //                 sliderCompareProcessor.slidePrev();
    //                 sliderCompareMotherboard.slidePrev()
    //             }
    //         }
    //     },
    //     transitionEnd: function () {
    //         swiperController = 0;
    //     }
    // }
});

var sliderCompareProcessor = new Swiper('.slider-compare_processor', {
    slidesPerView: 5,
    spaceBetween: 20,


});

var sliderCompareMotherboard = new Swiper('.slider-compare_motherboard', {
    slidesPerView: 5,
    spaceBetween: 20,


});

sliderCompareMain.controller.control = sliderCompareProcessor;
sliderCompareProcessor.controller.control = sliderCompareMotherboard;



