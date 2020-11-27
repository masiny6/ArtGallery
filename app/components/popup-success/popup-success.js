$(".js-popup-success .js-popup-general-close").on("click", function () {
    $(".js-popup-success").toggleClass("js-popup-close-general");
    $(".main").toggleClass("js-scroll-hidden");
});
$(document).on("click", function (e){ // событие клика по странице
    if (!$(".personal-account__name").is(e.target) && // если клик сделан не по элементу
        $(".js-popup-success").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
            if (!$(".js-popup-success").hasClass("js-popup-close-general")) {
                $(".main").toggleClass("js-scroll-hidden");
            }
            $(".js-popup-success").addClass("js-popup-close-general");
    }
});