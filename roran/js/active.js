
(function(){
    'use strict';
    
    $(document).ready(function() {
 
        $(".menu").slicknav({
            
            label:"",
            prependTo: ".menu_area",
            brand: '<a href=""><img src="img/logo.png" alt="logo"></a>'
        });
        
      $(".team_slider").owlCarousel({
          autoplay: true,
          loop: true,
          items: 4,
          margin: 20,
          pagination: true,
          nav: true,
          navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
          responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            700: {
                items: 3
            },
            1000: {
                items: 4
            },
         }
      });
 
});
    
})(jQuery);