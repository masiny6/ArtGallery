$(".news-section .swiper-button__next").on("click", function() {
    $(".news-section .swiper-button-next").click();
});
$(".news-section .swiper-button__prev").on("click", function() {
    $(".news-section .swiper-button-prev").click();
});
var newsScreen = function() {
    if (screen.width <= '1280') {
               var swiper = new Swiper('.news-section .swiper-container', {
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
    if (screen.width > '1280') {
        var swiper = new Swiper('.news-section .swiper-container', {
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
};
$(window).resize(function() {
    newsScreen();
});
newsScreen();