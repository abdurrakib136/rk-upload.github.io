(function(){

    $(document).ready(function () {

        $('.reviews_slider').owlCarousel({
            autoPlay : true,
            items: 1,
            pagination: false,
            loop: true,

        });
        $('#nav').slicknav();
        
        $(".menu_area").sticky({topSpacing:0});
        
        
       
        $('.main_menu ul li a').smoothScroll({
            duration: 1000, // animation speed
            easing: 'swing', // find more easing options on http://api.jqueryui.com/easings/
            offset: 54, // custom offset
        });
        

        
        
        
    });

})(jQuery);