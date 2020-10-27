$(".beginner-video-js").on("click", function() {
    $("body").css("overflow-x", "hidden");
    $(".beginner-popup").toggleClass("beginner-popup-js");
});
$(".beginner-popup__exit").on("click", function(e) {
    e.preventDefault();
    $(".beginner-popup").toggleClass("beginner-popup-js");
    $("body").css("overflow-x", "scroll");
});
$(document).mouseup(function (e){ // событие клика по странице
    if (!$(".beginner-popup__video").is(e.target) && // если клик сделан не по элементу
        $(".beginner-popup__inner").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
            $(".beginner-popup").addClass("beginner-popup-js");
            $("body").css("overflow-x", "scroll");
    }
});