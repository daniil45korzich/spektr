$(document).ready(function() {
    $('.sliders-block-wrap').slick({
        dots: false,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: '<div class="prev"></div>',
        nextArrow: '<div class="next"></div>',
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $('.close-icons').on('click', function () {
        $('.modal').fadeOut();
    });

    $('.modal__overlay').on('click', function () {
        $('.modal').fadeOut();
    });

    $('.header-middle-call').on('click', function () {
        $('.modal').fadeIn();
    });

    $('.burger-mobil').on('click', function () {
        $('.header-menu').fadeIn();
    });

    $('.close-icons-m').on('click', function () {
        $('.header-menu').fadeOut();
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical:true,
        asNavFor: '.slider-for',
        dots: false,
        focusOnSelect: true,
        verticalSwiping:true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    vertical: false,
                }
            },
        ]
    });
});