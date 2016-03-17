$(document).ready(function() {

    var headerClasses = $('.header').attr('class');

    $('.slider1').click(function() {
        $('.header').removeClass().addClass(headerClasses + ' circle1');
    });

    $('.slider2').click(function() {
        $('.header').removeClass().addClass(headerClasses + ' circle2');
    });

    $('.slider3').click(function() {
        $('.header').removeClass().addClass(headerClasses + ' circle3');
    });

});