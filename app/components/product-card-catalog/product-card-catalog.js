var swiperProduct = new Swiper('.product-card .swiper-container-one', {
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
    // loop: true,
    direction: "vertical",
    slidesPerView: 6,
    spaceBetween: 10,
    breakpoints: {
        320: {
            slidesPerView: 4,
            spaceBetween: 15
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 14
        }
    },
});
var swiper = new Swiper('.product-card .swiper-container-two', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    thumbs: {
        swiper: swiperProduct
      }
});
$(".product-card .swiper-button_next").on("click", function() {
    $(".product-card .swiper-button-next").click();
});
$(".product-card .swiper-button_prev").on("click", function() {
    $(".product-card .swiper-button-prev").click();
});
$(".parameters-picture__button").on("click", function() {
    $(".parameters-picture .tab-arrow").toggleClass("js-tab-arrow");
    $(".parameters-table").toggleClass("js-parameters-table");
    $(".parameters-picture__button").toggleClass("js-parameters-picture__button");
});
$(".description-picture__button").on("click", function() {
    $(".description-picture .tab-arrow").toggleClass("js-tab-arrow");
    $(".description-picture__text").toggleClass("js-description-picture__text");
});
$( window ).resize(function() {
    if ($(window).width() <= "1279") {
        $(".basket__button").text("В корзину");
    }
});
  if ($(window).width() <= "1279") {
    $(".basket__button").text("В корзину");
}