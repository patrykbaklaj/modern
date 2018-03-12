 import Swiper from 'swiper/dist/js/swiper.js';


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
         if (window.innerWidth >= 1000) {
             $(this).find('.nav__submenu').stop().slideToggle();
         }
     });

     // hamburger button handler
     $('.menu_btn').on('click', function (event) {
         event.preventDefault();
         $('.nav__menu').stop().slideToggle();
     });

     // handling slider events
     const swiper = new Swiper('.swiper-container', {
         grabCursor: true,
         loop: true,
         keyboard: {
             enabled: true,
             onlyInViewport: false,
         },
     });

     const mySwiper = document.querySelector('.swiper-container').swiper;

     // handle slider on button click;
     $('.hexagon-wraper-right').on('click', function () {
         mySwiper.slideNext();
     });

     $('.hexagon-wraper-left').on('click', function () {
         swiper.slidePrev();
     });

     // handle slider icons change on hoover
     $('[class^="hexagon-wraper-"]')
         .on('mouseenter', function () {
             $(this).find('.arrow').toggle(200);
             $(this).find('.touch').toggle(200);
         })
         .on('mouseleave', function () {
             $(this).find('.arrow').toggle(200);
             $(this).find('.touch').toggle(200);
         })


     const ul = $('.menu2');
     let position = ul.offset().top;
     const menu = $('.nav');
     const services = $('.services');

     $(window).resize(() => {
         position = ul.offset().top;

         if (window.innerWidth >= 1170) {
             ul.removeClass('styleFixed');
             services.removeClass('extra-padding');
             ul.addClass('styleStatic');
         }
     });

     $(window).scroll(function () {
         if (window.innerWidth >= 1170) {
             if (position - $(window).scrollTop() <= menu.height()) {
                 ul.removeClass('styleStatic');
                 ul.addClass('styleFixed');
                 ul.css('top', menu.height());
                 services.addClass('extra-padding');
             } else {
                 ul.removeClass('styleFixed');
                 services.removeClass('extra-padding');
                 ul.addClass('styleStatic');
             }
         }
     });

 });
