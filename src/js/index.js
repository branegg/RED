// $(document).ready(function() {
//     setTimeout(function() {
//         $('.loading').remove();
//     }, 2000);
// });

$(document).ready(function() {
    $('.slider__wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.slider__previous'),
        nextArrow: $('.slider__next'),
        speed: 800
    });
});

$(document).ready(function() {
    $('.header__top').hover(
        function() {
            $('.slider').css({
                filter: 'grayscale(100%)'
            }); },
        function() {
            $('.slider').css({
                filter: 'grayscale(0%)'
            });
    });
});

$(document).ready(function() {
    $('.nav').addClass('nav--active');
    $('.nav__wrapper').addClass('nav__wrapper--active');
    $('.nav__item').addClass('nav__item--active');
    $('.header__logo').addClass('header__logo--active');
    $('.header__pancake').addClass('header__pancake--active');

    setTimeout(function() {
        $('.nav').removeClass('nav--active');
        $('.nav__wrapper').removeClass('nav__wrapper--active');
        $('.nav__item').removeClass('nav__item--active');
        $('.header__logo').removeClass('header__logo--active');
        $('.header__pancake').removeClass('header__pancake--active');
    }, 1000);
});