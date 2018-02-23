


(function ($) {
	"use strict";

        AOS.init({
          duration: 1200,
      });

    jQuery(document).ready(function($){
        
           $('.mesonary_area').masonry({
        // options
        itemSelector: 1,
        percentPosition: true,
        columnWidth: 1
    });
        


 lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });






    });

    
    //Scroll top========================>
      $(window).scroll(function() {
          if ($(this).scrollTop() > 300) {

              $('#scroll-top').fadeIn();

          } else {

              $('#scroll-top').fadeOut();
          }
      });
      $("#scroll-top").on('click', function(){
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
      });





}(jQuery));	


