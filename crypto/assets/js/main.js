(function ($) {

    "use strict";

    jQuery(document).ready(function ($) {


        var owl = $('.welcome-slider');


        // Carousel initialization
        owl.owlCarousel({
            loop: true,
            margin: 0,
            navSpeed: 700,
            nav: false,
            items: 1,
            autoplay: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn'
        });


        // add animate.css class(es) to the elements to be animated
        function setAnimation(_elem, _InOut) {
            // Store all animationend event name in a string.
            // cf animate.css documentation
            var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

            _elem.each(function () {
                var $elem = $(this);
                var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

                $elem.addClass($animationType).one(animationEndEvent, function () {
                    $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
                });
            });
        }

        // Fired before current slide change
        owl.on('change.owl.carousel', function (event) {
            var $currentItem = $('.owl-item', owl).eq(event.item.index);
            var $elemsToanim = $currentItem.find("[data-animation-out]");
            setAnimation($elemsToanim, 'out');
        });

        // Fired after current slide has been changed
        owl.on('changed.owl.carousel', function (event) {

            var $currentItem = $('.owl-item', owl).eq(event.item.index);
            var $elemsToanim = $currentItem.find("[data-animation-in]");
            setAnimation($elemsToanim, 'in');
        })


        //Preloader========================>
        $(window).load(function () {
            $('.preloader-wrapper').fadeOut(500);
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


        
        //Isotope========================>
		  var $grid = $('.isotope_warpper').isotope({
		      itemSelector: '.isotope1',
		      layoutMode: 'fitRows',
		      filter: '.hours1',
		    });
		    $(".currency-nav ul li").on("click" , function(){
		        var selector = $(this).attr('data-filter');
		        $grid.isotope({
		            filter: selector
		        });
		        
		    });

		    $(".currency-nav ul li, .menu-area ul li").on('click', function() {

		    	$('.currency-nav ul li, .menu-area ul li').removeClass('active');
		    	$(this).addClass('active');

		    });



    });




}(jQuery));
