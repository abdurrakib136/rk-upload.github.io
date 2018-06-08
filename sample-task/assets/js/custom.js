(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {

    
        ///Scroll Bar
        $("body, .custom-lebel").niceScroll({
             zindex: "9999" ,
             cursorcolor:"#f37032",
             cursorwidth:5,
             cursorminheight: 5,
            cursorborder: "0px solid #fff",
            cursorwidth: "4px",
            cursorborderradius: "0px",
            cursoropacitymin: 1,
            autohidemode:false
        });

        //Preloader========================>
        jQuery(window).load(function () {
            jQuery('.preloader-wrapper').fadeOut(300);
        });

        //Scroll top========================>
        $(window).scroll(function () {
            if ($(this).scrollTop() > 300) {

                $('#scroll-top').fadeIn();

            } else {

                $('#scroll-top').fadeOut();
            }
        });
        $("#scroll-top").on('click', function () {
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
            return false;
        });

        // Add slideup & fadein animation to dropdown
        $('.dropdown').on('show.bs.dropdown', function (e) {
            var $dropdown = $(this).find('.dropdown-menu');
            var orig_margin_top = parseInt($dropdown.css('margin-top'));
            $dropdown.css({
                'margin-top': (orig_margin_top + 10) + 'px',
                opacity: 0
            }).animate({
                'margin-top': orig_margin_top + 'px',
                opacity: 1
            }, 300, function () {
                $(this).css({
                    'margin-top': ''
                });
            });
        });


        ////Sticky Navbar
        $(".sticky").sticky({
            topSpacing: 0
        });


        //Client Carousel
        $(".testi-carousel").owlCarousel({
            items: 3,
            loop: true,
            margin: 30,
            nav: false,
            dots: true,
            autoplay: true
        });

        // Add smooth scrolling to all links
        $("ul li > a").on('click', function (event) {

            if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    window.location.hash = hash;
                });
            } // End if
        });


    });

}(jQuery));
