$(document).ready(function () {
$(window).scroll(function () {
if ($(document).scrollTop() > 100) {
$("nav").addClass("scrolled");
} else {
$("nav").removeClass("scrolled");
}
});
});