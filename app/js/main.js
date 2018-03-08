var map = require('./map.js');

$(document).ready(function () {

    // handle like menu visibility on hover
    $('.like').on('mouseenter mouseleave', function () {
        $(this).find('.nav__likeMenu').stop().slideToggle();
    });

    // handle search input visibility on hover
    $('#search').on('mouseenter mouseleave', function () {
        $(this).find('.nav__search').stop().slideToggle();
    });


    // handle submenu visibility on hover
    $('.nav__menu__item').on('mouseenter mouseleave', function () {
        $(this).find('.nav__submenu').stop().slideToggle();
    });


    // handle slider on button click;
    $('.hexagon-wraper-right').on('click', function () {
        if ($(this).parent().next().length) {
            $(this).parent().hide();
            $(this).parent().next().show();
        }
    });

    $('.hexagon-wraper-left').on('click', function () {
        if ($(this).parent().prev().length) {
            $(this).parent().hide();
            $(this).parent().prev().show();
        }
    });

    
    // handle slides change
    (function () {
        var box = $('.slider__container ul');
        var next = box.find('.hexagon-wraper-right');
        var prev = box.find('.hexagon-wraper-left');
        var items = box.find('.slider__item');
        var counter = 0;
        var amount = items.length;
        var current = items[0];

        //  box.classList.add('active');

        function navigate(direction) {
            $(current).hide();
            counter = counter + direction;
            if (direction === -1 &&
                counter < 0) {
                counter = amount - 1;
            }
            if (direction === 1 &&
                !items[counter]) {
                counter = 0;
            }
            current = items[counter];
            $(current).show();
        }

        next.on('click', function (ev) {
            navigate(1);
        });
        prev.on('click', function (ev) {
            navigate(-1);
        });
        navigate(0);
    })();

});
