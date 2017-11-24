(function ($) {
    'use strict';

    // Welcome Slider Active Code
    if ($.fn.owlCarousel) {
        $(".welcome_slides").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 7000,
            smartSpeed: 500,
            autoplayHoverPause: false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });
    }

    var owl = $('.welcome_slides');
    owl.owlCarousel();
    owl.on('translate.owl.carousel', function (event) {
        $('.owl-item .single_slide .slide_text h2').removeClass('animated').hide();
        $('.owl-item .single_slide .slide_text h3').removeClass('animated').hide();
        $('.owl-item .single_slide .slide_text .btn').removeClass('animated').hide();
    })
    owl.on('translated.owl.carousel', function (event) {
        $('.owl-item.active .single_slide .slide_text h2').addClass('animated custom_slideInUp').show();
        $('.owl-item.active .single_slide .slide_text h3').addClass('animated custom_slideInUp_2').show();
        $('.owl-item.active .single_slide .slide_text .btn').addClass('animated custom_slideInUp_btn_1').show();
    })

    // Testimonials Slider Active Code
    if ($.fn.owlCarousel) {
        $(".testimonials, .special_dishes_slider").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: false,
            smartSpeed: 1500,
            autoplayTimeout: 8000
        });
    }

    // Testimonials Slider Active Code
    if ($.fn.owlCarousel) {
        $(".mini_port_testimonials").owlCarousel({
            items: 2,
            margin: 30,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 800,
            autoplayTimeout: 10000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });
    }

    // Testimonials Slider Active Code
    if ($.fn.owlCarousel) {
        $(".app_screenshots").owlCarousel({
            items: 5,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            dots: false,
            autoplay: true,
            smartSpeed: 800,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
    }

    // Fitness Classes Slider Active Code (For Fitness Version)
    if ($.fn.owlCarousel) {
        $(".fitness_class_slides, .fitness_advisor_slides").owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            dots: false,
            autoplay: false,
            autoplayTimeout: 8000,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                }
            }
        });
    }

    // Partner Company Slider Active Code
    if ($.fn.owlCarousel) {
        $(".partner_company_slides").owlCarousel({
            items: 5,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
            dots: false,
            center: true,
            autoplay: true,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
    }

    // Partner Company Slider Active Code
    if ($.fn.owlCarousel) {
        $(".blog_post_slider").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            center: true,
            autoplay: true,
            smartSpeed: 800
        });
    }

    // Gallery Menu Style Active Code
    $('.portfolio-menu button.btn').on('click', function () {
        $('.portfolio-menu button.btn').removeClass('active');
        $(this).addClass('active');
    })

    // Meanmenu Active Code
    if ($.fn.meanmenu) {
        $('.main_menu_area .mainmenu nav').meanmenu({
            onePage: true
        });
    }

    // Onepage Nav Active Code
    if ($.fn.onePageNav) {
        $('#nav').onePageNav({
            currentClass: 'current_page_item',
            scrollSpeed: 1500,
            easing: 'easeInOutQuart'
        });
    }

    // Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('.video_btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
        $('.gallery_img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }

    // Progress Bar Active Code
    if ($.fn.barfiller) {
        $('#bar1').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#2c3e50',
            animateOnResize: true
        });
        $('#bar2').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#2c3e50',
            animateOnResize: true
        });
        $('#bar3').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#2c3e50',
            animateOnResize: true
        });
        $('#bar4').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#2c3e50',
            animateOnResize: true
        });
        $('#bar5').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#2c3e50',
            animateOnResize: true
        });
        $('#bar6').barfiller({
            tooltip: true,
            duration: 1000,
            barColor: '#2c3e50',
            animateOnResize: true
        });
    }

    // ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 2000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="ion-ios-arrow-thin-up" aria-hidden="true"></i>'
        });
    }

    // wow Active Code
    if ($(window).width() > 767) {
        new WOW().init();
    }

    // Footer Reveal Active Code
    if ($.fn.footerReveal) {
        $('.footer_area').footerReveal({
            shadowOpacity: 0.2
        });
    }

    // Counterup Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // Countdown Active Code
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $(this).find(".days").html(event.strftime("%D"));
            $(this).find(".hours").html(event.strftime("%H"));
            $(this).find(".minutes").html(event.strftime("%M"));
            $(this).find(".seconds").html(event.strftime("%S"));
        });
    });

    // Masonary Gallery Active Code
    $('.gallery_full_width_images_area, .portfolio-column, .blog-masonary').imagesLoaded(function () {
        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // init Isotope
        var $grid = $('.gallery_full_width_images_area, .portfolio-column, .blog-masonary').isotope({
            itemSelector: '.single_gallery_item, .column_single_gallery_item, .sb_masonary_item',
            percentPosition: true,
            masonry: {
                columnWidth: '.single_gallery_item, .column_single_gallery_item, .sb_masonary_item'
            }
        });
    });

    // Parallax active js
    if ($.fn.jarallax) {
        $('.jarallax').jarallax({
            speed: 0.2
        });
    }

    // YouTube Video Active Code
    if ($.fn.mb_YTPlayer) {
        $('.player').mb_YTPlayer();
    }

    // :: 8.0 MatchHeight Active Code
    if ($.fn.matchHeight) {
        $('.item').matchHeight();
    }

    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // Resume Single Part Active Code
    $(".resume_single_part").on('click', function () {
        $(".resume_content_navigation_area").fadeOut('700');
    })
    $(".close-profile-animatedModal, .close-skills-animatedModal, .close-portfolio-animatedModal, .close-contact-animatedModal").on('click', function () {
        $(".resume_content_navigation_area").fadeIn('700');
    })

    // Maps Hide/Show Active Code
    $(".map_on_off").on('click', function () {
        $(".map_contact_address_area").toggleClass('map-open');
    })

    var $window = $(window);

    // Sticky Active Code
    $window.on('scroll', function () {
        // Fadeout text code
        $(".business_startup_wc_text").css("opacity", 1 - $window.scrollTop() / $('.business_startup_wc_text').height());
        if ($window.scrollTop() > 200) {
            $('.main_header_area').addClass('sticky slideInDown');
            $('body').addClass('mobile_menu_on');
        } else {
            $('.main_header_area').removeClass('sticky slideInDown');
            $('body').removeClass('mobile_menu_on');
        }
    });

    // Fullscreen Active Code
    $window.on('resizeEnd', function () {
        $(".full_height").height($window.height());
    });

    $window.on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // wow Active Code
    if ($window.width() > 767) {
        new WOW().init();
    }

    // Preloader active code
    $window.on('load', function () {
        $('body').css('overflow-y', 'visible');
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);


function isMobile() {
    var check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}


(function ($) {
    $.xpath = function (exp, ctxt) {
        var item, coll = [],
            result = document.evaluate(exp, ctxt || document, null, 5, null);

        while (item = result.iterateNext())
            coll.push(item);

        return $(coll);
    }
})(jQuery);