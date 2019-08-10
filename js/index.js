function fade() {
$('.preloader').fadeOut("slow");
}
setInterval(fade, 3000);
console.log("hello");

$(".toggle").click(function(){
  $(this).find(".toggleContainer").toggleClass("active");
  $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
});

setInterval( function() {
$("#fadeIn").fadeIn();
}, 1000);

setInterval( function() {
$("#portfolioFade").fadeIn();
}, 400);

function about () {
  $("#fadeIn").fadeIn();
}
/*
comment out
*/