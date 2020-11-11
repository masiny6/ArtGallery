var swiper4 = new Swiper('.popular-filter .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 12,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //    delay: 2500,
    //    disableOnInteraction: false,
    // },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 9
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 13
        }
    }
});
$(".popular-filter .swiper-button__next").on("click", function () {
    $(".popular-filter .swiper-button-next").click();
});
$(".popular-filter .swiper-button__prev").on("click", function () {
    $(".popular-filter .swiper-button-prev").click();
});