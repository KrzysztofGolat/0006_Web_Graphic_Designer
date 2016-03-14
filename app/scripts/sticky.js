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
	
	var img-responsive-magni = function () {
        if $('img-responsive').hasClass('hover') { 
            $('.img-responsive').addClass('img-magnifier');
            } else {
                $('.img-responsive').removeClass('img-magnifier'); 
            }
        };
 
    img-responsive-magni ();

    	
	
});