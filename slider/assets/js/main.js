(function ($) {
	"use strict";

    jQuery(document).ready(function($){


       

  

   	var owl = $("#owl-demo");
     
      owl.owlCarousel({
        navigation : true,
        singleItem : true,
        loop: true,
        mouseDrag: false,
        navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
        transitionStyle : "goDown"
      });
        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	