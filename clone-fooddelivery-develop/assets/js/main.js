(function ($, window) {

    /* -------------------------------------------------------------------------- */
    /*                                  Name Dev 1                                */
    /* -------------------------------------------------------------------------- */
    //---Header---
    $(function () {
        var $headerNavMenu = $('.header-nav .menu');
        var $body = $('body');
        var $menu = $('#hamburger-menu');

        $menu.on('click', function (event) {
            $(this).toggleClass('open');
            $body.toggleClass('menu-open');
            event.stopPropagation();
        });

        $body.on('click', function () {
            if ($body.hasClass('menu-open')) {
                $body.removeClass('menu-open');
                $menu.removeClass('open');
            }
        });

        if (window.innerWidth < 991) {
            $headerNavMenu.on('click', function (event) {
                event.stopPropagation();
            });
        };

        // $('#popup_your_account').on('click', function (e) {
        //     e.preventDefault();
        // });

        $('.menu-item-has-children > a').on('click', function (e) {
            if ($body.hasClass('menu-open')) {
                e.preventDefault();
                var $this = $(this);
                var $subMenu = $this.siblings('.sub-menu');
                $this.parent().toggleClass('open');
                $subMenu.slideToggle(350);
            }
        });
    });
    //---END Header---

    //----- Hide navbar menu add screen-darken -----//
    var c, currentScrollTop = 0,
        navbar = $('header.header');

    $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();

        currentScrollTop = a;

        if (c < currentScrollTop && a > b + b) {
            navbar.addClass('scrolled-down');
        } else if (a == 0) {
            navbar.removeClass('scrolled-down');
        }
        c = currentScrollTop;

    });
    //---END Header---
    
    // add padding top to show content behind navbar
    $('body').css('padding-top', $('.header').outerHeight() + 'px')

    //---Init Slick Slider---
    function initCarousel() {
        if (!$('.slick-carousel').length) return;
        $('.slick-carousel').on('init', function (event, slick) {
            $('.slick-carousel').css({visibility: 'visible'});
        }).slick();
    }
    initCarousel();
    //---END Init Slick Slider---

    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });



    /* -------------------------------------------------------------------------- */
    /*                                  Name Dev 2                                */
    /* -------------------------------------------------------------------------- */

    

    /* -------------------------------------------------------------------------- */
    /*                                  Name Dev 3                                */
    /* -------------------------------------------------------------------------- */

   
    
    /* -------------------------------------------------------------------------- */
    /*                                  Dev name                                */
    /* -------------------------------------------------------------------------- */




})(jQuery, window);
