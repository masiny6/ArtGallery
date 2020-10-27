var stylesScreen = function() {
    if (screen.width < '1280') {
        var swiper = new Swiper('.styles-section .swiper-container', {
            slidesPerView: 1.5,
            spaceBetween: 44,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            //autoplay: {
            //    delay: 2500,
            //    disableOnInteraction: false,
            //},
            loop: true
        });
    }
    if (screen.width > '1280') {
        var swiper = new Swiper('.styles-section .swiper-container', {
            slidesPerView: 2,
            spaceBetween: 44,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            //autoplay: {
            //    delay: 2500,
            //    disableOnInteraction: false,
            //},
            loop: true
        });
    }
    if (screen.width < '768') {
        var swiper = new Swiper('.styles-section .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 44,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            //autoplay: {
            //    delay: 2500,
            //    disableOnInteraction: false,
            //},
            loop: true
        });
    }
};
$(window).resize(function() {
    stylesScreen();
});
stylesScreen();
$(".styles-section .swiper-button__next").on("click", function() {
    $(".styles-section .swiper-button-next").click();
});
$(".styles-section .swiper-button__prev").on("click", function() {
    $(".styles-section .swiper-button-prev").click();
});