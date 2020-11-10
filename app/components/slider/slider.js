var swiper1 = new Swiper('.main-slider .swiper-container', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        clickable: true,
        el: '.swiper-pagination'
    },
    loop: true
});