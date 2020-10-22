var msnry = new Masonry('.js-grid', {
    // options
    itemSelector: '.js-grid__item',
    columnWidth: '.js-grid__sizer',
    gutter: '.js-grid__gutter',
    horizontalOrder: true,
    stamp: '.js-static-item',
    percentPosition: true
});
$(".sort-list-js").select2();
$('.photo-works photo').imagesLoaded( function() {});