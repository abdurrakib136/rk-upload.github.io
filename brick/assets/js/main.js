(function ($) {
    
	"use strict";

    jQuery(document).ready(function($){

        //Scroll top=======
        $(window).scroll(function () {

            if($(this).scrollTop() > 200 ) {
                $('#scroll-top').fadeIn();
            } else{
               $('#scroll-top').fadeOut(); 
            }

        });
        $('#scroll-top').on('click', function () {

            $('html, body').animate({scrollTop: 0}, 1000);
            return false;

        });

        //Smooth scroll=======
        $('#brick-menu ul.nav li a').smoothScroll({
            offset: -48,
            speed: 1000
        });

        jQuery(window).scroll(function(){
            if($(this).scrollTop() > 100){
                $(".main-menu").addClass('fixed');
            }else{
                 $(".main-menu").removeClass('fixed');
            }
            
        });


        //Scrollspy=======
        $('body').scrollspy({ target: '#brick-menu' });
        $("#brick-menu ul li").on('click', function () {
            $("#brick-menu ul li").removeClass('active');
            $(this).addClass('active');
        });


        //owl carousel=======
    	$(".welcome-carousel").owlCarousel({
    		items: 1,
    		autoplay: true,
    		loop: true,
    		nav: true,
    		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    		dots: false
    	});

    	$(".carousel-wrapper").owlCarousel({
    		autoplay: true,
    		loop: true,
    		dots: false,
            responsive:{
                0:{
                    items: 2
                },
                450:{
                    items: 3
                },
                768:{
                    items: 5
                },
                992:{
                    items: 7
                }
            }
    	});

    	 //Isotope============
    	  var $grid = $('.portfolio-wrapper').isotope({
    	      itemSelector: '.s-portfolio',
    	      layoutMode: 'fitRows',
    	      filter: '*',
    	    });
    	    $(".port-nav ul li").on("click" , function(){
    	        var selector = $(this).attr('data-filter');
    	        $grid.isotope({
    	            filter: selector
    	        });
    	        
    	    });

    	    $(".port-nav ul li").on('click', function() {

    	    	$('.port-nav ul li').removeClass('active');
    	    	$(this).addClass('active');

    	    });

            //Pretty photo=======
            $("a.prettyPhoto").prettyPhoto({
                deeplinking: false
            });



        


    });


    jQuery(window).load(function(){
        $(".preloader-wrapper").fadeOut(500);
        
    });


}(jQuery));	