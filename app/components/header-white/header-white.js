$(".popular-filter-main .personal-account__photo-white").on("click", function () {
    $(".popular-filter-main .personal-account").click();
});
$(".popular-filter-main .personal-account__photo-white").on("click", function () {
    $(".main-no-authorization .personal-account__name").click();
});

$(".popular-filter-main .personal-account").on("click", function () {
    // $(".drop-menu-account").toggleClass("drop-menu-account-js");
    $(".popular-filter-main .js-popup-authorization").toggleClass("js-popup-close-general");
    $(".popular-filter-main").toggleClass("js-scroll-hidden");

});
$(document).on("click", function (e) { // событие клика по странице
    if (!$(".popular-filter-main .personal-account").is(e.target) && // если клик сделан не по элементу
        $(".popular-filter-main .personal-account .centering-lists").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
        $(".popular-filter-main .drop-menu-account").addClass("drop-menu-account-js");
    }

});
/////////////////////
$(".product-card-main .personal-account__photo-white").on("click", function () {
    $(".product-card-main .personal-account").click();
});
$(".product-card-main .personal-account__photo-white").on("click", function () {
    $(".main-no-authorization .personal-account__name").click();
});


$(".product-card-main .personal-account").on("click", function () {
    // $(".drop-menu-account").toggleClass("drop-menu-account-js");
    $(".product-card-main .js-popup-authorization").toggleClass("js-popup-close-general");
    $(".product-card-main").toggleClass("js-scroll-hidden");

});
$(document).on("click", function (e) { // событие клика по странице
    if (!$(".product-card-main .personal-account").is(e.target) && // если клик сделан не по элементу
        $(".product-card-main .personal-account .centering-lists").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
        $(".product-card-main .drop-menu-account").addClass("drop-menu-account-js");
    }

});