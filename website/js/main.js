$(document).ready(function () {
	$('.navbar-toggle-icons').parent('li').hide();
	$('.navbar-toggle-icons').parent('li').siblings().hide();
	$('.navbar-toggle-icons').closest('ul').find('.main').show();

	$('.navbar-toggle-icons').on('click', function () {
		$(this).parent('li').hide();
		$(this).parent('li').siblings().show();
		$('.exit-container').css('height', '25px');
		$('#centeredmenu > ul, #centeredmenu > ul > li > a').css('height', '100%');
		$('#centeredmenu').css('height', '100vh');
		$('#centeredmenu').css('border-top', 'none');
		$('#centeredmenu').css('border-bottom', 'none');
		$('#centeredmenu > ul > li').css('left', '0');
		$(this).closest('ul').css({
			"z-index": "99",
			"background-color": "#FFF",
			"width": "100vw",
			"height": "100vh",
			"top": "0px",
			"left": "0px"
		});
		$('center').children().not('#headWrap').addClass('hidden');
		$('#headpanel').addClass('hidden');
		/*$('body,html,center').css({
			'overflow': 'hidden',
			'position': 'fixed'
		});*/
		$('body,html').css({
			'height': '100vh'
		});
		$('.headingmidsolidplasma,.headingmidLiquid,.headingmidGas').css('padding-top', '110%');
	});
	$('span.exit').on('click', function () {
		$(this).parent('li').hide();
		$(this).parent('li').siblings().hide();
		$('#centeredmenu, #centeredmenu > ul, #centeredmenu > ul > li, #centeredmenu > ul > li > a').css('height', '50px');
		$('#centeredmenu').css('border-top', '2px solid #b9b9b7');
		$('#centeredmenu').css('border-bottom', '2px solid #b9b9b7');
		$('.gap-container,.exit-container').css('height', '0');
		$(this).closest('ul').find('.main').show();
		$(this).closest('ul').css("position", "relative");
		/*$('body,html,center').css({
			'overflow': 'scroll',
			'position': 'relative'
		});*/
		$('body,html').css({
			'height': ''
		});
		$('center').children().not('#headWrap').removeClass('hidden');
		$('#headpanel').removeClass('hidden');
		$('.headingmidsolidplasma,.headingmidLiquid,.headingmidGas').css('padding-top', '110px');
	});
});
