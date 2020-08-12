let elem = document.querySelector('.catalog');
let msnry = new Masonry( elem, {
    // options
    itemSelector: '.catalog__item',
    columnWidth: '.catalog__item',
    gutter: 25,
    resize: false,
    percentPosition: true,
    originLeft: false,
});
