$(document).ready(function() {

    var $topSlider = $(".header").bgswitcher({
        images: ["img/header.jpg", "img/LaFerrari.jpg", "img/lambo.jpg"]
    });

    $('.sliderbox__sdot').click(function() {
        $topSlider.bgswitcher("select", $(this).index());
    });

});