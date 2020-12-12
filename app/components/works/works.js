var msnry = new Masonry('.works-section-masonry .js-grid', {
    // options
    itemSelector: '.works-section-masonry .js-grid__item',
    columnWidth: '.works-section-masonry .js-grid__sizer',
    gutter: '.works-section-masonry .js-grid__gutter',
    horizontalOrder: true,
    stamp: '.works-section-masonry .js-static-item',
    percentPosition: true
});
$(".sort-list-js").select2({
        dropdownPosition: 'below'
});
$(".works-section-masonry .grid").imagesLoaded(function(){
    msnry.layout();
});


$(".svg-basket").on("click", function() {
    $(this).toggleClass("svg-basket-js");
})
$(".svg-heart").on("click", function() {
    $(this).toggleClass("svg-heart-js");
})
$(".static-item .svg-arrow").mouseleave(function () {
    $(".static-item .static-link").css("backgroundColor","transparent");
})
$(".static-item .svg-arrow").mouseenter(function () {
    $(".static-item .static-link").css("backgroundColor"," #009898");
});
$(".static-item .static-link").mouseleave(function () {
    $(".static-item .static-link").css("backgroundColor","transparent");
})
$(".static-item .static-link").mouseenter(function () {
    $(".static-item .static-link").css("backgroundColor"," #009898");
});
