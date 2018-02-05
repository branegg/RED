// $(document).ready(function() {
//     setTimeout(function() {
//         $('.loading').remove();
//     }, 2000);
// });

$(document).ready(function () {
    var header = $('.header__wrapper');

    $('.header__logo').click(function() {
        if (header.css('top') == '0px' || header.css('top') == 'auto') {
            header.animate({
                top: '800px'
            }, 1000);
            $('.nav').addClass('nav--active');
            $('.nav__wrapper').addClass('nav__wrapper--active');
            $('.nav__item').addClass('nav__item--active');
            $('.header__wrapper').addClass('header__wrapper--active');
        } else {
            header.animate({
                top: '0px'
            }, 1000);
            $('.nav').removeClass('nav--active');
            $('.nav__wrapper').removeClass('nav__wrapper--active');
            $('.nav__item').removeClass('nav__item--active');
            $('.header__wrapper').removeClass('header__wrapper--active');
        }
    });
});

$(document).ready(function () {
    $('.slider__wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.slider__previous'),
        nextArrow: $('.slider__next'),
        speed: 800
    });
});

$(document).ready(function () {
    $('.header__top').hover(
        function () {
            $('.slider').css({
                filter: 'grayscale(100%)'
            });
        },
        function () {
            $('.slider').css({
                filter: 'grayscale(0%)'
            });
        });
});

$(document).ready(function () {
    $('.nav').addClass('nav--active');
    $('.nav__wrapper').addClass('nav__wrapper--active');
    $('.nav__item').addClass('nav__item--active');
    $('.header__logo').addClass('header__logo--active');
    $('.header__wrapper').addClass('header__wrapper--active');

    setTimeout(function () {
        $('.nav').removeClass('nav--active');
        $('.nav__wrapper').removeClass('nav__wrapper--active');
        $('.nav__item').removeClass('nav__item--active');
        $('.header__logo').removeClass('header__logo--active');
        $('.header__wrapper').removeClass('header__wrapper--active');
    }, 1000);
});

$(document).ready(function () {
    var header = $('.header__wrapper');
    
    header.draggable({
        axis: 'y',
        containment: [0, 0, 0, '800px'],
        stop: function () {
            if (header.css('top') > '200px') {
                header.animate({
                    top: '800px'
                }, 1000);
                $('.nav').addClass('nav--active');
                $('.nav__wrapper').addClass('nav__wrapper--active');
                $('.nav__item').addClass('nav__item--active');
                $('.header__wrapper').addClass('header__wrapper--active');
            } else {
                header.animate({
                    top: '0px'
                }, 500);
                $('.nav').removeClass('nav--active');
                $('.nav__wrapper').removeClass('nav__wrapper--active');
                $('.nav__item').removeClass('nav__item--active');
                $('.header__wrapper').removeClass('header__wrapper--active');
            }
        },
    });
});