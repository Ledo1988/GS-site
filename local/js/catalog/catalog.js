var elem = document.querySelector('.catalog');
var msnry = new Masonry( elem, {
    // options
    itemSelector: '.catalog__item',
    columnWidth: '.catalog__item',
    gutter: 25,
    resize: false,
    percentPosition: true,
    originLeft: false,
});
