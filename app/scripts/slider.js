$(document).ready(function() {

    var $topSlider = $(".header").bgswitcher({
        images: ["img/header.jpg", "img/LaFerrari.jpg", "img/lambo.jpg"]
    });

    $('.slider1').click(function() {
        $topSlider.bgswitcher("select", 0);
    });

    $('.slider2').click(function() {
        $topSlider.bgswitcher("select", 1);
    });

    $('.slider3').click(function() {
        $topSlider.bgswitcher("select", 2);
    });

});