$(document).ready(function(){
    $('.vedio-slider').owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    
    $(".nav-link.search-open").click(function(event){
        event.preventDefault();
        $(this).removeClass('search-active');
        $(".nav-link.search-close").addClass('search-active');
        $(".seacrh-form-area").fadeIn('2000');
    });
    $(".nav-link.search-close").click(function(event){
        event.preventDefault();
        $(this).removeClass('search-active');
        $(".nav-link.search-open").addClass('search-active');
        $(".seacrh-form-area").fadeOut('2000');
    });
    
    $('.menu-area').sticky();
    
//    $('#my-menu .navbar-nav li').click(function(){
//        $("#my-menu .navbar-nav li").removeClass('active');
//        $(this).addClass('active');
//       
//    });
    
    $(".test-popup").magnificPopup({
        type: 'vedio'
    });
    
    $(window).scroll( function () {
        if($(this).scrollTop() > 150){
            $(".scroll-top").slideDown();
        }else{
            $(".scroll-top").fadeOut();
        }
    });
     $(".scroll-top").on('click', function(e){
         e.preventDefault();
         $("html, body").animate({
             scrollTop: 0
         }, 1000);
     });
    
    
   $('#navMenu').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 1000,
       filter: ':not(.external)'
    });
    

    $(".login-pop").click(function() {
        $(".login-form-inner").addClass("active");
        return false;
    });
    $('.register').click(function(){
        $('.register-info').slideDown();
        return false;
    });

    $('.close').click(function(){
        $('.register-info').slideUp();
        return false;
    });

    $(".login-form i.fa").click(function() {
        $(".login-form-inner").removeClass("active");
    });
    
    
    
    
});