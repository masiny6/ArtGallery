$(".languages__ru").on("click", function() {
    $(".languages-list").toggleClass("languages-list-js");
});
$(".personal-account").on("click", function() {
    $(".drop-menu-account").toggleClass("drop-menu-account-js");
});
$(".list-etc__link .svg-search").on("click", function(e) {
    e.preventDefault();
    $(".search-centering").toggleClass("search-centering-js");
});
$(".still").mouseover(function() {
    $(".still-centering").toggleClass("still-js");   
})
$(".still-js").mouseout(function(){           
    $(".still-centering").toggleClass("still-js");
});
$(".burger-menu").on("click", function() {
    $(".main-navigation").toggleClass("main-navigation-js");
});
$(document).mouseup(function (e){ // событие клика по странице
    if (!$(".personal-account__name").is(e.target) && // если клик сделан не по элементу
        $(".personal-account .centering-lists").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
            $(".drop-menu-account").addClass("drop-menu-account-js");
    }
});
$(document).mouseup(function (e){ // событие клика по странице
    if (!$(".languages__ru").is(e.target) && // если клик сделан не по элементу
        $(".languages-list").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
            $(".languages-list").addClass("languages-list-js");
    }
});
$(document).mouseup(function (e){ // событие клика по странице
    if (!$(".svg-search").is(e.target) && // если клик сделан не по элементу
        $(".search-centering").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
            $(".search-centering").addClass("search-centering-js");
    }
});
