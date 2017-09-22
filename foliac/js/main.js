 $(document).ready(function () {
	 
	$('.promo_list_item').mixItUp();
	
	$('.carousel').carousel();
	
	$(".navbar_wrapper").sticky({topSpacing:0});
	
	
	$('body').scrollspy({ target: '.menu_area' })
	
	
	
	$('.navbar_wrapper ul li a').on('click',function (e) {
		e.preventDefault();
		var $target = $(this);
		$('html, body').stop().animate({
			scrollTop: $($target.attr('href')).offset().top - 93
		}, 
		1000, 'swing');
	});
	new WOW().init();
	

});