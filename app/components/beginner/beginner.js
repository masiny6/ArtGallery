$(".beginner-video-js").on("click", function() {
    $(".beginner-popup__video").attr("src", "https://www.youtube.com/embed/R8Yd-M9vfI0?autoplay=1");
    setTimeout(function() {
        $("body").css("overflow", "hidden");
        $(".beginner-popup").toggleClass("beginner-popup-js");
    },250)
});
$(".beginner-popup__exit").on("click", function(e) {
    e.preventDefault();
    $(".beginner-popup").toggleClass("beginner-popup-js");
    $("body").css("overflow", "");
    $(".beginner-popup__video").attr("src", "https://www.youtube.com/embed/R8Yd-M9vfI0");
});
$(document).mouseup(function (e){ // событие клика по странице
    if (!$(".beginner-popup__video").is(e.target) && // если клик сделан не по элементу
        $(".beginner-popup__inner").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
            $(".beginner-popup").addClass("beginner-popup-js");
            $("body").css("overflow", "");
            $(".beginner-popup__video").attr("src", "https://www.youtube.com/embed/R8Yd-M9vfI0");
    }
});