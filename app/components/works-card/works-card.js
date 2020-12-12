
var swiper = new Swiper('.works-section_card .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 40,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 7
        },
        768: {
            slidesPerView: 3.5,
            spaceBetween: 44
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    },
    //autoplay: {
    //    delay: 2500,
    //    disableOnInteraction: false,
    //},
    loop: true
});
$(".works-section .swiper-button__next").on("click", function() {
    $(".works-section .swiper-button-next").click();
});
$(".works-section .swiper-button__prev").on("click", function() {
    $(".works-section .swiper-button-prev").click();
});
var msnry1 = new Masonry('.works-section_card .js-grid', {
    // options
    itemSelector: '.works-section_card .js-grid__item',
    columnWidth: '.works-section_card .js-grid__sizer',
    gutter: '.works-section_card .js-grid__gutter',
    horizontalOrder: true,
    stamp: '.works-section_card .js-static-item',
    percentPosition: true
});
$(".works-section_card .grid").imagesLoaded(function(){
    msnry.layout();
});