$(".languages__ru").on("click", function () {
    $(".languages-list").toggleClass("languages-list-js");
});
//Открытие попапа
$(".main-no-authorization .personal-account__photo").on("click", function () {
    $(".main-no-authorization .personal-account__name").click();
});
$(".main-no-authorization .personal-account__name").on("click", function () {
    $(".main-no-authorization .drop-menu-account").toggleClass("drop-menu-account-js");
    // $(".js-popup-authorization").toggleClass("js-popup-close-general");
    // $(".main").toggleClass("js-scroll-hidden");
});
$(".main .personal-account__photo").on("click", function () {
    $(".main .personal-account").click();
});

$(".main .personal-account").on("click", function () {
    // $(".drop-menu-account").toggleClass("drop-menu-account-js");
    $(".main .js-popup-authorization").toggleClass("js-popup-close-general");
    $(".main").toggleClass("js-scroll-hidden");

});
//Для тестирования
$(".main .personal-account__name").css("display", "none");


$(".list-etc__link .svg-search").on("click", function (e) {
    e.preventDefault();
    $(".search-centering").toggleClass("search-centering-js");
    $(".search-form__input").focus();
    $(".search-form__button-clear").click();
});
$(".still").mouseleave(function () {
    $(".still-centering").toggleClass("still-js");
})
$(".still").mouseenter(function () {
    $(".still-centering").toggleClass("still-js");
    $(".drop-menu-account").addClass("drop-menu-account-js");
    $(".languages-list").addClass("languages-list-js");
    $(".search-centering").addClass("search-centering-js");
});
$(".still-centering").mouseleave(function () {
    $(".still-centering").toggleClass("still-js");
})
$(".still-centering").mouseenter(function () {
    $(".still-centering").toggleClass("still-js");
});
$(".burger-menu").on("click", function () {
    $(".main-navigation").toggleClass("main-navigation-js");
});
$(document).on("click", function (e) { // событие клика по странице
    if (!$(".main .personal-account").is(e.target) && // если клик сделан не по элементу
        $(".main .personal-account .centering-lists").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
        $(".main .drop-menu-account").addClass("drop-menu-account-js");
    }
    if (!$(".languages__ru").is(e.target) && // если клик сделан не по элементу
        $(".languages-list").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
        $(".languages-list").addClass("languages-list-js");
    }
    if (!$(".svg-search").is(e.target) && // если клик сделан не по элементу
        $(".search-centering").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
        $(".search-centering").addClass("search-centering-js");
        $('.search-form__input-js').val('');
    }
});