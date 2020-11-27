$(".languages__ru").on("click", function() {
    $(".languages-list").toggleClass("languages-list-js");
});
//Открытие попапа


$(".personal-account").on("click", function() {
    // $(".drop-menu-account").toggleClass("drop-menu-account-js");
    $(".js-popup-authorization").toggleClass("js-popup-close-general");
    $(".main").toggleClass("js-scroll-hidden");

});
// $(".personal-account__photo").on("click", function() {
//     console.log("fdf");
//     $(".personal-account").click();
// });
$(".list-etc__link .svg-search").on("click", function(e) {
    e.preventDefault();
    $(".search-centering").toggleClass("search-centering-js");
    $(".search-form__input").focus();
    $(".search-form__button-clear").click();
});
$(".still").mouseleave(function() {
    $(".still-centering").toggleClass("still-js");   
})
$(".still").mouseenter(function(){           
    $(".still-centering").toggleClass("still-js");
    $(".drop-menu-account").addClass("drop-menu-account-js");
    $(".languages-list").addClass("languages-list-js");
    $(".search-centering").addClass("search-centering-js");
});
$(".still-centering").mouseleave(function() {
    $(".still-centering").toggleClass("still-js");   
})
$(".still-centering").mouseenter(function(){           
    $(".still-centering").toggleClass("still-js");
});
$(".burger-menu").on("click", function() {
    $(".main-navigation").toggleClass("main-navigation-js");
});
$(document).on("click", function (e){ // событие клика по странице
    if (!$(".personal-account").is(e.target) && // если клик сделан не по элементу
        $(".personal-account .centering-lists").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
            $(".drop-menu-account").addClass("drop-menu-account-js");
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
    //if (!$(".burger-menu").is(e.target) && // если клик сделан не по элементу
    //$(".main-navigation").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
    //    $(".main-navigation").addClass("main-navigation-js");
    //}
});

