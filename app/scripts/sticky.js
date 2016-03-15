$(document).ready(function() {

    var stickyNav = function(){
        var stickyNavTop = $('.header').height(); // $('.navbar').offset().top;
        var scrollTop = $(window).scrollTop();
        // console.log(stickyNavTop, scrollTop);

        if (scrollTop > stickyNavTop) { 
            $('.navbar').addClass('sticky');
            } else {
                $('.navbar').removeClass('sticky'); 
            }
        };
 
    stickyNav();

    // $(window).on('scroll resize', function() {
    //     stickyNav();


    var showBar = function(){
        var showBarTop = $('.myskills__bar').first().offset().top; // $('.navbar').offset().top;
        var scrollTop = $(window).scrollTop();
//        console.log(scrollTop,  showBarTop - $(window).height() * 0.90);

        if (scrollTop > showBarTop - $(window).height()) { 
            $('.myskills__bar').removeClass('initial');
        } 
    };
 
    showBar();

    $(window).on('scroll resize', function() {
        showBar();
        stickyNav();
    });
});