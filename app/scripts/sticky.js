$(document).ready(function() {

    var stickyNav = function(){
        var stickyNavTop = $('.header').height(); // $('.navbar').offset().top;
        var scrollTop = $(window).scrollTop();
        console.log(stickyNavTop, scrollTop);

        if (scrollTop > stickyNavTop) { 
            $('.navbar').addClass('sticky');
            } else {
                $('.navbar').removeClass('sticky'); 
            }
        };
 
    stickyNav();

    $(window).on('scroll resize', function() {
        stickyNav();
    });
});