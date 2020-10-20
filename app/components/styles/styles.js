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
$(".styles-section .swiper-button__next").on("click", function() {
    $(".styles-section .swiper-button-next").click();
});
$(".styles-section .swiper-button__prev").on("click", function() {
    $(".styles-section .swiper-button-prev").click();
});