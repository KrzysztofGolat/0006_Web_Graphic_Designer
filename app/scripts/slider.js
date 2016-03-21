$(document).ready(function() {

    var $topSlider = $(".header").bgswitcher({
        images: ["img/header.jpg", "img/LaFerrari.jpg", "img/lambo.jpg"],
        start: false,
        loop: false
    });

    $('.sliderbox__sdot').click(function() {
        $topSlider.bgswitcher("select", $(this).index());
        $('.sliderbox__sdot').removeClass('bgr');
        $(this).addClass('bgr');
    });
    
    
    $('.carousel-control.right').click(function(){
        var $positionN = $topSlider.bgswitcher("next");
        $('.sliderbox__sdot.bgr').removeClass('bgr').next().addClass('bgr');
        if ($('.sliderbox__sdot.bgr').length == 0) {
            $('.sliderbox__sdot:first').addClass('bgr');
            $topSlider.bgswitcher("select", 0);
        }
    });

    $('.carousel-control.left').click(function(){
        var $positionEx = $topSlider.bgswitcher("prev");
        $('.sliderbox__sdot.bgr').removeClass('bgr').prev().addClass('bgr');
        if ($('.sliderbox__sdot.bgr').length == 0) {
            $('.sliderbox__sdot:last').addClass('bgr');
            $topSlider.bgswitcher("select", 2);
        }
    });
    
    

    var myLoop = function() {
        // przejdz do next slide
        $topSlider.bgswitcher("next");
        // przejdz do next kropka
        $('.sliderbox__sdot.bgr').removeClass('bgr').next().addClass('bgr');
        if ($('.sliderbox__sdot.bgr').length == 0) {
            $('.sliderbox__sdot:last').addClass('bgr');
            $topSlider.bgswitcher("select", 0);
        }
        // ustaw timeout na nowo
//        setTimeout(myLoop, 5000);
    };
//    setTimeout(myLoop, 5000);
});