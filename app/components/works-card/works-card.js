
$(".svg-basket").on("click", function() {
    $(this).toggleClass("svg-basket-js");
})
$(".svg-heart").on("click", function() {
    $(this).toggleClass("svg-heart-js");
})
var swiper = new Swiper('.works-section .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 40,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
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