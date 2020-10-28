$(".news-section .swiper-button__next").on("click", function() {
    $(".news-section .swiper-button-next").click();
});
$(".news-section .swiper-button__prev").on("click", function() {
    $(".news-section .swiper-button-prev").click();
});
var swiper = new Swiper('.news-section .swiper-container', {
    slidesPerView: 2,
    spaceBetween: 44,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 44
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 44
        },
        1280: {
            slidesPerView: 2,
            spaceBetween: 44
        }
    },
    //autoplay: {
    //    delay: 2500,
    //    disableOnInteraction: false,
    //},
    loop: true
});
        