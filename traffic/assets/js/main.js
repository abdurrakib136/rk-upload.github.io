(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        
         //welcome area slider 
        $(".welcome-slider").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            navText: ["<i class='zmdi zmdi-long-arrow-left'></i>", "<i class='zmdi zmdi-long-arrow-right'></i>"],
        });
        
         //case study area slider 
        $(".case-study-carousel").owlCarousel({
            margin: 30,
            loop: true,
            nav: false,
            responsive:{
                0:{
                    items: 1
                },
                650:{
                    items: 2
                },
                992:{
                    items: 3
                }
            }
        });
        
        
         //testimonial area slider 
        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop: true,
            nav: false,
        });
        
        
         //logo area slider 
        $(".logo-carousel").owlCarousel({
            loop: true,
            dots: false,
            nav: false,
            responsive:{
                0:{
                    items: 3
                },
                650:{
                    items: 4
                },
                992:{
                    items: 6
                }
            }
        });
        
        //Layout menu
        $(".box-layout").on('click', function(){
            $("body").addClass("box-layout");
            $(".wide-layout").removeClass("active");
            $(this).addClass("active");
        });
        $(".wide-layout").on('click', function(){
            $("body").removeClass("box-layout");
            $(".box-layout").removeClass("active");
            $(this).addClass("active");
        });


        //off canvas menu
        $(".menu-trigger").on("click", function() {
            
            $(".off-canvas-menu").addClass("show-off-canvas-menu");
            $(".off-canvas-menu-shade").addClass("active");
        });
        
        $(".menu-close, .off-canvas-menu-shade").on("click", function() {
            
            $(".off-canvas-menu").removeClass("show-off-canvas-menu");
            $(".off-canvas-menu-shade").removeClass("active");
        });
        
        
        //single testimonial
        $(".single-testi-item").hover(function() {
            $(".single-testi-item").removeClass("active");
            $(this).addClass("active");
            
        });
        
        
        //header search bar
        $(".search-trigger").on("click", function() {
            $(".search-bar").addClass("active");
        });
        $(".welcome-area-4, .welcome-service-area").on("click", function() {
            $(".search-bar").removeClass("active");
        });
        
        //magnific popup
        $('.play-icon, .play-2').magnificPopup({type:'vedio'});

        //Slicknav
         $('#nav').slicknav({
            prependTo: ('#mobile-menu'),
            allowParentLinks: true,
         });

    });

    
    jQuery(window).load(function(){

        
    });


}(jQuery));	