$(".js-popup-recovery .js-popup-general-close").on("click", function() {
    $(".js-popup-recovery").toggleClass("js-popup-close-general");
});
$(".js-popup-recovery .js-forgotten-password__button").on("click", function() {
    $(".js-popup-recovery").toggleClass("js-popup-close-general");
    //
    $(".js-popup-authorization").toggleClass("js-popup-close-general");
    
});