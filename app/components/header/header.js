$(".languages__ru").on("click", function() {
    $(".languages-list").toggleClass("languages-list-js");
});
$(".personal-account__name").on("click", function() {
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
  