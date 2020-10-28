var swiper = new Swiper('.styles-section .swiper-container', {
    slidesPerView: 2,
    spaceBetween: 44,
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
            slidesPerView: 1.5,
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
$(".styles-section .swiper-button__next").on("click", function() {
    $(".styles-section .swiper-button-next").click();
});
$(".styles-section .swiper-button__prev").on("click", function() {
    $(".styles-section .swiper-button-prev").click();
});