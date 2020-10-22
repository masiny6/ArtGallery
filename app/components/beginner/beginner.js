$(".beginner-video").on("click", function() {
    $(".beginner-popup").css("display", "block");
});
$(".beginner-popup__exit").on("click", function(e) {
    e.preventDefault();
    $(".beginner-popup").css("display", "none");
})