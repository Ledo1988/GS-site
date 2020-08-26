var galleryThumbs = new Swiper('.slider__thumbs', {
    direction: 'vertical',
    //spaceBetween: 20,
    slidesPerView: 3,
    //loop: true,
    freeMode: true,
    //loopedSlides: 3, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.slider__button_next',
        prevEl: '.slider__button_prev',
    },
})

var galleryTop = new Swiper('.slider__gallery', {
    direction: 'vertical',
    //loop: true,
    //loopedSlides: 3, //looped slides should be the same

    thumbs: {
        swiper: galleryThumbs,
    },
})

